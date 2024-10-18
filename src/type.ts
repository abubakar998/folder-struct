export type MenuItem = {
    id: string,
    label: string;
    children?: MenuItem[];
}

export type MenuFlatData = {
    id: string,
    label: string,
    parentId: string | null
}

export type AddMenuProps = {
    item: MenuItem | null,
    setShowAddInputField: (data: boolean) => void;
}

export type GlobalState = {
    nestedMenuData: MenuItem[] | null;
    flatData: MenuFlatData[] | null;
    getDataFromLocalStorage: () => void;
    setDataToLocalStorage: (data: MenuFlatData[] | null) => void;
  }