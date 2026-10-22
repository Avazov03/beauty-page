import Image from "next/image";
import Link from "next/link";
import { brandName, specialist } from "@/data/site";
import { HeroIridescenceBg } from "./HeroIridescenceBg";
import styles from "./HomeHeroPortrait.module.css";

export function HomeHeroPortrait() {
  const [first, ...rest] = brandName.split(" ");
  const last = rest.join(" ");

  return (
    <section className={`home-hero-portrait ${styles.hero}`} aria-label="Bosh sahifa">
      <div className={styles.bg} aria-hidden>
        <HeroIridescenceBg />
      </div>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{specialist.title}</p>
        <h1 className={styles.headline}>{specialist.headline}</h1>
        <p className={styles.lede}>
          Har bir seansda ishonch, tushunarli tushuntirish va teringizga mos
          yondashuv.
        </p>
        <div className={styles.ctaRow}>
          <Link href="/contact" className={styles.ctaPrimary}>
            Qabulga yozilish
          </Link>
          <Link href="/rooms" className={styles.ctaGhost}>
            Muolajalarni ko‘rish
          </Link>
        </div>
      </div>

      <div className={styles.stage} aria-hidden={false}>
        <div className={styles.nameBehind} aria-hidden>
          <span>{first}</span>
          {last ? <span>{last}</span> : null}
        </div>
        <div className={styles.figure}>
          <Image
            src="/brand/malika-hero.png"
            alt={brandName}
            width={545}
            height={1000}
            priority
            className={styles.photo}
            sizes="(max-width: 768px) 85vw, min(42vw, 420px)"
          />
        </div>
      </div>
    </section>
  );
}
