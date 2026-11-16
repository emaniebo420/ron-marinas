import { Link } from "react-router-dom";
import { Container, PageBand, PinkBand, SectionHeading, Slot, usePageTitle } from "../components/ui";
import { artist, exhibitions } from "../content";

export default function About() {
  usePageTitle("About");

  return (
    <>
      <PageBand title="About" kicker={artist.tagline} />
      <main>
        <Container className="grid grid-cols-1 items-start gap-x-16 gap-y-8 pb-20 pt-6 md:grid-cols-[minmax(0,380px)_1fr] md:pb-28">
          <Slot label="[PORTRAIT or STUDIO PHOTO]" className="mx-auto aspect-[4/5] w-full max-w-[420px] md:mx-0" />
          <div className="min-w-0 max-w-[680px]">
            <p className="m-0 mb-4 text-xs uppercase tracking-[.3em] text-muted">Artist statement</p>
            <p className="m-0 mb-7 font-display text-[clamp(28px,3.4vw,44px)] leading-[1.15]">
              {artist.statement || "[ONE-SENTENCE STATEMENT — supplied by Ron]"}
            </p>
            <p className="m-0 text-base leading-relaxed text-muted sm:text-[17px]">
              {artist.bio || "[BIO — short, supplied by Ron]"}
            </p>
            <Link
              to="/gallery"
              className="mt-8 inline-flex min-h-12 items-center rounded-full border border-fg px-8 text-sm uppercase tracking-[.18em] text-fg no-underline"
            >
              View the gallery
            </Link>
          </div>
        </Container>

        <Container className="pb-20 md:pb-28">
          <SectionHeading title="Exhibitions" note="Selected" />
          <ul className="m-0 flex list-none flex-col p-0">
            {exhibitions.map((show) => (
              <li
                key={show.title}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-[18px]"
              >
                <span className="text-base sm:text-lg">{show.title}</span>
                <span className="text-sm text-muted">{show.meta || "[Venue], [Year]"}</span>
              </li>
            ))}
          </ul>
        </Container>
      </main>

      <PinkBand>
        <div className="flex flex-col items-center gap-y-7">
          <h2 className="m-0 font-display text-[clamp(36px,5vw,64px)] font-normal leading-none">Interested in a piece?</h2>
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center rounded-full border border-fg px-8 text-sm uppercase tracking-[.18em] text-fg no-underline"
          >
            Get in touch
          </Link>
        </div>
      </PinkBand>
    </>
  );
}
