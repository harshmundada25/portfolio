import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="footer reveal">
      <div className="footer-content">
        <button 
          onClick={scrollToTop} 
          className="scroll-to-top"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>

        <div className="footer-divider"></div>

        <p className="footer-text">
          © {currentYear} <span>Harsh Mundada</span>
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/harshmundada25"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/harsh-mundada-187706291"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:harshmundada97@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.instagram.com/harsh_mundada25"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
