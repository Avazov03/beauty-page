"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import { getWfPageId } from "@/data/wfPageId";
import { refreshWebflowIx2 } from "@/components/WebflowRuntime";

const HERO_TOP_PX = 80;

/** Marks home vs inner pages and syncs Webflow `data-wf-page` for IX2. */
export function RouteChrome() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const home = pathname === "/";
    const root = document.documentElement;
    root.classList.toggle("is-home", home);
    root.classList.toggle("is-inner", !home);

    const pageId = getWfPageId(pathname);
    const prev = root.getAttribute("data-wf-page");
    root.setAttribute("data-wf-page", pageId);

    /*
     * Always re-bind IX2 on client navigations — shared CMS templates
     * (/blog/*, /rooms/*) keep the same pageId but swap DOM; other pages
     * can also leave opacity:0 if IX2 stays bound to detached nodes.
     */
    if (prev) {
      refreshWebflowIx2();
    } else {
      window.dispatchEvent(new Event("resize"));
      window.dispatchEvent(new Event("scroll"));
    }
  }, [pathname]);

  /*
   * Shared chrome is Navbar v1; room/CMS pages' PAGE_SCROLL IX2 drives Navbar v2
   * (.rt-brand-*). Mirror white→dark chrome over full-bleed heroes via scroll class.
   */
  useEffect(() => {
    const root = document.documentElement;
    const SCROLL_EXPAND_PX = 24;

    const syncChrome = () => {
      root.classList.toggle(
        "is-nav-scrolled",
        window.scrollY > SCROLL_EXPAND_PX,
      );

      const chrome = document.querySelector(".rt-top-main-box");
      const chromeBottom =
        chrome?.getBoundingClientRect().bottom ?? HERO_TOP_PX;

      // Home: pill chrome over portrait hero, solid after it scrolls past.
      if (root.classList.contains("is-home")) {
        const hero = document.querySelector(
          ".home-hero-portrait, .rt-hero-v1",
        );
        if (!hero) {
          root.classList.remove("is-hero-top", "is-nav-solid");
          return;
        }
        const about = document.querySelector(".rt-about-v1");
        const overHero = about
          ? about.getBoundingClientRect().top > chromeBottom + 8
          : hero.getBoundingClientRect().bottom > chromeBottom + 4;
        root.classList.toggle("is-hero-top", overHero);
        root.classList.toggle("is-nav-solid", !overHero);
        return;
      }

      // Full-bleed photo heroes only — blog post (.rt-blog-post-hero) is a
      // white content block, so chrome stays solid with shadow like /contact
      // after scroll / other non-hero inners.
      const hero = document.querySelector(
        ".rt-room-details-hero, .rt-inner-hero",
      );
      if (!hero) {
        root.classList.remove("is-hero-top");
        root.classList.add("is-nav-solid");
        return;
      }
      const heroBottom = hero.getBoundingClientRect().bottom;
      const overHero = heroBottom > chromeBottom + 4;
      root.classList.toggle("is-hero-top", overHero);
      root.classList.toggle("is-nav-solid", !overHero);
    };

    syncChrome();
    window.addEventListener("scroll", syncChrome, { passive: true });
    window.addEventListener("resize", syncChrome);
    return () => {
      window.removeEventListener("scroll", syncChrome);
      window.removeEventListener("resize", syncChrome);
      root.classList.remove("is-hero-top", "is-nav-solid", "is-nav-scrolled");
    };
  }, [pathname]);

  return null;
}
