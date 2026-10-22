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
