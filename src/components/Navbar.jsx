import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    // Call once on mount
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      {/* LEFT */}
      <h2 className="logo">Harsh Mundada</h2>

      {/* RIGHT */}
      <div className="nav-right">
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <a 
              href="#home" 
              onClick={() => setOpen(false)}
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={() => setOpen(false)}
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#education" 
              onClick={() => setOpen(false)}
              className={activeSection === "education" ? "active" : ""}
            >
              Education
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={() => setOpen(false)}
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#achievements" 
              onClick={() => setOpen(false)}
              className={activeSection === "achievements" ? "active" : ""}
            >
              Achievements
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              onClick={() => setOpen(false)}
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={() => setOpen(false)}
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          className="theme-btn"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
