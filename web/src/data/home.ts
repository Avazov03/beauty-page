const CDN =
  "https://cdn.prod.website-files.com/6927ddcc377dce6e20188e35";

export const homeHero = {
  title: "Sog‘lom teri va ishonchli parvarish — shaxsiy yondashuv bilan",
  cta: "Qabulga yozilish",
  ctaHref: "/contact",
  offer: "Birinchi konsultatsiya — cheklangan muddat",
  poster: `${CDN}/694e6076e77e5b3348ce2188_18705145-hd_1920_1080_30fps%20(1)_poster.0000000.jpg`,
  videoWebm: `${CDN}/694e6076e77e5b3348ce2188_18705145-hd_1920_1080_30fps%20(1)_webm.webm`,
  videoMp4: `${CDN}/694e6076e77e5b3348ce2188_18705145-hd_1920_1080_30fps%20(1)_mp4.mp4`,
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
  images: [
    `${CDN}/6931319859f3f47cbae93570_image%209-Picsart-AiImageEnhancer%201.webp`,
    `${CDN}/69313766db72be49e3b25c9d_image%208-Picsart-AiImageEnhancer%201.webp`,
    `${CDN}/69313766c80bb7026ddf9a8f_febrian-zakaria-gwV9eklemSg-unsplash-Picsart-AiImageEnhancer%201.webp`,
  ],
} as const;

export const featuredRooms = [
  {
    name: "Yuzni chuqur tozalash",
    blurb:
      "Poralarni tozalash, yallig‘lanishni yumshatish va terini yangilash — professional protokol bilan",
    size: "45–60 daqiqa",
    view: "Barcha teri tiplari",
    features: "Diagnostika, tozalash, maska",
    perfectFor: "Muntazam parvarish izlovchilar",
    image: `${CDN}/69316279603aa77764416443_image%2015-Picsart-AiImageEnhancer%201.webp`,
  },
  {
    name: "Premium teri parvarishi",
    blurb:
      "Chuqur namlanish va porlash uchun premium formulalar — sezgir teriga ham mos",
    size: "60–90 daqiqa",
    view: "Premium protokol",
    features: "Lifting, serum, himoya",
    perfectFor: "Maxsus tadbir oldidan",
    image: `${CDN}/694a220502bfae7bbbd483da_image%2014-Picsart-AiImageEnhancer%201.webp`,
  },
  {
    name: "Anti-age kompleks",
    blurb:
      "Elastiklik va yuz ovalini qo‘llab-quvvatlovchi kompleks muolaja",
    size: "75–90 daqiqa",
    view: "Kurs tavsiya etiladi",
    features: "Massaj, peching, maska",
    perfectFor: "Qarish belgilariga e’tibor",
    image: `${CDN}/694a22058acf0ce292e687df_image%20432-Picsart-AiImageEnhancer%201.webp`,
  },
  {
    name: "Kosmetolog konsultatsiyasi",
    blurb:
      "Teri holatini baholash, maqsadni aniqlash va shaxsiy parvarish rejasini tuzish",
    size: "30–40 daqiqa",
    view: "Shaxsiy reja",
    features: "Diagnostika, tavsiya, savol-javob",
    perfectFor: "Birinchi tashrif",
    image: `${CDN}/694a22051baed5b350dc6d7d_image%20430-Picsart-AiImageEnhancer%201.webp`,
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
    `${CDN}/6932619969ad70245135cf5a_image%20391-Picsart-AiImageEnhancer%20(1)%201.webp`,
    `${CDN}/6932616fcf7cf36ded1a13d4_image%20388-Picsart-AiImageEnhancer%201.webp`,
    `${CDN}/6932616f50656eb91097c8bb_image%20390-Picsart-AiImageEnhancer%201.webp`,
    `${CDN}/6932616fdf1a9a0d22fcfbb8_image%20389-Picsart-AiImageEnhancer%201.webp`,
  ],
};

export const homeBusiness = {
  title: "Maxsus paketlarim",
  body: "Bir seansdan to‘liq parvarish kursigacha — maqsadingizga mos paketlar, aniq jadval va shaxsiy kuzatuv",
  cta: "Paketni ko‘rish",
  ctaHref: "/banquet",
  images: [
    `${CDN}/693266cb0d38c5e5209caa4e_image%2016-Picsart-AiImageEnhancer%201.webp`,
    `${CDN}/693267e620071783e1ab606b_2150167242%201.webp`,
  ],
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
    `${CDN}/69327199f5558c90f6e5c83f_Mask%20group%20-%202025-12-05T110746.363%20(1).webp`,
    `${CDN}/693273db74c49f01f74eac4d_Mask%20group%20-%202025-12-05T110817.299%20(1).webp`,
    `${CDN}/69327198d267c913caf8c986_Mask%20group%20-%202025-12-05T110844.683%20(1).webp`,
    `${CDN}/6966378eb6463dd27b293bb1_pexels-keeganjchecks-19199133%20(1)%201.webp`,
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
  images: [
    `${CDN}/6932aa6298bbb2085a04e48b_Mask%20group%20-%202025-12-05T151743.140.webp`,
    `${CDN}/6932aa62bc54d1e8a0f3884e_90549%201.webp`,
  ],
};

export const homeGallery = [
  {
    label: "tozalash",
    src: `${CDN}/69438ddf3b026974c61e1d8e_image%20213-Picsart-AiImageEnhancer%201.webp`,
  },
  {
    label: "parvarish",
    src: `${CDN}/69438ddf641c80e912060899_5697%201.webp`,
  },
  {
    label: "natija",
    src: `${CDN}/69438de04d6267d938a345cf_9391%201.webp`,
  },
  {
    label: "kabinet",
    src: `${CDN}/69438ddfe3ab23cceada7edf_90549%201%20(1).webp`,
  },
];

export const homeTestimonials = [
  {
    name: "Emerson Geidt",
    role: "Mijoz · Toshkent",
    quote:
      "Konsultatsiyadan seans oxirigacha hamma narsa tushunarli va e’tiborli edi. Teri holatim yaxshilandi, uy parvarishi ham aniq berildi.",
    image: `${CDN}/6943a0c62611ec5f7d72661e_Mask%20group%20-%202025-12-18T120403.371.webp`,
  },
  {
    name: "Oliver Bennett",
    role: "Mijoz · Farg‘ona",
    quote:
      "Professional, tinch muhit va chinakam natija. Qaytib kelishim tabiiy — ishonch paydo bo‘ldi.",
    image: `${CDN}/6943a0c6cfc7fa4f759608c3_Mask%20group%20-%202025-12-18T120540.982.webp`,
  },
  {
    name: "Dilnoza R.",
    role: "Mijoz · Toshkent",
    quote:
      "Malika bilan har bir detalga e’tibor seziladi — tushuntirish aniq, muhit tinch, natija ko‘rinadi.",
    image: `${CDN}/6943a0c6112009db1bcc3d53_Mask%20group%20-%202025-12-18T120456.254.webp`,
  },
];

export const homeCta = {
  title: "Oddiy parvarishdan chiqing — professional natijani his eting",
  cta: "Qabulga yozilish",
  ctaHref: "/contact",
  image: `${CDN}/693b8de4d00c720d07d2645c_image%2026-Picsart-AiImageEnhancer%201%20(1).webp`,
};
