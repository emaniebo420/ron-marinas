/**
 * Home page hero painting (file lives in /public).
 *
 * heroHasBakedText = true  -> the image already contains the title, menu and
 *   "Painter · Artist"; the page shows it as-is and lays invisible links over
 *   the menu words (see heroLinks).
 * heroHasBakedText = false -> the image is the clean painting; the page draws
 *   the title and menu in HTML on top of it.
 */
export const heroImage: string = "/hero.jpg";
export const heroAlt = "Ron Mariñas, Painter · Artist. Painting of a young man holding a cigarette against a turquoise sky.";
export const heroHasBakedText: boolean = true;

/** Link areas over the baked-in menu words, as fractions of the image size. */
export const heroLinks = [
  { to: "/gallery", label: "Gallery", left: 0.3036, top: 0.127, width: 0.1154, height: 0.0499 },
  { to: "/about", label: "About", left: 0.4377, top: 0.127, width: 0.0899, height: 0.0499 },
  { to: "/contact", label: "Contact", left: 0.5462, top: 0.127, width: 0.1187, height: 0.0499 },
] as const;
