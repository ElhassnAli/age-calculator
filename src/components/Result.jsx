export default function Result({ result }) {
  return (
    <div
      className="text-[clamp(40px,11vw,64px)] leading-[1.16] font-extrabold tracking-[-0.065em] italic sm:text-[clamp(48px,7vw,88px)] sm:leading-[1.12]"
      aria-live="polite"
    >
      <p className="m-0">
        <span className="text-[#854dff] tracking-[-0.045em]">{result?.years ?? "--"}</span> years
      </p>
      <p className="m-0">
        <span className="text-[#854dff] tracking-[-0.045em]">{result?.months ?? "--"}</span> months
      </p>
      <p className="m-0">
        <span className="text-[#854dff] tracking-[-0.045em]">{result?.days ?? "--"}</span> days
      </p>
    </div>
  );
}
