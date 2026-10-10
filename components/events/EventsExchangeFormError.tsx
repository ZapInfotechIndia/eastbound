type EventsExchangeFormErrorProps = {
  message: string;
  className?: string;
};

export default function EventsExchangeFormError({
  message,
  className = "mb-4",
}: EventsExchangeFormErrorProps) {
  return (
    <p
      role="alert"
      className={`border-l-2 border-red-600 bg-white py-3 pr-4 pl-4 text-sm leading-relaxed text-red-700 ${className}`}
    >
      {message}
    </p>
  );
}
