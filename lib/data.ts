import { Truck, Shield, Lightbulb, Palette, Award } from "lucide-react"

export interface Category {
  id: number;
  slug: string;
  name: string;
  bgColor: string;
  images: string[];
  subtitle: string;
  description: string;
  featured_cards: { title: string; subtitle: string; body: string }[];
  link: string;
  bannerImage: string;
}

export const categories: Category[] = [
  {
    id: 1,
    slug: "loungewear",
    name: "LOUNGEWEAR",
    bgColor: "bg-slate-600",
    link: "/product/loungewear",
    subtitle: "ENGINEERED COMFORT",
    description: "We engineer high-recovery fiber blends and anatomical silhouettes designed for lasting comfort and structural longevity. We control every stage of development for bulk consistency.",
    featured_cards: [
      {
        title: "Sustainable",
        subtitle: "Fabrics",
        body: "We source eco-friendly bamboo, modal, organic cotton, and recycled polyesters to ensure incredibly soft and breathable comfort, naturally protecting the planet.",
      },
      {
        title: "Precision",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      },
      {
        title: "Test 3",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      },
      {
        title: "Test 4",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      }
    ],

    images: [
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-2.jpeg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-1.jpeg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-3.jpeg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-4.jpeg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-5.jpeg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-6.jpeg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-7.jpeg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-8.jpeg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-9.jpeg",
      "/assets/categories/lounge-nightwear/Lounge-&-Nightwear-10.jpeg"
    ],
    bannerImage: "/assets/categories/banner/lounge.jpg",
  },
  {
    id: 2,
    slug: "nightwear",
    name: "NIGHTWEAR",
    bgColor: "bg-red-600",
    link: "/product/nightwear",
    subtitle: "TACTILE SCIENCE",
    description: "We source low-micron fibers and engineer breathable knit structures to optimize thermal regulation and restorative comfort. We ensure fabric stability for consistent bulk results.",
    featured_cards: [
      {
        title: "Sustainable",
        subtitle: "Fabrics",
        body: "We source eco-friendly bamboo, modal, organic cotton, and recycled polyesters to ensure incredibly soft and breathable comfort, naturally protecting the planet.",
      },
      {
        title: "Precision",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      },
      {
        title: "Test 3",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      },
      {
        title: "Test 4",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      }
    ],
    images: [
      "/assets/categories/nightwear/Lounge-&-Nightwear-1.jpeg",
      "/assets/categories/nightwear/Lounge-&-Nightwear-2.jpg",
      "/assets/categories/nightwear/Lounge-&-Nightwear-3.jpeg",
      "/assets/categories/nightwear/Lounge-&-Nightwear-4.jpg",
      "/assets/categories/nightwear/Lounge-&-Nightwear-5.jpg",
      "/assets/categories/nightwear/Lounge-&-Nightwear-6.jpg",
      "/assets/categories/nightwear/Lounge-&-Nightwear-7.jpg",
      "/assets/categories/nightwear/Lounge-&-Nightwear-8.jpeg"
    ],
    bannerImage: "/assets/categories/banner/nightwear.jpg",
  },
  {
    id: 3,
    slug: "innerwear",
    name: "INNERWEAR & ESSENTIALS",
    bgColor: "bg-slate-500",
    link: "/product/innerwear",
    subtitle: "PRECISION ENGINEERING",
    description: "We utilize fine-gauge technology and seamless construction to create lightweight essentials with high elastic recovery. We control every stitch for 100% fit accuracy.",
    featured_cards: [
      {
        title: "Sustainable",
        subtitle: "Fabrics",
        body: "We source eco-friendly bamboo, modal, organic cotton, and recycled polyesters to ensure incredibly soft and breathable comfort, naturally protecting the planet.",
      },
      {
        title: "Precision",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      },
      {
        title: "Test 3",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      },
      {
        title: "Test 4",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      }
    ],
    images: [
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-1.jpg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-2.jpg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-3.jpg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-4.jpg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-5.jpg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-6.jpeg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-7.jpeg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-8.jpeg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-9.jpeg",
      "/assets/categories/inner-essentials/Innerwear-&-Essentials-10.jpeg",


    ],
    bannerImage: "/assets/categories/banner/innerwear.jpg",
  },
  {
    id: 4,
    slug: "activewear",
    name: "ACTIVEWEAR & SPORTSWEAR",
    bgColor: "bg-sky-700",
    link: "/product/activewear",
    subtitle: "PERFORMANCE DRIVEN",
    description: "Technical fabrics and ergonomic designs that move with you. Engineered for peak athletic performance.",
    featured_cards: [
      {
        title: "Sustainable",
        subtitle: "Fabrics",
        body: "We source eco-friendly bamboo, modal, organic cotton, and recycled polyesters to ensure incredibly soft and breathable comfort, naturally protecting the planet.",
      },
      {
        title: "Precision",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      },
      {
        title: "Test 3",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      },
      {
        title: "Test 4",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      }
    ],
    images: [
      "/assets/categories/activewear/Sports-2.jpg",
      "/assets/categories/activewear/Sports-3.jpg",
      "/assets/categories/activewear/Sports-4.jpg",
      "/assets/categories/activewear/Sports-5.jpg",
      "/assets/categories/activewear/Sports-6.jpg",
      "/assets/categories/activewear/Sports-7.jpg",

    ],
    bannerImage: "/assets/categories/banner/activewear.png",
  },
  {
    id: 5,
    slug: "sweatwear",
    name: "SWEATWEAR",
    bgColor: "bg-amber-700",
    link: "/product/sweatwear",
    subtitle: "STRUCTURED DURABILITY",
    description: "We engineer dense loopback textiles and reinforced seams designed for thermal retention and silhouette stability. We manage high-volume production with total shade uniformity.",
    featured_cards: [
      {
        title: "Sustainable",
        subtitle: "Fabrics",
        body: "We source eco-friendly bamboo, modal, organic cotton, and recycled polyesters to ensure incredibly soft and breathable comfort, naturally protecting the planet.",
      },
      {
        title: "Precision",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      },
      {
        title: "Test 3",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      },
      {
        title: "Test 4",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      }
    ],
    images: [
      "/assets/categories/sweat/sweat-1.jpeg",
      "/assets/categories/sweat/sweat-2.jpeg",
      "/assets/categories/sweat/sweat-3.jpeg",
      "/assets/categories/sweat/sweat-4.jpeg",
      "/assets/categories/sweat/sweat-5.jpeg",
      "/assets/categories/sweat/sweat-6.jpeg",
      "/assets/categories/sweat/sweat-7.jpeg",
      "/assets/categories/sweat/sweat-8.jpeg",
    ],
    bannerImage: "/assets/categories/banner/sweatwear.jpg",
  },
  {
    id: 6,
    slug: "denim",
    name: "DENIM",
    bgColor: "bg-blue-800",
    link: "/product/denim",
    subtitle: "VERTICAL INTEGRATION",
    description: "We control the complete denim lifecycle from indigo-dyeing to automated laser finishing. We deliver high-volume programs with zero variance in wash, shade, or fit integrity.",
    featured_cards: [
      {
        title: "Sustainable",
        subtitle: "Fabrics",
        body: "We source eco-friendly bamboo, modal, organic cotton, and recycled polyesters to ensure incredibly soft and breathable comfort, naturally protecting the planet.",
      },
      {
        title: "Precision",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      },
      {
        title: "Test 3",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      },
      {
        title: "Test 4",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      }
    ],
    images: [
      "/assets/categories/denim/Denim-1.jpg",
      "/assets/categories/denim/Denim-2.jpg",
      "/assets/categories/denim/Denim-3.jpg",
      "/assets/categories/denim/Denim-4.jpg",
      "/assets/categories/denim/Denim-5.jpg",

    ],
    bannerImage: "/assets/categories/banner/denim.jpg",
  },
  {
    id: 7,
    slug: "swimwear",
    name: "SWIMWEAR",
    bgColor: "bg-cyan-600",
    link: "/product/swimwear",
    subtitle: "TECHNICAL RESILIENCE",
    description: "We source polymer-coated yarns and high-modulus fabrics to resist chlorine degradation and maintain hydrodynamic fit. We verify performance standards for global compliance.",
    featured_cards: [
      {
        title: "Sustainable",
        subtitle: "Fabrics",
        body: "We source eco-friendly bamboo, modal, organic cotton, and recycled polyesters to ensure incredibly soft and breathable comfort, naturally protecting the planet.",
      },
      {
        title: "Precision",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      },
      {
        title: "Test 3",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      },
      {
        title: "Test 4",
        subtitle: "Craftsmanship",
        body: "Every seam, stitch, and cut is engineered by our state-of-the-art facilities across South Asia. We utilize advanced flatlock and ultrasonic welding techniques.",
      }
    ],
    images: [
      "/assets/categories/swimwear/swimwear-1.jpg",
      "/assets/categories/swimwear/swimwear-2.jpg",
      "/assets/categories/swimwear/swimwear-3.jpg",
      "/assets/categories/swimwear/swimwear-4.jpg",
      "/assets/categories/swimwear/swimwear-5.jpeg",
      "/assets/categories/swimwear/swimwear-6.jpeg"
    ],
    bannerImage: "/assets/categories/banner/swimmer.jpg",
  }
];


export const upsc = [
  {
    icon: Truck,
    title: "Seamless Logistics",
    subtitle: "End-to-end delivery. Zero complexity.",
    description: "Full door-to-door delivery across EU, UK, and USA with complete DDP support. We manage duties, clearance, and fulfillment — ensuring your products arrive ready for retail.",
    gradient: "from-blue-500 to-cyan-500",
    image: "/assets/upsc/Seamless-Logistics.jpg",
  },
  {
    icon: Shield,
    title: "Audit Ready",
    subtitle: "Compliance built into every step.",
    description: "Fully aligned with global standards from day one. Ethical sourcing, certified production, and audit-ready systems ensure reliability and risk-free sourcing.",
    gradient: "from-sky-500 to-cyan-500",
    image: "/assets/upsc/audit-ready.jpg",
  },
  {
    icon: Lightbulb,
    title: "Brand Owners Mindset",
    subtitle: "We think like your end customer.",
    description: "As active brand operators across European markets, we understand product performance, pricing, and positioning — delivering what truly sells.",
    gradient: "from-amber-500 to-orange-500",
    image: "/assets/upsc/Brand-Owners-Mindset.jpg",
  },
  {
    icon: Palette,
    title: "Design to Reality",
    subtitle: "From concept to scalable production",
    description: "Our in-house design and development teams transform ideas into market-ready products with precision, speed, and technical expertise.",
    gradient: "from-rose-500 to-pink-500",
    image: "/assets/upsc/design-to-reality.jpg",
  },
  {
    icon: Award,
    title: "Certified Excellence",
    subtitle: "Globally recognized standards.",
    description: "15+ international certifications covering quality, sustainability, and ethical manufacturing — ensuring full compliance for global retail partners.",
    gradient: "from-violet-500 to-purple-500",
    image: "/assets/upsc/certified-ex.jpg",
  },
]
