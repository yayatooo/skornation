export const Navlink = [
  {
    id: 1,
    name: "Home",
    href: "home",
  },
  {
    id: 2,
    name: "Brands",
    href: "brand",
  },
  {
    id: 3,
    name: "About",
    href: "about",
  },
  {
    id: 4,
    name: "Sale",
    href: "sale",
  },
  {
    id: 5,
    name: "Store",
    href: "store",
  },
];

export const ProductsDummy = [
  {
    id: 1,
    title: "Nike Zoom Superfly 9 Academy Fg/Mg",
    genderCategory: "Men's",
    image: "/assets/products/product-1.jpg",
  },
  {
    id: 2,
    title: "Nike Offcourt Adjust",
    genderCategory: "Women's",
    image: "/assets/products/product-2.png",
  },
  {
    id: 3,
    title: "Air Jordan 1 Retro High Og",
    genderCategory: "Unisex",
    image: "/assets/products/product-3.png",
  },
  {
    id: 4,
    title: "Nike Zoom Bella 6",
    genderCategory: "Women's",
    image: "/assets/products/product-4.png",
  },
  {
    id: 5,
    title: "Cloudultra 2",
    genderCategory: "Men's",
    image: "/assets/products/product-5.webp",
  },
  {
    id: 6,
    title: "Cloudrunner 2",
    genderCategory: "Men's",
    image: "/assets/products/product-6.jpg",
  },
  {
    id: 7,
    title: "Cloud 5",
    genderCategory: "Men's",
    image: "/assets/products/product-7.jpeg",
  },
  {
    id: 8,
    title: "Cloudmonster 2",
    genderCategory: "Men's",
    image: "/assets/products/product-8.webp",
  },
  {
    id: 9,
    title: "Nike Sportswear Premium Essentials",
    genderCategory: "Men's",
    image: "/assets/products/product-9.png",
  },
  {
    id: 10,
    title: "Nike Dri-Fit Stride",
    genderCategory: "Men's",
    image: "/assets/products/product-10.png",
  }
];

export const BannerSlide = [
  {
    id: 1,
    title: "cover",
    image: "/assets/cover-3.jpg",
  },
  {
    id: 2,
    title: "cover",
    image: "/assets/cover-1.jpg",
  },
  {
    id: 3,
    title: "cover",
    image: "/assets/cover-2.png",
  },
  {
    id: 4,
    title: "cover",
    image: "/assets/cover-4.jpg",
  },
];

export const GallerySlide = [
  {
    id: 1,
    title: "gallery",
    image: "/assets/gallery-1.jpg",
  },
  {
    id: 2,
    title: "gallery",
    image: "/assets/gallery-2.jpg",
  },
  {
    id: 3,
    title: "gallery",
    image: "/assets/gallery-3.jpg",
  },
  {
    id: 4,
    title: "gallery",
    image: "/assets/gallery-4.png",
  },
  {
    id: 5,
    title: "gallery",
    image: "/assets/gallery-5.png",
  },
];

export const Brands = [
  {
    id: 2,
    title: "On",
    image: "/assets/bg-brand-3.jpg",
    logo: "/assets/brand-2.png",
    width: 80,
    height: 50,
    
  },
  {
    id: 1,
    title: "Nike",
    image: "/assets/bg-brand-2.jpg",
    logo: "/assets/brand-1.png",
    width: 122,
    height: 44,
  },
  {
    id: 3,
    title: "Santa Cruz",
    image: "/assets/bg-brand-1.jpg",
    logo: "/assets/brand-3.png",
    width: 120,
    height: 80,
  },
  {
    id: 4,
    title: "K-Swiss",
    image: "/assets/bg-brand-4.jpg",
    logo: "/assets/brand-4.png",
    width: 120,
    height: 80,
  },
];

export const Category = [
  {
    id: 1,
    title: "Apparel",
    image: "/assets/category-2.jpg",
  },
  {
    id: 2,
    title: "Footwear",
    image: "/assets/category-3.jpg",
  },
  {
    id: 3,
    title: "Accesories",
    image: "/assets/category-1.jpg",
  },
];


export const getInspired = [
  {
    id: 1,
    title: "gallery",
    image: "/assets/inspired-2.png",
    width: 170,
    height: 170
  },
  {
    id: 2,
    title: "gallery",
    image: "/assets/inspired-3.png",
    width: 170,
    height: 170
  },
  {
    id: 3,
    title: "gallery",
    image: "/assets/inspired-1.png",
    width: 345,
    height: 230
  },
] 


export const Reviews = [
  {
    id: 1,
    user: "Siv Im Hok",
    rating: 5,
    comment : "Consider as one of the greatest place to shop for lifestyle.They got multi brand here like Nike and On. The space is huge, and if you’re into street concept, I think here’s right for you"
  },
  {
    id: 2,
    user: "Bunvirak Seng",
    rating: 5,
    comment : "Official Nike Partner in Cambodia Official Nike&On Distributor to Cambodia"
  },
  {
    id: 3,
    user: "LYMIN HONG",
    rating: 5,
    comment : "The biggest multi brand store in Cambodia."
  },
  {
    id: 4,
    user: "Clara Nouth",
    rating: 5,
    comment : "NIKE Official store in Cambodia"
  },
  {
    id: 5,
    user: "Chankrisna Kith",
    rating: 5,
    comment : "Best sport experience. #Nike"
  },
]


import { TelegramIcons } from "../module/common/TelegramIcons";
import { TiktokIcons } from "../module/common/TiktokIcons";
import { FacebookIcons } from "../module/common/FacebookIcons";
import { InstagramIcons } from "../module/common/InstagramIcons";

export const socialLinks = [
  {
    href: "https://www.facebook.com/skornationcambodia",
    icon: FacebookIcons,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/skor_cambodia/?hl=en",
    icon: InstagramIcons,
    label: "Instagram",
  },
  {
    href: "https://t.me/SKOR_Cambodia",
    icon: TelegramIcons,
    label: "Location",
  },
  {
    href: "https://www.tiktok.com/@skor_cambodia",
    icon: TiktokIcons,
    label: "Tiktok",
  },
];

export const badges = [
  "Sport Casual",
  "Fitness",
  "Training",
  "Running",
  "Football",
  "Basketball",
  "Golf",
  "Skateboarding",
  "Swim",
  "Tennis",
];