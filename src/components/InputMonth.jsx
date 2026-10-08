export default function InputMonth({ value, onChange, error }) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label
        className={`text-[11px] leading-none font-bold tracking-[0.16em] uppercase sm:text-sm sm:tracking-[0.2em] ${
          error ? "text-[#d66b6b]" : "text-[#716f6f]"
        }`}
        htmlFor="birth-month"
      >
        Month
      </label>
      <input
        id="birth-month"
        name="month"
        type="text"
        inputMode="numeric"
        autoComplete="bday-month"
        placeholder="MM"
        value={value}
        className={`h-14 w-full min-w-0 rounded-lg border bg-transparent px-2 text-lg font-bold text-[#141414] caret-[#854dff] outline-none placeholder:text-[#858585] focus:border-[#854dff] sm:h-17 sm:px-4 sm:text-[30px] ${
          error ? "border-[#d66b6b]" : "border-[#dbdbdb]"
        }`}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "birth-month-error" : undefined}
      />
      {error && (
        <span className="min-h-4 text-[9px] leading-[1.35] text-[#d66b6b] italic sm:text-[11px]" id="birth-month-error">
          {error}
        </span>
      )}
    </div>
  );
}
