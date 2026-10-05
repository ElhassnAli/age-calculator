export default function InputYear({ year, setYear }) {
  return (
    <div className="flex flex-col justify-start font-bold gap-2">
      <p className="text-gray-500">Year</p>
      <input
        type="text"
        placeholder="YYYY"
        className="px-2 py-2 w-34 outline-none border-2 border-gray-200 text-[32px] rounded-lg"
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
        }}
      />
    </div>
  );
}
