import { useState } from "react";
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'; // Using solid icons
import { MenuFlatData, MenuItem } from "@/type";
import AddMenu from "./AddMenu";
import { useGlobalContext } from "@/context/GlobalContext";
import EditMenu from "./EditMenu";
import removeItemById from "@/utils/removeItemById";

const MenuItemComponent: React.FC<{ item: MenuItem }> = ({ item }) => {
    const [open, setOpen] = useState(false); // State to toggle the submenu
    const [showOption, setShowOption] = useState(false);
    const [showAddInputField, setShowAddInputField] = useState(false);
    const [showEditInputField, setShowEditInputField] = useState(false);

    const { flatData, getDataFromLocalStorage, setDataToLocalStorage } = useGlobalContext();

    const handleExpandOrCollapse = () => {
        setOpen(!open);
    };
    const handleShowOption = () => {
        setShowOption(!showOption)
    }

    const toggleAddInputField = () => {
        setShowEditInputField(false)
        setShowAddInputField(!showAddInputField)
    }

    const toggleEditInputField = () => {
        setShowAddInputField(false)
        setShowOption(false)
        setShowEditInputField(!showEditInputField)
    }

    const deleteMenu = () => {
        if (flatData){
            const newFlatData: MenuFlatData[] = removeItemById(flatData, item.id);
            console.log(newFlatData)
            setDataToLocalStorage(newFlatData)
            getDataFromLocalStorage()
        }
    }

    return (
        <li>
            <div style={{ cursor: 'pointer' }}>
                {showEditInputField ? (
                    <EditMenu item={item} setShowAddInputField={setShowEditInputField} />
                )
                    :
                    <span onClick={handleShowOption}>{item.label}</span>
                }

                {item.children && <span onClick={handleExpandOrCollapse}>{open ? ' ▼' : ' ▶'}</span>}
                {showOption && <>
                    <button onClick={toggleAddInputField} className="ml-2 bg-green-500 text-white rounded hover:bg-green-600">
                        <PlusIcon className="w-4 h-4" />
                    </button>
                    <button onClick={toggleEditInputField} className="ml-2 bg-green-500 text-white rounded hover:bg-green-600">
                        <PencilIcon className="w-4 h-4" />
                    </button>
                    <button onClick={deleteMenu} className="ml-2 bg-green-500 text-white rounded hover:bg-green-600">
                        <TrashIcon className="w-4 h-4" />
                    </button>
                </>}
            </div>
            {showAddInputField && (
                <AddMenu item={item} setShowAddInputField={setShowAddInputField} />
            )}

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