import { UUID } from 'crypto';
import { MenuFlatData, MenuItem } from '../type';

const buildNestedMenu = (flatData: MenuFlatData[]): MenuItem[] => {
    const nestedMenu: MenuItem[] = [];
    const menuMap: { [key: UUID]: MenuItem & { children?: MenuItem[] } } = {};

    // Create a map of all items by id
    flatData.forEach(item => {
        menuMap[item.id] = { ...item, children: [] };
    });

    flatData.forEach(item => {
        if (item.parentId === null) {
            // Top-level item
            nestedMenu.push(menuMap[item.id]);
        } else {
            // Nested item, append to its parent's children array
            menuMap[item.parentId].children!.push(menuMap[item.id]);
        }
    });

    return nestedMenu;
};

export default buildNestedMenu