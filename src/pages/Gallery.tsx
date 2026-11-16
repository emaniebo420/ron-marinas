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
        <Container className="pb-28 pt-10">
          <div id="works" className="scroll-mt-6">
            <SectionHeading title="Works" note={works.length ? `${works.length} selected pieces` : "[N] selected pieces"} />
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-14">
            {works.length > 0
              ? works.map((work) => (
                  <figure key={work.slug} id={work.slug} className="m-0 flex min-w-0 flex-[1_1_340px] flex-col gap-3.5">
                    <img
                      src={work.image}
                      alt={work.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/5] w-full bg-slot object-cover"
                    />
                    <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
                      <div>
                        <div className="font-display text-[22px] leading-tight">
                          {work.title}, {work.year}
                        </div>
                        <div className="text-[13px] text-muted">
                          {work.medium} · {work.size} · {work.status}
                        </div>
                      </div>
                      <Link to={`/contact?work=${encodeURIComponent(work.title)}`} className="py-2.5 text-[13px] text-fg">
                        Inquire
                      </Link>
                    </figcaption>
                  </figure>
                ))
              : Array.from({ length: PLACEHOLDER_WORK_COUNT }, (_, i) => {
                  const n = String(i + 1).padStart(2, "0");
                  return (
                    <figure key={n} className="m-0 flex min-w-0 flex-[1_1_340px] flex-col gap-3.5">
                      <Slot label={`[ARTWORK ${n}]`} className="aspect-[4/5]" />
                      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
                        <div>
                          <div className="font-display text-[22px] leading-tight">[Title], [Year]</div>
                          <div className="text-[13px] text-muted">[Medium] · [Size] · [Available / Sold]</div>
                        </div>
                        <Link to="/contact" className="py-2.5 text-[13px] text-fg">
                          Inquire
                        </Link>
                      </figcaption>
                    </figure>
                  );
                })}
          </div>
        </Container>

        <Container className="pb-28">
          <SectionHeading title="Process" note="Work in progress, sketches, mural" />
          <div className="flex flex-wrap gap-8">
            {processYears.map((year) => (
              <figure key={year} className="m-0 flex min-w-0 flex-[1_1_240px] flex-col gap-3">
                <Slot label={`[WIP ${year} IMAGE]`} className="aspect-square" />
                <figcaption className="text-[13px] text-muted">Work in progress, {year}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-8">
            {["Sketches", "Mural"].map((label) => (
              <figure key={label} className="m-0 flex min-w-0 flex-[1_1_420px] flex-col gap-3">
                <Slot label={`[${label.toUpperCase()} IMAGE]`} className="aspect-[3/2]" />
                <figcaption className="text-[13px] text-muted">{label}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </main>

      <PinkBand>
        <div className="flex flex-wrap items-end justify-between gap-x-20 gap-y-6">
          <h2 className="m-0 min-w-0 flex-[1_1_380px] font-display text-[clamp(40px,5vw,64px)] font-normal leading-none">
            Interested in a piece?
          </h2>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center rounded-full border border-fg px-6 text-sm text-fg no-underline"
          >
            Get in touch
          </Link>
        </div>
      </PinkBand>
    </>
  );
}
