import logo from "../assets/images/logo.svg";
import hamMenuIcon from "../assets/images/icon-menu.svg";
import "./Nav.css";

type NavProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
};

const Nav = ({ isMenuOpen, setIsMenuOpen }: NavProps) => {
  return (
    <nav className="nav">
      <a href="#" className="nav__logo">
        <img src={logo} alt="W." />
      </a>

      <ul className="nav__links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>

      <button
        className="nav__hamburger"
        aria-label="open menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(true)}
      >
        <img src={hamMenuIcon} alt="Hamburger menu icon" aria-hidden="true" />
      </button>
    </nav>
  );
};

export default Nav;
