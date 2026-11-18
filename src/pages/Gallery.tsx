import { Link } from "react-router-dom";
import { Container, PageBand, PinkBand, SectionHeading, Slot, usePageTitle } from "../components/ui";
import { artist, processPhotos, works, thumbOf } from "../content";

const PLACEHOLDER_WORK_COUNT = 6;
export default function Gallery() {
  usePageTitle("Gallery");

  return (
    <>
      <PageBand title="Gallery" kicker={artist.tagline} image="/cta-garden.jpg" />

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
                          src={thumbOf(work.image)}
                          alt={work.alt ?? work.title}
                          loading="lazy"
                          decoding="async"
                          className={`aspect-[4/5] w-full ${work.image.endsWith(".webp") ? "object-contain p-2" : "bg-slot object-cover"}`}
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
          <div className="columns-2 gap-3 sm:gap-6 lg:columns-4">
            {processPhotos.map((photo) => (
              <figure key={photo.src} className="m-0 mb-3 break-inside-avoid sm:mb-6">
                <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" className="block h-auto w-full bg-[#e4e0d8]" />
              </figure>
            ))}
          </div>
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
