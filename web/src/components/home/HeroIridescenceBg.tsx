"use client";

import dynamic from "next/dynamic";

const Iridescence = dynamic(() => import("@/components/fx/Iridescence"), {
  ssr: false,
});

/** Pearl & Plum–tinted iridescence for the home hero (preview). */
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
