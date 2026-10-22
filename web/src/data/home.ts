import { STOCK } from "@/data/stock";

export const homeHero = {
  title: "Sog‘lom teri va ishonchli parvarish — shaxsiy yondashuv bilan",
  cta: "Qabulga yozilish",
  ctaHref: "/contact",
  offer: "Birinchi konsultatsiya — cheklangan muddat",
  poster: STOCK.facialMask,
  videoWebm: "",
  videoMp4: "",
};

export const homeAbout = {
  eyebrow: "Men haqimda",
  titles: [
    "Toshkentlik kosmetolog",
    "Shaxsiy kosmetologik yondashuv",
    "Natijaga yo‘naltirilgan seanslar",
  ],
  body: "Har bir seansda ishonch yaratish uchun bilím, nafislik va a’lo g‘amxo‘rlik uyg‘unlashgan shaxsiy parvarishni his eting",
  cta: "Xizmatlarimni ko‘rish",
  ctaHref: "/rooms",
  images: [STOCK.softPortrait, STOCK.glowPortrait, STOCK.facialCleanse],
} as const;

/** Bosh sahifa kartalari — roomsListing bilan bir xil yo‘nalishlar */
export const featuredRooms = [
  {
    name: "Yuzni chuqur tozalash",
    blurb:
      "Poralarni tozalash, yallig‘lanishni yumshatish va terini yangilash — professional protokol bilan",
    size: "45–60 daqiqa",
    view: "Barcha teri tiplari",
    features: "Diagnostika, tozalash, maska",
    perfectFor: "Muntazam parvarish izlovchilar",
    image: STOCK.facialCleanse,
    href: "/rooms/standard-room",
  },
  {
    name: "Premium teri parvarishi",
    blurb:
      "Chuqur namlanish va porlash uchun premium formulalar — sezgir teriga ham mos",
    size: "60–90 daqiqa",
    view: "Premium protokol",
    features: "Lifting, serum, himoya",
    perfectFor: "Maxsus tadbir oldidan",
    image: STOCK.premiumCare,
    href: "/rooms/executive-suite",
  },
  {
    name: "Anti-age kompleks",
    blurb:
      "Elastiklik va yuz ovalini qo‘llab-quvvatlovchi kompleks muolaja",
    size: "75–90 daqiqa",
    view: "Kurs tavsiya etiladi",
    features: "Massaj, peeling, maska",
    perfectFor: "Qarish belgilariga e’tibor",
    image: STOCK.antiageSoft,
    href: "/rooms/sea-view-room",
  },
  {
    name: "Kimyoviy peeling",
    blurb:
      "Rang notekisligi va xiralikni yumshatish uchun nazoratli peeling protokoli",
    size: "40–50 daqiqa",
    view: "Teri tipiga mos",
    features: "Testlash, peeling, himoya",
    perfectFor: "Yangilanish izlovchilar",
    image: STOCK.peelGlow,
    href: "/rooms/chemical-peel",
  },
  {
    name: "Imzoli yuz massaji",
    blurb:
      "Zo‘riqishni kamaytirish va yuzga dam berish — yumshoq limfa ritualli",
    size: "45–60 daqiqa",
    view: "Dam olish",
    features: "Massaj, serum, maska",
    perfectFor: "Stress va charchoq",
    image: STOCK.ritualMassage,
    href: "/rooms/face-massage",
  },
  {
    name: "Kosmetolog konsultatsiyasi",
    blurb:
      "Teri holatini baholash, maqsadni aniqlash va shaxsiy parvarish rejasini tuzish",
    size: "30–40 daqiqa",
    view: "Shaxsiy reja",
    features: "Diagnostika, tavsiya, savol-javob",
    perfectFor: "Birinchi tashrif",
    image: STOCK.consultation,
    href: "/rooms/consultation",
  },
];

export const homeStats = {
  intro:
    "7+ yillik tajriba va mamnun mijozlarim — ishonchli parvarish va aniq natijaga sodiqligimni ko‘rsatadi",
  items: [
    { value: "98%", label: "Mijoz ehtiyojlari oldindan hisobga olingan" },
    { value: "85%", label: "Qaytib keluvchi mijozlar ulushi" },
    { value: "100%", label: "Shaxsiy konsultatsiya" },
    { value: "12+", label: "Asosiy muolaja yo‘nalishlari" },
    { value: "40+", label: "Teri parvarishi protokollari" },
    { value: "4.9", label: "O‘rtacha yulduz reytingi" },
    { value: "500+", label: "Bajarilgan seanslar" },
    { value: "7+", label: "Yillik amaliyot" },
  ],
  images: [
    STOCK.creamHands,
    STOCK.skincareShelf,
    STOCK.resultGlow,
    STOCK.cabinetSoft,
  ],
};

export const homeBusiness = {
  title: "Maxsus paketlarim",
  body: "Bir seansdan to‘liq parvarish kursigacha — maqsadingizga mos paketlar, aniq jadval va shaxsiy kuzatuv",
  cta: "Paketni ko‘rish",
  ctaHref: "/banquet",
  images: [STOCK.premiumCare, STOCK.towelsSpa],
};

export const homeDining = {
  eyebrow: "Parvarish tajribasi",
  title:
    "Har bir muolaja tushunarli, har bir qadam ochiq va har bir natija sezilarli bo‘lishi uchun ishlayman",
  tags: [
    "Yuz diagnostikasi",
    "Shaxsiy protokol",
    "Steril muhit",
    "Premium formulalar",
    "Uy parvarishi rejasi",
    "Konsultatsiya",
    "Anti-age yondashuv",
    "Sezgir teri uchun",
    "Mavsumiy tavsiyalar",
    "Kurs kuzatuvi",
  ],
  images: [
    STOCK.facialDevice,
    STOCK.homeCare,
    STOCK.naturalPortrait,
    STOCK.closePortrait,
  ],
};

export const homeExperience = {
  eyebrow: "Nimani his qilasiz",
  title: "A’lo natijani kuting — ishonchli parvarish va’da qilaman",
  cta: "Ishlarimni ko‘rish",
  ctaHref: "#gallery",
  items: [
    {
      title: "Iliq va tushunarli kutib olish",
      body: "Seansni oson boshlang — tinch muhit, aniq tushuntirish va ehtiyojlaringizni tinglash. Birinchi daqiqadan qulayligingiz ustuvor.",
    },
    {
      title: "Oddiy va tezkor yozilish",
      body: "Qabulga yozilish silliq — telefon, Telegram yoki sayt orqali. Tasdiq va eslatma bilan.",
    },
  ],
  images: [STOCK.clinicCalm, STOCK.spaRelax],
};

export const homeGallery = [
  { label: "tozalash", src: STOCK.facialCleanse },
  { label: "parvarish", src: STOCK.facialMask },
  { label: "natija", src: STOCK.resultGlow },
  { label: "kabinet", src: STOCK.cabinetSoft },
];

export const homeTestimonials = [
  {
    name: "Nilufar Karimova",
    role: "Mijoz · Toshkent",
    quote:
      "Konsultatsiyadan seans oxirigacha hamma narsa tushunarli va e’tiborli edi. Teri holatim yaxshilandi, uy parvarishi ham aniq berildi.",
    image: STOCK.testimonial1,
  },
  {
    name: "Madina Aliyeva",
    role: "Mijoz · Farg‘ona",
    quote:
      "Professional, tinch muhit va chinakam natija. Qaytib kelishim tabiiy — ishonch paydo bo‘ldi.",
    image: STOCK.testimonial2,
  },
  {
    name: "Dilnoza Rahimova",
    role: "Mijoz · Toshkent",
    quote:
      "Malika bilan har bir detalga e’tibor seziladi — tushuntirish aniq, muhit tinch, natija ko‘rinadi.",
    image: STOCK.testimonial3,
  },
];

export const homeCta = {
  title: "Oddiy parvarishdan chiqing — professional natijani his eting",
  cta: "Qabulga yozilish",
  ctaHref: "/contact",
  image: STOCK.ctaSoft,
};
