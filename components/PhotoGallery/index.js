import { useState } from "react";
import styles from "./PhotoGallery.module.css";

export default function PhotoGallery({ photos }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className={styles.grid}>
        {photos.map((photo, i) => (
          <div
            key={i}
            className={`${styles.item} ${styles[`span${photo.span || 1}`]}`}
            onClick={() => setSelected(photo)}
          >
            <div className={styles.imgWrapper}>
              <img src={photo.src} alt={photo.caption || ""} loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.caption}>{photo.caption}</span>
                {photo.location && (
                  <span className={styles.location}>
                    <PinIcon /> {photo.location}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div className={styles.lightbox} onClick={() => setSelected(null)}>
          <button className={styles.close} onClick={() => setSelected(null)} aria-label="Close">✕</button>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <img src={selected.src} alt={selected.caption || ""} />
            {selected.caption && (
              <div className={styles.lightboxMeta}>
                <span>{selected.caption}</span>
                {selected.location && <span className={styles.location}><PinIcon />{selected.location}</span>}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
