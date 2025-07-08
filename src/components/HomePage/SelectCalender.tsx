import { BsCalendarDate } from "react-icons/bs";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { PopoverArrow } from "@radix-ui/react-popover";
import { Calendar } from "../ui/calendar";
import { useState, useContext } from "react";
import { CalenderContext } from "../../contexts/CalenderContext";
import MenuHeading from "./MenuHeading";
import MenuItem from "./MenuItem";
import { IoTodayOutline } from "react-icons/io5";
import { IoIosToday } from "react-icons/io";
import { BsCalendar4Week } from "react-icons/bs";

type PopoverProps = {
  align?: "start" | "center" | "end";
};

const SelectCalender = ({ align = "start" }: PopoverProps) => {
  const consumer = useContext(CalenderContext);
  const [dayDate, setDayDate] = useState<Date>(new Date());
  const [calendarFlag, setCaledarFlag] = useState<boolean>(false);

  const weekDay: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today: string = weekDay[new Date().getDay()];
  const tomorrow = weekDay[new Date().getDay() + 1];
  const currentDate = new Date();
  // modifiedDate for the Calendar menu next week feature.
  const modifiedDate = new Date(currentDate.setDate(currentDate.getDate() + 7));

  const handleSave = () => {
    consumer?.setSchedule(dayDate.toDateString());
    consumer?.setPickDate(dayDate);
    setCaledarFlag((prev) => !prev);
    consumer?.setTurnPopOver((prev) => !prev);

  };

  return (
    <Popover
      open={consumer?.turnPopOver}
      onOpenChange={consumer?.setTurnPopOver}
    >
      <PopoverTrigger asChild>
        <div className="w-[30px] h-[30px] flex justify-center items-center hover:bg-white">
          <BsCalendarDate />
        </div>
      </PopoverTrigger>

      <PopoverContent
        sideOffset={11} // if the value increare popover will go down and value less then come up
        align={align}
        alignOffset={-10}
        className="w-[180px] flex flex-col justify-start px-0 py-0 rounded-none border-none"
      >
        <PopoverArrow className="fill-white w-4 h-4" />

        <MenuHeading heading="Due" />
        <MenuItem day="Today" iconName={IoTodayOutline} weekDay={today} />
        <MenuItem day="Tomorrow" iconName={IoIosToday} weekDay={tomorrow} />
        <MenuItem day="Next Week" iconName={BsCalendar4Week} weekDay={today} nextWeekDate={modifiedDate.toDateString()} />

        <Popover open={calendarFlag} onOpenChange={setCaledarFlag}>
          <PopoverTrigger className="focus:outline-none focus:ring-0">
            <MenuItem day="Pick a Date" iconName={BsCalendar4Week} />
          </PopoverTrigger>
          <PopoverContent
            sideOffset={-182}
            className="rounded-none border-none w-[250px] p-0"
          >
            {/* <PopoverArrow className="fill-white w-4 h-4" /> */}

            <div className="scale-[0.80] flex flex-col items-center justify-center gap-1 ">
              <Calendar
                selected={dayDate}
                onSelect={setDayDate}
                mode="single"
                disabled={{ before: new Date(new Date().setHours(0, 0, 0, 0)) }}
                className="w-full h-full p-0 m-0"
              />
              <button
                className="w-[100px] h-[40px] py-[10px] bg-blue-500 text-white"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </PopoverContent>
    </Popover>
  );
};

export default SelectCalender;
