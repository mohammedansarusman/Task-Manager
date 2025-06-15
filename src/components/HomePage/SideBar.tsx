import React from "react";
import {
  TooltipProvider,
} from "@radix-ui/react-tooltip";
import EmailButton from "./EmailButton";
import CalenderButton from "./CalenderButton";
import PeopleButton from "./PeopleButton";
import ToDoButton from "./ToDoButton";

const SideBar = () => {
  return (
    <TooltipProvider>
      <div className="absolute left-0 w-[50px] h-full bg-gray-200 
      flex flex-col items-center justify-start gap-2 pt-[20px] z-20">
        <EmailButton />
        <CalenderButton />
        <PeopleButton />
        <ToDoButton />
      </div>
    </TooltipProvider>
  );
};

export default SideBar;
