/**
 * Demo: yakka kosmetolog shablonining bitta manbasi.
 * Keyin mijozga moslab ism, kontakt va matnlarni almashtirasiz.
 */
export const brandName = "Malika Karimova";

export const specialist = {
  name: "Malika Karimova",
  title: "Kosmetolog",
  headline: "Yuz va teri parvarishi mutaxassisi",
  experienceYears: "7+",
  city: "Toshkent",
};

/** Sayt egasi / texnik aloqa (shablon muallifi) — mijoz kontakti emas. */
export const owner = {
  name: "Avazov Og‘abek",
  role: "Fullstack dasturchi va dizayner",
  company:
    "Huquqiy texnologiyalar va sun’iy intellekt laboratoriyasi MChJ",
};

export const navLinks = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/about", label: "Men haqimda" },
  { href: "/rooms", label: "Xizmatlar" },
  { href: "/banquet", label: "Paketlar" },
  { href: "/blog", label: "Yangiliklar" },
] as const;

export const contact = {
  phoneDisplay: "+998 94 344 03 27",
  phoneHref: "tel:+998943440327",
  email: "avazovogabek86@gmail.com",
  emailHref: "mailto:avazovogabek86@gmail.com",
  address:
    "Toshkent shahri, Sayilgoh ko‘chasi, 35-uy, TDYU 4-o‘quv binosi, Kovorking markazi",
  addressShort: "Sayilgoh ko‘chasi, 35-uy, TDYU 4-bino, Toshkent",
};

export const social = {
  telegram: "https://t.me/Avazov_fit",
  telegramHandle: "@Avazov_fit",
  instagram: "https://www.instagram.com/avazov_fit/",
  instagramHandle: "avazov_fit",
  linkedin:
    "https://www.linkedin.com/in/ogabek-avazov-78758038a/?isSelfProfile=true",
  facebook: "https://t.me/Avazov_fit",
};

/** Eski Classic Apartment SVG o‘rniga matnli wordmark (CSS `.ca-brand-mark`). */
export const logos = {
  light: "",
  dark: "",
};

export const footerTagline =
  "Men teri salomatligi, e’tiborli konsultatsiya va chuqur mutaxassis g‘amxo‘rligini uyg‘unlashtirib, har bir mijozim o‘zini qadrlangan his qiladigan unutilmas parvarish tajribasini yarataman.";
