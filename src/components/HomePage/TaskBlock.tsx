import { TaskItems } from "./TaskItems";
import { useContext, useState} from "react";
import { CalenderContext, type Task } from "../../contexts/CalenderContext";
// import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";



export const TaskBlock = () => {
  const consumer = useContext(CalenderContext);
  const completedTasks: Task[] = consumer?.taskStore.filter(item => item.completed === true) ?? [];
  const notCompletedTasks: Task[] = consumer?.taskStore.filter(item => !item.completed) ?? [];
  const [flagArrow, setFlagArrow] = useState<boolean>(false)
  // const presentDateTime: Date = new Date()
  const [dueTodayDateTime, setDueTodayDateTime] = useState<string>("");


  console.log("task store in taskblock", notCompletedTasks);


  return (
    <div className="w-full drop-shadow-md drop-shadow-gray-300  flex flex-col justify-center pl-[70px] pr-[20px] gap-1">
      {notCompletedTasks
        .slice()
        .reverse()
        .map((item) => {
          return <TaskItems
            key={item.id}
            details={item.task}
            dueDate={item.dueDate}
            reminderDate={item.reminderDate}
            id={item.id}
            completed={item.completed}
            status={item.status}
            dueTodayDateTime={item.dueTodayDateTime}
            dueTomorrowDateTime={item.dueTomorrowDateTime}
            dueNextWeekDateTime = {item.dueNextWeekDateTime}
            duePickDate = {item.duePickDate}
            important = {item.important}
          />
        })
      }
      {
        completedTasks.length > 0 &&
        <div
          className="flex justify-start items-center gap-3 px-[15px] py-[5px]"
          onClick={() => setFlagArrow(prev => !prev)}
        >
          {<span className={`transform transition-transform duration-300 ${!flagArrow ? "rotate-0" : "rotate-90"}`}><AiOutlineRight /></span>}
          <h1 className="text-sm font-semibold">Completed<span>{" " + "  " + completedTasks.length}</span></h1>
        </div>
      }
      {flagArrow && completedTasks
        .slice()
        .reverse()
        .map((item) => (
          <TaskItems
            key={item.id}
            details={item.task}
            dueDate={item.dueDate}
            reminderDate={item.reminderDate}
            id={item.id}
            completed={item.completed}
            status={item.status}
            dueTodayDateTime={item.dueTodayDateTime}
            dueTomorrowDateTime={item.dueTomorrowDateTime}
            dueNextWeekDateTime = {item.dueNextWeekDateTime}
            duePickDate = {item.duePickDate}
          />
        ))
      }


    </div>
  );
};
