"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * One photo row. Webflow paints several copies side by side; we keep the
 * first, duplicate its photos once, and drive that single loop. Drag is free
 * in both directions. On release, leftover speed eases back into the row's
 * own direction.
 */
function bindMarqueeRow(wrapper: HTMLElement, direction: -1 | 1) {
  if (wrapper.dataset.caDrag === "1") return () => {};
  const trains = [...wrapper.children].filter(
    (node): node is HTMLElement =>
      node instanceof HTMLElement &&
      (node.classList.contains("rt-gallery-top-marquee-train") ||
        node.classList.contains("rt-gallery-bottom-marquee")),
  );
  if (!trains.length) return () => {};

  wrapper.dataset.caDrag = "1";
  const train = trains[0];
  const extras = trains.slice(1);
  extras.forEach((node) => {
    node.dataset.caHiddenCopy = "1";
    node.style.setProperty("display", "none", "important");
  });

  train.querySelectorAll("[data-ca-clone]").forEach((node) => node.remove());
  const unitKey = (el: Element) =>
    el.querySelector("img")?.getAttribute("src") || el.textContent || "";
  const originals = [...train.children] as HTMLElement[];
  const keys = originals.map(unitKey);
  let repeated = false;
  for (let n = 1; n <= originals.length / 2; n += 1) {
    if (originals.length % n !== 0) continue;
    const unit = keys.slice(0, n).join("|");
    let same = true;
    for (let i = n; i < keys.length; i += n) {
      if (keys.slice(i, i + n).join("|") !== unit) {
        same = false;
        break;
      }
    }
    if (same) {
      repeated = true;
      break;
    }
  }
  if (!repeated) {
    originals.forEach((kid) => {
      const clone = kid.cloneNode(true) as HTMLElement;
      clone.dataset.caClone = "1";
      clone.setAttribute("aria-hidden", "true");
      train.appendChild(clone);
    });
  }

  train.style.animation = "none";
  train.style.justifyContent = "flex-start";
  [wrapper, train, ...extras].forEach((node) => {
    node.removeAttribute("data-w-id");
    node.getAnimations?.().forEach((anim) => anim.cancel());
  });
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const duration = 40;
  let offset = 0;
  let dragging = false;
  let axis: "x" | "y" | null = null;
  let pointerId = -1;
  let lastX = 0;
  let lastY = 0;
  let lastT = 0;
  let velocity = 0;
  let extra = 0;
  let moved = 0;

  const loopWidth = () => {
    const kids = [...train.children] as HTMLElement[];
    const base = kids.filter((kid) => kid.dataset.caClone !== "1");
    if (base.length && base.length < kids.length) {
      return base.reduce((sum, kid) => sum + kid.offsetWidth, 0);
    }
    if (kids.length < 2) return train.scrollWidth / 2 || 1;
    const rowKeys = kids.map(unitKey);
    for (let n = 1; n <= kids.length / 2; n += 1) {
      if (kids.length % n !== 0) continue;
      const unit = rowKeys.slice(0, n).join("|");
      let same = true;
      for (let i = n; i < rowKeys.length; i += n) {
        if (rowKeys.slice(i, i + n).join("|") !== unit) {
          same = false;
          break;
        }
      }
      if (!same) continue;
      const width = kids.slice(0, n).reduce((sum, kid) => sum + kid.offsetWidth, 0);
      if (width > 0) return width;
    }
    return train.scrollWidth / 2 || 1;
  };

  const wrap = (value: number) => {
    const width = loopWidth();
    if (!width) return value;
    let next = value % width;
    if (next > 0) next -= width;
    if (next <= -width) next += width;
    return next;
  };

  let writing = false;
  const apply = () => {
    writing = true;
    train.style.setProperty(
      "transform",
      `translate3d(${offset}px,0,0)`,
      "important",
    );
    writing = false;
  };
  const guard = new MutationObserver(() => {
    if (writing) return;
    const current = new DOMMatrix(getComputedStyle(train).transform).m41;
    if (Math.abs(current - offset) < 0.5) return;
    apply();
  });
  guard.observe(train, { attributes: true, attributeFilter: ["style"] });

  let prev = 0;
  let frame = 0;
  const tick = (now: number) => {
    const dt = prev ? Math.min(0.05, (now - prev) / 1000) : 0;
    prev = now;
    if (!dragging && dt && !reduce.matches) {
      const speed = loopWidth() / duration;
      extra *= Math.exp(-dt * 2.4);
      if (Math.abs(extra) < 12) extra = 0;
      offset = wrap(offset + (direction * speed + extra) * dt);
      apply();
    }
    frame = window.requestAnimationFrame(tick);
  };
  frame = window.requestAnimationFrame(tick);
  apply();

  const onDown = (event: PointerEvent) => {
    if (event.button !== 0) return;
    dragging = true;
    axis = null;
    pointerId = event.pointerId;
    lastX = event.clientX;
    lastY = event.clientY;
    lastT = performance.now();
    velocity = 0;
    extra = 0;
    moved = 0;
  };

  const onMove = (event: PointerEvent) => {
    if (!dragging || event.pointerId !== pointerId) return;
    const dx = event.clientX - lastX;
    const dy = event.clientY - lastY;
    if (!axis) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      if (axis === "y") {
        dragging = false;
        return;
      }
      train.classList.add("is-dragging");
      try {
        wrapper.setPointerCapture(event.pointerId);
      } catch {
        /* Pointer capture needs a real pointer. Drag still follows the events. */
      }
    }
    if (axis !== "x") return;
    event.preventDefault();
    const now = performance.now();
    velocity = dx / (now - lastT || 16);
    lastX = event.clientX;
    lastY = event.clientY;
    lastT = now;
    moved += Math.abs(dx);
    offset = wrap(offset + dx);
    apply();
  };

  const onUp = (event: PointerEvent) => {
    if (!dragging || event.pointerId !== pointerId) return;
    dragging = false;
    train.classList.remove("is-dragging");
    if (axis !== "x") {
      axis = null;
      return;
    }
    const speed = loopWidth() / duration;
    const finger = velocity * 1000;
    extra = Math.max(-1600, Math.min(1600, finger - direction * speed));
    axis = null;
  };

  const onClick = (event: Event) => {
    if (moved < 8) return;
    event.preventDefault();
    event.stopPropagation();
    moved = 0;
  };

  train.querySelectorAll("img").forEach((img) => {
    img.draggable = false;
  });
  wrapper.addEventListener("pointerdown", onDown);
  wrapper.addEventListener("pointermove", onMove);
  wrapper.addEventListener("pointerup", onUp);
  wrapper.addEventListener("pointercancel", onUp);
  wrapper.addEventListener("click", onClick, true);

  return () => {
    guard.disconnect();
    window.cancelAnimationFrame(frame);
    wrapper.removeEventListener("pointerdown", onDown);
    wrapper.removeEventListener("pointermove", onMove);
    wrapper.removeEventListener("pointerup", onUp);
    wrapper.removeEventListener("pointercancel", onUp);
    wrapper.removeEventListener("click", onClick, true);
    train.classList.remove("is-dragging");
    train.querySelectorAll("[data-ca-clone]").forEach((node) => node.remove());
    train.style.removeProperty("transform");
    train.style.removeProperty("animation");
    extras.forEach((node) => {
      node.style.removeProperty("display");
      delete node.dataset.caHiddenCopy;
    });
    delete wrapper.dataset.caDrag;
  };
}

function bindPageMarquees() {
  const cleanups: Array<() => void> = [];
  document.querySelectorAll(".rt-gallery-marquee-wrapper").forEach((node) => {
    const wrapper = node as HTMLElement;
    const direction = wrapper.classList.contains("rt-bottom") ? 1 : -1;
    cleanups.push(bindMarqueeRow(wrapper, direction));
  });
  return () => cleanups.forEach((fn) => fn());
}

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
  const pathname = usePathname();

  useEffect(() => bindPageMarquees(), [pathname]);

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
        if (window.matchMedia("(max-width: 1099px)").matches) return;
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

    document.querySelectorAll(".rt-button .rt-text-two").forEach((el) => {
      el.setAttribute("aria-hidden", "true");
    });

    document.querySelectorAll(".rt-mega-menu-wrapper .w-dropdown").forEach((drop) => {
      drop.setAttribute("data-hover", "false");
      const links = [
        ...drop.querySelectorAll(":scope > .w-dropdown-list a"),
      ];
      if (links.length === 1) drop.classList.add("ca-menu-direct");
    });

    function onDropdownCapture(e: MouseEvent) {
      if (!window.matchMedia("(max-width: 1099px)").matches) return;
      const target = e.target as HTMLElement | null;
      const dropToggle = target?.closest(".rt-dropdown-toggle");
      if (!dropToggle?.closest(".rt-mega-menu-wrapper")) return;
      e.preventDefault();
      e.stopPropagation();
      const dropdown = dropToggle.closest(".w-dropdown");
      if (!dropdown) return;
      if (dropdown.classList.contains("ca-menu-direct")) {
        const href = dropdown
          .querySelector(":scope > .w-dropdown-list a")
          ?.getAttribute("href");
        if (href) window.location.assign(href);
        return;
      }
      const willOpen = !dropdown.classList.contains("w--open");
      dropdown.parentElement
        ?.querySelectorAll(":scope > .w-dropdown.w--open")
        .forEach((other) => {
          if (other !== dropdown) other.classList.remove("w--open");
        });
      dropdown.classList.toggle("w--open", willOpen);
    }

    const phoneCleanups: Array<() => void> = [];

    function setupReviews() {
      if (!document.documentElement.classList.contains("is-home")) return;
      const section = document.querySelector(".rt-testimonial-v3");
      const holder = section?.querySelector(".rt-testimonial-card-holder");
      if (!section || !holder) return;
      const cards = [
        ...holder.querySelectorAll(":scope > .rt-testimonial-card-v1"),
      ] as HTMLElement[];
      if (!cards.length) return;
      const mq = window.matchMedia("(max-width: 767px)");
      const step = 4;
      let shown = step;
      let btn: HTMLButtonElement | null = null;

      const apply = () => {
        const phone = mq.matches;
        cards.forEach((card, i) => {
          card.classList.toggle("ca-review-pending", phone && i >= shown);
        });
        if (!phone || shown >= cards.length) {
          btn?.remove();
          btn = null;
          return;
        }
        if (!btn) {
          btn = document.createElement("button");
          btn.type = "button";
          btn.className = "ca-reviews-more";
          btn.textContent = "Hammasi";
          btn.addEventListener("click", () => {
            shown += step;
            apply();
          });
          section.appendChild(btn);
        }
      };

      const onChange = () => {
        if (mq.matches) shown = step;
        apply();
      };
      apply();
      mq.addEventListener("change", onChange);
      phoneCleanups.push(() => {
        mq.removeEventListener("change", onChange);
        btn?.remove();
        cards.forEach((card) => card.classList.remove("ca-review-pending"));
      });
    }

    function setupSliders() {
      const phone = window.matchMedia("(max-width: 991px)");
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
      document
        .querySelectorAll(
          ".rt-feature .rt-tab-slider.w-slider, .rt-gallery .rt-tab-slider.w-slider",
        )
        .forEach((node) => {
          const slider = node as HTMLElement;
          if (slider.dataset.caSwipe === "1") return;
          const mask = slider.querySelector(
            ":scope > .w-slider-mask",
          ) as HTMLElement | null;
          if (!mask) return;
          const slides = [
            ...mask.querySelectorAll(":scope > .w-slide"),
          ] as HTMLElement[];
          if (slides.length < 2) return;
          slider.dataset.caSwipe = "1";

          const dots = document.createElement("div");
          dots.className = "ca-swipe-dots";
          dots.setAttribute("role", "tablist");
          slides.forEach((_, i) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.className = "ca-swipe-dot" + (i === 0 ? " is-on" : "");
            dot.setAttribute("aria-label", `${i + 1}-slayd`);
            dot.addEventListener("click", () => {
              mask.scrollTo({
                left: i * mask.clientWidth,
                behavior: reduce.matches ? "auto" : "smooth",
              });
            });
            dots.appendChild(dot);
          });
          slider.appendChild(dots);

          const sync = () => {
            const width = mask.clientWidth || 1;
            const index = Math.round(mask.scrollLeft / width);
            [...dots.children].forEach((dot, n) => {
              dot.classList.toggle("is-on", n === index);
            });
          };
          mask.addEventListener("scroll", sync, { passive: true });

          let paused = false;
          const pause = () => {
            paused = true;
          };
          const resume = () => {
            paused = false;
          };
          mask.addEventListener("pointerdown", pause);
          mask.addEventListener("pointerup", resume);
          mask.addEventListener("pointercancel", resume);

          const timer = window.setInterval(() => {
            if (!phone.matches || reduce.matches || paused) return;
            const width = mask.clientWidth;
            if (!width) return;
            const index = Math.round(mask.scrollLeft / width);
            const next = (index + 1) % slides.length;
            mask.scrollTo({ left: next * width, behavior: "smooth" });
          }, 4500);

          phoneCleanups.push(() => {
            window.clearInterval(timer);
            mask.removeEventListener("scroll", sync);
            mask.removeEventListener("pointerdown", pause);
            mask.removeEventListener("pointerup", resume);
            mask.removeEventListener("pointercancel", resume);
            dots.remove();
            delete slider.dataset.caSwipe;
          });
        });
    }

    setupReviews();
    setupSliders();

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

    document.addEventListener("click", onDropdownCapture, true);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    document.addEventListener("keydown", onMenuKey);
    document.addEventListener("submit", onFormSubmit, true);
    return () => {
      phoneCleanups.forEach((fn) => fn());
      document.removeEventListener("click", onDropdownCapture, true);
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
