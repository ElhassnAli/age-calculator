export default function InputDay({ day, setDay }) {
  return (
    <div className="flex flex-col  justify-start font-bold gap-2">
      <p className="text-gray-500">Day</p>
      <input
        type="text"
        placeholder="DD"
        className="px-2 py-2 w-34 outline-none border-2 border-gray-200 text-[32px] rounded-lg"
        value={day}
        onChange={(e) => {
          setDay(e.target.value);
        }}
      />
    </div>
  );
}
