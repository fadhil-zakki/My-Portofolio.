import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const navLinks = [
  { href: "/experience", label: "Experience", desc: "Where I've worked" },
  { href: "/projects", label: "Projects", desc: "Things I've built" },
  { href: "/certificates", label: "Certificates", desc: "What I've learned" },
  { href: "/photography", label: "Photography", desc: "How I see the world" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio — Your Name</title>
        <meta name="description" content="Personal portfolio of Your Name — developer & creator." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for work
          </div>

          <h1 className={styles.name}>
            Your <br />
            <span className={styles.nameAccent}>Name</span>
          </h1>

          <p className={styles.tagline}>
            Full-stack developer building products at the intersection of design and engineering.
            Based in Bandung, Indonesia.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/projects" className={styles.ctaPrimary}>
              View Projects
            </Link>
            <a href="mailto:you@email.com" className={styles.ctaSecondary}>
              Get in Touch
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Nav Cards */}
        <section className={styles.grid}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={styles.card}>
              <span className={styles.cardLabel}>{l.label}</span>
              <span className={styles.cardDesc}>{l.desc}</span>
              <span className={styles.cardArrow}>→</span>
            </Link>
          ))}
        </section>

        {/* About snippet */}
        <section className={styles.about}>
          <h2 className={styles.aboutTitle}>About me</h2>
          <p className={styles.aboutText}>
            I&apos;m a developer who loves crafting seamless user experiences.
            I work mainly with <span className="accent">React</span>, <span className="accent">Next.js</span>,
            and <span className="accent">Node.js</span>. Outside of code, I enjoy photography, hiking, and
            exploring the tech landscape.
          </p>

          <div className={styles.stack}>
            {["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Figma"].map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
