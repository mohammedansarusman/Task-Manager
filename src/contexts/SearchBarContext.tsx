import { createContext, useState, type ReactNode } from "react";

type SearchBarProviderProps = {
  children: ReactNode;
};
type SearchBarContextProps = {
  flag: boolean;
  toggleSearch: () => void;
};

export const SearchBarContext = createContext<SearchBarContextProps | null>(
  null
);

export const SearchBarProvider = ({ children }: SearchBarProviderProps) => {
  const [flag, setFlag] = useState(false);
  const toggleSearch = () => {
    setFlag((prev) => !prev);
  };
  return (
    <SearchBarContext.Provider value={{ flag, toggleSearch }}>
      {children}
    </SearchBarContext.Provider>
  );
};
