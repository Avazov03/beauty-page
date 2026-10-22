"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cutoutForPath } from "@/data/heroCutouts";
import { HeroIridescenceBg } from "@/components/home/HeroIridescenceBg";

/**
 * Cutout + iridescence for 8 listing heroes.
 * Uses a portal (not createRoot) so WebGL survives BaselineHtml remounts
 * and doesn’t leave a blank/white canvas after refresh.
 */
export function InnerHeroCutout() {
  const pathname = usePathname();
  const config = cutoutForPath(pathname);
  const [host, setHost] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const next = cutoutForPath(pathname);
    const hero = document.querySelector(".rt-inner-hero") as HTMLElement | null;

    document.querySelectorAll(".rt-inner-hero.is-cutout-hero").forEach((el) => {
      if (el === hero) return;
      el.classList.remove("is-cutout-hero");
      el.removeAttribute("data-cutout-side");
      el.removeAttribute("data-cutout-scale");
      el.removeAttribute("data-cutout-flip");
      el.removeAttribute("data-cutout-boot");
      el.removeAttribute("data-iridescence-ready");
      el.querySelector(".ca-inner-hero-bg")?.remove();
    });

    if (!next || !hero) {
      setHost(null);
      document.querySelectorAll(".rt-inner-hero.is-cutout-hero").forEach((el) => {
        el.classList.remove("is-cutout-hero");
        el.removeAttribute("data-cutout-side");
        el.removeAttribute("data-cutout-scale");
        el.removeAttribute("data-cutout-flip");
        el.removeAttribute("data-cutout-boot");
        el.removeAttribute("data-iridescence-ready");
        el.querySelector(".ca-inner-hero-bg")?.remove();
      });
      return;
    }

    hero.classList.add("is-cutout-hero");
    hero.removeAttribute("data-iridescence-ready");
    hero.dataset.cutoutSide = next.side;
    hero.dataset.cutoutScale = next.scale ?? "tall";
    hero.dataset.cutoutFlip = next.flip ? "true" : "false";

    const img = hero.querySelector(
      "img.rt-hero-image",
    ) as HTMLImageElement | null;
    if (img) {
      if (!img.getAttribute("src")?.includes(next.src)) {
        img.src = next.src;
      }
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

    setHost(bg);

    /* WebGL fail/slow — don't leave cutout invisible forever */
    const readyFallback = window.setTimeout(() => {
      if (!hero.hasAttribute("data-iridescence-ready")) {
        hero.setAttribute("data-iridescence-ready", "1");
      }
    }, 900);

    return () => {
      window.clearTimeout(readyFallback);
    };
  }, [pathname]);

  if (!host || !config) return null;

  return createPortal(<HeroIridescenceBg key={pathname} />, host);
}
