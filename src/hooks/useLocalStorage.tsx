import { useState } from "react";

export function useLocalStorage<T>(item: string) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(item);
    return storedValue ? JSON.parse(storedValue) : "";
  });

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return { value, updateLocalStorage };
}
