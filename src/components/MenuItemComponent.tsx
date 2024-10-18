import { ChangeEvent, useState } from "react";
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'; // Using solid icons
import { MenuItem } from "@/type";
import { useGlobalContext } from "@/context/GlobalContext";
import { v4 as uuid } from 'uuid';

const MenuItemComponent: React.FC<{ item: MenuItem }> = ({ item }) => {
    const [open, setOpen] = useState(false); // State to toggle the submenu
    const [showOption, setShowOption] = useState(false);
    const [showAddInputField, setShowAddInputField] = useState(false);
    const [label, setLabel] = useState("");


    const { flatData, setFlatData, getDataFromLocalStorage, setDataToLocalStorage } = useGlobalContext();

    const handleExpandOrCollapse = () => {
        setOpen(!open);
    };
    const handleShowOption = () => {
        setShowOption(!showOption)
    }

    const toggleAddInputField = () => {
        setShowAddInputField(!showAddInputField)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLabel(e.target.value)
    }

    const addMenu = () => {
        const menu = {
            id: uuid(),
            label: label,
            parentId: item.id
        }

        if (flatData) {
            setFlatData([...flatData, menu])
        } else {
            setFlatData([menu])
        }
        
        setDataToLocalStorage(flatData)
        getDataFromLocalStorage()
        setShowAddInputField(false)
        setLabel("")
    }


    return (
        <li>
            <div style={{ cursor: 'pointer' }}>
                <span onClick={handleShowOption}>{item.label}</span>
                {item.children && <span onClick={handleExpandOrCollapse}>{open ? ' ▼' : ' ▶'}</span>}
                {showOption && <>
                    <button onClick={toggleAddInputField} className="ml-2 bg-green-500 text-white rounded hover:bg-green-600">
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
            {showAddInputField && (
                <>
                    <input className="w-25 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        style={{
                            marginLeft: '20px', paddingLeft: '5px'
                        }}
                        value={label}
                        onChange={handleChange}
                    />
                    <button onClick={addMenu} className="ml-2 px-1 bg-green-500 text-white rounded hover:bg-green-600">Add</button>
                </>
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