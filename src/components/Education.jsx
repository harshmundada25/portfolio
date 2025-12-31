function Education() {
  return (
    <section id="education" className="reveal">
      <h2>Education</h2>

      <div className="education-card">
        <h3>Bachelor of Technology (B.Tech) – Computer Science Engineering</h3>

        <p className="education-institute">
          <strong>Institution:</strong> Shri Ramdeobaba College of Engineering and Management (RCOEM), Nagpur, Maharashtra
        </p>

        <p className="education-duration">
          <strong>Duration:</strong> 2023 – 2027
        </p>

        <p className="education-score">
          <strong>CGPA:</strong> 9.48 / 10
        </p>

        <p className="education-desc">
          Studied core computer science subjects including Data Structures,
          Algorithms, Object-Oriented Programming, Database Management Systems,
          Operating Systems, and Web Technologies. Actively participated in
          projects, coding activities, and technical learning initiatives.
        </p>
      </div>

       {/* 12th */}
      <div className="education-card">
        <h3>Higher Secondary Certificate (Class XII)</h3>

        <p className="education-institute">
          <strong>Institution:</strong> Heritage International Junior College - Nanded, Maharashtra
        </p>
        <p><strong>Board:</strong> Maharashtra State Board</p>
        <p><strong>Stream:</strong> Science</p>
        <p><strong>Year of Completion:</strong> 2023</p>
        <p className="education-score">
          <strong>Grade:</strong> 82.67%
        </p>

        <p className="education-desc">
          Completed higher secondary education with a focus on Physics,
          Chemistry, and Mathematics, developing a strong analytical and
          problem-solving foundation essential for engineering studies.
        </p>
      </div>

      {/* 10th */}
      <div className="education-card">
        <h3>Secondary School Certificate (Class X)</h3>
        <p className="education-institute">
          <strong>Institution:</strong> Oxford The Global School - Nanded, Maharashtra
        </p>
        <p><strong>Board:</strong> Central Board of Secondary Education</p>
        <p><strong>Year of Completion:</strong> 2021</p>
         <p className="education-score">
          <strong>Grade:</strong> 90%
        </p>

        <p className="education-desc">
          Completed secondary education with a strong academic record, building
          a solid foundation in mathematics, science, and logical reasoning.
        </p>
      </div>
    </section>
  );
}

export default Education;
