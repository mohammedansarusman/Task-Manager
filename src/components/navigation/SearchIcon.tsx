import { VscSearch } from "react-icons/vsc";
import { useContext } from "react";
import { SearchBarContext } from "../../contexts/SearchBarContext";


export const SearchIcon = () => {
  
  const searchContext = useContext(SearchBarContext);
  const handleClick = () => {
    searchContext?.toggleSearch();
  };
  return (
    <div
      className="w-[50px] h-full flex justify-center items-center hover:bg-sky-900"
      onClick={handleClick}
    >
      <VscSearch />
    </div>
  );
};
