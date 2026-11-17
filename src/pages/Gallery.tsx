import { Link } from "react-router-dom";
import { Container, PageBand, PinkBand, SectionHeading, Slot, usePageTitle } from "../components/ui";
import { artist, processYears, works } from "../content";

const PLACEHOLDER_WORK_COUNT = 6;
export default function Gallery() {
  usePageTitle("Gallery");

  return (
    <>
      <PageBand title="Gallery" kicker={artist.tagline} />

      <main>
        <Container className="pb-20 pt-6 sm:pb-28">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 sm:mb-10">
            <span className="text-xs uppercase tracking-[.3em] text-muted">
              {works.length ? `${works.length} ${works.length === 1 ? "piece" : "pieces"}` : "[N] pieces"}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-7 sm:gap-y-12 lg:grid-cols-3">
            {works.length > 0 ? (
              (
                works.map((work) => (
                  <figure key={work.slug} className="m-0 min-w-0">
                    <Link to={`/gallery/${work.slug}`} className="block no-underline">
                      {work.image ? (
                        <img
                          src={work.image}
                          alt={work.alt ?? work.title}
                          loading="lazy"
                          decoding="async"
                          className="aspect-[4/5] w-full bg-slot object-cover"
                        />
                      ) : (
                        <Slot label={`[PHOTO: ${work.title}]`} className="aspect-[4/5]" />
                      )}
                    </Link>
                    <figcaption className="mt-3">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-display text-[clamp(16px,4.2vw,22px)] leading-tight">{work.title}</span>

                      </div>
                      <div className="text-xs text-muted sm:text-[13px]">
                        {[work.medium, work.size, work.year].filter(Boolean).join(" · ")}
                      </div>
                    </figcaption>
                  </figure>
                ))
              )
            ) : (
              Array.from({ length: PLACEHOLDER_WORK_COUNT }, (_, i) => {
                const n = String(i + 1).padStart(2, "0");
                return (
                  <figure key={n} className="m-0 min-w-0">
                    <Slot label={`[ARTWORK ${n}]`} className="aspect-[4/5]" />
                    <figcaption className="mt-3">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-display text-[clamp(16px,4.2vw,22px)] leading-tight">[Title]</span>

                      </div>
                      <div className="text-xs text-muted sm:text-[13px]">[Medium] · [Size] · [Year]</div>
                    </figcaption>
                  </figure>
                );
              })
            )}
          </div>
        </Container>

        <Container className="pb-20 sm:pb-28">
          <SectionHeading title="Process" note="Behind the work" />
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {processYears.map((year) => (
              <figure key={year} className="m-0 flex min-w-0 flex-col gap-3">
                <Slot label={`[WIP ${year} IMAGE]`} className="aspect-square" />
                <figcaption className="text-xs text-muted sm:text-[13px]">Work in progress, {year}</figcaption>
              </figure>
            ))}
          </div>
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
