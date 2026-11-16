import { Link } from "react-router-dom";
import { usePageTitle } from "../components/ui";
import { artist } from "../content";
import { heroAlt, heroImage, homeQuote } from "../home";

const links = [
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Home() {
  usePageTitle("");

  return (
    <main className="bg-[#f6f4ef] text-[#1b1a18]">
      <section className="relative h-svh min-h-[520px] overflow-hidden bg-[rgb(15,217,205)] text-white">
        <img
          src={heroImage}
          alt={heroAlt}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[20%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,40,45,.55)] to-transparent to-45%" aria-hidden="true" />

        <header className="relative flex flex-col items-center px-6 pt-10 text-center md:pt-14">
          <h1 className="m-0 font-sans text-[clamp(26px,6vw,68px)] font-semibold uppercase leading-none tracking-[.32em] [text-indent:.32em] [text-shadow:0_2px_16px_rgba(0,40,45,.45)]">
            <span className="sr-only">{artist.name}</span>
            <span aria-hidden="true">Ron Mariñas</span>
          </h1>
          <nav aria-label="Primary" className="mt-5 flex items-center justify-center gap-x-1 sm:gap-x-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-3 text-[clamp(12px,1.4vw,16px)] font-medium uppercase tracking-[.18em] text-white no-underline [text-shadow:0_1px_8px_rgba(0,40,45,.5)] hover:underline hover:underline-offset-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-5"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
      </section>

      <section className="px-6 py-20 md:py-28">
        <figure className="mx-auto m-0 max-w-3xl text-center">
          <blockquote className="m-0 text-[clamp(26px,3.6vw,42px)] leading-snug" style={{ fontFamily: "var(--font-display)" }}>
            “{homeQuote.text}”
          </blockquote>
          <figcaption className="mt-6 text-xs font-medium uppercase tracking-[.3em] text-[#5e5a53]">
            — {homeQuote.by}
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
