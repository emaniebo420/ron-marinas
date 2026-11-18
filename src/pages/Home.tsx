import { Link } from "react-router-dom";
import { PinkBand, usePageTitle } from "../components/ui";
import { artist, thumbOf, works } from "../content";
import { selectedRows, phoneColumns, heroAlt, heroImage, heroPhoneImage, homeQuote } from "../home";

const links = [
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Home() {
  usePageTitle("");

  return (
    <main className="bg-[#f6f4ef] text-[#1b1a18]">
      <section className="relative bg-[#f6f4ef] text-white">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroImage} />
          <img
            src={heroPhoneImage}
            alt={heroAlt}
            decoding="async"
            className="block h-auto w-full"
          />
        </picture>
        <header className="absolute inset-x-0 top-[16.5%] z-10 flex flex-col items-center text-center md:inset-x-auto md:right-auto md:left-[29%] md:top-[6%] md:w-[42%]">
          <h1 className="m-0 flex w-full justify-center">
            <img
              src="/signature.png"
              alt={artist.name}
              className="block h-auto w-[min(88%,340px)] [filter:drop-shadow(0_1px_6px_rgba(0,60,60,.45))] md:w-[min(92%,640px)]"
            />
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

      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-10 sm:py-24">
        <p className="m-0 mb-3 text-center text-xs uppercase tracking-[.3em] text-[#5e5a53]">Selected works</p>
        <h2 className="m-0 mb-12 text-center text-[clamp(34px,5vw,60px)] font-normal leading-none text-[#45b7c6]" style={{ fontFamily: "var(--font-display)" }}>
          Recent paintings
        </h2>
        <div className="grid grid-cols-2 items-start gap-x-3 md:hidden">
          {phoneColumns.map((column, c) => (
            <div key={c} className="flex flex-col gap-5">
              {column.map((slug) => {
                const work = works.find((w) => w.slug === slug);
                const ratio = selectedRows.flat().find((x) => x.slug === slug)?.ratio;
                if (!work?.image || !ratio) return null;
                return (
                  <figure key={slug} className="m-0">
                    <Link to={`/gallery/${slug}`} className="block overflow-hidden bg-[#e4e0d8] no-underline" style={{ aspectRatio: String(ratio) }}>
                      <img src={thumbOf(work.image)} alt={work.alt ?? work.title} loading="lazy" decoding="async" className="block h-full w-full object-cover" />
                    </Link>
                    <figcaption className="mt-2 text-[15px] leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                      {work.title}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          ))}
        </div>
        <div className="hidden flex-col gap-20 md:flex">
          {selectedRows.map((row, r) => (
            <div key={r} className="flex flex-row gap-10">
              {row.map(({ slug, ratio }) => {
                const work = works.find((w) => w.slug === slug);
                if (!work?.image) return null;
                return (
                  <figure key={slug} className="group m-0 min-w-0 md:[flex:var(--r)_1_0%]" style={{ "--r": ratio } as React.CSSProperties}>
                    <Link to={`/gallery/${slug}`} className="block overflow-hidden bg-[#e4e0d8] no-underline" style={{ aspectRatio: String(ratio) }}>
                      <img
                        src={thumbOf(work.image, true)}
                        alt={work.alt ?? work.title}
                        loading="lazy"
                        decoding="async"
                        className="block h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </Link>
                    <figcaption className="mt-4">
                      <span className="block text-[clamp(20px,2vw,26px)] leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                        {work.title}
                      </span>
                      {work.medium && <span className="mt-1 block text-xs uppercase tracking-[.16em] text-[#5e5a53]">{work.medium}</span>}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
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
          <h2 className="m-0 text-[clamp(25px,3.5vw,45px)] font-normal leading-none [text-shadow:0_2px_16px_rgba(0,30,30,.45)]" style={{ fontFamily: "var(--font-display)" }}>
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
