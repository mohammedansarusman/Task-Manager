import React from "react";
import image2 from "../../assets/mainImage2.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipArrow,
} from "@radix-ui/react-tooltip";

const CalenderButton = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <figure className="w-[40px] h-[40px] flex justify-center items-center hover:bg-gray-100">
          <img src={image2} alt="icon" className="" />
        </figure>
      </TooltipTrigger>
      <TooltipContent
        side="right"
        sideOffset={5}
        className="bg-white px-3 py-1  text-black drop-shadow-lg text-sm font-light"
      >
        Calender
        <TooltipArrow className="fill-white" />
      </TooltipContent>
    </Tooltip>
  );
};

export default CalenderButton;
