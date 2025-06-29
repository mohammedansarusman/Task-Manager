import { useContext } from "react";
import { CalenderContext } from "../../contexts/CalenderContext";
import type { IconType } from "react-icons";

type MenuItemProp = {
  day: string;
  iconName: IconType;
  weekDay?: string;
};

const MenuItem2 = ({ day, iconName: Icon, weekDay }: MenuItemProp) => {
  const scheduleTask = useContext(CalenderContext);
  // handleclick function executed
  // update the text today and today's date in global state variable.
  const handleClick = () => {
    if (day === "Later today" || day === "Tomorrow" || day === "Next Week") {
      scheduleTask?.setReminder(day + " " + weekDay);
      scheduleTask?.setHour("");
    }
    day==="Pick a date" && scheduleTask?.setReminder("");
    day !== "Pick a date" && scheduleTask?.setReminderPop((prev) => !prev);
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

export default MenuItem2;
