/**
 * Klinika / “biz” ovozini yakka mutaxassis (Malika Karimova) ovoziga o‘tkazish.
 */
import fs from "node:fs";
import path from "node:path";

const DIR = path.resolve("src/baseline/html");
const NAME = "Malika Karimova";

const PAIRS = [
  ["Classic Beauty", NAME],
  ["CLASSIC BEAUTY", "MALIKA KARIMOVA"],

  ["Biz haqimizda", "Men haqimda"],
  ["BIZ HAQIMIZDA", "MEN HAQIMDA"],
  ["Baxtli mijozlarimiz", "Baxtli mijozlarim"],
  ["Mijozlarimizning parvarish haqidagi fikrlarini o‘qing", "Mijozlarimning parvarish haqidagi fikrlarini o‘qing"],
  ["Mijozlarimizning parvarish haqidagi fikrlarini o'qing", "Mijozlarimning parvarish haqidagi fikrlarini o‘qing"],

  ["klinikamizda", "kabinetimda"],
  ["Klinikamizda", "Kabinetimda"],
  ["klinikamiz", "kabinetim"],
  ["Klinikamiz", "Kabinetim"],
  ["klinikada", "kabinetimda"],
  ["Klinikada", "Kabinetimda"],
  ["klinika ", "kabinet "],
  ["Klinika ", "Kabinet "],
  ["klinika", "kabinet"],
  ["Klinika", "Kabinet"],
  ["KLINIKA", "KABINET"],

  ["jamoamiz tez yordam beradi", "tez javob beraman"],
  ["jamoamiz", "men"],
  ["Jamoamiz", "Men"],
  ["jamoa uchun", "men uchun"],
  ["va jamoa", ""],

  ["Biz teri", "Men teri"],
  ["Biz qulaylik", "Men qulaylik"],
  ["bizning e’tiborimiz", "mening e’tiborim"],
  ["bizning e'tiborimiz", "mening e’tiborim"],
  ["Bizning", "Mening"],
  ["bizning", "mening"],
  ["Biz bilan bog‘laning", "Menga yozing"],
  ["Biz bilan bog'laning", "Menga yozing"],
  ["sodiqligimizni", "sodiqligimni"],
  ["yaratamiz", "yarataman"],
  ["taklif etadi", "taklif etaman"],
  ["ishlaymiz", "ishlayman"],
  ["ko‘rsatamiz", "ko‘rsataman"],
  ["ko'rsatamiz", "ko‘rsataman"],
  ["beramiz", "beraman"],
  ["qilamiz", "qilaman"],

  ["Xizmatlarimiz", "Xizmatlarim"],
  ["xizmatlarimiz", "xizmatlarim"],
  ["Ishlarimiz", "Ishlarim"],
  ["ishlarimiz", "ishlarim"],
  ["Paketlarimiz", "Paketlarim"],
  ["Maslahatlarimiz", "Maslahatlarim"],
  ["Galereyamiz", "Ishlarim"],

  ["Toshkentdagi teri parvarishi", "Toshkentlik kosmetolog"],
  ["Ishonchli kosmetologik yondashuv", "Shaxsiy kosmetologik yondashuv"],
  ["Natijaga yo‘naltirilgan kabinet", "Natijaga yo‘naltirilgan seanslar"],

  ["Yillar tajribasi va minglab mamnun mijozlar —", "7+ yillik tajriba va mamnun mijozlarim —"],
  ["minglab mamnun mijozlar", "mamnun mijozlarim"],
  ["Minglab mamnun mijozlar", "Mamnun mijozlarim"],
];

function transform(html) {
  let out = html;
  for (const [from, to] of PAIRS) {
    if (!from || from === to) continue;
    if (out.includes(from)) out = out.split(from).join(to);
  }
  return out;
}

let changed = 0;
for (const file of fs.readdirSync(DIR).filter((f) => f.endsWith(".ts"))) {
  const full = path.join(DIR, file);
  const before = fs.readFileSync(full, "utf8");
  const after = transform(before);
  if (after !== before) {
    fs.writeFileSync(full, after);
    changed++;
    console.log("updated", file);
  }
}
console.log(`Done. ${changed} files. Persona: ${NAME}`);
