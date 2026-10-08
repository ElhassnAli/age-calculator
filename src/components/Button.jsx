import arrowIcon from "../assets/icon-arrow.svg";

export default function Button() {
  return (
    <div className="flex items-center pl-15 ">
      <hr className="w-[80%] text-gray-300 " />
      <button className="bg-purple-500  p-2.5 rounded-[50%] cursor-pointer ">
        <img
          src={arrowIcon}
          alt="icon-arrow.svg"
          width={50}
          height={50}
          color="red"
        />
      </button>
    </div>
  );
}
