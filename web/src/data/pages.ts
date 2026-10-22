const CDN =
  "https://cdn.prod.website-files.com/6927ddcc377dce6e20188e35";

export type PageIntro = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  intro: string;
  image: string;
  metaDescription: string;
};

export const pageIntros = {
  about: {
    eyebrow: "Tajriba va yondashuv",
    title: "Men bilan tanishing",
    subtitle:
      "Sizning teringiz — mening e’tiborim; har bir muolajani ishonch va natija uchun o‘ylab tanlayman",
    intro:
      "Men — Malika Karimova, kosmetolog. Yuz va teri parvarishida shaxsiy yondashuv, tushunarli tushuntirish va xavfsiz protokol bilan ishlayman.",
    image: `${CDN}/69452c5ad14c210fde417f7d_6e8b8f07617e02360fd36671319429eb_about-banner-image.webp`,
    metaDescription:
      "Malika Karimova — kosmetolog, yuz va teri parvarishi mutaxassisi.",
  },
  rooms: {
    title: "Xizmatlarim",
    subtitle: "Teringiz uchun aniq yechimlar",
    intro:
      "Yuzni tozalashdan anti-age muolajalarigacha — xizmatlarimni ko‘ring: jarayon tushuntiriladi, narx aniq, yondashuv shaxsiy.",
    image: `${CDN}/694e312f0951a14b785ffd15_e568dbb1f01f309400cbfb4d237ffe6a_room-page-banner-image.webp`,
    metaDescription:
      "Malika Karimova xizmatlari — yuz parvarishi, konsultatsiya va premium muolajalar.",
  },
  amenities: {
    eyebrow: "Qulayliklar",
    title: "Kabinetimda nima kutadi",
    intro:
      "Steril muhit, zamonaviy jihozlar va tinch kabinet — seanslarim qulay va xavfsiz o‘tadi.",
    image: `${CDN}/69527b3a5274ffb6de3d0349_image%20447-Picsart-AiImageEnhancer%201%20(1).webp`,
    metaDescription:
      "Malika Karimova kabineti — zamonaviy jihozlar va e’tiborli xizmat.",
  },
  banquet: {
    title: "Maxsus paketlarim",
    intro:
      "To‘liq parvarish kurslari, juftlik seanslari va mavsumiy paketlar — maqsadingizga mos dasturni birgalikda tanlaymiz.",
    image: `${CDN}/6954dfb0643940014e8d7c27_image%20453-Picsart-AiImageEnhancer%201%20(1).webp`,
    metaDescription:
      "Malika Karimova paketlar — kurslar, juftlik seanslari va maxsus dasturlar.",
  },
  spa: {
    title: "Tana, ruh va terini yangilang",
    subtitle:
      "Muvozanat va osoyishtalikni tiklaydigan sog‘lomlashtirish muolajalari",
    intro:
      "Kabinetimda tinchlantiruvchi muolajalar, osoyishta muhit va shaxsiy g‘amxo‘rlik bilan dam oling.",
    image: `${CDN}/6953b6cbe9d3fb1df0e77f56_5a6f785dfa85045b71d807cfaff4a76a_spa-banner-image.webp`,
    metaDescription:
      "Malika Karimova — tinchlantiruvchi muolajalar va osuda muhit.",
  },
  restaurant: {
    eyebrow: "Uyda davom",
    title: "Uy parvarishi bo‘yicha maslahatlarim",
    intro:
      "Muolajadan keyin teringizni qo‘llab-quvvatlash: mahsulotlar, SPF va kundalik odatlar — shaxsiy tavsiyalarim.",
    image: `${CDN}/6954e9698b2e3670bc6d4911_image%20490-Picsart-AiImageEnhancer%20(1)%201%20(1).webp`,
    metaDescription:
      "Malika Karimova — uy parvarishi maslahatlari va mutaxassis tavsiyalari.",
  },
  blog: {
    title: "Yangiliklar va maslahatlarim",
    intro:
      "Teri parvarishi, yangi muolajalar va foydali maslahatlar — mening jurnalimda.",
    image: `${CDN}/695645e0708c845e290a1f9e_image%20508-Picsart-AiImageEnhancer%201%20(1).webp`,
    metaDescription:
      "Malika Karimova blog — teri parvarishi va go‘zallik haqida foydali maqolalar.",
  },
  contact: {
    eyebrow: "Aloqa",
    title: "Menga yozing",
    subtitle: "Qabulga yozilish yoki savol",
    intro:
      "Savolingiz bormi? Qabulga yozilish, konsultatsiya yoki maxsus so‘rov — tezkor javob beraman.",
    image: `${CDN}/6954b29b8505845a7463cc60_image%20506-Picsart-AiImageEnhancer%201%20(1).webp`,
    metaDescription:
      "Malika Karimova bilan bog‘laning — qabul va xizmatlar bo‘yicha.",
  },
} satisfies Record<string, PageIntro>;

export const aboutFeatures = [
  {
    title: "Shaxsiy konsultatsiya",
    body: "Har bir seansni teringizni tinglash, aniq tushuntirish va natijaga yo‘naltirilgan reja bilan boshlayman.",
  },
  {
    title: "Xavfsizlik va steril muhit",
    body: "Kabinetim, jihozlar va jarayonlar ishonch uchun o‘ylab topilgan — siz tinch, men esa e’tiborli.",
  },
  {
    title: "Faqat sizga mos yondashuv",
    body: "Shablon emas: yosh, teri tipi va maqsadingizga mos muolaja va uy parvarishi tavsiyalari.",
  },
];

export const amenityItems = [
  {
    title: "Yuz diagnostikasi",
    body: "Muolajadan oldin teri holatini baholayman — to‘g‘ri tanlov va kutilgan natija uchun.",
  },
  {
    title: "Professional jihozlar",
    body: "Zamonaviy apparatlar va sertifikatlangan vositalar — sifatli va xavfsiz seans.",
  },
  {
    title: "Tinch kabinet",
    body: "Osuda muhit: shovqinsiz, toza va dam olishga qulay joy.",
  },
  {
    title: "Tezkor aloqa",
    body: "Qabulga yozilish, muolaja tanlash va keyingi qadamlar — kerak bo‘lganda yordam beraman.",
  },
  {
    title: "Uy parvarishi rejasi",
    body: "Seansdan keyin nima qilish kerakligini aniq aytaman — natijani uyda ham saqlaysiz.",
  },
  {
    title: "Barcha yoshlar uchun",
    body: "Yosh yoki etuk teri — mos muolaja va yumshoq yondashuv.",
  },
];

export const banquetHighlights = [
  "Chuqur tozalash kursi",
  "Anti-age dasturi",
  "Juftlik seanslari",
  "Mavsumiy aksiyalar",
  "Uy parvarishi to‘plami",
  "Moslashtirilgan paketlar",
];

export const spaTreatments = [
  {
    title: "Imzoli yuz massaji",
    body: "Zo‘riqishni kamaytirish va chuqur dam olishga qaratilgan yumshoq yuz rituallari.",
  },
  {
    title: "Yuz rituallari",
    body: "Yangilanish, namlanish va porlash uchun mutaxassis yuz muolajalari.",
  },
  {
    title: "Juftlik parvarishi",
    body: "Birgalikda tinchlanish va g‘amxo‘rlik uchun yaratilgan seanslar.",
  },
  {
    title: "Tana terapiyalari",
    body: "Charchagan teri va mushaklarni jonlantiradigan skrab va o‘ramalar.",
  },
];

export const restaurantHighlights = [
  "Kundalik uy parvarishi",
  "Teri tipiga mos mahsulotlar",
  "SPF va himoya maslahatlari",
  "Muolajadan keyingi rejim",
  "Shaxsiy konsultatsiya",
  "Mavsumiy tavsiyalar",
];
