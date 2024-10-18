import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { MenuFlatData, MenuItem } from "@/type";
import buildNestedMenu from "@/utils/buildNestedMenu";
import { getFromLocalStorage, saveToLocalStorage } from "@/utils/localStorage";
// Define the shape of the global state
interface GlobalState {
  nestedMenuData: MenuItem[] | null;
  flatData: MenuFlatData[] | null;
  getDataFromLocalStorage: () => void;
  setDataToLocalStorage: (data: MenuFlatData[] | null) => void;
}

// Create a default state
const defaultState: GlobalState = {
  nestedMenuData: null,
  flatData: null,
  getDataFromLocalStorage: () => { },
  setDataToLocalStorage: () => { }
};

// Create the context
const GlobalContext = createContext<GlobalState>(defaultState);

// Custom hook to use the GlobalContext
export const useGlobalContext = () => useContext(GlobalContext);

// Context provider component
interface Props {
  children: ReactNode;
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [nestedMenuData, setNestedMenuData] = useState<MenuItem[] | null>(null);
  const [flatData, setFlatData] = useState<MenuFlatData[] | null>(null);

  const getDataFromLocalStorage = () => {
    const menuFlatData = getFromLocalStorage<MenuFlatData[]>('menuFlatData');
    if (menuFlatData) {
      setFlatData(menuFlatData)
      const nestedMenu = buildNestedMenu(menuFlatData);
      setNestedMenuData(nestedMenu)
    }
  }

  const setDataToLocalStorage = (data: MenuFlatData[] | null) => {
    if (data) {
      saveToLocalStorage<MenuFlatData[]>('menuFlatData', data)
    }
  }

  useEffect(() => {
    getDataFromLocalStorage()
  }, []);

  return (
    <GlobalContext.Provider value={{ flatData, nestedMenuData, getDataFromLocalStorage, setDataToLocalStorage }}>
      {children}
    </GlobalContext.Provider>
  );
};
