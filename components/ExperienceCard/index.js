import styles from "./ExperienceCard.module.css";

const typeColors = {
  "Full-time": { bg: "rgba(100, 180, 240, 0.1)", color: "#64b4f0", border: "rgba(100, 180, 240, 0.25)" },
  "Internship": { bg: "rgba(200, 240, 100, 0.1)", color: "#c8f064", border: "rgba(200, 240, 100, 0.25)" },
  "Freelance": { bg: "rgba(240, 180, 100, 0.1)", color: "#f0b464", border: "rgba(240, 180, 100, 0.25)" },
};

export default function ExperienceCard({ experience, index, isLast }) {
  const { role, company, location, period, description, skills, type } = experience;
  const typeStyle = typeColors[type] || typeColors["Freelance"];

  return (
    <div className={styles.wrapper}>
      <div className={styles.timeline}>
        <div className={styles.dot} />
        {!isLast && <div className={styles.line} />}
      </div>

      <article className={styles.card}>
        <div className={styles.header}>
          <div className={styles.meta}>
            <h3 className={styles.role}>{role}</h3>
            <div className={styles.company}>
              <span>{company}</span>
              <span className={styles.separator}>·</span>
              <span className={styles.location}>{location}</span>
            </div>
          </div>

          <div className={styles.right}>
            <span className={styles.type} style={{ background: typeStyle.bg, color: typeStyle.color, borderColor: typeStyle.border }}>
              {type}
            </span>
            <span className={styles.period}>{period}</span>
          </div>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.skills}>
          {skills.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </article>
    </div>
  );
}
