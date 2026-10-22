/**
 * Baseline HTML: mehmonxona matnlarini Classic Beauty (kosmetologiya) yo‘nalishiga moslash.
 * URL / class / data-w-id o‘zgarmaydi — faqat ko‘rinadigan matn.
 */
import fs from "node:fs";
import path from "node:path";

const DIR = path.resolve("src/baseline/html");

/** Uzunroq iboralar birinchi — qisman almashtirishni kamaytiradi */
const PAIRS = [
  ["Classic Apartment", "Classic Beauty"],
  ["Elbergo Hotel", "Classic Beauty"],
  ["elbergo hotel", "Classic Beauty"],
  ["ELBERGO", "CLASSIC BEAUTY"],

  ["Mehmonlarimizning unutilmas dam olish haqidagi fikrlarini o‘qing", "Mijozlarimizning parvarish haqidagi fikrlarini o‘qing"],
  ["Mehmonlarimizning unutilmas dam olish haqidagi fikrlarini o'qing", "Mijozlarimizning parvarish haqidagi fikrlarini o‘qing"],
  ["Baxtli mijozlarimiz", "Baxtli mijozlarimiz"],

  ["O‘nlab yillik ishonchli xizmat va minglab sodiq mehmonlar unutilmas dam olish yaratishga sodiqligimizni ko‘rsatadi", "Yillar tajribasi va minglab mamnun mijozlar — ishonchli parvarish va aniq natijaga sodiqligimizni ko‘rsatadi"],
  ["O'nlab yillik ishonchli xizmat va minglab sodiq mehmonlar unutilmas dam olish yaratishga sodiqligimizni ko'rsatadi", "Yillar tajribasi va minglab mamnun mijozlar — ishonchli parvarish va aniq natijaga sodiqligimizni ko‘rsatadi"],

  ["Mehmon ehtiyojlari oldindan hisobga olingan", "Mijoz ehtiyojlari oldindan hisobga olingan"],
  ["Qaytib keluvchi mehmonlar ulushi", "Qaytib keluvchi mijozlar ulushi"],
  ["Shaxsiy butler xizmati", "Shaxsiy konsultatsiya"],
  ["Mehmondo‘stlik va ovqatlanish mukofotlari", "Parvarish va sifat mukofotlari"],
  ["Mehmondo'stlik va ovqatlanish mukofotlari", "Parvarish va sifat mukofotlari"],
  ["Dengiz/shahar manzarali xonalar", "Teri parvarishi protokollari"],
  ["Curated Wine List Selections", "Premium parvarish formulalari"],
  ["Award-winning Restorans", "Tasdiqlangan protokollar"],
  ["AWARD-WINNING RESTORANS", "TASDIQLANGAN PROTOKOLLAR"],

  ["Tanlangan xonalar", "Tanlangan xizmatlar"],
  ["Deluxe dengiz manzarali xona", "Yuzni chuqur tozalash"],
  ["Dengiz manzarali King xona", "Premium teri parvarishi"],
  ["Dengiz manzarali juft xona", "Anti-age kompleks"],
  ["Dengiz manzarali klub xona", "Kosmetolog konsultatsiyasi"],
  ["Dengiz manzarali xona", "Anti-age kompleks"],
  ["Standart xona", "Yuzni chuqur tozalash"],
  ["Ijrochi lyuks", "Premium teri parvarishi"],
  ["Xonalarimiz", "Xizmatlarimiz"],
  ["Xonalarni ko‘rish", "Xizmatlarni ko‘rish"],
  ["Xonalarni ko'rish", "Xizmatlarni ko‘rish"],
  ["Xonalarni bron qilish", "Qabulga yozilish"],
  ["Sof qulaylikda uxlang", "Teringiz uchun aniq yechimlar"],

  ["Biznes va tadbir maydonlari", "Maxsus paketlar va kurslar"],
  ["Tadbir maydonini bron qilish", "Paketni ko‘rish"],
  ["Uchrashuv, konferensiya", "Kurs, juftlik seansi"],

  ["Ovqatlanish tajribasi", "Parvarish tajribasi"],
  ["Tashqi/teras o‘rindiqlari", "Yuz diagnostikasi"],
  ["Tashqi/teras o'rindiqlari", "Yuz diagnostikasi"],
  ["Moslashtiriladigan menyu", "Shaxsiy protokol"],
  ["Complimentary Daily Breakfast", "Konsultatsiya kiritilgan"],
  ["Multiple On-Site Restorans", "Bir nechta muolaja yo‘nalishi"],
  ["Extensive Wine List", "Premium formulalar"],
  ["Kundalik bepul nonushta", "Konsultatsiya kiritilgan"],
  ["bepul nonushta", "bepul konsultatsiya"],
  ["Bepul nonushta", "Konsultatsiya"],
  ["Jonli oshxona", "Kurs kuzatuvi"],
  ["Imzoli fine dining", "Imzoli yuz rituallari"],
  ["Kokteyl lounge", "Tinch kutish zonasi"],
  ["restoran", "parvarish"],
  ["Restoran", "Parvarish"],
  ["Restorans", "Protokollar"],

  ["Eng yaxshi lahzalar va tajribalar orqali vizual sayohat", "Eng yaxshi natijalar va seanslar orqali vizual sayohat"],
  ["Galereyamiz", "Ishlarimiz"],
  ["Galereyani ko‘rish", "Ishlarimizni ko‘rish"],
  ["Galereyani ko'rish", "Ishlarimizni ko‘rish"],

  ["Tez va do‘stona kirish", "Oddiy va tezkor yozilish"],
  ["Tez va do'stona kirish", "Oddiy va tezkor yozilish"],
  ["Silliq va do‘stona kelish", "Iliq va tushunarli kutib olish"],
  ["Silliq va do'stona kelish", "Iliq va tushunarli kutib olish"],
  ["Quick &amp; Hassle-Free Entry", "Tezkor qabulga yozilish"],
  ["ro‘yxatdan o‘tish", "qabulga yozilish"],
  ["ro'yxatdan o'tish", "qabulga yozilish"],

  ["Oddiylikdan chiqing va premium mehmondo‘stlikdan bahramand bo‘ling", "Oddiy parvarishdan chiqing — professional natijani his eting"],
  ["Oddiylikdan chiqing va premium mehmondo'stlikdan bahramand bo'ling", "Oddiy parvarishdan chiqing — professional natijani his eting"],
  ["Hozir bron qiling", "Qabulga yozilish"],
  ["Bron qilish", "Qabulga yozilish"],
  ["BRON QILISH", "QABULGA YOZILISH"],
  ["bron qilish", "qabulga yozilish"],
  ["Bronlash", "Yozilish"],

  ["Dengizga qaragan shahar markazi", "Toshkentdagi teri parvarishi"],
  ["DENGIZGA QARAGAN SHAHAR MARKAZI", "TOSHKENTDAGI TERI PARVARISHI"],
  ["Okean manzarali shahar markazi", "Ishonchli kosmetologik yondashuv"],
  ["Sohilbo‘yi shahar markazi", "Natijaga yo‘naltirilgan kabinet"],
  ["Sohilbo'yi shahar markazi", "Natijaga yo‘naltirilgan kabinet"],
  ["Panoramik dengiz manzarasi", "Barcha teri tiplari"],
  ["dengiz manzarasi", "premium parvarish"],
  ["Dengiz manzarasi", "Premium parvarish"],

  ["Mukammal dam olishga xush kelibsiz", "Teri parvarishiga xush kelibsiz"],
  ["unutilmas dam olish", "unutilmas parvarish"],
  ["Unutilmas dam olish", "Unutilmas parvarish"],
  ["dam olish tajribasi", "parvarish tajribasi"],
  ["dam olish", "parvarish"],
  ["Dam olish", "Parvarish"],
  ["Dam olishingizni", "Seansni"],
  ["yashash", "seans"],
  ["Yashash", "Seans"],

  ["mehmondo‘stlik", "g‘amxo‘rlik"],
  ["mehmondo'stlik", "g‘amxo‘rlik"],
  ["Mehmondo‘stlik", "G‘amxo‘rlik"],
  ["Mehmondo'stlik", "G‘amxo‘rlik"],
  ["mehmonxona", "klinika"],
  ["Mehmonxona", "Klinika"],
  ["MEHMONXONA", "KLINIKA"],
  ["mehmonlar", "mijozlar"],
  ["Mehmonlar", "Mijozlar"],
  ["mehmon", "mijoz"],
  ["Mehmon", "Mijoz"],

  ["basseyn", "tozalash"],
  ["Basseyn", "Tozalash"],
  ["POOL", "CLEAN"],
  ["HOTEL", "CLINIC"],
  ["banket", "paket"],
  ["Banket", "Paket"],
  ["bufet", "natija"],
  ["Bufet", "Natija"],

  ["King karavot", "Diagnostika"],
  ["Queen karavot", "Serum"],
  ["Smart TV", "Maska"],
  ["balkon", "protokol"],
  ["aeroport", "konsultatsiya"],
  ["Aeroport", "Konsultatsiya"],
  ["nonushta", "konsultatsiya"],
  ["Nonushta", "Konsultatsiya"],
  ["butler", "konsultant"],
  ["Butler", "Konsultant"],
  ["vino", "formula"],
  ["Vino", "Formula"],
  ["wine", "formula"],
  ["Wine", "Formula"],

  ["Sayohat", "Parvarish"],
  ["sayohat", "parvarish"],
  ["Travel Magazine", "Beauty Journal"],
  ["Lifestyle blogger", "Mijoz"],
  ["travel writer", "Toshkent"],
  ["travel creator", "Farg‘ona"],

  ["Har bir mehmonxona dam olishining ortidagi hikoya", "Har bir muolaja ortidagi hikoya"],
  ["Har bir klinika dam olishining ortidagi hikoya", "Har bir muolaja ortidagi hikoya"],
  ["Har bir klinika parvarishining ortidagi hikoya", "Har bir muolaja ortidagi hikoya"],
  ["gourmet ovqatlanish", "professional protokol"],
  ["shaxsiy xizmat va mahalliy tajribalar", "shaxsiy yondashuv va uy parvarishi"],
  ["oddiy tashrifni unutilmas sayohatga", "oddiy tashrifni ishonchli natijaga"],
  ["oddiy tashrifni unutilmas parvarishga", "oddiy tashrifni ishonchli natijaga"],

  ["bepul xona yangilash", "bepul konsultatsiya"],
  ["bepul aeroport kutib olish", "bepul tashxis maslahati"],
  ["3+ kechalik bronlarda", "kurs paketlarida"],
  ["kechalik bron", "seans yozilishi"],

  ["Xona", "Xizmat"],
  ["xona ", "xizmat "],
  [" xona", " xizmat"],
  ["xonalar", "xizmatlar"],
  ["Xonalar", "Xizmatlar"],
];

function transform(html) {
  let out = html;
  for (const [from, to] of PAIRS) {
    if (!from || from === to) continue;
    if (out.includes(from)) out = out.split(from).join(to);
  }
  return out;
}

const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".ts"));
let changed = 0;
for (const file of files) {
  const full = path.join(DIR, file);
  const before = fs.readFileSync(full, "utf8");
  const after = transform(before);
  if (after !== before) {
    fs.writeFileSync(full, after);
    changed++;
    console.log("updated", file);
  }
}
console.log(`Done. ${changed}/${files.length} files changed.`);
