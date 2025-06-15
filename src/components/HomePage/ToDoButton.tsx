import React from 'react'
import image4 from "../../assets/mainImage4.png";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipArrow,
} from "@radix-ui/react-tooltip";

const ToDoButton = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <figure className="w-[40px] h-[40px] flex justify-center items-center hover:bg-gray-100">
          <img src={image4} alt="icon" className="p-2" />
        </figure>
      </TooltipTrigger>
      <TooltipContent
        side="right"
        sideOffset={5}
        className="bg-white px-3 py-1  text-black drop-shadow-lg text-sm font-light"
      >
        To Do
        <TooltipArrow className="fill-white" />
      </TooltipContent>
    </Tooltip>
  )
}

export default ToDoButton