import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <button
        className={`mobile-menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className="list-container">
        <li>
          <a href="#welcome">Welcome</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#companies">Companies</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <nav className={`mobile-nav ${menuOpen ? "active" : ""}`}>
        <a href="#welcome" onClick={closeMenu}>
          Welcome
        </a>
        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="#companies" onClick={closeMenu}>
          Companies
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
