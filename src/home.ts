/**
 * Home page hero painting (file lives in /public).
 * hero-painting.jpg is Ron's clean cover painting (no text), shown uncropped.
 */
export const heroImage: string = "/hero-cover.webp";
/** Phone version: same painting cropped to the figure, with the smoke column and sky extended upward for the title. */
export const heroPhoneImage: string = "/hero-cover-phone.webp";
export const heroAlt =
  "Painting of a young man holding a cigarette against a turquoise sky, pink horizon and green foliage.";

/** Sky colour sampled from the painting; the page extends it above the image. */
export const skyColor = "rgb(100, 214, 204)";

/** Quote shown under the hero. */
export const homeQuote = {
  text: "My paintings are the most precious thing in my life. It’s like a second penis to me, which means not everyone can have them.",
  by: "Ron M.",
};

/**
 * Home "Selected works": each painting is shown whole (never cropped) at its real proportions.
 * Rows share one height on laptop (each work is as wide as its ratio needs) and stack one per line on phone.
 * ratio = image width / height.
 */
export const selectedRows: { slug: string; ratio: number }[][] = [
  [
    { slug: "the-broken-garden-loop", ratio: 0.664 },
    { slug: "jeepney-couture-v", ratio: 1.349 },
  ],
  [
    { slug: "lets-make-it-flame-free", ratio: 0.669 },
    { slug: "sampaguita-girl", ratio: 0.759 },
    { slug: "next-station-is-couture", ratio: 0.672 },
  ],
  [
    { slug: "dinner-at-tiffanys", ratio: 0.998 },
    { slug: "im-the-unlit-floating-candle", ratio: 1.525 },
  ],
  [{ slug: "jeepney-couture-iv", ratio: 1.952 }],
];

/** Phone grid: two columns with near-equal total height (each painting shown whole). */
export const phoneColumns: string[][] = [
  ["the-broken-garden-loop", "jeepney-couture-v", "sampaguita-girl", "im-the-unlit-floating-candle"],
  ["lets-make-it-flame-free", "next-station-is-couture", "dinner-at-tiffanys", "jeepney-couture-iv"],
];
