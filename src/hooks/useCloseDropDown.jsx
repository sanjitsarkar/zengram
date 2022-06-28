import { useEffect, useRef, useState } from "react";

export const useDropDown = () => {
  const dropDownRef = useRef(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const closeDropDown = (e) => {
    if (!dropDownRef?.current?.contains(e.target)) {
      setShowDropDown(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", closeDropDown);
  }, [document, dropDownRef]);
  return [dropDownRef, showDropDown, setShowDropDown];
};
