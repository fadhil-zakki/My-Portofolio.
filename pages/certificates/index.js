import Head from "next/head";
import styles from "../../styles/Certificates.module.css";

const certificates = [
  {
    id: 1,
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "Nov 2023",
    credentialId: "AWS-DEV-12345",
    link: "#",
    category: "Cloud",
    icon: "☁️",
  },
  {
    id: 2,
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta / Coursera",
    date: "Aug 2023",
    credentialId: "META-FE-67890",
    link: "#",
    category: "Frontend",
    icon: "⚛️",
  },
  {
    id: 3,
    title: "Google UX Design Certificate",
    issuer: "Google / Coursera",
    date: "May 2023",
    credentialId: "GOOG-UX-11223",
    link: "#",
    category: "Design",
    icon: "🎨",
  },
  {
    id: 4,
    title: "Node.js Application Development (LFW211)",
    issuer: "Linux Foundation",
    date: "Jan 2023",
    credentialId: "LF-NODE-44556",
    link: "#",
    category: "Backend",
    icon: "🖥️",
  },
  {
    id: 5,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Sep 2022",
    credentialId: "FCC-JS-78901",
    link: "#",
    category: "Programming",
    icon: "📐",
  },
  {
    id: 6,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Jun 2022",
    credentialId: "FCC-RWD-23456",
    link: "#",
    category: "Frontend",
    icon: "📱",
  },
];

const categoryColors = {
  Cloud: "#64b4f0",
  Frontend: "#c8f064",
  Backend: "#f0b464",
  Design: "#d064f0",
  Programming: "#f06464",
};

export default function Certificates() {
  const categories = [...new Set(certificates.map((c) => c.category))];

  return (
    <>
      <Head>
        <title>Certificates — Portfolio</title>
        <meta name="description" content="My certifications and achievements." />
      </Head>

      <main className="page">
        <header className={styles.header}>
          <p className={styles.eyebrow}>// achievements</p>
          <h1 className="page-title">
            Certificates &amp; <span className="accent">Credentials</span>
          </h1>
          <p className="page-subtitle">
            {certificates.length} certifications earned across {categories.length} domains
          </p>
        </header>

        <div className={styles.grid}>
          {certificates.map((cert) => {
            const color = categoryColors[cert.category] || "#888";
            return (
              <article key={cert.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.icon}>{cert.icon}</span>
                  <span
                    className={styles.category}
                    style={{
                      color,
                      background: `${color}15`,
                      borderColor: `${color}35`,
                    }}
                  >
                    {cert.category}
                  </span>
                </div>

                <h3 className={styles.title}>{cert.title}</h3>

                <div className={styles.meta}>
                  <span className={styles.issuer}>{cert.issuer}</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.date}>{cert.date}</span>
                </div>

                <div className={styles.footer}>
                  <span className={styles.credId}>
                    ID: {cert.credentialId}
                  </span>
                  {cert.link && cert.link !== "#" && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.verifyBtn}
                    >
                      Verify ↗
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </>
  );
}
