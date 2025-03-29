import React from "react";
import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value));
  })
  return [value, setValue];
};

export default useLocalStorage;
