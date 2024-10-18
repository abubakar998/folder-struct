import NestedMenu from "@/components/NestedMenu";
import { useGlobalContext } from '../context/GlobalContext';
import { useState } from "react";
import AddMenu from "@/components/AddMenu";

export default function App() {
    const {nestedMenuData} = useGlobalContext();

    const [showAddInputField, setShowAddInputField] = useState(false);
    const toggleAddInputField = () => {
        setShowAddInputField(!showAddInputField)
    }

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div>
                <h1>Dynamic Nested Menu</h1>

                {showAddInputField ?
                    <AddMenu item={null} setShowAddInputField={setShowAddInputField} />
                    :
                    <button onClick={toggleAddInputField} className="px-2 bg-green-500 text-white rounded hover:bg-green-600">
                        Add Menu
                    </button>
                }
                {nestedMenuData &&
                    <NestedMenu data={nestedMenuData} />
                }
            </div>
        </div>
    );
}

// import { ChangeEvent, useState } from "react";
// const [name, setName] = useState("")
// const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//   setName(e.target.value)
// }
{/* <div>Bakar {name}</div> */ }
{/* <input type="text" placeholder="Name" value={name} onChange={handleChange} /> */ }