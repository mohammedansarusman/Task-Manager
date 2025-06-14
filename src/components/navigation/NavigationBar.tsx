import { MenuIcon } from "./MenuIcon";
import { Heading } from "./Heading";
import { SearchIcon } from "./SearchIcon";
import { ThreeDots } from "./ThreeDots";
import { UserIcon } from "./UserIcon";
import { SearchBar } from "./SearchBar";
import { useContext } from "react";
import { SearchBarContext } from "../../contexts/SearchBarContext";

const NavigationBar = () => {
const searchContext = useContext(SearchBarContext);

  return (
    <div className="bg-blue-500 w-full h-[50px] flex justify-between relative">
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
