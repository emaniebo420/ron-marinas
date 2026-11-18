import { Link } from "react-router-dom";
import { Container, PageBand, PinkBand, SectionHeading, usePageTitle, Reveal } from "../components/ui";
import { artist, exhibitions } from "../content";

const years = Array.from(new Set(exhibitions.map((show) => show.year)));

export default function About() {
  usePageTitle("About");

  return (
    <>
      <PageBand title="About" kicker={artist.tagline} image="/cta-garden.jpg" />
      <main>
        <Container className="grid grid-cols-1 items-start gap-x-16 gap-y-8 pb-20 pt-6 md:grid-cols-[minmax(0,380px)_1fr] md:pb-28">
          <img
            src={artist.portrait}
            alt={`Portrait of ${artist.name}`}
            decoding="async"
            className="mx-auto block aspect-[4/5] w-full max-w-[420px] bg-[#e4e0d8] object-cover object-top md:mx-0"
          />
          <div className="min-w-0 max-w-[680px]">
            <p className="m-0 mb-4 text-xs font-semibold uppercase tracking-[.3em] text-muted">Biography</p>
            <p className="m-0 mb-5 text-base leading-relaxed text-muted sm:text-[17px]">{artist.bio[0]}</p>
            {artist.bio.slice(1).map((paragraph) => (
              <p key={paragraph} className="m-0 mb-5 text-base leading-relaxed text-muted sm:text-[17px]">
                {paragraph}
              </p>
            ))}
            <Link
              to="/gallery"
              className="mt-5 inline-flex min-h-12 items-center rounded-full border border-fg px-8 text-sm uppercase tracking-[.18em] text-fg no-underline hover:bg-fg hover:text-white"
            >
              View the gallery
            </Link>
          </div>
        </Container>

        <Container className="pb-20 md:pb-28">
          <Reveal>
          <SectionHeading title="Exhibitions" note="Selected" />
          {years.map((year) => (
            <section key={year} className="grid grid-cols-1 gap-x-10 border-b border-rule py-6 sm:grid-cols-[110px_1fr] sm:py-8">
              <h3 className="m-0 mb-3 font-display text-[clamp(28px,3vw,38px)] font-normal leading-none text-[#45b7c6] sm:mb-0">{year}</h3>
              <ul className="m-0 flex list-none flex-col gap-5 p-0">
                {exhibitions
                  .filter((show) => show.year === year)
                  .map((show) => (
                    <li key={show.title} className="min-w-0">
                      <p className="m-0 text-base sm:text-lg">{show.title}</p>
                      <p className="m-0 mt-1 text-sm leading-relaxed text-muted">
                        {show.date} · {show.venue}
                      </p>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
          </Reveal>
        </Container>
      </main>

      <PinkBand image="/cta-garden.jpg">
        <div className="flex flex-col items-center gap-y-7">
          <h2 className="m-0 font-display text-[clamp(36px,5vw,64px)] font-normal leading-none [text-shadow:0_2px_16px_rgba(0,30,30,.45)]">Interested in a piece?</h2>
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center rounded-full border border-white px-8 text-sm uppercase tracking-[.18em] text-white no-underline hover:bg-white/15"
          >
            Get in touch
          </Link>
        </div>
      </PinkBand>
    </>
  );
}
