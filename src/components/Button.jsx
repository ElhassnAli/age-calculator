import arrowIcon from "../assets/icon-arrow.svg";

export default function Button() {
  return (
    <div className="relative my-8 flex items-center justify-end sm:my-4">
      <hr className="absolute left-0 top-1/2 m-0 w-full border-0 border-t border-[#e5e5e5]" />
      <button
        className="relative z-10 grid size-16 cursor-pointer place-items-center rounded-full border-0 bg-[#854dff] p-4 transition-colors hover:bg-[#141414] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#854dff] sm:size-20 sm:p-5"
        type="submit"
        aria-label="Calculate age"
      >
        <img
          className="block size-full object-contain"
          src={arrowIcon}
          alt=""
        />
      </button>
    </div>
  );
}
