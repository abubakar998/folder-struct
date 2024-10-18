import { useState } from "react";
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'; // Using solid icons
import { MenuItem } from "@/type";
import { useGlobalContext } from "@/context/GlobalContext";

const MenuItemComponent: React.FC<{ item: MenuItem }> = ({ item }) => {
    const [open, setOpen] = useState(false); // State to toggle the submenu
    const [showOption, setShowOption] = useState(false); // State to toggle the submenu

    const { flatData, nestedMenuData, getDataFromLocalStorage, setDataToLocalStorage  } = useGlobalContext();  

    const handleExpandOrCollapse = () => {
        setOpen(!open);
    };
    const handleShowOption = () => {
        setShowOption(!showOption)
    }

    const addMenu = () => {
        
    }

    return (
        <li>
            <div style={{ cursor: 'pointer' }}>
                <span onClick={handleShowOption}>{item.label}</span>
                {item.children && <span onClick={handleExpandOrCollapse}>{open ? ' ▼' : ' ▶'}</span>}
                {showOption && <>
                    <button onClick={addMenu} className="ml-2 bg-green-500 text-white rounded hover:bg-green-600">
                        <PlusIcon className="w-4 h-4" />
                    </button>
                    <button className="ml-2 bg-green-500 text-white rounded hover:bg-green-600">
                        <PencilIcon className="w-4 h-4" />
                    </button>
                    <button className="ml-2 bg-green-500 text-white rounded hover:bg-green-600">
                        <TrashIcon className="w-4 h-4" />
                    </button>
                </>}
            </div>
            {open && item.children && (
                <ul style={{ paddingLeft: '20px' }}>
                    {item.children.map((child, index) => (
                        <MenuItemComponent key={index} item={child} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MenuItemComponent