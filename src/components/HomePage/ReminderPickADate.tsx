import { Value } from "@radix-ui/react-select";
import { IoTodayOutline } from "react-icons/io5";

const ReminderPickADate = () => {
  
  
  return (
    <main className="w-[100%] flex justify-between items-center text-sm font-light px-2 py-2 hover:bg-gray-100 cursor-pointer">
      <aside className="w-[20%] flex justify-start items-center">
        <IoTodayOutline />
      </aside>
      <section className="w-[80%] flex justify-start items-center text-sm font-light">
        <p>Pick a date</p>
      </section>
    </main>
  );
};

export default ReminderPickADate;
