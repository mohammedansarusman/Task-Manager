import TaskInputDataBox from "./TaskInputDataBox";
import { TaskBlock } from "./TaskBlock";
import { useContext } from "react";
import { CalenderContext } from "../../contexts/CalenderContext";
import SingleTask from "./SingleTask";

const TasksComponent = () => {
  const consumer = useContext(CalenderContext)
  return (
    <div className="w-full h-full flex justify-between bg-stone-300 pt-2 pr-3">
      <div className={`${ consumer?.clickTaskItem ? "w-[100%]" : "w-[75%]"}`}>
        <TaskInputDataBox />
        {/* task list */}
        <TaskBlock />
      </div>
      {/* Task edit and delete features existing here */} 
      {!consumer?.clickTaskItem && <div className="w-[25%] h-full flex flex-col items-center bg-stone-100 pt-[10px]">
        <SingleTask id = {consumer?.taskId}/>
      </div>}
    </div>
  );
};

export default TasksComponent;
