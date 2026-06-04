import "./MobileMenu.css";
import closeIcon from "../assets/images/icon-menu-close.svg";

type MobileMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  navLinks: { name: string; href: string }[];
};

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  navLinks,
}: MobileMenuProps) => {
  return (
    <div
      className={`mobile-menu ${isMenuOpen ? "mobile-menu--open" : ""}`}
      inert={!isMenuOpen}
    >
      {/* dark overlay */}
      <div
        className="mobile-menu__overlay"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* menu panel */}
      <div className="mobile-menu__panel">
        <button
          className="mobile-menu__close"
          aria-label="close menu"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={closeIcon} alt="" aria-hidden="true" />
        </button>

        <ul className="mobile-menu__links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
