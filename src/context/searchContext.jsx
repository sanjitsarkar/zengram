import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();
const SearchProvider = ({ children, val }) => {
  const [search, setSearch] = useState(val ?? "");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = (val) => useContext(SearchContext, val);
export { useSearch, SearchProvider };
