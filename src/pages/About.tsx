import { Container, PageBand, SectionHeading, Slot, usePageTitle } from "../components/ui";
import { artist, exhibitions } from "../content";

export default function About() {
  usePageTitle("About");

  return (
    <>
      <PageBand title="About" kicker={artist.tagline} />
      <main>
        {artist.intro ? (
          <Container className="pb-4 pt-10">
            <blockquote className="m-0 max-w-[860px] font-display text-[clamp(28px,3.6vw,48px)] leading-[1.15]">
              “{artist.intro}”
              <footer className="mt-4 font-sans text-[13px] uppercase tracking-[.12em] text-muted">— {artist.name}</footer>
            </blockquote>
          </Container>
        ) : null}
        <Container className="flex flex-wrap gap-x-20 gap-y-10 pb-28 pt-10">
          <Slot label="[PORTRAIT or STUDIO PHOTO]" className="aspect-[4/5] min-w-0 max-w-[420px] flex-[1_1_280px]" />
          <div className="flex min-w-0 max-w-[680px] flex-[3_1_420px] flex-col gap-5 text-lg leading-relaxed">
            <p className="m-0">{artist.statement || "[ARTIST STATEMENT — supplied by Ron]"}</p>
            <p className="m-0 text-muted">{artist.bio || "[BIO — short, supplied by Ron]"}</p>
          </div>
        </Container>

        <Container className="pb-28">
          <SectionHeading title="Exhibitions" />
          <ul className="m-0 flex list-none flex-col p-0">
            {exhibitions.map((show) => (
              <li
                key={show.title}
                className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-rule py-[18px]"
              >
                <span className="text-lg">{show.title}</span>
                <span className="text-sm text-muted">{show.meta || "[Venue], [Year]"}</span>
              </li>
            ))}
          </ul>
        </Container>
      </main>
    </>
  );
}
