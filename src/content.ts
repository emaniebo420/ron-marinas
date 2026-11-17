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
  /** Path under /public, e.g. "/works/garden-of-us.webp". Missing = labeled placeholder. */
  image?: string;
  alt?: string;
}

export interface Exhibition {
  title: string;
  meta: string;
}

export const artist = {
  name: "Ron Mariñas",
  tagline: "Painter · Artist",
  intro: "",
  statement: "",
  bio: "",
  email: "",
  instagram: "https://instagram.com/imronmarinas",
  instagramHandle: "@imronmarinas",
};

/** Empty = the page renders labeled placeholder slots. */
export const works: Work[] = [
  { slug: "joseph", image: "/works/joseph.jpg", title: "Joseph", medium: "Oil on canvas", size: "12 × 12 in" },
  { slug: "weightless-heart", image: "/works/weightless-heart.jpg", title: "Weightless Heart", medium: "Acrylic on resin sculpture", size: "13 × 12 × 7 in" },
  { slug: "breathe-of-relief", image: "/works/breathe-of-relief.jpg", title: "Breathe of Relief", medium: "Acrylic on resin sculpture", size: "13 × 12 × 7 in" },
  { slug: "next-station-is-couture", image: "/works/next-station-is-couture.jpg", title: "Next Station is Couture", medium: "Oil on canvas", size: "2 × 3 in" },
  { slug: "jeepney-couture-v", image: "/works/jeepney-couture-v.jpg", title: "Jeepney Couture V", medium: "Oil on canvas", size: "30 × 40 cm" },
  { slug: "jeepney-couture-iv", image: "/works/jeepney-couture-iv.jpg", title: "Jeepney Couture IV", medium: "Oil on canvas", size: "12 × 24 in" },
  { slug: "dinner-at-tiffanys", image: "/works/dinner-at-tiffanys.jpg", title: "Dinner at Tiffany’s", medium: "Oil on canvas", size: "24 × 24 in" },
  { slug: "jeepney-couture-ii", image: "/works/jeepney-couture-ii.jpg", title: "Jeepney Couture II", medium: "Oil on canvas", size: "18 × 12 in" },
  { slug: "jeepney-couture-iii", image: "/works/jeepney-couture-iii.jpg", title: "Jeepney Couture III", medium: "Oil on canvas", size: "18 × 12 in" },
  { slug: "a-happy-flower", image: "/works/a-happy-flower.jpg", title: "A Happy Flower", medium: "Oil on canvas", size: "18 × 24 in" },
  { slug: "the-pearls-are-out", image: "/works/the-pearls-are-out.jpg", title: "The Pearls are Out", medium: "Oil on canvas", size: "14 × 16 in" },
  { slug: "i-built-my-own-eden", image: "/works/i-built-my-own-eden.jpg", title: "I Built my Own Eden", medium: "Oil on canvas", size: "26 × 26 in" },
  { slug: "sampaguita-girl", image: "/works/sampaguita-girl.jpg", title: "Sampaguita Girl", medium: "Oil on canvas", size: "2 × 3 in" },
  { slug: "my-accordion-player", image: "/works/my-accordion-player.jpg", title: "My Accordion Player", medium: "Oil on canvas", size: "2 × 3 in" },
  { slug: "lying-red-boy", image: "/works/lying-red-boy.jpg", title: "Lying Red Boy", medium: "Oil on canvas", size: "2 × 3 in" },
  { slug: "peaceful-exhale", image: "/works/peaceful-exhale.jpg", title: "Peaceful Exhale", medium: "Oil on canvas", size: "9 × 9 in" },
  { slug: "occupied-only-with-our-own-reflection", image: "/works/occupied-only-with-our-own-reflection.jpg", title: "Occupied Only with our Own Reflection", medium: "Oil on canvas", size: "18 × 24 in" },
  { slug: "the-luxury-of-trusting-one", image: "/works/the-luxury-of-trusting-one.jpg", title: "The Luxury of Trusting One", medium: "Oil on canvas", size: "18 × 24 in" },
  { slug: "lock-your-happiness", image: "/works/lock-your-happiness.jpg", title: "Lock your Happiness", medium: "Oil on canvas", size: "18 × 24 in" },
  { slug: "jeepney-couture", image: "/works/jeepney-couture.jpg", title: "Jeepney Couture", medium: "Oil on canvas", size: "2 × 3 in" },
  { slug: "im-the-unlit-floating-candle", image: "/works/im-the-unlit-floating-candle.jpg", title: "I’m the Unlit Floating Candle", medium: "Oil on canvas", size: "2 × 3 in" },
  { slug: "the-broken-garden-loop", image: "/works/the-broken-garden-loop.jpg", title: "The Broken Garden Loop", medium: "Oil on canvas", size: "2 × 3 in" },
  { slug: "lets-make-it-flame-free", image: "/works/lets-make-it-flame-free.jpg", title: "Let’s Make It Flame Free", medium: "Oil on canvas", size: "2 × 3 in" },
  { slug: "mrt-after-chanel", image: "/works/mrt-after-chanel.jpg", title: "MRT After Chanel", medium: "Oil on canvas", size: "2 × 3 in" },
  { slug: "the-boy-in-his-own-sanctuary", image: "/works/the-boy-in-his-own-sanctuary.jpg", title: "The Boy in His Own Sanctuary", medium: "Oil on canvas", size: "2 × 3 in" },
  { slug: "the-happy-gardeners", image: "/works/the-happy-gardeners.jpg", title: "The Happy Gardeners" },
  { slug: "sanctuary-on-the-rocks", image: "/works/sanctuary-on-the-rocks.jpg", title: "Sanctuary on the Rocks" },
];

/** Behind-the-scenes studio photos (files in /public/process). */
export const processPhotos = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  src: `/process/process-${n}.jpg`,
  alt: "Behind the scenes in the studio",
}));

export const exhibitions: Exhibition[] = [
  { title: "The Garden of Us (group exhibition)", meta: "" },
];
