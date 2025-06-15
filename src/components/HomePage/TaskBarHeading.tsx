import React from "react";
import { IoGridSharp } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { TbArrowsSort } from "react-icons/tb";

const TaskBarHeading = () => {
  return (
    <main className="w-full h-[70px] pl-[70px] pt-[25px] flex justify-between items-center">
      <section className="flex justify-between items-center w-1/4 h-full">
        <h1 className="text-2xl text-blue-600 font-semibold">Tasks</h1>
      </section>
      <aside className="w-3/4 h-full flex justify-end items-center gap-4">
        <figure className="w-[50px] h-full flex justify-center items-center hover:bg-white">
          <IoGridSharp className="w-1/2 h-1/2 text-blue-600" />
        </figure>
        <figure className="w-[50px] h-full flex justify-center items-center hover:bg-white">
          <BsList className="w-1/2 h-1/2 text-blue-600"/>
        </figure>
        <figure className="w-[50px] h-full flex justify-center items-center hover:bg-white">
          <TbArrowsSort className="w-1/2 h-1/2 text-blue-600"/>
        </figure>
      </aside>
    </main>
  );
};

export default TaskBarHeading;
