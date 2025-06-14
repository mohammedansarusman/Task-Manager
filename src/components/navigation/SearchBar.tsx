import { HiArrowLeft } from "react-icons/hi2";
import { VscSearch } from "react-icons/vsc";
import { useContext } from "react";
import { SearchBarContext } from "../../contexts/SearchBarContext";



export const SearchBar = () => {
  const searchContext = useContext(SearchBarContext)
  const handleLeftArrow=()=>{
    searchContext?.toggleSearch()
  }
  return (
    <div className="w-full h-full absolute left-0">
      <div
        className="w-[97%] h-[30px] bg-white absolute left-1/2 top-1/2 
      transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center"
      >
        {/* arrow mark and input tag */}
        <div className="flex justify-left items-center w-[90%] px-[2px]">
          <button className="w-[25px] h-[25px]  text-black flex justify-center items-center cursor-pointer hover:bg-gray-300">
            <HiArrowLeft onClick={handleLeftArrow}/>
          </button>
          <div className="w-full max-w-[500px] h-[25px] pl-[1px]">
            <input type="text" placeholder="Search To Do" className="text-black text-sm outline-0 w-[95%]"/>
          </div>
        </div>
        {/* search icon */}
        <div className="w-[10%] h-[30px] flex justify-end">
          <div className="w-[30px] h-[30px] hover:bg-gray-300 flex items-center justify-center text-black">
            <VscSearch />
          </div>
        </div>
      </div>
    </div>
  );
};
