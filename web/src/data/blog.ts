const CDN_POST =
  "https://cdn.prod.website-files.com/693106e31a556f4c90b2ff6a";

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

export const blogPosts: BlogPost[] = [
  {
    slug: "creating-memorable-stays-through-genuine-hospitality",
    title: "Chinakam g‘amxo‘rlik orqali unutilmas parvarish",
    excerpt:
      "O‘ylab ishlangan protokol, iliq konsultatsiya va aniq uy tavsiyalari — har bir seansni ishonchli tajribaga aylantiradi.",
    image: `${CDN_POST}/695b3bb9394b4ab580c6adae_image-Picsart-AiImageEnhancer%20(7)%201%20(2).webp`,
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
    image: `${CDN_POST}/695b3bc626bdde8ccb66ede0_image-Picsart-AiImageEnhancer%20(5)%201%20(2).webp`,
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
    image: `${CDN_POST}/695b3bd55fed08c9b8eee002_image%20511%20(2).webp`,
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
    image: `${CDN_POST}/695b3be980836a102f8ce989_image-Picsart-AiImageEnhancer%20(4)%201%20(2).webp`,
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
    image: `${CDN_POST}/695b3c069765b079b0346bc5_pexels-ahmetcotur-31817153-Picsart-AiImageEnhancer%201%20(2).webp`,
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
    image: `${CDN_POST}/695b3c1cd763a2a11296bdef_image-Picsart-AiImageEnhancer%20(2)%201%20(2).webp`,
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
    image: `${CDN_POST}/695b3c31ae117b4f685d4e3d_image-Picsart-AiImageEnhancer%20(3)%201%20(2).webp`,
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
    image: `${CDN_POST}/695b3c409f475ee318c50c0d_image-Picsart-AiImageEnhancer%20(1)%201%20(2).webp`,
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
    image: `${CDN_POST}/695b3c537b6f44e4fa4251e6_image-Picsart-AiImageEnhancer%201%20(2).webp`,
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
