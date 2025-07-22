import {useContext, useState} from "react";
import { CalenderContext } from "../../contexts/CalenderContext";
import { AiOutlineCheck } from "react-icons/ai";


type FlagProps = {
  tick: boolean;
  tickClick?: boolean;
};
type CompletedTaskProp = {
    id: number|undefined;
    completed: boolean | undefined;
}

export const CompletedTask = ({id, completed}: CompletedTaskProp) => {
  console.log("completed =>",completed);
    const [flag, setFlag] = useState<FlagProps>({tick: false, tickClick: false});
    const consumer = useContext(CalenderContext);
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
      const handleCompleteButton = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation(); 
      
  return (
    <aside className="w-[50px] h-full" onClick={handleCompleteButton}>
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
  );
};

export default CompletedTask;
