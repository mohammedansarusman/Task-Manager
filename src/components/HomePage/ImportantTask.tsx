import { useContext } from 'react';
import { MdStarBorder, MdStar } from "react-icons/md";
import { CalenderContext } from "../../contexts/CalenderContext";
type ImportantTaskProp = {
    important: boolean;
    id: number;
}

export const ImportantTask = ({important, id}: ImportantTaskProp) => {
    const consumer = useContext(CalenderContext);
    const handleStarButton = (e: React.MouseEvent<HTMLDivElement>) =>  e.stopPropagation();
    
    
    
    const handleImportant = (): void => {
        if (!consumer) return;
        const updateTaskStore = consumer?.taskStore.map((item) => {
            if (item.id === id) {
                return { ...item, important: !item.important };
            } else {
                return item;
            }
        });
        consumer?.setTaskStore(updateTaskStore);
    }
    return (
        <div className="w-[50px] h-full flex justify-center items-center" onClick={handleStarButton}>
            {/* Important  / not important Icon */}
            <span>
                {!important ?
                    <MdStarBorder size={20} fill="blue" onClick={handleImportant} /> :
                    <MdStar size={20} fill="blue" onClick={handleImportant} />
                }
            </span>
        </div>
    )
}
