// parent componenet is TasksComponent

import { useEffect, useRef, useState } from "react";
import TaskDateAlarm from "./TaskDateAlarm";

const TaskInputDataBox = () => {
  const [flagDateAlarm, setFlagDateAlarm] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (flagDateAlarm) {
      inputRef.current?.focus();
    }
  }, [flagDateAlarm]);
  const handleClick = () => {
    setFlagDateAlarm(true);
  };
  return (
    <main className="w-full h-[110px] pl-[70px] pr-[20px]">
      <header
        className="w-full h-[50px] bg-white flex justify-start items-center 
      text-blue-600 gap-4 px-[10px] drop-shadow-md drop-shadow-gray-300 relative"
      >
        <h3 className="text-xl font-light cursor-pointer" onClick={handleClick}>
          {flagDateAlarm ? (
            <div className="w-[15px] h-[15px] rounded-full border  border-blue-500"></div>
          ) : (
            "+"
          )}
        </h3>
        {!flagDateAlarm && <h3>Add a task</h3>}
        {flagDateAlarm && (
          <input
            type="text"
            placeholder="Add a task"
            ref={inputRef}
            className="outline-none text-black placeholder:text-black font-light text-sm"
          />
        )}
      </header>
      {/* due date and alarm */}
      {flagDateAlarm && <TaskDateAlarm />}
    </main>
  );
};
export default TaskInputDataBox;
