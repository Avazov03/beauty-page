import fs from "node:fs";
import path from "node:path";

const DIR = path.resolve("src/baseline/html");

const PAIRS = [
  ["dengiz manzarali hashamatli xizmatlar", "premium anti-age muolajalar"],
  ["dengiz manzarali hashamatli xizmatla", "premium anti-age muolaja"],
  ["dengiz manzarali xizmatda", "premium muolajada"],
  ["dengizga qaragan xizmatda", "kabinetdagi"],
  ["dengiz balconi", "lifting protokoli"],
  ["DENGIZ MANZARALI XONA", "ANTI-AGE KOMPLEKS"],
  ["Dengiz manzarali xona", "Anti-age kompleks"],
  ["karavot yoki bolalar karavoti so‘rov", "maxsus so‘rov yoki sezgir teri eslatmasi"],
  ["karavot yoki bolalar karavoti so'rov", "maxsus so‘rov yoki sezgir teri eslatmasi"],
  ["karavot", "jihoz"],
  ["dengiz bassi", "tozalash zonas"],
  ["dengiz mahsulotlari", "parvarish mahsulotlari"],
  ["dengiz ", "premium "],
  ["Dengiz ", "Premium "],
  ["hashamatli xizmatlar", "premium muolajalar"],
  ["Luxury rooms", "Premium muolajalar"],
  ["sea view", "premium care"],
  ["Sea view", "Premium care"],
];

let n = 0;
for (const file of fs.readdirSync(DIR).filter((f) => f.endsWith(".ts"))) {
  const full = path.join(DIR, file);
  let text = fs.readFileSync(full, "utf8");
  const before = text;
  for (const [from, to] of PAIRS) text = text.split(from).join(to);
  if (text !== before) {
    fs.writeFileSync(full, text);
    n++;
    console.log("updated", file);
  }
}
console.log("pass2 done", n);
