"use client";

import { useEffect } from "react";

type LbItem = { url: string; caption?: string };

function parseLightboxItems(anchor: HTMLElement): LbItem[] {
  const jsonEl = anchor.querySelector("script.w-json");
  if (jsonEl?.textContent) {
    try {
      const data = JSON.parse(jsonEl.textContent) as {
        items?: { url?: string; fileName?: string }[];
      };
      const items = (data.items || [])
        .map((it) => ({ url: it.url || "", caption: it.fileName }))
        .filter((it) => it.url);
      if (items.length) return items;
    } catch {
      /* fall through */
    }
  }
  const img = anchor.querySelector("img");
  if (img?.currentSrc || img?.src) {
    return [{ url: img.currentSrc || img.src }];
  }
  return [];
}

function collectGroupItems(anchor: HTMLElement): { items: LbItem[]; index: number } {
  const group =
    anchor.closest(".w-slider, .rt-gallery-v4, section") || document.body;
  const anchors = [...group.querySelectorAll("a.w-lightbox")];
  const items: LbItem[] = [];
  let index = 0;
  anchors.forEach((a, i) => {
    const parsed = parseLightboxItems(a as HTMLElement);
    if (a === anchor) index = items.length;
    items.push(...(parsed.length ? parsed : []));
    void i;
  });
  if (!items.length) {
    const fallback = parseLightboxItems(anchor);
    return { items: fallback, index: 0 };
  }
  return { items, index };
}

/**
 * Webflow stand-ins: mega menu, dropdowns, tabs, lightbox, contact submit.
 */
export function BaselineInteractions() {
  useEffect(() => {
    const root = document.documentElement;
    let lbRoot: HTMLDivElement | null = null;
    let lbIndex = 0;
    let lbItems: LbItem[] = [];

    const MENU_INLINE = [
      "position",
      "transform",
      "display",
      "top",
      "left",
      "right",
      "bottom",
      "inset",
      "width",
      "height",
      "max-height",
      "opacity",
      "visibility",
      "z-index",
    ] as const;

    /** Pill header uses backdrop-filter, which traps position:fixed inside the pill. */
    function parkMenu(node: HTMLElement) {
      if (node.parentElement !== document.body) {
        document.body.appendChild(node);
      }
    }

    function menuButtons() {
      return document.querySelectorAll<HTMLElement>(
        ".rt-navbar-v1-menu-wrapper",
      );
    }

    function setMenuExpanded(open: boolean) {
      menuButtons().forEach((btn) => {
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    function closeMenyu() {
      root.classList.remove("rt-menu-open");
      setMenuExpanded(false);
      document.querySelectorAll(".rt-mega-menu-wrapper").forEach((el) => {
        const node = el as HTMLElement;
        el.classList.remove("rt-is-open");
        MENU_INLINE.forEach((prop) => node.style.removeProperty(prop));
      });
    }

    function toggleMenyu() {
      const open = !root.classList.contains("rt-menu-open");
      root.classList.toggle("rt-menu-open", open);
      setMenuExpanded(open);
      document.querySelectorAll(".rt-mega-menu-wrapper").forEach((el) => {
        const node = el as HTMLElement;
        el.classList.toggle("rt-is-open", open);
        if (open) {
          parkMenu(node);
          node.style.setProperty("position", "fixed", "important");
          node.style.setProperty("transform", "none", "important");
          node.style.setProperty("display", "block", "important");
          node.style.setProperty("inset", "0", "important");
          node.style.setProperty("top", "0", "important");
          node.style.setProperty("left", "0", "important");
          node.style.setProperty("right", "0", "important");
          node.style.setProperty("bottom", "0", "important");
          node.style.setProperty("width", "100%", "important");
          node.style.setProperty("height", "100dvh", "important");
          node.style.setProperty("max-height", "100dvh", "important");
          node.style.setProperty("opacity", "1", "important");
          node.style.setProperty("visibility", "visible", "important");
          node.style.setProperty("z-index", "10000", "important");
        } else {
          MENU_INLINE.forEach((prop) => node.style.removeProperty(prop));
        }
      });
    }

    function activateTab(link: HTMLElement) {
      const tabs = link.closest(".w-tabs");
      if (!tabs) return;
      const name = link.getAttribute("data-w-tab");
      if (!name) return;

      tabs.querySelectorAll(".w-tab-link").forEach((el) => {
        el.classList.toggle("w--current", el === link);
      });
      tabs.querySelectorAll(".w-tab-pane").forEach((pane) => {
        const match = pane.getAttribute("data-w-tab") === name;
        pane.classList.toggle("w--tab-active", match);
        (pane as HTMLElement).style.display = match ? "block" : "none";
      });
      tabs.setAttribute("data-current", name);
    }

    function ensureLightboxDom() {
      if (lbRoot) return lbRoot;
      lbRoot = document.createElement("div");
      lbRoot.className = "elbergo-lightbox";
      lbRoot.innerHTML = `
        <div class="elbergo-lightbox__backdrop" data-lb-close></div>
        <button type="button" class="elbergo-lightbox__close" data-lb-close aria-label="Yopish">×</button>
        <button type="button" class="elbergo-lightbox__prev" data-lb-prev aria-label="Oldingi">‹</button>
        <button type="button" class="elbergo-lightbox__next" data-lb-next aria-label="Keyingi">›</button>
        <img class="elbergo-lightbox__img" alt="" />
      `;
      document.body.appendChild(lbRoot);
      return lbRoot;
    }

    function renderLightbox() {
      const box = ensureLightboxDom();
      const img = box.querySelector(".elbergo-lightbox__img") as HTMLImageElement;
      const item = lbItems[lbIndex];
      if (!item) return;
      img.src = item.url;
      img.alt = item.caption || "Gallery image";
      box.dataset.open = "1";
      document.documentElement.style.overflow = "hidden";
    }

    function closeLightbox() {
      if (!lbRoot) return;
      delete lbRoot.dataset.open;
      document.documentElement.style.overflow = "";
    }

    function openLightbox(anchor: HTMLElement) {
      const { items, index } = collectGroupItems(anchor);
      if (!items.length) return;
      lbItems = items;
      lbIndex = index;
      renderLightbox();
    }

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest("[data-lb-close]")) {
        e.preventDefault();
        closeLightbox();
        return;
      }
      if (target.closest("[data-lb-prev]")) {
        e.preventDefault();
        if (!lbItems.length) return;
        lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length;
        renderLightbox();
        return;
      }
      if (target.closest("[data-lb-next]")) {
        e.preventDefault();
        if (!lbItems.length) return;
        lbIndex = (lbIndex + 1) % lbItems.length;
        renderLightbox();
        return;
      }

      const menuBtn = target.closest(
        ".rt-navbar-v1-menu-wrapper, .rt-navbar-v1-menu-bar-wrap",
      );
      if (menuBtn) {
        e.preventDefault();
        toggleMenyu();
        return;
      }

      const tabLink = target.closest(".w-tab-link") as HTMLElement | null;
      if (tabLink && tabLink.closest(".w-tabs")) {
        e.preventDefault();
        activateTab(tabLink);
        return;
      }

      const lb = target.closest("a.w-lightbox") as HTMLElement | null;
      if (lb) {
        // Prefer native Webflow lightbox when IX2 runtime + w-json are present
        const hasWf =
          typeof (window as unknown as { Webflow?: unknown }).Webflow !==
            "undefined" && !!lb.querySelector("script.w-json");
        if (hasWf) return;
        e.preventDefault();
        openLightbox(lb);
        return;
      }

      const dropToggle = target.closest(".rt-dropdown-toggle");
      if (dropToggle) {
        const dropdown = dropToggle.closest(".w-dropdown");
        if (dropdown) {
          e.preventDefault();
          dropdown.classList.toggle("w--open");
        }
        return;
      }

      // Slider arrows fallback
      const nextArrow = target.closest(
        ".w-slider-arrow-right, [aria-label='Keyingi']",
      );
      const prevArrow = target.closest(
        ".w-slider-arrow-left, [aria-label='Oldingi']",
      );
      if (nextArrow || prevArrow) {
        const slider = (nextArrow || prevArrow)!.closest(".w-slider");
        if (slider && !slider.querySelector(".w-slide.w--current")) {
          // let Webflow handle if present; otherwise soft cycle
        }
      }

      const link = target.closest("a");
      if (link && root.classList.contains("rt-menu-open")) {
        closeMenyu();
      }
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (lbRoot?.dataset.open) {
          closeLightbox();
          return;
        }
        if (root.classList.contains("rt-menu-open")) closeMenyu();
        return;
      }
      if (!lbRoot?.dataset.open) return;
      if (e.key === "ArrowRight" && lbItems.length) {
        lbIndex = (lbIndex + 1) % lbItems.length;
        renderLightbox();
      }
      if (e.key === "ArrowLeft" && lbItems.length) {
        lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length;
        renderLightbox();
      }
    }

    menuButtons().forEach((btn) => {
      if (!btn.hasAttribute("role")) btn.setAttribute("role", "button");
      if (!btn.hasAttribute("tabindex")) btn.setAttribute("tabindex", "0");
      btn.setAttribute(
        "aria-label",
        btn.getAttribute("aria-label") || "Menyu",
      );
      btn.setAttribute(
        "aria-expanded",
        root.classList.contains("rt-menu-open") ? "true" : "false",
      );
    });

    const desktopNav = window.matchMedia("(min-width: 1100px)");
    const closeMenuOnDesktop = () => {
      if (desktopNav.matches) closeMenyu();
    };
    closeMenuOnDesktop();
    desktopNav.addEventListener("change", closeMenuOnDesktop);

    function onMenuKey(e: KeyboardEvent) {
      if (e.key !== "Enter" && e.key !== " ") return;
      const btn = (e.target as HTMLElement | null)?.closest(
        ".rt-navbar-v1-menu-wrapper",
      );
      if (!btn) return;
      e.preventDefault();
      toggleMenyu();
    }

    document.querySelectorAll(".w-tabs").forEach((tabs) => {
      const current =
        tabs.getAttribute("data-current") ||
        tabs.querySelector(".w-tab-link.w--current")?.getAttribute("data-w-tab");
      tabs.querySelectorAll(".w-tab-pane").forEach((pane) => {
        const match = pane.getAttribute("data-w-tab") === current;
        pane.classList.toggle("w--tab-active", match);
        (pane as HTMLElement).style.display = match ? "block" : "none";
      });
    });

    async function onFormSubmit(e: Event) {
      const form = e.target as HTMLFormElement | null;
      if (!form || form.tagName !== "FORM") return;
      if (!form.closest("main")) return;
      const hasContactFields =
        form.querySelector('[name="Contact-V1-email"], [name="email"]') ||
        form.getAttribute("data-name")?.toLowerCase().includes("contact") ||
        form.getAttribute("data-name")?.toLowerCase().includes("aloqa");
      if (!hasContactFields) return;

      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const submitBtn = form.querySelector(
        'input[type="submit"], button[type="submit"]',
      ) as HTMLInputElement | HTMLButtonElement | null;
      const prev = submitBtn && "value" in submitBtn ? submitBtn.value : null;
      if (submitBtn && "value" in submitBtn) submitBtn.value = "Kuting...";
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const json = (await res.json()) as { ok?: boolean; error?: string };
        if (!res.ok || !json.ok) throw new Error(json.error || "Xato");
        form.reset();
        alert("Rahmat — xabaringiz qabul qilindi.");
      } catch (err) {
        alert(err instanceof Error ? err.message : "Xatolik yuz berdi.");
      } finally {
        if (submitBtn && "value" in submitBtn && prev) submitBtn.value = prev;
      }
    }

    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    document.addEventListener("keydown", onMenuKey);
    document.addEventListener("submit", onFormSubmit, true);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("keydown", onMenuKey);
      document.removeEventListener("submit", onFormSubmit, true);
      desktopNav.removeEventListener("change", closeMenuOnDesktop);
      closeMenyu();
      document.querySelectorAll(".rt-mega-menu-wrapper").forEach((el) => {
        const nav = document.querySelector(".rt-navbar-v1");
        if (nav && el.parentElement === document.body) nav.appendChild(el);
      });
      closeLightbox();
      lbRoot?.remove();
      lbRoot = null;
    };
  }, []);

  return null;
}
