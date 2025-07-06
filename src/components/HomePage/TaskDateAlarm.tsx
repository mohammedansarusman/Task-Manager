// parent component is <TaskInputDataBox />

import SelectCalender from "./SelectCalender";
import { useContext } from "react";
import { CalenderContext } from "../../contexts/CalenderContext";
import SelectReminder from "./SelectReminder";

const TaskDateAlarm = () => {
  const consumer = useContext(CalenderContext);

  const handleAddButton = () =>{
    // creation date
    const currentDateTime: Date = new Date();
    // today until due time
    const dueTodayDateTime= new Date(currentDateTime);
    dueTodayDateTime.setDate(dueTodayDateTime.getDate()+1);
    dueTodayDateTime.setHours(0,0,0,0);
    // tomorrow until due time
    const dueTomorrowDateTime: Date = new Date(currentDateTime);
    dueTomorrowDateTime.setDate(dueTomorrowDateTime.getDate()+2);
    dueTomorrowDateTime.setHours(0,0,0,0);
    // next week until due time
    const dueNextWeekDateTime: Date = new Date(currentDateTime);
    dueNextWeekDateTime.setDate(dueNextWeekDateTime.getDate()+7);
    dueNextWeekDateTime.setHours(0,0,0,0);
      
    

    if(!consumer?.task.trim() || consumer.schedule==="" || consumer.reminder===""){
     return
    }
    consumer?.setTaskStore((prev)=>(
      [...prev,
        { task:consumer.task, 
          dueDate:consumer.schedule, 
          reminderDate:consumer.reminder, 
          currentDateTime: currentDateTime,
          dueTodayDateTime: dueTodayDateTime,
          dueTomorrowDateTime: dueTomorrowDateTime,
          dueNextWeekDateTime: dueNextWeekDateTime,
        }
      ]
    ))
    consumer?.setTask("");
    consumer?.setSchedule("");
    consumer?.setReminder("");
    consumer.setHour("");
    console.log(consumer.taskStore);
    
  }
  return (
    <section className="w-full h-[50px] bg-gray-100 mt-[2px] flex justify-between items-center">
      {/* {console.log("hello=>",dueTodayDateTime)} */}
      <div className="w-[75%] h-full flex justify-start items-center gap-2 pl-[20px] text-black ">
        {/* due date */}
        <div className="cursor-pointer focus:bg-white outline-none" tabIndex={0}>{<SelectCalender />}</div>
        <div className="h-full flex items-center justify-center text-sm font-light">
          {typeof (consumer?.schedule === "string") &&
            consumer?.schedule &&
            "Due " + consumer?.schedule}
        </div>
        {/* reminder icon - if we click then popover will trigger*/}
        <div className="cursor-pointer focus:bg-white outline-none" tabIndex={0}>{<SelectReminder />}</div>
        <h1 className="text-sm font-light">
          {
          typeof consumer?.reminder === "string" &&
            consumer.reminder + " " + consumer.hour}
        </h1>
      </div>
      <div className="w-[25%] h-full flex justify-end items-center pr-[20px]">
        <button
          className={`text-sm ${
            consumer?.task && consumer?.task.trim().length > 0 && consumer.schedule && consumer.reminder
              ? ("text-blue-500 cursor-pointer border-sky-600")
              : "text-gray-800"
          }  border-2 px-[20px] py-[5px] cursor-not-allowed focus:bg-white outline-none`}
          tabIndex={0}
          onClick={handleAddButton}
        >
          Add
        </button>
      </div>
    </section>
  );
};

export default TaskDateAlarm;
