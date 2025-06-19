// parent component is <TaskInputDataBox />

import { MdOutlineAccessAlarm } from "react-icons/md";
import SelectCalender from "./SelectCalender";
import { useContext } from "react";
import { CalenderContext} from "../../contexts/CalenderContext";


const TaskDateAlarm = () => {
  const consumer = useContext(CalenderContext);
  return (
    <section className="w-full h-[50px] bg-gray-100 mt-[2px] flex justify-between items-center">
      <div className="w-[75%] h-full flex justify-start items-center gap-2 pl-[20px] text-black">
        {/* due date */}
        <div className="">{<SelectCalender />}</div>
        <div className="h-full flex items-center justify-center text-sm font-light">{consumer?.schedule}</div>
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
