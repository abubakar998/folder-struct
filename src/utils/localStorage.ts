// Function to save data to local storage
export const saveToLocalStorage = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
};

// Function to get data from local storage
export const getFromLocalStorage = <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
};

// Function to remove an item from local storage
export const removeFromLocalStorage = (key: string): void => {
    localStorage.removeItem(key);
};