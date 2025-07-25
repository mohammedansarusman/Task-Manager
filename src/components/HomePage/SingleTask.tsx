import { CalenderContext } from "../../contexts/CalenderContext";
import { useContext } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import type { Task } from "../../contexts/CalenderContext";
import { MdStarBorder, MdStar } from "react-icons/md";

type SingleTaskProp = {
  id?: number;
};

const SingleTask = ({ id }: SingleTaskProp) => {
  const consumer = useContext(CalenderContext);
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (consumer?.taskStore) {
      const result = consumer?.taskStore.map(item => {
        if (item.id === id) {
          return { ...item, task: consumer.taskDetails.task, completed: consumer.taskDetails.completed, important: consumer.taskDetails.important }
        }
        else {
          return item;
        }
      })
      consumer.setTaskStore(result);
      
    }
  }
  const handleCompleted = () =>{
    consumer?.setTaskDetails((prev)=>({...prev,completed:!prev.completed}))
  }
  const handleImportant = () =>{
    consumer?.setTaskDetails((prev)=>({...prev,important:!prev.important}))
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    consumer?.setTaskDetails((prev)=>({...prev,task:e.target.value}))    
  };

  return (
    <div className="bg-white w-[95%] h-[70px] flex justify-between items-center px-[10px]">
      {/* COMPLETED / NOT COMPLETED ICON */}
      <div className="w-[10%]">
        <div
          className={`w-[15px] h-[15px] outline-1 outline-sky-500 rounded-full flex justify-center items-center ${consumer?.taskDetails.completed ? "bg-sky-600" : "bg-white"}`}
          onClick={handleCompleted}
        >
          {consumer?.taskDetails.completed ? (
            <span
              className={`${consumer.taskDetails.completed ? "text-white" : "text-sky-600"
                }`}
            >
              <AiOutlineCheck size={10} />
            </span>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* TASK DISPLAY */}
      <form
        className="bg-pink-400 flex justify-start w-[80%]"
        onSubmit={handleSubmit}

      >
        {/* <h1>{selectedItem?.task}</h1> */}
        <input
          type="text"
          className="w-full outline-none"
          value={consumer?.taskDetails.task}
          onChange={handleChange}
        />
      </form>
      <div className="w-[10%]">
        <div 
          className="w-[50px] h-full flex justify-center items-center"
          onClick={handleImportant}
        >
          <span>
            {!consumer?.taskDetails.important ? (
              <MdStarBorder size={20} fill="blue" />
            ) : (
              <MdStar size={20} fill="blue" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
