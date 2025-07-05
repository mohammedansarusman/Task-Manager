// parent componenet is TasksComponent

import { useContext, useEffect, useRef, useState } from "react";
import TaskDateAlarm from "./TaskDateAlarm";
import { CalenderContext } from "../../contexts/CalenderContext";


const TaskInputDataBox = () => {
  // purpose of flagDateAlarm -  click the plus icon then calender, reminder and add icon div will open.
  const [flagDateAlarm, setFlagDateAlarm] = useState<boolean>(false);
  const consumer = useContext( CalenderContext);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (flagDateAlarm) {
      inputRef.current?.focus();
    }
  }, [flagDateAlarm]);
  
  const handleClick = (): void => setFlagDateAlarm(true);
  
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    consumer?.setTask(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    if(!consumer?.task.trim() || consumer.schedule==="" || consumer.reminder===""){
     return
    }
    consumer?.setTaskStore((prev)=>([...prev,{task:consumer.task, dueDate:consumer.schedule, reminderDate:consumer.reminder}]))
    consumer?.setTask("");
    consumer?.setSchedule("");
    consumer?.setReminder("");
    consumer.setHour("");
    

  }
  return (
    <main className="w-full h-[110px] pl-[70px] pr-[20px] ">
      <header
        className="w-full h-[50px] bg-white flex justify-start items-center 
      text-blue-600 gap-4 drop-shadow-md drop-shadow-gray-300 relative"
      >
        {/* the plus icon clicked then the flagDateAlarm state become true */}
        <div className="w-[50px] h-full text-xl font-light cursor-pointer flex justify-center items-center" onClick={handleClick}>
          {flagDateAlarm ? (
            // rounderd logo
            <div className="w-[15px] h-[15px] rounded-full border  border-sky-500"></div>
          ) : (
            // plus icon
            <span>+</span>
          )}
        </div>
        {!flagDateAlarm && <h3>Add a task</h3>}
        {flagDateAlarm && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add a task"
              ref={inputRef}
              className="outline-none text-black placeholder:text-black font-light text-sm"
              value={consumer?.task}
              onChange={handleChange}
            />
          </form>
        )}
      </header>
      {/* due date and alarm */}
      {flagDateAlarm && <TaskDateAlarm />}
    </main>
  );
};
export default TaskInputDataBox;
