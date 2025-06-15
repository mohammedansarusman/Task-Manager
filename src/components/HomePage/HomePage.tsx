import React from "react";
import SideBar from "./SideBar";
import TaskBarHeading from "./TaskBarHeading";
import TasksComponent from "./TasksComponent";

const HomePage = () => {
  return (
    <div className="w-full h-[93%] bg-gray-100 relative flex flex-col">
      {/* set as absolute */}
      <SideBar />
      <TaskBarHeading />
      <TasksComponent />

      
    </div>
  );
};

export default HomePage;
