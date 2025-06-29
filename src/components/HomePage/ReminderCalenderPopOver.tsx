import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { SelectItem, SelectValue } from "@radix-ui/react-select";
import { Select, SelectTrigger, SelectContent } from "../ui/select";
import { useState, useContext } from "react";
import { CalenderContext } from "../../contexts/CalenderContext";
import { useTimeArray } from "../../hooks/useTimeArray";
import MenuItem2 from "./MenuItem2";
import { IoIosToday } from "react-icons/io";


const ReminderCalenderPopOver = () => {
  // const [hourArray, setHourArray] = useState<string[]>([]);
  const consumer = useContext(CalenderContext);
  // set initial date of calendar
  const [dayDate, setDayDate] = useState<Date>(new Date());
  
  // initially the calendar is off, calender will turn off after save button 
  const [reminderFlag, setReminderFlag] = useState<boolean>(false);  
  const timeArray = useTimeArray();
  
  const handleSaveButton = () =>{
    consumer?.setReminder(dayDate?.toDateString())
    consumer?.setHour(consumer.hour);
    setReminderFlag(prev=>!prev);
    consumer?.setReminderPop(false);
  }
  
  return (
    <Popover open={reminderFlag} onOpenChange={setReminderFlag}>
      <PopoverTrigger className="focus:outline-none focus:ring-0">
        <MenuItem2 day="Pick a date" iconName={IoIosToday} weekDay=""/>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={-182}
        className="rounded-none border-none w-[250px] p-0"
      >
        <div className="scale-[0.80] flex flex-col items-center justify-center gap-1 ">
          <Calendar
            selected={dayDate}
            onSelect={(dateData: Date)=>setDayDate(dateData)}
            mode="single"
            disabled={{ before: new Date(new Date().setHours(0, 0, 0, 0)) }}
            className="w-full h-full p-0 m-0"
          />
          <Select
            value={consumer?.hour}
            onValueChange={(val) => consumer?.setHour(val)}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Time">{consumer?.hour}</SelectValue>
            </SelectTrigger>
            <SelectContent className="rounded-none">
              {timeArray.map((data) => (
                <SelectItem value={data} key={data} className="text-center">
                  {data}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <button
            className="w-[200px] h-[40px] py-[10px] bg-sky-600 text-white mt-[10px]"
            onClick={handleSaveButton}
          >
            Save
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ReminderCalenderPopOver;
