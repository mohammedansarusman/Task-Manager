import TaskInputDataBox from "./TaskInputDataBox";
import { TaskBlock } from "./TaskBlock";

const TasksComponent = () => {
  return (
    <div className="w-full h-full bg-stone-300 pt-2">
      <TaskInputDataBox />
      {/* task list */}
      <TaskBlock />
    </div>
  );
};

export default TasksComponent;
