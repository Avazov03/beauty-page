/* Home sections after Hero — About / Stats / Experience / Gallery-v4 / old Testimonials removed */
import { html as s2 } from "./home-2";
import { html as s4 } from "./home-4";
import { html as s5 } from "./home-5";
import { html as testimonials } from "./home-testimonials-v3";
import { html as s9 } from "./home-9";

/** Order: rooms → business → dining → Baxtli mijozlarim → CTA */
export const html = [s2, s4, s5, testimonials, s9].join("\n");
