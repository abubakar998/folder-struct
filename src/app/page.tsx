"use client"; // This is a client component 👈🏽
import NestedMenu from "@/components/NestedMenu";
import { menuData } from "@/constants";
import { MenuFlatData, MenuItem } from "@/type";
import buildNestedMenu from "@/utils/buildNestedMenu";
import { getFromLocalStorage } from "@/utils/localStorage";
import { useEffect, useState } from "react";

export default function Home() {
  const [nestedMenuData, setNestedMenuData] = useState<MenuItem[] | null>(null);

  useEffect(() => {
    const menuFlatData = getFromLocalStorage<MenuFlatData[]>('menuFlatData');
    if (menuFlatData) {
      const nestedMenu = buildNestedMenu(menuFlatData);
      setNestedMenuData(nestedMenu)
    }
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1>Dynamic Nested Menu</h1>
        <NestedMenu data={nestedMenuData ? nestedMenuData : menuData} />
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