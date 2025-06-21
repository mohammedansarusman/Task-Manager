import { MdOutlineAccessAlarm } from "react-icons/md";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";

type PopoverProps = {
  align?: "start" | "center" | "end";
};
const SelectReminder = ({align="start"}: PopoverProps) => {
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
        className="w-[180px] h-[200px] rounded-none"
      >
        {/* <PopoverArrow className="fill-white w-4 h-4" /> */}
      </PopoverContent>
    </Popover>
  );
};

export default SelectReminder;
