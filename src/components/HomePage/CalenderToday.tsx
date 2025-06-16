import { IoTodayOutline } from "react-icons/io5";

const CalenderToday = () => {
  const weekDay: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <main className="w-full flex justify-around items-center text-sm font-light hover:bg-gray-100 px-2 py-2">
      <aside className="w-1/4 flex justify-start items-center">
        <IoTodayOutline />
      </aside>
      <section className="w-3/4 flex justify-between items-center">
        <p>Today</p>
        <aside>{weekDay[new Date().getDay()]}</aside>
    </section>
    </main>
  );
};

export default CalenderToday;
