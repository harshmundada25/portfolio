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
          <h3>Real-Time Website User Activity Tracker</h3>

          <p>
            A real-time website analytics platform that processes user activity
            streams using Apache Kafka, Spark Structured Streaming, Cassandra,
            and Streamlit.
          </p>

          <ul>
            <li>Real-time website activity tracking with Kafka event streaming</li>
            <li>Live analytics using Spark Structured Streaming</li>
            <li>Cassandra-powered storage for scalable analytics</li>
            <li>Interactive Streamlit dashboard for real-time insights</li>
          </ul>

          <div className="tech-stack">
            <span>Python</span>
            <span>Apache Kafka</span>
            <span>Apache Spark</span>
            <span>Cassandra</span>
            <span>Streamlit</span>
            <span>Docker</span>
          </div>

          <a
            href="https://github.com/harshmundada25/activity-tracker"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <h3>Shopverse</h3>

          <p>
            A production-ready full-stack e-commerce platform featuring
            authentication, product management, shopping cart, checkout, seller
            dashboard, and role-based access.
          </p>

          <ul>
            <li>Secure JWT-based authentication with role-based access</li>
            <li>Product catalog, shopping cart, and checkout workflow</li>
            <li>Seller dashboard with order and inventory management</li>
            <li>RESTful Spring Boot backend with responsive React frontend</li>
          </ul>

          <div className="tech-stack">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>Vite</span>
            <span>MySQL</span>
            <span>Tailwind CSS</span>
          </div>

          <a
            href="https://github.com/harshmundada25/shopverse"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* Project 5 */}
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

        {/* Project 6 */}
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

        {/* Project 7 */}
        <div className="project-card">
          <h3>AI-Assisted Hiring System</h3>

          <p>
            Built a resume screening and hiring workflow platform that extracts
            text from documents, normalizes skills, ranks candidates, and helps
            generate interview questions with a human-in-the-loop Streamlit UI.
          </p>

          <ul>
            <li>PDF and document parsing for resume ingestion</li>
            <li>Skill extraction, normalization, and candidate scoring</li>
            <li>Interview question generation tailored to candidate profiles</li>
            <li>Streamlit interface for review, workflows, and automation</li>
          </ul>

          <div className="tech-stack">
            <span>Python</span>
            <span>Streamlit</span>
            <span>PDF Parsing</span>
            <span>Sentence Transformers</span>
            <span>OpenAI</span>
            <span>Groq</span>
            <span>Transformers</span>
            <span>scikit-learn</span>
            <span>pandas</span>
            <span>NumPy</span>
          </div>

          <a
            href="https://github.com/kush0926/ai_hiring_system"
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
