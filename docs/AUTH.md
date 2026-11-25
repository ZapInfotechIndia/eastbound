# Portal authentication

Eastbound has two partner portals. A person signs up on one of them and can only use that portal.

| Portal | Public home | Protected app | Role stored on profile |
| --- | --- | --- | --- |
| Agent Collective | `/agent` | `/agent/agent-board` and anything else under `(portal)` | `agent` |
| Events Exchange | `/events` | `/events/events-board` and anything else under `(portal)` | `event` |

Identity (email, password, session) lives in **Neon Managed Better Auth**. Portal membership lives in the app table **`profiles`**.

## Data model

```
neon_auth.user          (managed — do not migrate by hand)
        │ 1:1
        ▼
public.profiles
  user_id     text unique   ← Neon Auth user id
  email       text unique
  role        agent | event     ← set at signup, never changed in v1
  status      pending | approved | rejected   ← stored, not enforced yet
  name, company, country, phone
  application jsonb             ← reserved for a future application form
```

Approval (`status`) is **not** checked on sign-in or route access. Staff can later `UPDATE profiles SET status = 'approved' WHERE email = '…'`. An admin UI is out of scope for this pass.

One email cannot hold both roles. Signup looks up `profiles.email` first and rejects a second portal.

## Request flow

1. **Sign up** (`POST` via server action `signUpForPortal`)
   - `auth.signUp.email({ email, password, name })`
   - insert `profiles` with the portal’s role and `status = pending`
   - redirect to that portal’s board
2. **Sign in** (`signInForPortal`)
   - `auth.signIn.email`
   - load profile by `user.id`
   - if role does not match this page, stay on the form and show “You do not have an account in this portal.” (no redirect to the other portal)
   - otherwise go to the board
3. **Session on later visits**
   - `proxy.ts` requires a session for any `/agent/*` or `/events/*` path that is not a public auth page
   - unauthenticated visitors to Agent app pages go to `/agent`; Events app pages go to `/events`
   - `(portal)` layouts call `requirePortalAccess`. A session for the other portal is sent back to **this** portal’s sign-in with `?error=wrong_portal`, not to the account’s home portal
4. **Password reset**
   - `/agent/forgot-password` and `/events/forgot-password` call `auth.requestPasswordReset` with `redirectTo` pointing at that portal’s reset page
   - email link lands on `/agent/reset-password?token=…` or `/events/reset-password?token=…`
   - `auth.resetPassword` then redirects to sign-in with `?reset=success`

Email verification is not required.

## Pages

Public (no session):

- `/agent`, `/events` — sign in
- `/agent/sign-up`, `/events/sign-up`
- `/agent/forgot-password`, `/events/forgot-password`
- `/agent/reset-password`, `/events/reset-password`

Authenticated (add new app pages under the `(portal)` group):

- `app/agent/(portal)/…` → URL `/agent/…`
- `app/events/(portal)/…` → URL `/events/…`

Auth API proxy: `app/api/auth/[...path]/route.ts` (all methods from `auth.handler()`).

## Code map

| File | Role |
| --- | --- |
| `lib/auth/server.ts` | Neon Auth server (`getSession`, `signIn`, `signUp`, reset, middleware) |
| `lib/auth/client.ts` | Browser client (unused by the current forms; actions run on the server) |
| `lib/auth/portals.ts` | Portal copy, paths, public-path helper |
| `lib/auth/profile.ts` | Drizzle profile queries and `requirePortalAccess` |
| `lib/auth/actions.ts` | Server actions for sign-in, sign-up, reset |
| `lib/db/schema.ts` | `profiles` table |
| `lib/db/index.ts` | Pooled `DATABASE_URL` Drizzle client |
| `proxy.ts` | Session gate; role gate is in `(portal)/layout.tsx` |
| `drizzle.config.ts` | Migrations use `DATABASE_URL_UNPOOLED` |

## Environment

Already in `.env.local` (never commit):

- `DATABASE_URL` — pooled, app queries
- `DATABASE_URL_UNPOOLED` — migrations
- `NEON_AUTH_BASE_URL`
- `NEON_AUTH_COOKIE_SECRET`
- `NEON_AUTH_JWKS_URL`

## Schema commands

```bash
npm run db:generate
npm run db:migrate
```

## Manual approval (until admin exists)

```sql
update profiles
set status = 'approved', updated_at = now()
where email = 'partner@example.com';
```

## Future work

- Enforce `status === 'approved'` in `signInForPortal` and `requirePortalAccess`
- Admin dashboard for approve / reject
- Populate `application` from a longer signup form
- Sign-out control on the boards
