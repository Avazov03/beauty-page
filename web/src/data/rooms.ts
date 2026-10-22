import { STOCK } from "@/data/stock";

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
  STOCK.facialCleanse,
  STOCK.facialMask,
  STOCK.facialDevice,
  STOCK.creamHands,
  STOCK.peelGlow,
  STOCK.antiageSoft,
  STOCK.premiumCare,
  STOCK.acneCare,
  STOCK.cabinetSoft,
  STOCK.resultGlow,
  STOCK.skincareShelf,
  STOCK.homeCare,
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
    image: STOCK.facialCleanse,
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
    image: STOCK.premiumCare,
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
    image: STOCK.antiageSoft,
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
    image: STOCK.consultation,
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
    image: STOCK.peelGlow,
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
    image: STOCK.ritualMassage,
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
    image: STOCK.glowPortrait,
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
    image: STOCK.acneCare,
  },
] as const;

export const roomDetails: RoomDetail[] = roomsListing.map((room, index) => ({
  slug: room.slug,
  name: room.name,
  blurb: room.blurb,
  highlights: [...room.highlights],
  price: room.price,
  image: room.image,
  images:
    room.slug === "face-massage"
      ? [
          STOCK.ritualMassage,
          STOCK.massageFace,
          STOCK.spaRelax,
          ...galleryFrom(index * 2).slice(3),
        ]
      : galleryFrom(index * 2),
  overview: sharedOverview,
  specs: { ...sharedSpecs, pricePerNight: room.price },
  amenities: sharedQulayliklar,
}));

export function getRoomBySlug(slug: string): RoomDetail | undefined {
  return roomDetails.find((room) => room.slug === slug);
}
