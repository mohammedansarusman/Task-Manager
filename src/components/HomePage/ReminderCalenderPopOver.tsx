import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import ReminderPickADate from "./ReminderPickADate";
import { Calendar } from "../ui/calendar";
import { SelectItem, SelectValue } from "@radix-ui/react-select";
import { Select, SelectTrigger, SelectContent } from "../ui/select";
import { useState, useEffect, useContext } from "react";
import { CalenderContext } from "../../contexts/CalenderContext";

const ReminderCalenderPopOver = () => {
  const [hourArray, setHourArray] = useState<string[]>([]);
  const consumer = useContext(CalenderContext);

  const dateConversion = () => {
    const dateArray: string[] = [];
    for (let i = 1; i < 25; i++) {
      const now = new Date();
      now.setHours(now.getHours() + i);
      const hourOnly = now.getHours().toString();
      dateArray.push(hourOnly + ":00");
    }
    setHourArray(dateArray);
  };
  useEffect(() => {
    dateConversion();
  }, []);
  return (
    <Popover>
      <PopoverTrigger className="focus:outline-none focus:ring-0">
        <ReminderPickADate />
      </PopoverTrigger>
      <PopoverContent
        sideOffset={-182}
        className="rounded-none border-none w-[250px] p-0"
      >
        <div className="scale-[0.80] flex flex-col items-center justify-center gap-1 ">
          <Calendar
            // selected={dayDate}
            // onSelect={setDayDate}
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
              {hourArray.map((data) => (
                <SelectItem value={data} key={data} className="text-center">
                  {data}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <button
            className="w-[200px] h-[40px] py-[10px] bg-sky-600 text-white mt-[10px]"
            //  onClick={handleClick}
          >
            Save
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ReminderCalenderPopOver;
