import React, { createContext, useCallback, useContext, useRef } from "react";
import { useLocation, useNavigate } from "react-router";

interface SearchContextType {
  searchInputRef: React.RefObject<HTMLInputElement | null>;
  focusSearchInput: () => void;
  goToSearch: () => void;
}

interface SearchProviderProps {
  children: React.ReactNode;
}

const SearchContext = createContext<SearchContextType | null>(null);

export default function SearchProvider({ children }: SearchProviderProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const focusSearchInput = useCallback(() => {
    searchInputRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 400);
  }, []);

  const goToSearch = useCallback(() => {
    if (location.pathname === "/shop") {
      focusSearchInput();
    } else {
      navigate("/shop", { state: { focusSearch: true } });
    }
  }, [location.pathname, navigate, focusSearchInput]);

  return (
    <SearchContext.Provider
      value={{ searchInputRef, focusSearchInput, goToSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw Error("useSearch must be use inside SearchProvider");
  }
  return context;
}
