import "./MobileMenu.css";
import closeIcon from "../assets/images/icon-menu-close.svg";

type MobileMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
};

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) => {
  return (
    <div className={`mobile-menu ${isMenuOpen ? "mobile-menu--open" : ""}`}>
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
      </div>
    </div>
  );
};

export default MobileMenu;
