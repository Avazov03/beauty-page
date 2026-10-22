"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { brandName, specialist } from "@/data/site";
import { refreshWebflowIx2 } from "@/components/WebflowRuntime";
import { HeroIridescenceBg } from "./HeroIridescenceBg";
import styles from "./HomeHeroPortrait.module.css";

/** Same IX2 interaction id as site-wide rt-button wipe. */
const RT_BUTTON_IX = "64dd1592-bf06-4c9a-05bb-89a5de9c8a50";

function SiteButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="rt-button rt-overflow-hidden rt-change-black w-inline-block"
      data-wf--rt-button-v1--variant="rt-v2"
      data-w-id={RT_BUTTON_IX}
    >
      <div className="rt-position-relative rt-overflow-hidden">
        <div className="rt-button-text rt-text-one rt-text-color-change rt-text-color-light">
          {label}
        </div>
        <div className="rt-button-text rt-text-two">{label}</div>
      </div>
      <div className="rt-button-overlay rt-chage-overlay w-variant-78d29c32-c2dc-4f10-48ba-5a8a3ff8f6c4 rt-brown-overlay" />
    </Link>
  );
}

export function HomeHeroPortrait() {
  const [first, ...rest] = brandName.split(" ");
  const last = rest.join(" ");

  /* Re-bind IX2 so hero rt-buttons get the site wipe after React mount */
  useEffect(() => {
    const t = window.setTimeout(() => refreshWebflowIx2(), 120);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section
      className={`home-hero-portrait ${styles.hero}`}
      aria-label="Bosh sahifa"
    >
      <div className={styles.bg} aria-hidden>
        <HeroIridescenceBg />
      </div>

      <div className={styles.stage}>
        <div className={styles.nameBehind} aria-hidden>
          <span className={styles.nameFirst}>{first}</span>
          {last ? <span className={styles.nameLast}>{last}</span> : null}
        </div>
        <div className={styles.figure}>
          <Image
            src="/brand/malika-hero.png"
            alt={brandName}
            width={545}
            height={1000}
            priority
            className={styles.photo}
            sizes="(max-width: 899px) 78vw, min(36vw, 460px)"
          />
        </div>
      </div>

      <div className={styles.inner}>
        <p className={styles.eyebrow}>{specialist.title}</p>
        <h1 className={styles.headline}>{specialist.headline}</h1>
        <p className={styles.lede}>
          Har bir seansda ishonch, tushunarli tushuntirish va teringizga mos
          yondashuv.
        </p>
        <div className={styles.ctaRow}>
          <SiteButton href="/contact" label="Qabulga yozilish" />
          <SiteButton href="/rooms" label="Muolajalarni ko‘rish" />
        </div>
      </div>
    </section>
  );
}
