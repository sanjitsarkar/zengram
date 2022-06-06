import React, { createContext, useContext, useState } from "react";

const DropDownContext = createContext();
const DropDownProvider = ({ children }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <DropDownContext.Provider value={{ showDropDown, setShowDropDown }}>
      {children}
    </DropDownContext.Provider>
  );
};

const useDropDown = () => useContext(DropDownContext);
export { useDropDown, DropDownProvider };
