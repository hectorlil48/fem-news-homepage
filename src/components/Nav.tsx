import logo from "../assets/images/logo.svg";
import hamMenuIcon from "../assets/images/icon-menu.svg";
import "./Nav.css";

type NavProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  navLinks: { name: string; href: string }[];
};

const Nav = ({ isMenuOpen, setIsMenuOpen, navLinks }: NavProps) => {
  return (
    <nav className="nav container">
      <a href="#" className="nav__logo">
        <img src={logo} alt="W." />
      </a>

      <ul className="nav__links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>

      <button
        className="nav__hamburger"
        aria-label="open menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(true)}
      >
        <img src={hamMenuIcon} alt="" aria-hidden="true" />
      </button>
    </nav>
  );
};

export default Nav;
