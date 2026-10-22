import styles from "./Topbar.module.css";

const OFFERS = [
  "Yangi mijozlar uchun: birinchi konsultatsiya chegirmada",
  "Sayt maxsus taklifi: chuqur tozalash kursiga bonus seans",
  "3+ seans paketida uy parvarishi tavsiyasi bepul",
];

export function Topbar() {
  const loop = [...OFFERS, ...OFFERS, ...OFFERS];

  return (
    <div className={styles.topbar} aria-label="Aksiyalar">
      <div className={styles.track}>
        {loop.map((text, i) => (
          <span className={styles.item} key={`${text}-${i}`}>
            {text}
            <span className={styles.dot} aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}