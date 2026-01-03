function Home() {
  return (
    <section id="home" className="reveal">
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
        <a href="/harsh_mundada_Resume.pdf" download>
          <button>Download Resume</button>
        </a>

        <a href="#projects">
          <button className="secondary-btn">View Projects</button>
        </a>
      </div>
      
    </section>
  );
}

export default Home;
