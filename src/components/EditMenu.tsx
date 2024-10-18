import { useGlobalContext } from "@/context/GlobalContext";
import { AddMenuProps, MenuFlatData } from "@/type";
import { ChangeEvent, useState } from "react";



const EditMenu: React.FC<AddMenuProps> = ({ item, setShowAddInputField }) => {
    const [label, setLabel] = useState("");
    const { flatData, getDataFromLocalStorage, setDataToLocalStorage } = useGlobalContext();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLabel(e.target.value)
    }

    const handleCancel = () => {
        setShowAddInputField(false)
    }

    const EditMenu = () => {
        const menuToUpdate: MenuFlatData | null | undefined = flatData ? flatData.find((data: MenuFlatData) => data.id === item!.id) : null;

        if (menuToUpdate) {
            menuToUpdate.label = label;
            setDataToLocalStorage(flatData)
            getDataFromLocalStorage()
        }
        setShowAddInputField(false)
        setLabel("")
    }
    return (
        <>
            <input className="my-1 w-25 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                type="text"
                style={{
                    marginLeft: '20px', paddingLeft: '5px'
                }}
                defaultValue={item?.label}
                onChange={handleChange}
            />
            <button onClick={EditMenu} className="ml-2 px-1 bg-green-500 text-white rounded hover:bg-green-600">Update</button>
            <button onClick={handleCancel} className="ml-2 px-1 bg-green-500 text-white rounded hover:bg-green-600">Cancel</button>
        </>
    );
};
export default EditMenu;