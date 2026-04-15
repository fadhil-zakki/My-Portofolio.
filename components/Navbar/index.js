import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
  { href: "/photography", label: "Photography" },
];

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoDot} />
          portfolio
        </Link>

        {/* Desktop links */}
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`${styles.link} ${router.pathname === l.href ? styles.active : ""}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`${styles.mobileLink} ${router.pathname === l.href ? styles.active : ""}`}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
