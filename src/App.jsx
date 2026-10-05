import { useState } from "react";
import InputDay from "./components/InputDay";
import InputMonth from "./components/InputMonth";
import InputYear from "./components/InputYear";
import Result from "./components/Result";
import Button from "./components/Button";

export default function App() {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  return (
    <div className="font-display bg-gray-100 min-h-dvh flex justify-center items-center">
      <div className="md:w-[50%] bg-white w-[90%] flex flex-col justify-between rounded-3xl min-h-[50%] ">
        <div className=" flex  gap-15 items-center justify-start pl-15  pt-15">
          <InputDay day={day} setDay={setDay} />
          <InputMonth month={month} setMonth={setMonth} />
          <InputYear year={year} setYear={setYear} />
        </div>
        <Button />
        <Result />
      </div>
    </div>
  );
}
