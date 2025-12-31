import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      {/* LEFT */}
      <h2 className="logo">Harsh Mundada</h2>

      {/* RIGHT */}
      <div className="nav-right">
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>

        <button
          className="theme-btn"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          🌙
        </button>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
