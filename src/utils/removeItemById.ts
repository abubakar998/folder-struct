import { MenuFlatData } from "@/type";

// Function to remove an item by its id, and recursively remove all its children
const removeItemById = (data: MenuFlatData[], id: string): MenuFlatData[] => {
    // Find all children of the current item to be deleted
    const children = data.filter(item => item.parentId === id);
    // Recursively delete children and their descendants
    children.forEach(child => {
        data = removeItemById(data, child.id); // Call the function recursively
    });
    return data.filter(item => item.id !== id);
}

export default removeItemById