import { BsCalendar4Week } from "react-icons/bs";


const CalenderPickDate = () => {
  return (
    <main className="w-full flex justify-around items-center text-sm font-light hover:bg-gray-100 px-2 py-2">
      <aside className="w-1/4 flex justify-start items-center">
        <BsCalendar4Week />
      </aside>
      
      <section className="w-3/4 flex justify-between items-center">
        <p>Pick a date</p>
      </section>
    </main>
  );
};

export default CalenderPickDate;
