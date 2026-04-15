import Head from "next/head";
import PhotoGallery from "../../components/PhotoGallery";
import styles from "../../styles/Photography.module.css";

// Replace with your own photos — src can be local (/images/photo.jpg) or external URLs
const photos = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    caption: "Mountain Summit",
    location: "West Java, Indonesia",
    span: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=600&q=80",
    caption: "Forest Trail",
    location: "Bandung",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
    caption: "Golden Hour",
    location: "Bali, Indonesia",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    caption: "Kyoto Temple",
    location: "Kyoto, Japan",
    span: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&q=80",
    caption: "Misty Lake",
    location: "West Java",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&q=80",
    caption: "Rice Terraces",
    location: "Ubud, Bali",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=600&q=80",
    caption: "Night Sky",
    location: "Bromo, East Java",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
    caption: "Coastal Cliffs",
    location: "Lombok, Indonesia",
    span: 2,
  },
];

const stats = [
  { label: "Photos", value: "200+" },
  { label: "Locations", value: "12" },
  { label: "Countries", value: "4" },
  { label: "Camera", value: "Sony A7III" },
];

export default function Photography() {
  return (
    <>
      <Head>
        <title>Photography — Portfolio</title>
        <meta name="description" content="A collection of my photography work." />
      </Head>

      <main className="page">
        <header className={styles.header}>
          <p className={styles.eyebrow}>// visual diary</p>
          <h1 className="page-title">
            Photo<span className="accent">graphy</span>
          </h1>
          <p className="page-subtitle">
            Landscapes, travel, and moments I want to remember.
          </p>

          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </header>

        <PhotoGallery photos={photos} />
      </main>
    </>
  );
}
