import Head from "next/head";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import projectsData from "../../database/projects.json";
import styles from "../../styles/Projects.module.css";

const allTags = ["All", ...Array.from(new Set(projectsData.flatMap((p) => p.tags)))];

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? projectsData
      : projectsData.filter((p) => p.tags.includes(activeTag));

  return (
    <>
      <Head>
        <title>Projects — Portfolio</title>
        <meta name="description" content="A showcase of projects I've built." />
      </Head>

      <main className="page">
        <header className={styles.header}>
          <p className={styles.eyebrow}>// work</p>
          <h1 className="page-title">
            My <span className="accent">Projects</span>
          </h1>
          <p className="page-subtitle">
            {projectsData.length} projects built · always adding more
          </p>
        </header>

        {/* Filter bar */}
        <div className={styles.filters}>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`${styles.filterBtn} ${activeTag === tag ? styles.filterActive : ""}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className={styles.empty}>
            <span>No projects found for &quot;{activeTag}&quot;</span>
          </div>
        )}
      </main>
    </>
  );
}
