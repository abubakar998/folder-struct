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