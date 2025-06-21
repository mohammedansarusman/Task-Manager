import { BsCalendar4Week } from "react-icons/bs";
import { CalenderContext} from "../../contexts/CalenderContext";
import { useContext } from "react";

const CalenderNextweek = () => {
  const weekDay: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const scheduleTask = useContext(CalenderContext);
  
  const handleClick = () =>{
    const currentDate = new Date();
    const modifiedDate = new Date(currentDate.setDate(currentDate.getDate()+7));
    scheduleTask?.setSchedule(modifiedDate.toDateString());
    scheduleTask?.setTurnPopOver(prev=>!prev);
  }
  return (
    <main 
      className="w-full flex justify-around items-center text-sm font-light hover:bg-gray-100 px-2 py-2 cursor-pointer"
      onClick={handleClick}
    >
      <aside className="w-1/4 flex justify-start items-center">
        <BsCalendar4Week />
      </aside>
      <section className="w-3/4 flex justify-between items-center">
        <p>Next Week</p>
        <aside>{weekDay[new Date().getDay()]}</aside>
      </section>
    </main>
  );
};

export default CalenderNextweek;
