import Head from "next/head";
import ExperienceCard from "../../components/ExperienceCard";
import experienceData from "../../database/experience.json";
import styles from "../../styles/Experience.module.css";

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience — Portfolio</title>
        <meta name="description" content="My work experience and career timeline." />
      </Head>

      <main className="page">
        <header className={styles.header}>
          <p className={styles.eyebrow}>// career</p>
          <h1 className="page-title">
            Work <span className="accent">Experience</span>
          </h1>
          <p className="page-subtitle">
            {experienceData.length} positions · {new Date().getFullYear() - 2022}+ years in the industry
          </p>
        </header>

        <div className={styles.timeline}>
          {experienceData.map((exp, i) => (
            <ExperienceCard key={exp.id} experience={exp} index={i} isLast={i === experienceData.length - 1} />
          ))}
        </div>
      </main>
    </>
  );
}
