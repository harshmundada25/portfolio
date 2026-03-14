import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaGitAlt, FaAws, FaDocker } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiCplusplus, SiMysql, SiPostgresql, SiExpress } from "react-icons/si";

function Home() {
  return (
    <section id="home" className="reveal">
      <div className="home-line"></div>
      
      <div className="home-container">
        <div className="home-content">
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
        </div>

        <div className="home-visual">
          <div className="floating-icons">
            <div className="tech-icon icon-1"><FaReact /></div>
            <div className="tech-icon icon-2"><SiJavascript /></div>
            <div className="tech-icon icon-3"><FaNodeJs /></div>
            <div className="tech-icon icon-4"><FaPython /></div>
            <div className="tech-icon icon-5"><FaJava /></div>
            <div className="tech-icon icon-6"><SiMongodb /></div>
            <div className="tech-icon icon-7"><SiMysql /></div>
            <div className="tech-icon icon-8"><FaDatabase /></div>
            <div className="tech-icon icon-9"><FaGitAlt /></div>
            <div className="tech-icon icon-10"><SiCplusplus /></div>
            <div className="tech-icon icon-11"><SiPostgresql /></div>
            <div className="tech-icon icon-12"><SiExpress /></div>
            <div className="tech-icon icon-13"><FaAws /></div>
          </div>
          <div className="hero-glow-orb"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
