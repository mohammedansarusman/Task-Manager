import { BsCalendarDate } from "react-icons/bs";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import CalenderHeading from "./CalenderHeading";
import CalenderToday from "./CalenderToday";
import CalenderTomorrow from "./CalenderTomorrow";
import CalenderNextweek from "./CalenderNextweek";
import CalenderPickDate from "./CalenderPickDate";
import { PopoverArrow } from "@radix-ui/react-popover";
import { Calendar } from "../ui/calendar";
import { useState, useContext } from "react";
import { CalenderContext} from "../../contexts/CalenderContext";


type PopoverProps = {
  align?: "start" | "center" | "end";
};

const SelectCalender = ({ align = "start" }: PopoverProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-[30px] h-[30px] flex justify-center items-center hover:bg-white">
          <BsCalendarDate />
          
        </div>
      </PopoverTrigger>

      <PopoverContent
        sideOffset={20}
        align={align}
        alignOffset={-10}
        className="w-[180px] flex flex-col justify-start px-0 py-0 rounded-none border-none"
      >
        <PopoverArrow className="fill-white w-4 h-4" />

        <CalenderHeading />
        <CalenderToday/>
        <CalenderTomorrow />
        <CalenderNextweek />
        <Popover>
          <PopoverTrigger className="focus:outline-none focus:ring-0">
            <CalenderPickDate />
          </PopoverTrigger>
          <PopoverContent
            sideOffset={-182}
            className="rounded-none border-none w-[250px] p-0"
          >
            {/* <PopoverArrow className="fill-white" /> */}
            <div className="scale-[0.80] flex flex-col items-center justify-center gap-1 ">
              <Calendar 
                selected={date}
                onSelect={(date)=>setDate(date)}
                mode="single" 
                className="w-full h-full p-0 m-0" 
              />
              <button className="w-[100px] h-[40  px] py-[10px] bg-blue-500 text-white">Save</button>
            </div>
          </PopoverContent>
        </Popover>
      </PopoverContent>
    </Popover>
  );
};

export default SelectCalender;
