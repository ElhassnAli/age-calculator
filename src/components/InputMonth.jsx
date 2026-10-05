export default function InputMonth({ month, setMonth }) {
  return (
    <div className="flex flex-col justify-start font-bold gap-2">
      <p className="text-gray-500">Month</p>
      <input
        type="text"
        placeholder="MM"
        className="px-2 py-2 w-34 outline-none border-2 border-gray-200 text-[32px] rounded-lg"
        value={month}
        onChange={(e) => {
          setMonth(e.target.value);
        }}
      />
    </div>
  );
}
