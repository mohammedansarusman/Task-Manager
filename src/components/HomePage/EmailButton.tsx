import React from "react";
import image1 from "../../assets/mainImage1.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipArrow,
} from "@radix-ui/react-tooltip";

const EmailButton = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <figure className="w-[40px] h-[40px] flex justify-center items-center hover:bg-gray-100">
          <img src={image1} alt="icon" className="" />
        </figure>
      </TooltipTrigger>
      <TooltipContent
        side="right"
        sideOffset={5}
        className="bg-white px-3 py-1  text-black drop-shadow-lg text-sm font-light"
      >
        Email
        <TooltipArrow className="fill-white" />
      </TooltipContent>
    </Tooltip>
  );
};

export default EmailButton;
