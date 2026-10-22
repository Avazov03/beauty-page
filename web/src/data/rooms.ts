const CDN =
  "https://cdn.prod.website-files.com/6927ddcc377dce6e20188e35";
const CDN_ROOM =
  "https://cdn.prod.website-files.com/693106e31a556f4c90b2ff6a";

export type RoomSpecs = {
  rating: number;
  reviewLabel: string;
  comfort: number;
  facilities: number;
  checkIn: string;
  checkOut: string;
  pricePerNight: string;
};

export type RoomDetail = {
  slug: string;
  name: string;
  blurb: string;
  highlights: string[];
  price: string;
  image: string;
  images: string[];
  overview: string;
  specs: RoomSpecs;
  amenities: string[];
};

const sharedOverview =
  "Har bir muolaja teringiz holatiga moslab tanlanadi: tushuntirish, steril muhit va e’tiborli mutaxassis yondashuvi. Natija — toza, sog‘lom va porloq teri.";

const sharedQulayliklar = [
  "Oldindan konsultatsiya",
  "Steril jihozlar",
  "Shaxsiy yondashuv",
  "Uy parvarishi tavsiyasi",
  "1 seans / kurs",
  "Testlash (zarur bo‘lsa)",
  "Keyingi qadam rejasi",
  "Qulay kabinet",
];

const sharedSpecs = {
  rating: 4.8,
  reviewLabel: "100 ta sharh asosida",
  comfort: 4.7,
  facilities: 4.9,
  checkIn: "10:00",
  checkOut: "19:00",
} satisfies Omit<RoomSpecs, "pricePerNight">;

const galleryPool = [
  `${CDN_ROOM}/6952639c8cc1cb88dbe36953_image%20430-Picsart-AiImageEnhancer%201%20(3).webp`,
  `${CDN_ROOM}/695261432e5b21fe7b2227b7_12613%201.webp`,
  `${CDN_ROOM}/694e302c655a37d8f6deeff6_29281%201%20(1).webp`,
  `${CDN_ROOM}/6952615bb14601676a64da0d_2150497283%20(1)%201.webp`,
  `${CDN_ROOM}/6952616fea419c30509c786e_image%20487-Picsart-AiImageEnhancer%201.webp`,
  `${CDN_ROOM}/695261b20eb6cf95422d5630_image%20432-Picsart-AiImageEnhancer%201%20(2).webp`,
  `${CDN_ROOM}/694e2aa9443a7905a36481d2_room-page-image-one.webp`,
  `${CDN_ROOM}/694e2c2eb560e283ed1befb4_room-page-small-image-one.webp`,
  `${CDN_ROOM}/694e2a85b704b152be171495_room-page-image-three.webp`,
  `${CDN}/69561ff968fa7d3e262132c9_image%20426-Picsart-AiImageEnhancer%201%20(1).webp`,
  `${CDN}/69561ff7648e96670fe6964d_image%20433-Picsart-AiImageEnhancer%201%20(3).webp`,
  `${CDN}/69561ff7970dc664aef5fcdc_1771%201.webp`,
];

function galleryFrom(offset: number): string[] {
  const out: string[] = [];
  for (let i = 0; i < 9; i++) {
    out.push(galleryPool[(offset + i) % galleryPool.length]);
  }
  return out;
}

/**
 * Demo menyu — yakka kosmetolog uchun tipik yo‘nalishlar.
 * Home statistikadagi “12+” ga yaqin, lekin sotiladigan shablon uchun aniq ro‘yxat.
 */
export const roomsListing = [
  {
    slug: "standard-room",
    name: "Yuzni chuqur tozalash",
    blurb:
      "Teri tipingizga mos chuqur tozalash — poralar, yallig‘lanish va rang notekisligiga yumshoq, professional yondashuv",
    highlights: [
      "Konsultatsiya kiritilgan",
      "Barcha teri tiplari",
      "45–60 daqiqa",
      "Uy parvarishi rejasi",
      "Steril muhit",
    ],
    price: "180 000 so‘m",
    image: `${CDN}/694e597d59f693d74fc55932_image%20434-Picsart-AiImageEnhancer%201.webp`,
  },
  {
    slug: "executive-suite",
    name: "Premium teri parvarishi",
    blurb:
      "Chuqur namlanish, lifting effekti va porlash uchun premium protokol — sezgir teriga ham moslashtiriladi",
    highlights: [
      "Diagnostika",
      "Premium formulalar",
      "60–90 daqiqa",
      "Anti-stress ritual",
      "Shaxsiy reja",
    ],
    price: "280 000 so‘m",
    image: `${CDN}/694e59b978f8bc2c0529036a_image%20435-Picsart-AiImageEnhancer%201.webp`,
  },
  {
    slug: "sea-view-room",
    name: "Anti-age kompleks",
    blurb:
      "Qarish belgilari, elastiklik va yuz ovalini qo‘llab-quvvatlovchi kompleks muolaja",
    highlights: [
      "Konsultatsiya",
      "Kurs tavsiyasi",
      "75–90 daqiqa",
      "Uyda davom ettirish",
      "Natijaga yo‘naltirilgan",
    ],
    price: "350 000 so‘m",
    image: `${CDN}/694e59b966e523eacd429043_image%20436-Picsart-AiImageEnhancer%201.webp`,
  },
  {
    slug: "consultation",
    name: "Kosmetolog konsultatsiyasi",
    blurb:
      "Teri holatini baholash, maqsadni aniqlash va shaxsiy parvarish rejasini tuzish — birinchi tashrif uchun",
    highlights: [
      "Diagnostika",
      "Savol-javob",
      "30–40 daqiqa",
      "Shaxsiy reja",
      "Mahsulot tavsiyasi",
    ],
    price: "100 000 so‘m",
    image: `${CDN}/694a22051baed5b350dc6d7d_image%20430-Picsart-AiImageEnhancer%201.webp`,
  },
  {
    slug: "chemical-peel",
    name: "Kimyoviy peeling",
    blurb:
      "Rang notekisligi, xiralik va yuzaki nuqsonlarni yumshatish uchun nazoratli peeling protokoli",
    highlights: [
      "Teri tipiga mos",
      "Testlash",
      "40–50 daqiqa",
      "Tiklanish maslahati",
      "SPF eslatmasi",
    ],
    price: "220 000 so‘m",
    image: `${CDN}/69316279603aa77764416443_image%2015-Picsart-AiImageEnhancer%201.webp`,
  },
  {
    slug: "face-massage",
    name: "Imzoli yuz massaji",
    blurb:
      "Zo‘riqishni kamaytirish, limfa oqimini qo‘llab-quvvatlash va yuzga dam berish — yumshoq ritual",
    highlights: [
      "Chuqur dam olish",
      "Limfa yondashuvi",
      "45–60 daqiqa",
      "Yog‘/serum tanlovi",
      "Uyda davom",
    ],
    price: "160 000 so‘m",
    image: `${CDN}/694a220502bfae7bbbd483da_image%2014-Picsart-AiImageEnhancer%201.webp`,
  },
  {
    slug: "pigmentation-care",
    name: "Pigmentatsiyaga qarshi kurs",
    blurb:
      "Dog‘lar, quyosh izlari va notekis rang tonini yumshatishga qaratilgan bosqichma-bosqich yondashuv",
    highlights: [
      "Diagnostika",
      "Kurs rejasi",
      "50–70 daqiqa",
      "Himoya tavsiyasi",
      "Uy protokoli",
    ],
    price: "260 000 so‘m",
    image: `${CDN}/694a22058acf0ce292e687df_image%20432-Picsart-AiImageEnhancer%201.webp`,
  },
  {
    slug: "acne-protocol",
    name: "Muammoli teri protokoli",
    blurb:
      "Yallig‘lanish, poralar va akne izlariga e’tibor — yumshoq tozalash va tinchlantirish bilan",
    highlights: [
      "Muammoli zona",
      "Steril ishlov",
      "50–70 daqiqa",
      "Uyda nazorat",
      "Kurs mumkin",
    ],
    price: "240 000 so‘m",
    image: `${CDN}/69313766db72be49e3b25c9d_image%208-Picsart-AiImageEnhancer%201.webp`,
  },
] as const;

export const roomDetails: RoomDetail[] = roomsListing.map((room, index) => ({
  slug: room.slug,
  name: room.name,
  blurb: room.blurb,
  highlights: [...room.highlights],
  price: room.price,
  image: room.image,
  images: galleryFrom(index * 2),
  overview: sharedOverview,
  specs: { ...sharedSpecs, pricePerNight: room.price },
  amenities: sharedQulayliklar,
}));

export function getRoomBySlug(slug: string): RoomDetail | undefined {
  return roomDetails.find((room) => room.slug === slug);
}
