import { useContext } from "react";
import { CalenderContext } from "../../contexts/CalenderContext";
import type { IconType } from "react-icons";

type MenuItemProp = {
  day: string;
  iconName: IconType;
  weekDay?: string;
  nextWeekDate?: string;
};

const MenuItem = ({ day, iconName: Icon, weekDay, nextWeekDate, }: MenuItemProp) => {
  const scheduleTask = useContext(CalenderContext);
  
  const handleClick = () => {
    if (day === "Next Week") {
      if (nextWeekDate !== undefined) {
        console.log("typeof=>",typeof nextWeekDate)
        scheduleTask?.setSchedule(nextWeekDate);
      }
    } else if (day === "Today" || day === "Tomorrow") {
      scheduleTask?.setSchedule(day);
    }
    day !== "Pick a Date" && scheduleTask?.setTurnPopOver((prev) => !prev);
  };
  return (
    <main
      className="w-full flex justify-around items-center text-sm font-light hover:bg-gray-100 px-2 py-2 cursor-pointer"
      onClick={handleClick}
    >
      <aside className="w-1/4 flex justify-start items-center">
        <Icon />
      </aside>
      <section className="w-3/4 flex justify-between items-center">
        <p>{day}</p>
        <aside>{weekDay}</aside>
      </section>
    </main>
  );
};

export default MenuItem;
