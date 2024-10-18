"use client"; // This is a client component 👈🏽
import { GlobalProvider } from '../context/GlobalContext';
import App from "@/components/App";

export default function Home() {
  return (
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
}

// import { ChangeEvent, useState } from "react";
// const [name, setName] = useState("")
// const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//   setName(e.target.value)
// }
{/* <div>Bakar {name}</div> */ }
{/* <input type="text" placeholder="Name" value={name} onChange={handleChange} /> */ }