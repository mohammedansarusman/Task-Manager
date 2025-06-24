// parent component - SelectReminder
//  If you click the reminder icon then menubar will popover.

import { useContext } from "react";
import { IoTodayOutline } from "react-icons/io5";
import { CalenderContext } from "../../contexts/CalenderContext";

const ReminderToday = () => {
  const consumer = useContext(CalenderContext);  
  const now = new Date();
  now.setHours(now.getHours() + 3); // Add 3 hours
  now.setMinutes(0);

  const formattedTime = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const handleClick = () =>{
    consumer?.setReminder("Later today")
  }
  return (
    <main className="w-full flex justify-between items-center text-sm font-light px-2 py-2 hover:bg-gray-100 cursor-pointer"
        onClick={handleClick}
    >
      <aside className="w-[20%] flex justify-start items-center">
        <IoTodayOutline />
      </aside>
      <section className="w-[80%] flex justify-between items-center text-sm font-light">
        <p>Later today</p>
        <aside>{formattedTime}</aside>
      </section>
    </main>
  );
};

export default ReminderToday;
