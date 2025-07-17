import { AiOutlineCheck } from "react-icons/ai";
import { MdStarBorder, MdStar } from "react-icons/md";
import { CalenderContext } from "../../contexts/CalenderContext";

import { useContext, useEffect, useState } from "react";
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
type FlagProps = {
  tick: boolean;
  important: boolean;
  tickClick?: boolean;
};

export const TaskItems = ({details,dueDate,reminderDate,id,completed,status,dueTodayDateTime,dueTomorrowDateTime,dueNextWeekDateTime,duePickDate,important}: TaskItemsProp) => {
  const consumer = useContext(CalenderContext);
  const presentDateTime: Date = new Date();
  const [flag, setFlag] = useState<FlagProps>({tick: false, important: false,tickClick: false});
  // for the activation and de-activation of tick mark in complete feature
  
  const handleHover = (): void => setFlag((prev) => ({ ...prev, tick: true }));

  const handleMouseLeave = (): void => setFlag((prev) => ({ ...prev, tick: false }));
  const handleTickClick = () => {
    if (!consumer) return;
    const updated = consumer?.taskStore.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    consumer?.setTaskStore(updated);
    setFlag((prev) => ({ ...prev, tickClick: true }));
  };
  const handleImportant = (): void =>{
    if (!consumer) return;
    const updateTaskStore = consumer?.taskStore.map((item)=>{
      if (item.id === id) {
        return { ...item, important: !item.important};
      } else {
        return item;
      }
    });
    consumer?.setTaskStore(updateTaskStore);
  }

  useEffect(() => {}, [consumer?.refresh]);

  
  let result = false;
  if (status === "today") {
    if (presentDateTime > dueTodayDateTime) {
      result = true;
      dueDate = dueTodayDateTime.toDateString();
    } else {
      result = false;
    }
  } else if (status === "tomorrow") {
    if (presentDateTime > dueTomorrowDateTime) {
      result = true;
      dueDate = dueTomorrowDateTime.toDateString();
    } else {
      result = false;
    }
  } else if (status === "nextWeek") {
    if (presentDateTime > dueNextWeekDateTime) {
      result = true;
    }
  } else {
    if (presentDateTime > duePickDate ) {
      result = true;
    }
  }

  return (
    <main className="w-[100%] h-[50px] bg-white hover:bg-slate-100 flex items-center justify-between">
      <aside className="w-[50px] h-full">
        {/* completed/not completed Icon */}
        <figure className="flex justify-center items-center w-[100%] h-full">
          <div
            className={`w-[15px] h-[15px] outline-1 outline-sky-500 rounded-full flex justify-center items-center ${
              completed && "bg-sky-600"
            }`}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={handleTickClick}
          >
            {flag.tick || completed ? (
              <span className={`${completed ? "text-white" : "text-sky-600"}`}>
                <AiOutlineCheck size={10} />
              </span>
            ) : (
              ""
            )}
          </div>
        </figure>
      </aside>
      <div className="w-full flex flex-col items-start justify-between text-sm font-light text-slate-900">
        <section className="h-[25px] py-1 font-semibold">
          {/* tasks */}
          <h1 className="">{details}</h1>
        </section>
        <section className="h-[25px] flex justify-start gap-[20px] text-xs">
          {/* due date */}
          <h1
            className={`${completed ? "line-through text-gray-500" : ""} ${
              result ? "text-red-700" : "text-black"
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

      <aside className="w-[50px] h-full flex justify-center items-center">
        {/* Important  / not important Icon */}
        <span>
          {!important ? 
            <MdStarBorder size={20} fill="blue" onClick={handleImportant}/> :
            <MdStar size={20} fill="blue" onClick={handleImportant}/>
          }
        </span>
      </aside>
    </main>
  );
};
