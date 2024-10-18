import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { GlobalState, MenuFlatData, MenuItem } from "@/type";
import buildNestedMenu from "@/utils/buildNestedMenu";
import { getFromLocalStorage, saveToLocalStorage } from "@/utils/localStorage";

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
export const useGlobalContext = (): GlobalState => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
// Context provider component
interface Props {
  children: ReactNode;
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [nestedMenuData, setNestedMenuData] = useState<MenuItem[] | null>(null);
  const [flatData, setFlatData] = useState<MenuFlatData[] | null>(null);
  window.addEventListener('load', () => {
    localStorage.clear(); // Clears all data from localStorage
  });

  const getDataFromLocalStorage = () => {
    const menuFlatData = getFromLocalStorage<MenuFlatData[]>('menuFlatData');
    if (menuFlatData) {
      const nestedMenu = buildNestedMenu(menuFlatData);
      setFlatData(menuFlatData)
      setNestedMenuData(nestedMenu)
    } else {
      console.log('No data in local storage')
    }
  }

  const setDataToLocalStorage = (data: MenuFlatData[] | null) => {
    if (data) {
      setFlatData(data)
      saveToLocalStorage<MenuFlatData[]>('menuFlatData', data)
    }
  }

  useEffect(() => {
    getDataFromLocalStorage()
  }, []);

  const value = { flatData, nestedMenuData, getDataFromLocalStorage, setDataToLocalStorage };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};
