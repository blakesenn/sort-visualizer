import { useEffect, useState } from "react";

export function useLocalStorage(key: string, initialValue: boolean) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, storedValue);
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
}
