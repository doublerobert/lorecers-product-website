import { useLocation } from "react-router";
import type { Route } from "./+types/shop";
import { useEffect } from "react";
import { useSearch } from "~/lib/context/SearchContext";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Shop | Lorecers Clothing Store",
    },
  ];
}

export default function Shop() {
  const location = useLocation();
  const { searchInputRef, focusSearchInput } = useSearch();

  useEffect(() => {
    if (location.state?.focusSearch) focusSearchInput();
  }, [location.state, focusSearchInput]);

  return (
    <main className="">
      Shop
      <div>
        <input
          type="text"
          ref={searchInputRef}
          placeholder="Search"
          className="border mt-auto mb-auto"
        />
      </div>
    </main>
  );
}
