import { UUID } from "crypto";

export type MenuItem = {
    id: UUID,
    label: string;
    children?: MenuItem[];
}

export type MenuFlatData = {
    id: UUID,
    label: string,
    parentId: UUID | null
}