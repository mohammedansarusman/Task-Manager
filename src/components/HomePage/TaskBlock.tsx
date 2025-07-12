import { TaskItems } from "./TaskItems";
import { useContext } from "react";
import { CalenderContext } from "../../contexts/CalenderContext";

export const TaskBlock = () => {
  const consumer = useContext(CalenderContext);

  return (
    <div className="w-full drop-shadow-md drop-shadow-gray-300  flex flex-col justify-center pl-[70px] pr-[20px] gap-1">
      {consumer?.taskStore
        .slice()
        .reverse()
        .map((item) => (
          <TaskItems
            key={item.id}
            details={item.task}
            dueDate={item.dueDate}
            reminderDate={item.reminderDate}
            dueTodayDateTime={item.dueTodayDateTime}
          />
        ))}
    </div>
  );
};
