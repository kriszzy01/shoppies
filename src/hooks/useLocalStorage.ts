import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, initialValue: string) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== undefined) {
      const savedValue = window.localStorage.getItem(key);

      if (savedValue) {
        return savedValue;
      }
    }

    return initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, initialValue);
  }, [value]);

  return [value, setValue] as const;
};
