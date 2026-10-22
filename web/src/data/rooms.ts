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

/** Cards on the /rooms listing page (xizmatlar) */
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
] as const;

export const roomDetails: RoomDetail[] = [
  {
    slug: "standard-room",
    name: "Yuzni chuqur tozalash",
    blurb: roomsListing[0].blurb,
    highlights: [...roomsListing[0].highlights],
    price: roomsListing[0].price,
    image: `${CDN_ROOM}/6952639c8cc1cb88dbe36953_image%20430-Picsart-AiImageEnhancer%201%20(3).webp`,
    images: [
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
    ],
    overview: sharedOverview,
    specs: { ...sharedSpecs, pricePerNight: roomsListing[0].price },
    amenities: sharedQulayliklar,
  },
  {
    slug: "sea-view-room",
    name: "Anti-age kompleks",
    blurb: roomsListing[2].blurb,
    highlights: [...roomsListing[2].highlights],
    price: roomsListing[2].price,
    image: `${CDN_ROOM}/69526349fe6b037995df5068_image%20433-Picsart-AiImageEnhancer%201%20(1).webp`,
    images: [
      `${CDN_ROOM}/69526349fe6b037995df5068_image%20433-Picsart-AiImageEnhancer%201%20(1).webp`,
      `${CDN_ROOM}/695261432e5b21fe7b2227b7_12613%201.webp`,
      `${CDN_ROOM}/694e302c655a37d8f6deeff6_29281%201%20(1).webp`,
      `${CDN_ROOM}/695261554842f7fea6eab2e8_151611%201.webp`,
      `${CDN_ROOM}/6952615bb14601676a64da0d_2150497283%20(1)%201.webp`,
      `${CDN_ROOM}/694e304611d7e88a7185cc11_image%20430-Picsart-AiImageEnhancer%201%20(2).webp`,
      `${CDN_ROOM}/6952616fea419c30509c786e_image%20487-Picsart-AiImageEnhancer%201.webp`,
      `${CDN_ROOM}/694e2aa9443a7905a36481d2_room-page-image-one.webp`,
      `${CDN_ROOM}/694e2c2eb560e283ed1befb4_room-page-small-image-one.webp`,
      `${CDN_ROOM}/694e2a85b704b152be171495_room-page-image-three.webp`,
      `${CDN}/69561ff968fa7d3e262132c9_image%20426-Picsart-AiImageEnhancer%201%20(1).webp`,
      `${CDN}/69561ff7648e96670fe6964d_image%20433-Picsart-AiImageEnhancer%201%20(3).webp`,
    ],
    overview: sharedOverview,
    specs: { ...sharedSpecs, pricePerNight: roomsListing[2].price },
    amenities: sharedQulayliklar,
  },
  {
    slug: "executive-suite",
    name: "Premium teri parvarishi",
    blurb: roomsListing[1].blurb,
    highlights: [...roomsListing[1].highlights],
    price: roomsListing[1].price,
    image: `${CDN_ROOM}/6952637661ca8c9f992aea81_image%20432-Picsart-AiImageEnhancer%202.webp`,
    images: [
      `${CDN_ROOM}/6952637661ca8c9f992aea81_image%20432-Picsart-AiImageEnhancer%202.webp`,
      `${CDN_ROOM}/695261432e5b21fe7b2227b7_12613%201.webp`,
      `${CDN_ROOM}/694e302c655a37d8f6deeff6_29281%201%20(1).webp`,
      `${CDN_ROOM}/695261554842f7fea6eab2e8_151611%201.webp`,
      `${CDN_ROOM}/6952615bb14601676a64da0d_2150497283%20(1)%201.webp`,
      `${CDN_ROOM}/695261b20eb6cf95422d5630_image%20432-Picsart-AiImageEnhancer%201%20(2).webp`,
      `${CDN}/69452c5ad14c210fde417f7d_image%20424-Picsart-AiImageEnhancer%201%20(1).webp`,
      `${CDN_ROOM}/694e2aa9443a7905a36481d2_room-page-image-one.webp`,
      `${CDN_ROOM}/694e2c2eb560e283ed1befb4_room-page-small-image-one.webp`,
      `${CDN_ROOM}/694e2a85b704b152be171495_room-page-image-three.webp`,
      `${CDN}/69561ff968fa7d3e262132c9_image%20426-Picsart-AiImageEnhancer%201%20(1).webp`,
      `${CDN}/69561ff7648e96670fe6964d_image%20433-Picsart-AiImageEnhancer%201%20(3).webp`,
    ],
    overview: sharedOverview,
    specs: { ...sharedSpecs, pricePerNight: roomsListing[1].price },
    amenities: sharedQulayliklar,
  },
];

export function getRoomBySlug(slug: string): RoomDetail | undefined {
  return roomDetails.find((room) => room.slug === slug);
}
