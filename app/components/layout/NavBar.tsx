import { Link, useLocation } from "react-router";
import { Search, Handbag, ArrowLeft } from "lucide-react";
import { useSearch } from "~/lib/context/SearchContext";
import styles from "~/styles/NavBar.module.css";
import { useEffect, useState } from "react";

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/shop", name: "Shop" },
  { path: "/feed", name: "Feed" },
];

export default function NavBar() {
  const { goToSearch } = useSearch();
  const location = useLocation();
  const [showNavLinks, setShowNavLinks] = useState(false);

  function toggleNavLinks() {
    setShowNavLinks((prev) => !prev);
    // console.log("setShowNavLinks", showNavLinks)
  }
  useEffect(() => {
    setShowNavLinks(false);
  }, [location.pathname]);

  return (
    <header
      className={`${styles.layout} flex justify-between items-center gap-5 bg-white font-display shrink-0`}
    >
      <Link to={"/"}>
        <div className="md:hidden min-w-20 h-11.25 flex items-center">
          <ArrowLeft className="text-accent-dark" />
        </div>
        <img
          src="./assets/icons/logo.svg"
          alt="Lorecers logo image"
          className="hidden md:block min-w-35.5"
        />
      </Link>
      <nav aria-label="Main" className="relative">
        <button
          className="md:hidden text-accent-dark text-2xl font-bold py-1 cursor-pointer px-3 hover:border-b-2 hover:border-b-accent-hover"
          onClick={toggleNavLinks}
        >
          {navLinks.find(({ path }) => location.pathname === path)?.name ||
            "Cart"}
        </button>
        <div
          className={`${showNavLinks ? "fixed inset-0" : "hidden"} `}
          onClick={toggleNavLinks}
        ></div>
        <ul
          className={`${showNavLinks ? "absolute w-full" : "hidden"} md:flex justify-center gap-7 md:relative bg-white`}
        >
          {navLinks.map(({ path, name }) => (
            <li
              key={path}
              className={`${location.pathname === path ? "border-b-2 border-b-accent font-bold  hover:border-b-accent-dark" : "hover:border-b-2 hover:border-b-accent-hover"} flex justify-center items-center text-lg py-2 px-1 transition-colors text-accent-dark `}
            >
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-10 text-primary">
        <button
          type="button"
          aria-label="Search"
          onClick={goToSearch}
          className="cursor-pointer"
        >
          <Search className="transition-colors hover:text-primary-strong h-5 md:h-6" />
        </button>
        <Link
          to="/cart"
          aria-label="Cart"
          className="transition-colors hover:text-primary-strong"
        >
          <Handbag className="h-5 md:h-6" />
        </Link>
      </div>
    </header>
  );
}
