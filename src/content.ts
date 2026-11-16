/**
 * All site copy and artwork data lives here. Replace the placeholders with
 * Ron's real content; nothing in the components needs to change.
 */

export interface Work {
  slug: string;
  title: string;
  year: string;
  medium: string;
  size: string;
  status: "Available" | "Sold" | "Inquire";
  /** Path under /public, e.g. "/works/garden-of-us.webp". */
  image: string;
  alt: string;
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
export const works: Work[] = [];

export const processYears = ["2018", "2019", "2020", "2021"] as const;

export const exhibitions: Exhibition[] = [
  { title: "The Garden of Us (group exhibition)", meta: "" },
];
