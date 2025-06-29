import {
  TooltipProvider,
} from "@radix-ui/react-tooltip";
import Icon from "./Icon";
import image1 from "../../assets/mainImage1.svg";
import image2 from "../../assets/mainImage2.svg";
import image3 from "../../assets/mainImage3.svg";
import image4 from "../../assets/mainImage4.png";

const SideBar = () => {
  return (
    <TooltipProvider>
      <div className="absolute left-0 w-[50px] h-full bg-gray-200 
      flex flex-col items-center justify-start gap-2 pt-[20px] z-20">
        <Icon image = {image1} iconName="Email"/>
        <Icon image = {image2} iconName="Calendar"/>
        <Icon image = {image3} iconName="People"/>
        <Icon image = {image4} iconName="To Do"/>
      </div>
    </TooltipProvider>
  );
};

export default SideBar;
