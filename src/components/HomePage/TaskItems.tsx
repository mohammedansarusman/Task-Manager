import { CalenderContext } from "../../contexts/CalenderContext";
import { useContext, useEffect } from "react";
import { ImportantTask } from "./ImportantTask";
import { CompletedTask } from "./CompletedTask";

type TaskItemsProp = {
  details: string;
  dueDate: string;
  reminderDate: string;
  id: number;
  completed: boolean;
  status?: string;
  dueTodayDateTime: Date;
  dueTomorrowDateTime: Date;
  dueNextWeekDateTime: Date;
  duePickDate: Date;
  important: boolean;
};

export const TaskItems = ({ details, dueDate, reminderDate, id, completed, status, dueTodayDateTime, dueTomorrowDateTime, dueNextWeekDateTime, duePickDate, important }: TaskItemsProp) => {
  const consumer = useContext(CalenderContext);
  const presentDateTime: Date = new Date();

  useEffect(() => { }, [consumer?.refresh]);

  let result = false;
  if (status === "today") {
    if (presentDateTime > dueTodayDateTime) {
      result = true;
      dueDate = dueTodayDateTime.toDateString();
    } else {
      result = false;
      dueDate = "Today";
    }
  } else if (status === "tomorrow") {
    if (presentDateTime > dueTomorrowDateTime) {
      result = true;
      dueDate = dueTomorrowDateTime.toDateString();
    } else {
      result = false;
      dueDate = "Tomorrow";
    }
  } else if (status === "nextWeek") {
    if (presentDateTime > dueNextWeekDateTime) {
      result = true;
      dueDate = dueNextWeekDateTime.toDateString();
    } else {
      result = false;
      dueDate = dueNextWeekDateTime.toDateString();
    }
  } else if (presentDateTime > duePickDate) {
    result = true;
    dueDate = duePickDate.toDateString();
  } else {
    result = false;
    dueDate = duePickDate.toDateString();
  }

  const handleTaskItemClick = () => {
    consumer?.setClickTaskItem(false);
    consumer?.setTaskId(id);
    consumer?.setTaskDetails((prev)=>({...prev,task:details,completed:completed,important:important}));
    
  };

  return (
    <main
      className="w-[100%] h-[50px] bg-white hover:bg-slate-100 flex items-center justify-between"
      onClick={handleTaskItemClick}
    >
     {/* ----------------------------------------- */}
      <CompletedTask completed={completed} id={id} />
     {/* ----------------------------------------- */}
      <div className="w-full flex flex-col items-start justify-between text-sm font-light text-slate-900">
        <section className="h-[25px] py-1 font-semibold">
          {/* tasks */}
          <h1 className="">{details}</h1>
        </section>
        <section className="h-[25px] flex justify-start gap-[20px] text-xs">
          {/* due date */}
          <h1
            className={`${completed ? "line-through text-gray-500" : ""} ${result ? "text-red-700" : "text-black"
              }`}
          >
            {`Due ${dueDate}`}
          </h1>
          {/* dueTodayDateTime<currentDate ? "bg-red-400" : "bg-blue-500" */}
          <h1 className={completed ? "line-through text-gray-500" : ""}>
            {reminderDate}
          </h1>
        </section>
      </div>
      {/* Click on start icon will convert important is TRUE */}
      <ImportantTask important={important} id={id} />
    </main>
  );
}
