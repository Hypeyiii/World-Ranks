import { createContext, useState } from "react";

export const FiltersContext = createContext({
  filters: {
    memberOfUN: false,
    independent: false,
    name: "",
    region: "all",
    order: "Population",
  },
  setFilters: () => {},
});

// eslint-disable-next-line react/prop-types
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    memberOfUN: false,
    independent: false,
    name: "",
    region: "all",
    order: "Population",
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
