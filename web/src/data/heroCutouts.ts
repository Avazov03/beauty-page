export type HeroCutoutSide = "left" | "right";
export type HeroCutoutScale = "tall" | "closeup" | "roomy";

export type HeroCutoutConfig = {
  src: string;
  /** Figure side — text sits on the opposite side */
  side: HeroCutoutSide;
  scale?: HeroCutoutScale;
  /**
   * Horizontal mirror so gaze faces the copy.
   * Use when the subject looks “off-page” for the chosen side.
   */
  flip?: boolean;
};

/**
 * Inner listing heroes (8). Room/blog detail heroes not mapped.
 *
 * Gaze rule: figure on the right → prefer looking left / at camera;
 * figure on the left → prefer looking right / at camera (else flip).
 */
export const innerHeroCutouts: Record<string, HeroCutoutConfig> = {
  "/about": {
    src: "/brand/heroes/about.png",
    side: "right",
    scale: "tall",
  },
  "/rooms": {
    src: "/brand/heroes/rooms.png",
    side: "right",
    scale: "tall",
  },
  "/amenities": {
    src: "/brand/heroes/amenities.png",
    side: "right",
    scale: "closeup",
  },
  "/banquet": {
    src: "/brand/heroes/banquet.png",
    side: "left",
    scale: "tall",
  },
  "/spa": {
    src: "/brand/heroes/spa.png",
    side: "right",
    scale: "tall",
  },
  "/restaurant": {
    src: "/brand/heroes/restaurant.png",
    side: "left",
    scale: "roomy",
  },
  "/blog": {
    src: "/brand/heroes/blog.png",
    side: "left",
    scale: "tall",
  },
  "/contact": {
    src: "/brand/heroes/contact.png",
    side: "right",
    scale: "tall",
  },
};

export function cutoutForPath(pathname: string): HeroCutoutConfig | null {
  return innerHeroCutouts[pathname] ?? null;
}

/** Paths that get cutout + iridescence heroes (for early-boot script). */
export const cutoutPaths = Object.keys(innerHeroCutouts);

/**
 * Bake cutout hero into SSR HTML so first paint already has pearl + PNG,
 * not the hotel photo. React hydration then matches — no wipe/flash.
 */
export function applyCutoutHeroHtml(html: string, pathname: string): string {
  const cfg = innerHeroCutouts[pathname];
  if (!cfg || !html.includes('class="rt-inner-hero"')) return html;

  const scale = cfg.scale ?? "tall";
  const flip = cfg.flip ? "true" : "false";
  const sectionEnd = html.indexOf("</section>");
  if (sectionEnd === -1) return html;

  let hero = html.slice(0, sectionEnd);
  const rest = html.slice(sectionEnd);

  hero = hero.replace(
    /(<section\b[^>]*?)\sclass="rt-inner-hero"/,
    `$1 class="rt-inner-hero is-cutout-hero" data-cutout-boot="1" data-cutout-side="${cfg.side}" data-cutout-scale="${scale}" data-cutout-flip="${flip}"`,
  );

  if (!hero.includes("ca-inner-hero-bg")) {
    hero = hero.replace(
      /(<section\b[^>]*class="rt-inner-hero is-cutout-hero"[^>]*>)/,
      `$1<div class="ca-inner-hero-bg" aria-hidden="true"></div>`,
    );
  }

  hero = hero.replace(
    /(<img\b[^>]*\bclass="rt-hero-image"[^>]*?)\ssrc="[^"]*"/,
    `$1 src="${cfg.src}"`,
  );
  hero = hero.replace(
    /(<img\b[^>]*\bclass="rt-hero-image"[^>]*?)\ssrcset="[^"]*"/,
    "$1",
  );
  hero = hero.replace(
    /(<img\b[^>]*\bclass="rt-hero-image"[^>]*?)\ssizes="[^"]*"/,
    "$1",
  );
  hero = hero.replace(
    /(<img\b[^>]*\bclass="rt-hero-image"[^>]*?)\sstyle="[^"]*"/,
    "$1",
  );

  return hero + rest;
}
