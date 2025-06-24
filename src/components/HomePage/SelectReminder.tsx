import { MdOutlineAccessAlarm } from "react-icons/md";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { PopoverArrow } from "@radix-ui/react-popover";
import { Select, SelectTrigger, SelectContent } from "../ui/select";
import { Calendar } from "../ui/calendar";
import ReminderToday from "./ReminderToday";
import ReminderTomorrow from "./ReminderTomorrow";
import ReminderNextWeek from "./ReminderNextWeek";
import ReminderHeading from "./ReminderHeading";
import ReminderPickADate from "./ReminderPickADate";
import { SelectItem, SelectValue } from "@radix-ui/react-select";
import { useEffect, useState } from "react";
import ReminderCalenderPopOver from "./ReminderCalenderPopOver";

type PopoverProps = {
  align?: "start" | "center" | "end";
};
const SelectReminder = ({ align = "start" }: PopoverProps) => {
  // const [hourArray, setHourArray] = useState<string[]>([]);
  // const dateConversion = () => {
  //   const dateArray: string[] = [];
  //   for (let i = 1; i < 25; i++) {
  //     const now = new Date();
  //     now.setHours(now.getHours() + i);
  //     const hourOnly = now.getHours().toString();
  //     dateArray.push(hourOnly + ":00");
  //   }
  //   setHourArray(dateArray);
  // };
  // useEffect(() => {
  //   dateConversion();
  // }, []);

  return (
    <Popover>
      <PopoverTrigger>
        <div className="w-[30px] h-[30px] flex justify-center items-center hover:bg-white">
          <MdOutlineAccessAlarm size={20} />
        </div>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={11} // if the value increare popover will go down and value less then come up
        align={align}
        alignOffset={-20}
        className="w-[250px] flex flex-col justify-start px-0 py-0 rounded-none border-none"
      >
        <PopoverArrow className="fill-white w-4 h-4" />
        <ReminderHeading />
        <ReminderToday />
        <ReminderTomorrow />
        <ReminderNextWeek />
        <ReminderCalenderPopOver />
      </PopoverContent>
    </Popover>
  );
};

export default SelectReminder;
