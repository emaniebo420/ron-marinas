import { useSearchParams } from "react-router-dom";
import { Container, PageBand, PinkBand, usePageTitle } from "../components/ui";
import { artist } from "../content";

export default function Contact() {
  usePageTitle("Contact");
  const [params] = useSearchParams();
  const work = params.get("work");
  const subject = work ? `Inquiry: ${work}` : "Inquiry";
  const mailto = artist.email ? `mailto:${artist.email}?subject=${encodeURIComponent(subject)}` : "";

  return (
    <>
      <PageBand title="Contact" />
      <main>
        <Container className="pb-24 pt-10">
          <div className="max-w-[680px]">
            <p className="m-0 text-lg leading-relaxed">
              {work ? `Inquiring about “${work}”. ` : ""}
              For availability, pricing, commissions, or studio visits, write to Ron directly.
            </p>
          </div>
        </Container>
      </main>
      <PinkBand>
        <div className="flex flex-wrap items-end justify-between gap-x-20 gap-y-8">
          <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-3 text-lg">
            {mailto ? (
              <a href={mailto} className="w-fit font-display text-[clamp(32px,4vw,56px)] leading-tight text-fg underline">
                {artist.email}
              </a>
            ) : (
              <span className="font-display text-[clamp(32px,4vw,56px)] leading-tight">[EMAIL ADDRESS]</span>
            )}
            <a href={artist.instagram} rel="noopener noreferrer" className="w-fit text-accent underline">
              {artist.instagramHandle} on Instagram
            </a>
          </div>
        </div>
      </PinkBand>
    </>
  );
}
