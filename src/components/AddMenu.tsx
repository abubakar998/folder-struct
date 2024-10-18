import { useGlobalContext } from "@/context/GlobalContext";
import { AddMenuProps, MenuFlatData } from "@/type";
import { ChangeEvent, useState } from "react";
import { v4 as uuid } from 'uuid';



const AddMenu: React.FC<AddMenuProps> = ({ item, setShowAddInputField }) => {
    const [label, setLabel] = useState("");
    const { flatData, getDataFromLocalStorage, setDataToLocalStorage } = useGlobalContext();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLabel(e.target.value)
    }

    const addMenu = () => {
        const menu:MenuFlatData = {
            id: uuid(),
            label: label,
            parentId: item? item.id : null
        }

        const newFlatData:MenuFlatData[] = [...(flatData ? flatData : []), menu]
        setDataToLocalStorage(newFlatData)
        getDataFromLocalStorage()
        setShowAddInputField(false)
        setLabel("")
    }
    return (
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
    );
};
export default AddMenu;