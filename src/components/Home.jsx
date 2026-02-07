import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="reveal">
      <div className="home-line"></div>
      
      <h1>
        Hi, I'm <span>Harsh Mundada</span> 👋
      </h1>

      <p className="hero-subtitle">
        Computer Science Engineer • Software Developer • Web Developer
      </p>

      <p className="hero-desc">
        I build reliable and scalable software solutions backed by strong
        computer science fundamentals and clean engineering practices. With a
        problem-solving mindset and attention to detail, I transform ideas into
        efficient, user-focused digital experiences while continuously learning
        and improving.
      </p>

      <div className="hero-buttons">
        <a
          href="/Harsh_Mundada_Resume_2026.pdf"
          download
        >
          <button type="button">Download Resume</button>
        </a>

        <a href="#projects">
          <button type="button" className="secondary-btn">
            View Projects
          </button>
        </a>
      </div>

      <div className="hero-social">
        <a
          href="https://github.com/harshmundada25"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="social-link"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/harsh-mundada-187706291"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="social-link"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:harshmundada97@gmail.com"
          aria-label="Email"
          className="social-link"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}

export default Home;
