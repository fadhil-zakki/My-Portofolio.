import Head from "next/head";
import Link from "next/link";
import styles from "../styles/404.module.css";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 — Not Found</title>
      </Head>
      <main className={styles.main}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.desc}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className={styles.back}>
          ← Back to home
        </Link>
      </main>
    </>
  );
}
