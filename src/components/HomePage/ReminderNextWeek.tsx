import { IoTodayOutline } from "react-icons/io5";
import { useContext } from "react";
import { CalenderContext } from "../../contexts/CalenderContext";

const ReminderNextWeek = () => {
  const weekDay: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const now = new Date();
  const consumer = useContext(CalenderContext);
  now.setHours(now.getHours() + 24);
  now.setMinutes(0);

  const formattedTime = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const handleClick = () =>{
    consumer?.setReminder("Next week"+" "+formattedTime)

  }
  return (
    <main
      className="w-full flex justify-between items-center text-sm font-light px-2 py-2 hover:bg-gray-100 cursor-pointer"
      onClick={handleClick}
    >
      <aside className="w-[20%] flex justify-start items-center">
        <IoTodayOutline />
      </aside>
      <section className="w-[80%] flex justify-between items-center text-sm font-light">
        <p>Next week</p>
        <aside>{weekDay[new Date().getDay()]+", "+formattedTime}</aside>
      </section>
    </main>
  );
};

export default ReminderNextWeek;
