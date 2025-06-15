// parent component is <TaskInputDataBox />

import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineAccessAlarm } from "react-icons/md";
import { Calendar } from "../ui/calendar";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";
import { cn } from "@/lib/utils";


import { useState } from "react";

const TaskDateAlarm = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [flagDate, setFlagDate] = useState<boolean>(false)
  const handleClick = () =>{
    console.log("hello");
    setFlagDate(true);
  }
  return (
    <section className="w-full h-[50px] bg-gray-100 mt-[2px] flex justify-between items-center">
      <div className="w-[75%] h-full flex justify-start items-center gap-4 pl-[20px] text-black">
        {/* due date */}
        <div className="w-[30px] h-[30px] flex justify-center items-center hover:bg-white" onClick={handleClick}>
          <BsCalendarDate/>
          {flagDate && <Calendar mode="single" />}

        </div>
        <div className="w-[30px] h-[30px] flex justify-center items-center hover:bg-white">
          <MdOutlineAccessAlarm size={20} />
        </div>
        {/* alarm */}
      </div>
      <div className="w-[25%] h-full flex justify-end items-center pr-[20px]">
        <button className="text-sm text-gray-800 border-2 px-[20px] py-[5px]">
          Add
        </button>
      </div>
    </section>
  );
};

export default TaskDateAlarm;
