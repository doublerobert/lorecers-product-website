import { Link } from "react-router";
import { Search, Handbag } from "lucide-react";
import { useSearch } from "~/lib/context/SearchContext";

export default function NavBar() {
  const { goToSearch } = useSearch();

  return (
    <header className="flex justify-between items-center">
      <Link to={"/"}>
        <img
          src="./assets/icons/logo.svg"
          alt="Lorecers logo image"
          className="w-9"
        />
      </Link>
      <nav aria-label="Main">
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/feed">Feed</Link>
          </li>
        </ul>
      </nav>
      <div className="flex">
        <button type="button" aria-label="Search" onClick={goToSearch}>
          <Search />
        </button>
        <Link to="/cart" aria-label="Cart">
          <Handbag />
        </Link>
      </div>
    </header>
  );
}
