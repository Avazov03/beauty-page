"use client";

import Iridescence from "@/components/fx/Iridescence";

/** Pearl & Plum–tinted iridescence — eager import (no dynamic chunk delay). */
export function HeroIridescenceBg() {
  return (
    <Iridescence
      color="#D3B9C9"
      speed={0.55}
      amplitude={0.08}
      mouseReact
      scale={1.05}
      detail={7}
      saturation={0.72}
      brightness={1.15}
      contrast={0.95}
      stir={0.35}
      sheen={0.22}
      clickSwirl={false}
      grain={0.12}
      opacity={0.92}
      resolution={0.85}
    />
  );
}
