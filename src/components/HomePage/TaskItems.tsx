import { AiOutlineCheck } from "react-icons/ai";
import { MdStarBorder, MdStar } from "react-icons/md";

import { useState } from "react";
type TaskItemsProp = {
  details: string;
  dueDate: string;
  reminderDate: string;
  dueTodayDateTime: Date;
}
type FlagProps = {
  tick: boolean;
  important: boolean;
  tickClick?: boolean;
}

export const TaskItems = ({ details, dueDate, reminderDate, dueTodayDateTime }: TaskItemsProp) => {
  const [flag, setFlag] = useState<FlagProps>({ tick: false, important: false, tickClick: false })

  // for the activation and de-activation of tick mark in complete feature
  const handleHover = (): void => setFlag(prev=>({...prev,tick:true}));
  const handleMouseLeave = (): void => setFlag(prev=>({...prev,tick:false}));
  // const handleTickClick = () =>setFlag(prev=>({...prev,tick:true}))

  return (
    <main className='w-[100%] h-[50px] bg-white hover:bg-slate-100 flex items-center justify-between'>
      <aside className="w-[50px] h-full">
        {/* completed/not completed Icon */}
        <figure className="flex justify-center items-center w-[100%] h-full">
          <div
            className="w-[15px] h-[15px] outline-1 outline-sky-500 rounded-full flex justify-center items-center"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            // onClick={handleTickClick}
            
          >
            {flag.tick && <span className="text-sky-600 "><AiOutlineCheck size={10} /></span>}
          </div>
        </figure>
      </aside>
      <div className="w-full flex flex-col items-start justify-between text-sm font-light text-slate-900">
        <section className="h-[25px] py-1 font-semibold">
          {/* tasks */}
          <h1>{details}</h1>
        </section>
        <section className="h-[25px] flex justify-start gap-[20px]">
          {/* due date */}
          <h1 className="">{dueDate}</h1>
          {/* dueTodayDateTime<currentDate ? "bg-red-400" : "bg-blue-500" */}
          <h1>{reminderDate}</h1>
        </section>
      </div>

      <aside className="w-[50px] h-full flex justify-center items-center">
        {/* Important  / not important Icon */}
        <MdStar size={20} fill="blue"/>
      </aside>
    </main>
  )
}
