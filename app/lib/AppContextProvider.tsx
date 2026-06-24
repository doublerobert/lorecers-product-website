import type React from "react";
import SearchProvider from "./context/SearchContext";

interface AppContextProviderProps {
  children: React.ReactNode;
}

export default function AppContextProvider({
  children,
}: AppContextProviderProps) {
  return <SearchProvider>{children}</SearchProvider>;
}
