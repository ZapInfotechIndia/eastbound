import { HONEYPOT_FIELD } from "@/lib/events-exchange/constants";

export default function EventsExchangeHoneypot() {
  return (
    <div
      className="absolute -left-[9999px] h-px w-px overflow-hidden"
      aria-hidden
    >
      <label htmlFor={HONEYPOT_FIELD}>Company website</label>
      <input
        id={HONEYPOT_FIELD}
        name={HONEYPOT_FIELD}
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
