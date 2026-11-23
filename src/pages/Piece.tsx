import { Link, useParams } from "react-router-dom";
import { Container, PageBand, Slot, WorkImg, usePageTitle } from "../components/ui";
import { artist, wmOf, works } from "../content";

export default function Piece() {
  const { slug } = useParams();
  const index = works.findIndex((w) => w.slug === slug);
  const work = index >= 0 ? works[index] : undefined;
  usePageTitle(work ? work.title : "Gallery");

  if (!work) {
    return (
      <>
        <PageBand title="Not found" kicker={artist.tagline} image="/cta-garden.jpg" />
        <main>
          <Container className="pb-24 pt-10 text-center">
            <p className="m-0 text-muted">That piece isn't in the gallery.</p>
            <p className="mt-4">
              <Link to="/gallery" className="underline">
                Back to the gallery
              </Link>
            </p>
          </Container>
        </main>
      </>
    );
  }

  const prev = works[(index - 1 + works.length) % works.length];
  const next = works[(index + 1) % works.length];
  const details = (
    [
      ["Medium", work.medium],
      ["Size", work.size],
    ] as [string, string | undefined][]
  ).filter((d): d is [string, string] => Boolean(d[1]));

  return (
    <>
      <PageBand title={work.title} kicker={work.year ?? artist.tagline} image="/cta-garden.jpg" />
      <main>
        <Container className="pb-20 pt-6 sm:pb-28">
          <Link to="/gallery" className="mb-6 inline-block py-2 text-xs uppercase tracking-[.2em] text-muted no-underline">
            ← Back to gallery
          </Link>
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1.2fr_1fr] md:gap-14">
            {work.image ? (
              <WorkImg fitTall src={work.image} wmSrc={wmOf(work.image)} alt={work.alt ?? work.title} className={`block w-full ${work.image.endsWith(".webp") ? "" : "bg-slot"}`} />
            ) : (
              <Slot label={`[PHOTO: ${work.title}]`} className="aspect-[4/5] w-full" />
            )}
            <div>
              {details.length > 0 ? (
              <dl className="m-0 grid grid-cols-[100px_1fr] gap-y-3 border-t border-rule pt-5 text-[15px]">
                {details.map(([k, v]) => (
                  <div key={k} className="contents">
                    <dt className="text-muted">{k}</dt>
                    <dd className="m-0">{v}</dd>
                  </div>
                ))}
              </dl>
              ) : null}
              {work.description ? (
                <div className="mt-6 border-t border-rule pt-5 text-[15px] leading-[1.75] text-fg/85">
                  {work.description.split("\n\n").map((para, i) => (
                    <p key={i} className={i === 0 ? "m-0" : "m-0 mt-4"}>{para}</p>
                  ))}
                </div>
              ) : null}
              <Link
                to={`/contact?work=${encodeURIComponent(work.title)}`}
                className="mt-8 inline-flex min-h-12 items-center rounded-full bg-fg px-8 text-sm uppercase tracking-[.18em] text-bg no-underline"
              >
                Inquire about this piece
              </Link>
            </div>
          </div>
          {works.length > 1 ? (
            <div className="mt-14 flex justify-between border-t border-rule pt-5 text-xs uppercase tracking-[.14em] sm:mt-16">
              <Link to={`/gallery/${prev.slug}`} className="py-2 text-fg no-underline">
                ← Previous
              </Link>
              <Link to={`/gallery/${next.slug}`} className="py-2 text-fg no-underline">
                Next →
              </Link>
            </div>
          ) : null}
        </Container>
      </main>
    </>
  );
}
