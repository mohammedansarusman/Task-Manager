import { BsCalendarDate } from "react-icons/bs";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import CalenderHeading from "./CalenderHeading";
import CalenderToday from "./CalenderToday";
import CalenderTomorrow from "./CalenderTomorrow";
import CalenderNextweek from "./CalenderNextweek";

type PopoverProps = {
  align?: "start" | "center" | "end";
};

const SelectCalender = ({ align = "start" }: PopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-[30px] h-[30px] flex justify-center items-center hover:bg-white">
          <BsCalendarDate /> 
        </div>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={10}
        align={align}
        className="w-[170px] flex flex-col justify-start px-0 py-0 "
      >
        <CalenderHeading /> 
        <CalenderToday />
        <CalenderTomorrow />
        <CalenderNextweek />
        

      </PopoverContent>
    </Popover>
  );
};

export default SelectCalender;
