import { MdOutlineAccessAlarm } from "react-icons/md";
import { IoIosToday } from "react-icons/io";

import { useContext } from "react";
import { CalenderContext } from "../../contexts/CalenderContext";

import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { PopoverArrow } from "@radix-ui/react-popover";

import MenuHeading from "./MenuHeading";
import MenuItem2 from "./MenuItem2";
import { useTodayTime } from "../../hooks/useTodayTime";
import { useTomorrowTime } from "../../hooks/useTomorrowTime";

import ReminderCalenderPopOver from "./ReminderCalenderPopOver";

type PopoverProps = {
  align?: "start" | "center" | "end";
};
const SelectReminder = ({ align = "start" }: PopoverProps) => {
  const consumer = useContext(CalenderContext);
  const laterTodayTime = useTodayTime();
  const tomorrowTime = useTomorrowTime();

  return (
    <Popover
      open={consumer?.reminderPop}
      onOpenChange={consumer?.setReminderPop}
    >
      <PopoverTrigger asChild>
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
        <MenuHeading heading="Reminder" />
        <MenuItem2 day="Later today" iconName={IoIosToday} weekDay={laterTodayTime} />
        <MenuItem2 day="Tomorrow" iconName={IoIosToday} weekDay={tomorrowTime} />
        <MenuItem2 day="Next Week" iconName={IoIosToday} weekDay={tomorrowTime} />
        <ReminderCalenderPopOver />
      </PopoverContent>
    </Popover>
  );
};

export default SelectReminder;
