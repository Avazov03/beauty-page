"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { createRoot, type Root } from "react-dom/client";
import { cutoutForPath } from "@/data/heroCutouts";
import { HeroIridescenceBg } from "@/components/home/HeroIridescenceBg";

/**
 * Swaps full-bleed photo heroes on 8 listing pages for cutout + Pearl BG.
 * Keeps the iridescence host when possible so reload/nav doesn’t flash empty.
 */
export function InnerHeroCutout() {
  const pathname = usePathname();
  const rootRef = useRef<Root | null>(null);
  const hostRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const config = cutoutForPath(pathname);
    const hero = document.querySelector(".rt-inner-hero") as HTMLElement | null;

    const stripHero = (el: Element) => {
      el.classList.remove("is-cutout-hero");
      el.removeAttribute("data-cutout-side");
      el.removeAttribute("data-cutout-scale");
      el.removeAttribute("data-cutout-flip");
    };

    /* Detach roots only when leaving cutout pages or host node is gone */
    const teardownRoot = () => {
      if (rootRef.current) {
        rootRef.current.unmount();
        rootRef.current = null;
      }
      hostRef.current = null;
    };

    document.querySelectorAll(".rt-inner-hero.is-cutout-hero").forEach((el) => {
      if (el !== hero) {
        stripHero(el);
        el.querySelector(".ca-inner-hero-bg")?.remove();
      }
    });

    if (!config || !hero) {
      document.querySelectorAll(".rt-inner-hero.is-cutout-hero").forEach((el) => {
        stripHero(el);
        el.querySelector(".ca-inner-hero-bg")?.remove();
      });
      teardownRoot();
      return;
    }

    hero.classList.add("is-cutout-hero");
    hero.dataset.cutoutSide = config.side;
    hero.dataset.cutoutScale = config.scale ?? "tall";
    hero.dataset.cutoutFlip = config.flip ? "true" : "false";

    const img = hero.querySelector(
      "img.rt-hero-image",
    ) as HTMLImageElement | null;
    if (img) {
      img.src = config.src;
      img.removeAttribute("srcset");
      img.removeAttribute("sizes");
      img.alt = img.alt || "Hero";
      img.style.removeProperty("transform");
      img.style.removeProperty("-webkit-transform");
      img.style.removeProperty("-moz-transform");
      img.style.removeProperty("-ms-transform");
      img.loading = "eager";
      img.style.animation = "none";
      void img.offsetWidth;
      img.style.removeProperty("animation");
    }

    let bg = hero.querySelector(".ca-inner-hero-bg") as HTMLElement | null;
    if (!bg) {
      bg = document.createElement("div");
      bg.className = "ca-inner-hero-bg";
      bg.setAttribute("aria-hidden", "true");
      hero.insertBefore(bg, hero.firstChild);
    }

    if (hostRef.current !== bg) {
      teardownRoot();
      hostRef.current = bg;
      rootRef.current = createRoot(bg);
    }

    rootRef.current?.render(<HeroIridescenceBg />);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (rootRef.current) {
        rootRef.current.unmount();
        rootRef.current = null;
      }
      hostRef.current = null;
      document.querySelectorAll(".rt-inner-hero.is-cutout-hero").forEach((el) => {
        el.classList.remove("is-cutout-hero");
        el.removeAttribute("data-cutout-side");
        el.removeAttribute("data-cutout-scale");
        el.removeAttribute("data-cutout-flip");
        el.querySelector(".ca-inner-hero-bg")?.remove();
      });
    };
  }, []);

  return null;
}
