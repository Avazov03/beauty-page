import { STOCK } from "@/data/stock";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category?: string;
  author?: string;
  body: string[];
};

const sharedBodyBlocks = [
  "Yuz tozalashdan uy parvarishigacha — blogimiz teringiz uchun amaliy maslahat va ishonchli ma’lumotlarni ulashadi",
  "Diagnostika, ilhom va kundalik odatlarni bog‘laydigan hikoya va maslahatlarga sho‘ng‘ing — sog‘lom teri uchun",
  "Mutaxassis nigohini ochadigan va har bir seansni tushunarli qiladigan maslahatlarni kashf eting",
];

const blogImages = [
  STOCK.blog1,
  STOCK.blog2,
  STOCK.blog3,
  STOCK.blog4,
  STOCK.blog5,
  STOCK.blog6,
  STOCK.facialMask,
  STOCK.antiageSoft,
  STOCK.homeCare,
];

export const blogPosts: BlogPost[] = [
  {
    slug: "creating-memorable-stays-through-genuine-hospitality",
    title: "Chinakam g‘amxo‘rlik orqali unutilmas parvarish",
    excerpt:
      "O‘ylab ishlangan protokol, iliq konsultatsiya va aniq uy tavsiyalari — har bir seansni ishonchli tajribaga aylantiradi.",
    image: blogImages[0],
    date: "21-yanvar, 2026",
    category: "Parvarish",
    author: "Avazov Og‘abek",
    body: [
      "Har bir muolaja ortidagi hikoya va tafsilotlarni kashf eting",
      ...sharedBodyBlocks,
    ],
  },
  {
    slug: "making-every-business-event-smooth-and-memorable",
    title: "Har bir seansni silliq va unutilmas qilish",
    excerpt:
      "Aniq reja, e’tiborli xizmat va teri tipiga mos yondashuv — oddiy tashrifni natijali tajribaga aylantiradi.",
    image: blogImages[1],
    date: "21-yanvar, 2026",
    category: "Konsultatsiya",
    author: "Avazov Og‘abek",
    body: [
      "Har bir seansni unutilmas qiladigan maslahatlarni oching",
      ...sharedBodyBlocks,
    ],
  },
  {
    slug: "indulge-in-luxurious-rooms-with-panoramic-sea-views",
    title: "Premium anti-age muolajalardan bahramand bo‘ling",
    excerpt:
      "Elastiklik, porlash va yuz ovalini qo‘llab-quvvatlash haqidagi ilhomli maslahatlar.",
    image: blogImages[2],
    date: "21-yanvar, 2026",
    category: "Anti-age",
    author: "Avazov Og‘abek",
    body: [
      "Har bir muolaja ortidagi tafsilotlarni kashf eting",
      ...sharedBodyBlocks,
    ],
  },
  {
    slug: "a-taste-journey-through-our-hotels-finest-culinary-creations",
    title: "Uy parvarishi bo‘ylab amaliy qo‘llanma",
    excerpt:
      "Muolajadan keyin nima qilish kerak: mahsulotlar, SPF va kundalik odatlar haqida foydali yo‘riqnoma.",
    image: blogImages[3],
    date: "21-yanvar, 2026",
    category: "Uy parvarishi",
    author: "Avazov Og‘abek",
    body: [
      "Har bir tavsiya ortidagi sabablarni kashf eting",
      "Yuz tozalashdan mahsulot tanlovigacha — blogimiz teringizni qo‘llab-quvvatlaydi",
      sharedBodyBlocks[1],
      sharedBodyBlocks[2],
    ],
  },
  {
    slug: "open-the-door-to-roomy-living-made-for-whatever-you-want",
    title: "Teringiz maqsadiga mos reja eshigini oching",
    excerpt:
      "Qulaylik, bilím va g‘amxo‘rlikni nishonlaydigan maslahatlar — har bir detal natijani yuksaltiradi.",
    image: blogImages[4],
    date: "21-yanvar, 2026",
    category: "Reja",
    author: "Avazov Og‘abek",
    body: [
      "Har bir seansni unutilmas qiladigan maslahatlarni kashf eting",
      ...sharedBodyBlocks,
    ],
  },
  {
    slug: "enjoy-a-vacation-that-feels-like-a-touch-of-heaven",
    title: "Kabinetda tinchlik va ishonchni his eting",
    excerpt:
      "Nafis muhit, aniq protokol va shaxsiy yondashuv — oddiy tashrifni qulay tajribaga aylantiradi.",
    image: blogImages[5],
    date: "21-yanvar, 2026",
    author: "Avazov Og‘abek",
    body: [
      "Har bir muolaja ortidagi tafsilotlarni kashf eting",
      ...sharedBodyBlocks,
    ],
  },
  {
    slug: "crafting-special-events-that-turn-into-memories-youll-treasure",
    title: "Maxsus paketlar: esda qoladigan natija",
    excerpt:
      "Kurslar, juftlik seanslari va mavsumiy dasturlar — maqsadingizga mos yo‘l.",
    image: blogImages[6],
    date: "21-yanvar, 2026",
    body: [
      "Har bir paket ortidagi mantiqni oching",
      ...sharedBodyBlocks,
    ],
  },
  {
    slug: "discover-the-latest-menu-updates-coming-this-march",
    title: "Bahorgi yangi muolajalarni kashf eting",
    excerpt:
      "Mavsumiy protokol yangilanishlari — bahor terisi uchun yumshoq va samarali yondashuvlar.",
    image: blogImages[7],
    date: "21-yanvar, 2026",
    body: [
      "Yangi muolajalar haqidagi maslahatlarni kashf eting",
      ...sharedBodyBlocks,
    ],
  },
  {
    slug: "the-april-issue-of-travel-magazine-featured-elbergo-hotel",
    title: "Malika Karimova: ishonch va natija haqida",
    excerpt:
      "Har bir seans ortida diagnostika, g‘amxo‘rlik va detal bor — shaxsiy parvarish qanday yaratilishini kashf eting.",
    image: blogImages[8],
    date: "21-yanvar, 2026",
    body: [
      "Har bir seans ortidagi tafsilotlarni kashf eting",
      ...sharedBodyBlocks,
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
