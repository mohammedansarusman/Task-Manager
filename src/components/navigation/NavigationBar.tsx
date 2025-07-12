import { MenuIcon } from "./MenuIcon";
import { Heading } from "./Heading";
import { SearchIcon } from "./SearchIcon";
import { ThreeDots } from "./ThreeDots";
import { UserIcon } from "./UserIcon";
import { SearchBar } from "./SearchBar";
import { useContext, useEffect, useState } from "react";
import { SearchBarContext } from "../../contexts/SearchBarContext";
import { CalenderContext } from "../../contexts/CalenderContext";
import type { Task } from "../../contexts/CalenderContext";

const NavigationBar = () => {
const searchContext = useContext(SearchBarContext);
const consumer = useContext(CalenderContext);
const [random, setRandom] = useState<number>(0)

 // if the dueDate in taskStore is 'Today' and the 'current date and time' morethan 'Today' then replace today to creating date
const dateUpdation = () =>{
  setRandom(prev=>prev+1)
  console.log("aftr random",consumer?.taskStore);

  const updatedTask: Task[] = consumer?.taskStore.map((item)=>{
    if(item.dueDate==="Today" && new Date()>item.dueTodayDateTime){
      return {...item,dueDate: item.dueTodayDateTime.toDateString()}
    }
    return item
  })
  consumer?.setTaskStore(updatedTask);
}

useEffect(()=>{
  const interval = setInterval(dateUpdation,15000);
  return()=>clearInterval(interval);

},[random])


  return (
    <div className="bg-sky-600 w-full h-[50px] flex justify-between relative text-white">
      { searchContext?.flag && <SearchBar />}
      {/* menu icon & heading */}
      <section className="w-[200px] flex flex-row items-center">
        <MenuIcon />
        <Heading /> {/* "Task Manager " */}
      </section>
      <section className="w-[150px] flex flex-row items-center">
        {/* search icon, ... & User Icon*/}
        <SearchIcon />
        <ThreeDots />
        <UserIcon />
      </section>
    </div>
  );
};

export default NavigationBar;
