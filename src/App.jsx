import Button from "./components/Button";
import InputDay from "./components/InputDay";
import InputMonth from "./components/InputMonth";
import InputYear from "./components/InputYear";
import Result from "./components/Result";
import useAgeCalculator from "./hooks/useAgeCalculator";

export default function App() {
  const { birthDate, errors, result, updateField, handleSubmit } =
    useAgeCalculator();

  return (
    <main className="grid min-h-screen place-items-center px-4 py-6 sm:px-6 sm:py-8">
      <section
        className="w-full max-w-210 rounded-[24px_24px_110px_24px] bg-white px-6 py-10 sm:rounded-[24px_24px_180px_24px] sm:p-14"
        aria-label="Age calculator"
      >
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-3 gap-3 sm:max-w-108 sm:gap-6">
            <InputDay
              value={birthDate.day}
              onChange={(value) => updateField("day", value)}
              error={errors.day}
            />
            <InputMonth
              value={birthDate.month}
              onChange={(value) => updateField("month", value)}
              error={errors.month}
            />
            <InputYear
              value={birthDate.year}
              onChange={(value) => updateField("year", value)}
              error={errors.year}
            />
          </div>
          <Button />
        </form>
        <Result result={result} />
      </section>
    </main>
  );
}
