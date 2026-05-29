function Projects() {
  return (
    <section id="projects" className="reveal">
      <h2>Projects</h2>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <h3>Community Engagement Project</h3>

          <p>
            Developed an interactive web platform to raise awareness about
            leprosy and support fundraising for the Anandwan community. The
            platform educates users about rehabilitation programs, encourages
            donations, and promotes inclusivity.
          </p>

          <ul>
            <li>Responsive and user-friendly interface</li>
            <li>Awareness & fundraising focused design</li>
            <li>Backend integration for dynamic content</li>
          </ul>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Express.js</span>
          </div>

          <a
            href="https://github.com/harshmundada25/leprosy_awareness"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>Smart Expense Tracker</h3>

          <p>
            Built a data-driven web application to help users manage and analyze
            personal expenses with secure authentication and interactive data
            visualization.
          </p>

          <ul>
            <li>Expense tracking with category-wise analysis</li>
            <li>Interactive charts for monthly trends</li>
            <li>Improved financial awareness and budgeting</li>
          </ul>

          <div className="tech-stack">
            <span>Python</span>
            <span>Streamlit</span>
            <span>SQLite</span>
            <span>Plotly</span>
            <span>Pandas</span>
          </div>

          <a
            href="https://github.com/harshmundada25/smart-expense-tracker"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>Full Stack Developer Portfolio</h3>

          <p>
            Designed and developed a modern full-stack personal portfolio
            website to showcase projects, skills, and professional background.
            Includes a complete contact system with backend integration.
          </p>

          <ul>
            <li>Responsive UI with dark & light mode</li>
            <li>Contact form with MongoDB storage</li>
            <li>Email notifications on submission</li>
            <li>Admin API to view messages</li>
          </ul>

          <div className="tech-stack">
            <span>React.js</span>
            <span>Vite</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>Nodemailer</span>
          </div>

          <a
            href="https://github.com/harshmundada25/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <h3>Agentic Honey-Pot for Scam Detection & Intelligence Extraction </h3>

          <p>
            A trap for scam chats: it spots fake messages, replies like a real
            person to keep the scammer talking, and sends an alert with the
            details.
          </p>

          <ul>
            <li>Checks every new message quickly to spot scams</li>
            <li>Auto AI replies keep the scammer talking safely</li>
            <li>Picks out links, numbers, and accounts for clean reports</li>
            <li>Secure API with key auth and health checks, ready to deploy</li>
          </ul>

          <div className="tech-stack">
            <span>Python</span>
            <span>Flask</span>
            <span>Machine Learning</span>
            <span>Docker</span>
            <span>APIs</span>
            <span>AI auto-replies</span>
            <span>Data extraction</span>
          </div>

          <a
            href="https://github.com/harshmundada25/guvi_honeypot"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* Project 5 */}
        <div className="project-card">
          <h3>Doctor & Patient Management System</h3>

          <p>
            Built a secure healthcare management platform for doctors, patients,
            appointments, prescriptions, and medical records with JWT-based
            authentication and role-based access control.
          </p>

          <ul>
            <li>Admin, doctor, and patient dashboards with separate access</li>
            <li>JWT login flow with protected routes and token persistence</li>
            <li>Patient registration, appointment booking, and prescription tracking</li>
            <li>MySQL-backed data model with REST APIs and Swagger support</li>
          </ul>

          <div className="tech-stack">
            <span>Java 21</span>
            <span>Spring Boot 3</span>
            <span>Spring Security 6</span>
            <span>JWT</span>
            <span>MySQL</span>
            <span>React</span>
            <span>Vite</span>
            <span>Tailwind CSS</span>
            <span>Axios</span>
            <span>Recharts</span>
            <span>Swagger/OpenAPI</span>
          </div>

          <a
            href="https://github.com/harshmundada25/doctor-patient-management-system"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
