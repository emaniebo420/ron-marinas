import { Link } from "react-router-dom";
import { PinkBand, Slot, usePageTitle } from "../components/ui";
import { artist, works } from "../content";
import { heroAlt, heroImage, heroPhoneImage, homeQuote } from "../home";

const links = [
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Home() {
  usePageTitle("");

  return (
    <main className="bg-[#f6f4ef] text-[#1b1a18]">
      <section className="relative bg-[rgb(100,214,204)] text-white">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroImage} />
          <img
            src={heroPhoneImage}
            alt={heroAlt}
            decoding="async"
            className="block h-auto w-full"
          />
        </picture>
        <header className="absolute inset-x-0 left-[12%] right-[2%] top-[8.5%] z-10 flex flex-col items-center text-center md:inset-x-auto md:right-auto md:left-[34%] md:top-[17%] md:w-[42%]">
          <h1 className="m-0 text-[clamp(26px,7.6vw,34px)] font-normal uppercase leading-none tracking-[.14em] [text-indent:.14em] [text-shadow:0_1px_12px_rgba(0,70,70,.35)] whitespace-nowrap md:text-[clamp(40px,4.4vw,70px)]" style={{ fontFamily: "var(--font-display)" }}>
            <span className="sr-only">{artist.name}</span>
            <span aria-hidden="true">Ron Mariñas</span>
          </h1>
          <p className="mb-0 mt-4 text-[clamp(10px,2.9vw,12px)] font-medium uppercase tracking-[.34em] [text-indent:.34em] [text-shadow:0_1px_8px_rgba(0,70,70,.45)] md:mt-5 md:text-[clamp(11px,1.05vw,15px)]">
            {artist.tagline}
          </p>
          <nav aria-label="Primary" className="mt-2 flex items-center justify-center gap-x-0 sm:gap-x-3 md:mt-[1.4vw]">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-2.5 py-3 text-[clamp(11px,3.1vw,13px)] font-medium uppercase tracking-[.22em] text-white no-underline [text-shadow:0_1px_8px_rgba(0,70,70,.5)] hover:underline hover:underline-offset-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-5 md:text-[clamp(12px,1.3vw,17px)]"
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
                  {work.image ? (
                    <img src={work.image} alt={work.alt ?? work.title} loading="lazy" decoding="async" className="aspect-[4/5] w-full bg-[#e4e0d8] object-cover" />
                  ) : (
                    <Slot label={`[PHOTO: ${work.title}]`} className="aspect-[4/5]" />
                  )}
                </Link>
              ) : (
                <Slot label={`[ARTWORK 0${i + 1}]`} className="aspect-[4/5]" />
              )}
              <figcaption className="mt-3 text-sm sm:text-[17px]" style={{ fontFamily: "var(--font-display)" }}>
                {work ? [work.title, work.year].filter(Boolean).join(", ") : "[Title], [Year]"}
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

      <PinkBand image="/cta-garden.jpg">
        <div className="flex flex-col items-center gap-y-7">
          <h2 className="m-0 text-[clamp(36px,5vw,64px)] font-normal leading-none [text-shadow:0_2px_16px_rgba(0,30,30,.45)]" style={{ fontFamily: "var(--font-display)" }}>
            Interested in a piece?
          </h2>
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center rounded-full border border-white px-8 text-sm uppercase tracking-[.18em] text-white no-underline hover:bg-white/15"
          >
            Get in touch
          </Link>
        </div>
      </PinkBand>
    </main>
  );
}
