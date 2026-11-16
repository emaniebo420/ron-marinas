import { Link } from "react-router-dom";
import { PinkBand, Slot, usePageTitle } from "../components/ui";
import { artist, works } from "../content";
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
          <p className="mb-0 mt-4 text-[clamp(11px,1.3vw,15px)] font-medium uppercase tracking-[.3em] [text-indent:.3em] [text-shadow:0_1px_8px_rgba(0,40,45,.5)]">
            {artist.tagline}
          </p>
          <nav aria-label="Primary" className="mt-3 flex items-center justify-center gap-x-1 sm:gap-x-3">
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

      <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-10 sm:py-24">
        <p className="m-0 mb-3 text-center text-xs uppercase tracking-[.3em] text-[#5e5a53]">Selected works</p>
        <h2 className="m-0 mb-10 text-center text-[clamp(34px,5vw,60px)] font-normal leading-none" style={{ fontFamily: "var(--font-display)" }}>
          Recent paintings
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-7 md:grid-cols-3">
          {(works.length ? works.slice(0, 3) : [null, null, null]).map((work, i) => (
            <figure key={work ? work.slug : i} className={`m-0 min-w-0 ${i === 2 ? "hidden md:block" : ""}`}>
              {work ? (
                <Link to={`/gallery/${work.slug}`} className="block no-underline">
                  <img src={work.image} alt={work.alt} loading="lazy" decoding="async" className="aspect-[4/5] w-full bg-[#e4e0d8] object-cover" />
                </Link>
              ) : (
                <Slot label={`[ARTWORK 0${i + 1}]`} className="aspect-[4/5]" />
              )}
              <figcaption className="mt-3 text-sm sm:text-[17px]" style={{ fontFamily: "var(--font-display)" }}>
                {work ? `${work.title}, ${work.year}` : "[Title], [Year]"}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex min-h-12 items-center rounded-full border border-[#1b1a18] px-8 text-sm uppercase tracking-[.18em] text-[#1b1a18] no-underline"
          >
            View full gallery
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:py-28">
        <figure className="mx-auto m-0 max-w-3xl text-center">
          <blockquote className="m-0 text-[clamp(26px,3.6vw,42px)] leading-snug" style={{ fontFamily: "var(--font-display)" }}>
            “{homeQuote.text}”
          </blockquote>
          <figcaption className="mt-6 text-xs font-medium uppercase tracking-[.3em] text-[#5e5a53]">
            — {homeQuote.by}
          </figcaption>
        </figure>
      </section>

      <PinkBand>
        <div className="flex flex-col items-center gap-y-7">
          <h2 className="m-0 text-[clamp(36px,5vw,64px)] font-normal leading-none" style={{ fontFamily: "var(--font-display)" }}>
            Interested in a piece?
          </h2>
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center rounded-full border border-[#2a0f17] px-8 text-sm uppercase tracking-[.18em] text-[#2a0f17] no-underline"
          >
            Get in touch
          </Link>
        </div>
      </PinkBand>
    </main>
  );
}
