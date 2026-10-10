# Public enquiry forms

Marketing-site enquiry submissions from the **Footer** band and **Contact page** are stored in Neon Postgres and trigger an **internal** team notification via Resend.

## Data model

Table: `enquiries` (Drizzle: `lib/db/schema.ts`)

| Column | Footer | Contact page | Notes |
|--------|--------|--------------|--------|
| `source` | `footer` | `contact_page` | Enum `enquiry_source` |
| `name` | required | required | |
| `email` | required | required | Normalised to lowercase |
| `phone` | optional | optional | |
| `destination` | optional | optional | From shared destination list |
| `message` | optional | optional | Trip notes / message |
| `company` | — | optional | Not stored for footer |
| `programme_type` | — | optional | Contact page only |
| `travel_dates` | — | optional | Contact page only |
| `submitter_ip_hash` | set when IP known | same | SHA-256(IP + salt); rate limiting only |
| `created_at` | auto | auto | |

Display labels for `source` (for reporting): **Footer**, **Contact page** — see `enquirySourceLabels` in `lib/enquiry/constants.ts`.

## Request flow

1. `EnquiryForm` (`components/EnquiryForm.tsx`) posts `FormData` to `submitEnquiry` in `lib/enquiry/actions.ts`.
2. The action is bound to the expected `source` (`footer` or `contact_page`) so the hidden `source` field must match.
3. On success: row inserted → Resend notification to the team → form reset → success notice shown.
4. On failure: inline error (`role="alert"`) with a specific message; fields are kept.

### Email notifications (Resend)

Implementation: `lib/enquiry/email.ts`

- **Internal only** — no auto-reply to the guest.
- **HTML** summary of all stored fields.
- **Reply-To** is the submitter’s email so you can reply from your inbox.
- **Subject:** `New enquiry — Footer` or `New enquiry — Contact page`.

Order of operations: **database insert first**, then email. If Resend fails, the user sees an error (see [Failure handling](#failure-handling)).

## Spam controls

### Honeypot

- Field name: `company_website` (`HONEYPOT_FIELD` in `lib/enquiry/constants.ts`).
- Hidden off-screen; humans should leave it empty.
- If filled: the action returns the same success message **without** writing to the database or sending email.

### Rate limit

- **5** submissions per hashed IP per **1 hour** (`RATE_LIMIT_MAX`, `RATE_LIMIT_WINDOW_MS`).
- Counts rows in `enquiries` with the same `submitter_ip_hash` in the window.
- Over limit: user sees an error suggesting they wait or email the team.

IP is taken from `x-forwarded-for` (first hop) or `x-real-ip`. If no IP is present, rate limiting is skipped (edge case on local dev).

### Salt for IP hashing

Set in production (recommended):

```bash
ENQUIRY_RATE_LIMIT_SALT="long-random-string"
```

If unset, a dev default is used — **set a unique salt in production** so hashes are not guessable across deployments.

## Environment

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | Runtime queries (pooled), used by `lib/db/index.ts` |
| `DATABASE_URL_UNPOOLED` | Migrations via `drizzle-kit` |
| `ENQUIRY_RATE_LIMIT_SALT` | Optional but recommended for IP hashing |
| `RESEND_API_KEY` | Resend API key ([Resend dashboard](https://resend.com/api-keys)) |
| `ENQUIRY_FROM_EMAIL` | Sender address (must be allowed in Resend for that key) |
| `ENQUIRY_NOTIFY_EMAIL` | Team inbox that receives new enquiry emails |

### Local development (domain not verified yet)

Resend only allows `onboarding@resend.dev` as **From** until `eastboundgroup.com` is verified. You can only send to the email on your Resend account unless you verify the domain.

Example `.env.local`:

```bash
RESEND_API_KEY="re_..."
ENQUIRY_FROM_EMAIL="onboarding@resend.dev"
ENQUIRY_NOTIFY_EMAIL="pratikkurilworks@gmail.com"
```

### Production (after domain verification)

Use your verified domain for **From**. **Notify** can be the same address as **From** (e.g. both `info@eastboundgroup.com`).

```bash
RESEND_API_KEY="re_..."
ENQUIRY_FROM_EMAIL="info@eastboundgroup.com"
ENQUIRY_NOTIFY_EMAIL="info@eastboundgroup.com"
```

If `ENQUIRY_FROM_EMAIL` / `ENQUIRY_NOTIFY_EMAIL` are omitted in production, both default to `info@eastboundgroup.com`. In development, **From** defaults to `onboarding@resend.dev` when `ENQUIRY_FROM_EMAIL` is unset.

## Failure handling

**Current behaviour (strict):** If the row is saved but Resend fails, the user sees an error explaining that the team may not have been notified, with a prompt to email `info@eastboundgroup.com`. The enquiry **remains in the database**. Submitting again may create a **duplicate row** — the error message warns against resubmitting unless they are unsure you received it.

### Future: reliable delivery (option C — not implemented)

To avoid blocking guests when email is down, and to avoid duplicates on retry:

1. **Transactional outbox** — In the same DB transaction as `INSERT INTO enquiries`, insert a row into `enquiry_notifications` with status `pending` and payload snapshot.
2. **Return success to the user** once the enquiry row (and outbox row) commit — email is asynchronous.
3. **Worker** — Cron, queue consumer, or Neon Function reads `pending` rows, calls Resend, sets `sent` or `failed` with `attempts` and `last_error`.
4. **Retries** — Exponential backoff (e.g. 1m, 5m, 30m) until `max_attempts`; alert ops if still `failed`.
5. **Idempotency** — Use enquiry `id` as Resend idempotency key (or store `resend_message_id`) so retries do not double-send.
6. **Admin** — Optional view of failed notifications to resend manually from Drizzle Studio or a small internal page.

This keeps UX friendly (always thank the user when data is safe) while making email delivery observable and recoverable.

## Migrations

Enquiry forms **require** the `enquiries` table. If it is missing, submissions will fail (rate-limit check or insert).

After pulling schema changes:

```bash
npm run db:generate   # if you change schema locally
npm run db:migrate    # apply to the target Neon branch (e.g. production)
```

Ensure `.env.local` points at the same Neon branch you migrate before testing locally.

Inspect data (optional):

```bash
npm run db:studio
```

Example SQL:

```sql
SELECT source, name, email, destination, created_at
FROM enquiries
ORDER BY created_at DESC
LIMIT 20;
```

## UI entry points

| Location | Prop | Form fields |
|----------|------|-------------|
| `components/Footer.tsx` | `source="footer"` | Short form |
| `app/(website)/contact/page.tsx` | `source="contact_page"` | Detailed form |

## Future work

- Guest auto-reply (“We received your enquiry”)
- Admin UI to list enquiries and notification status
- Outbox + retry worker (option C above)
- Stricter bot protection (CAPTCHA) if honeypot + rate limit are insufficient
