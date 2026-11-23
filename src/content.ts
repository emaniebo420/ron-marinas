/**
 * All site copy and artwork data lives here. Replace the placeholders with
 * Ron's real content; nothing in the components needs to change.
 */

export interface Work {
  slug: string;
  title: string;
  /** Optional until Ron confirms. */
  year?: string;
  medium?: string;
  size?: string;
  /** Short story/meaning shown on the piece page. */
  description?: string;
  /** Path under /public, e.g. "/works/garden-of-us.webp". Missing = labeled placeholder. */
  image?: string;
  alt?: string;
}

export const artist = {
  name: "Ron Mariñas",
  tagline: "Painter · Artist",
  intro: "",
  statement: "",
  bio: [
    "Ron Mariñas b. 1996 creates vibrant figurative paintings that explore the relationship between fashion, identity, and the emotional landscape of contemporary life. Through expressive color, elegant compositions, and carefully observed body language, his work examines the ways individuals construct and communicate their sense of self.",
    "Fashion emerges as a recurring visual language within his practice not as a symbol of status, but as an expression of individuality, confidence, and personal truth. Like a second skin, it becomes a reflection of emotion, character, and the complexities of human experience.",
    "Blending contemporary imagery with a poetic sensibility, Mariñas creates immersive narratives that celebrate authenticity and self-expression. His figures inhabit spaces suspended between reality and imagination, embodying moments of vulnerability, desire, resilience, and transformation. At the heart of his practice is a fascination with the elegance of the human form and the stories conveyed through gesture and presence.",
    "Ultimately, his work invites viewers to embrace their individuality and remain true to themselves, finding beauty and strength in who they are despite the circumstances that surround them.",
  ],
  portrait: "/artist.jpg",
  email: "ronmarinasart@gmail.com",
  instagram: "https://instagram.com/imronmarinas",
  instagramHandle: "@imronmarinas",
  /** Opens a direct message to Ron on Instagram. */
  instagramDm: "https://ig.me/m/imronmarinas",
};

/** Empty = the page renders labeled placeholder slots. */
export const works: Work[] = [
  { slug: "joseph", image: "/works/joseph.webp", title: "Joseph", medium: "Oil on canvas", size: "12 × 12 in" },
  { slug: "weightless-heart", image: "/works/weightless-heart.webp", title: "Weightless Heart", medium: "Acrylic on resin sculpture", size: "13 × 12 × 7 in" },
  { slug: "breathe-of-relief", image: "/works/breathe-of-relief.webp", title: "Breathe of Relief", medium: "Acrylic on resin sculpture", size: "13 × 12 × 7 in" },
  { slug: "next-station-is-couture", image: "/works/next-station-is-couture.jpg", title: "Next Station is Couture", medium: "Oil on canvas", size: "2 × 3 ft" },
  { slug: "jeepney-couture-v", image: "/works/jeepney-couture-v.jpg", title: "Jeepney Couture V", medium: "Oil on canvas", size: "30 × 40 cm" },
  { slug: "jeepney-couture-iv", image: "/works/jeepney-couture-iv.jpg", title: "Jeepney Couture IV", medium: "Oil on canvas", size: "12 × 24 in" },
  { slug: "dinner-at-tiffanys", image: "/works/dinner-at-tiffanys.jpg", title: "Dinner at Tiffany’s", medium: "Oil on canvas", size: "24 × 24 in" },
  { slug: "jeepney-couture-ii", image: "/works/jeepney-couture-ii.jpg", title: "Jeepney Couture II", medium: "Oil on canvas", size: "18 × 12 in" },
  { slug: "jeepney-couture-iii", image: "/works/jeepney-couture-iii.jpg", title: "Jeepney Couture III", medium: "Oil on canvas", size: "18 × 12 in" },
  { slug: "a-happy-flower", image: "/works/a-happy-flower.jpg", title: "A Happy Flower", medium: "Oil on canvas", size: "18 × 24 in", description: "This celebrates the freedom of living happily without being held back by the eyes around us. As the girl tends to her garden, she reminds us to grow beyond judgment and choose the happiness that comes from simply being ourselves." },
  { slug: "the-pearls-are-out", image: "/works/the-pearls-are-out.jpg", title: "The Pearls are Out", medium: "Oil on canvas", size: "14 × 16 in", description: "This painting depicts a happy little elegant girl uncovering the pearls she buried in her garden, cutting off the supply that gives life to the watchful eyes of the dead flowers. With a sense of joy and playfulness, she takes care of her garden and makes room for new beginnings" },
  { slug: "i-built-my-own-eden", image: "/works/i-built-my-own-eden.webp", title: "I Built my Own Eden", medium: "Oil on canvas", size: "26 × 26 in" },
  { slug: "sampaguita-girl", image: "/works/sampaguita-girl.jpg", title: "Sampaguita Girl", medium: "Oil on canvas", size: "2 × 3 ft" },
  { slug: "my-accordion-player", image: "/works/my-accordion-player.jpg", title: "My Accordion Player", medium: "Oil on canvas", size: "2 × 3 ft" },
  { slug: "lying-red-boy", image: "/works/lying-red-boy.jpg", title: "Lying Red Boy", medium: "Oil on canvas", size: "2 × 3 ft" },
  { slug: "peaceful-exhale", image: "/works/peaceful-exhale.webp", title: "Peaceful Exhale", medium: "Oil on canvas", size: "9 × 9 in" },
  { slug: "occupied-only-with-our-own-reflection", image: "/works/occupied-only-with-our-own-reflection.jpg", title: "Occupied Only with our Own Reflection", medium: "Oil on canvas", size: "18 × 24 in" },
  { slug: "the-luxury-of-trusting-one", image: "/works/the-luxury-of-trusting-one.jpg", title: "The Luxury of Trusting One", medium: "Oil on canvas", size: "18 × 24 in" },
  { slug: "lock-your-happiness", image: "/works/lock-your-happiness.jpg", title: "Lock your Happiness", medium: "Oil on canvas", size: "18 × 24 in" },
  { slug: "jeepney-couture", image: "/works/jeepney-couture.jpg", title: "Jeepney Couture", medium: "Oil on canvas", size: "2 × 3 ft" },
  { slug: "im-the-unlit-floating-candle", image: "/works/im-the-unlit-floating-candle.jpg", title: "I’m the Unlit Floating Candle", medium: "Oil on canvas", size: "2 × 3 ft" },
  { slug: "the-broken-garden-loop", image: "/works/the-broken-garden-loop.jpg", title: "The Broken Garden Loop", medium: "Oil on canvas", size: "2 × 3 ft", description: "This is a reflection on the many emotions we move through as we grow moments of sadness and happiness, endings and beginnings, resilience and renewal. It tells a story of breaking familiar patterns, burying the past, and moving forward, but from the simple decision to choose happiness." },
  { slug: "lets-make-it-flame-free", image: "/works/lets-make-it-flame-free.jpg", title: "Let’s Make It Flame Free", medium: "Oil on canvas", size: "2 × 3 ft", description: "Let's Make It Flame Free is a cheeky and symbolic celebration of friendship, depicting a group coming together to put out a flame that has caught their flower-like friend. With humor and warmth, the painting turns a small moment of chaos into a playful reminder that good friends will always show up for one another when one of their own needs them." },
  { slug: "mrt-after-chanel", image: "/works/mrt-after-chanel.jpg", title: "MRT After Chanel", medium: "Oil on canvas", size: "2 × 3 ft" },
  { slug: "the-boy-in-his-own-sanctuary", image: "/works/the-boy-in-his-own-sanctuary.jpg", title: "The Boy in His Own Sanctuary", medium: "Oil on canvas", size: "2 × 3 ft" },
  { slug: "the-happy-gardeners", image: "/works/the-happy-gardeners.jpg", title: "The Happy Gardeners", medium: "Oil on canvas", size: "18 × 18 in", description: "Inspired by a classical painting, this work is reimagined as a playful depiction of a happy couple guarding their garden a symbol of the life they have built together. Small and humorous in spirit, it celebrates the quiet strength of being happy, united, and protective of what matters most." },
  { slug: "sanctuary-on-the-rocks", image: "/works/sanctuary-on-the-rocks.jpg", title: "Sanctuary on the Rocks", medium: "Oil on canvas", size: "18 × 24 in" },
  { slug: "peaceful-exhale-2", image: "/works/peaceful-exhale-2.webp", title: "Peaceful Exhale", medium: "Oil on canvas", size: "9 × 9 in" },
  { slug: "the-growing-flower", image: "/works/the-growing-flower.webp", title: "The Growing Flower I–IV", medium: "Oil on canvas", size: "15 × 15 cm" },
  { slug: "body-of-tranquility", image: "/works/body-of-tranquility.webp", title: "Body of Tranquility", medium: "Oil on canvas" },
  { slug: "blithe-at-last", image: "/works/blithe-at-last.webp", title: "Blithe at Last", medium: "Oil on canvas" },
  { slug: "the-birkin-exit-1", image: "/works/the-birkin-exit-1.webp", title: "The Birkin Exit 1", medium: "Oil on canvas", size: "7 × 21 in" },
  { slug: "the-birkin-exit-2", image: "/works/the-birkin-exit-2.webp", title: "The Birkin Exit 2", medium: "Oil on canvas", size: "7 × 21 in" },
];

/** Behind-the-scenes studio photos (files in /public/process). */
export const processPhotos = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  src: `/process/process-${n}.jpg`,
  alt: "Behind the scenes in the studio",
}));

export type Exhibition = { year: number; title: string; date: string; venue: string };

/** Newest first. Source: Ron's EXHIBITION HISTORY document (typos corrected, dates ordered). */
export const exhibitions: Exhibition[] = [
  { year: 2026, title: "The Garden of Us", date: "October 3, 2026 – January 2027", venue: "Orange Project, Bacolod City, Philippines" },
  { year: 2026, title: "Echo Chamber", date: "July 12, 2026", venue: "Gallery Sort Of, Quezon City, Philippines" },
  { year: 2026, title: "Pageant Drama", date: "March 12, 2026", venue: "Gallery Sort Of & Qube Gallery, River City, Bangkok" },
  { year: 2026, title: "Blue, The Warmest Color", date: "February 27 – March 13, 2026", venue: "Village Art Gallery, Alabang City, Philippines" },
  { year: 2025, title: "Tambay, Toma, Tropa", date: "October 12, 2025", venue: "Gallery Sort Of, Quezon City, Philippines" },
  { year: 2025, title: "Portrait on Portrait", date: "August 9 – September 6, 2025", venue: "Art Toys PH, Metro Manila, Philippines" },
  { year: 2025, title: "Seven", date: "June 28, 2025", venue: "Village Art Gallery, Makati City, Philippines" },
  { year: 2025, title: "Lean on Me", date: "June 26, 2025", venue: "Gallery Sort Of, Quezon City, Philippines" },
  { year: 2025, title: "Stay for a While", date: "April 10–25, 2025", venue: "Leon Gallery, Makati City, Philippines" },
  { year: 2025, title: "I Take a Sledgehammer to a Diamond", date: "January 10–30, 2025", venue: "Galerie Stephanie, Mandaluyong City, Philippines" },
  { year: 2024, title: "Beyond the Tears (Solo Exhibition)", date: "November 10, 2024", venue: "Secret Fresh, San Juan City, Philippines" },
  { year: 2024, title: "In the Grip of Desire (Solo Exhibition)", date: "July 20, 2024", venue: "METRO Gallery, San Juan City, Philippines" },
  { year: 2024, title: "Cosmo & Vine", date: "May 18, 2024", venue: "Kondwi, Makati City, Philippines" },
  { year: 2024, title: "It’s Over When I Say It’s Over", date: "March 13–27, 2024", venue: "Rojo Galerie, Pasig City, Philippines" },
  { year: 2023, title: "Tribute to Audrey", date: "October 19–23, 2023", venue: "Art Anton, Pasay City, Philippines" },
  { year: 2023, title: "Resemblance", date: "October 4, 2023", venue: "Art Elaan, Paranaque City, Philippines" },
  { year: 2023, title: "The Advent of Elation (Solo Exhibition)", date: "April 29 – May 13, 2023", venue: "METRO Gallery, San Juan City, Philippines" },
  { year: 2023, title: "Xavier Art Fest", date: "January 27–29, 2023", venue: "Xavier School, San Juan City, Philippines" },
  { year: 2023, title: "S̶o̶r̶r̶y̶ Not Sorry (Two-Man Exhibition)", date: "January 7–22, 2023", venue: "Galerie Stephanie, Mandaluyong City, Philippines" },
  { year: 2022, title: "The Manila’Bang Show 2022", date: "December 8–11, 2022", venue: "Festival Mall, Alabang City, Philippines" },
  { year: 2022, title: "I Give You My Art", date: "December 7, 2022", venue: "Provenance Art Gallery, Makati City, Philippines" },
  { year: 2022, title: "Choke Me, Baroque", date: "August 27, 2022", venue: "METRO Gallery, San Juan City, Philippines" },
  { year: 2022, title: "Opulence", date: "June 6, 2022", venue: "WhiteWalls Gallery, Makati City, Philippines" },
  { year: 2022, title: "Que Sera Sera", date: "May 2022", venue: "Arte Bettina, Makati City, Philippines" },
  { year: 2021, title: "Leaving Neverland", date: "November 27, 2021", venue: "WhiteWalls Gallery, Makati City, Philippines" },
  { year: 2021, title: "As We Should (Solo Exhibition)", date: "November 2021", venue: "RGallery, Quezon City, Philippines" },
  { year: 2021, title: "Corpus Delicity", date: "October 27 – November 10, 2021", venue: "Galerie Stephanie, Mandaluyong City, Philippines" },
  { year: 2021, title: "Vision x Interpolation", date: "September 2021", venue: "Art Anton, Pasay City, Philippines" },
  { year: 2021, title: "Parts & Parcels", date: "August 2021", venue: "Arte Bettina, Makati City, Philippines" },
  { year: 2021, title: "Sonnet 54", date: "June 2021", venue: "Galerie Anna, Mandaluyong City, Philippines" },
  { year: 2021, title: "Bare Thoughts", date: "March 2021", venue: "RGallery, Quezon City, Philippines" },
  { year: 2020, title: "Rondo", date: "November – December 2020", venue: "Altro Mondo Creative Space, Makati City, Philippines" },
  { year: 2020, title: "Seeing Eye to Eye", date: "October 2020", venue: "VMeme Contemporary Art Gallery, Pasig City, Philippines" },
  { year: 2020, title: "Teks", date: "September 2020", venue: "Aloud Space Lab, Online, Philippines" },
  { year: 2020, title: "Proof of Life", date: "April 20, 2020", venue: "Pineapple Lab Online Auction, Metro Manila, Philippines" },
  { year: 2020, title: "Amoré", date: "February 2020", venue: "La Salle Spark Museum, Muntinlupa City, Philippines" },
];

/** Small (640px) WebP copy of a work's image, used in grids so pages load fast; the full file is used on the piece page. */
export const thumbOf = (image: string, large = false): string =>
  image.replace(/^\/works\/([^/]+)\.(jpg|webp)$/, large ? "/works/thumbs/lg/$1.webp" : "/works/thumbs/$1.webp");

/** Watermarked copy of a work (same size as the visible image), laid invisibly over it by WorkImg. */
export const wmOf = (image: string): string => image.replace(/^\/works\//, "/works/wm/");
/** Watermarked copy of a thumbnail, matching thumbOf(image, large). */
export const wmThumbOf = (image: string, large = false): string => wmOf(thumbOf(image, large));

/** Pull quote on the About page, between the bio and the exhibitions. */
export const aboutQuote = {
  text: "Who decided couture belongs only on the runway? I dress my subjects in extravagance against the backdrop of ordinary life, because fashion has no class, gender, or invitation list. After all, darling, even the everyday deserves a little drama.",
  by: "Ron M.",
};
