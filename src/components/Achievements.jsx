const achievements = [
  {
    title: "Competitive Exam Performance",
    description:
      "Scored 98.98 percentile in MHT-CET 2023 and 96.58 percentile in JEE Main 2023.",
  },
  {
    title: "JEE Advanced Qualified",
    description:
      "Qualified and cleared JEE Advanced 2023, one of India's most competitive engineering entrance examinations.",
  },
  {
    title: "CodeChef Rating",
    description:
      "Reached a 2-star rating on CodeChef with a peak contest rating of 1411 through consistent competitive programming practice.",
  },
  {
    title: "LeetCode Problem Solving",
    description:
      "Solved more than 200 Data Structures and Algorithms problems on LeetCode across core topics including arrays, graphs, trees, and dynamic programming.",
  },
  {
    title: "Hackathon Participation",
    description:
      "Participated in national-level hackathons and technical competitions, building collaborative and execution skills in time-constrained environments.",
  },
  {
    title: "Academic Consistency",
    description:
      "Maintaining strong academic performance with a current CGPA of 9.48 out of 10 while balancing projects, coding practice, and technical learning.",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="reveal">
      <h2>Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <article className="achievement-card" key={achievement.title}>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Achievements;