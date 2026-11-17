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
      <PageBand title="Contact" kicker={artist.tagline} image="/cta-garden.jpg" />
      <main>
        <Container className="pb-16 pt-10 sm:pb-24">
          <div className="mx-auto max-w-[680px] text-center">
            <p className="m-0 text-base leading-relaxed sm:text-lg">
              {work ? `Inquiring about “${work}”. ` : ""}
              For availability, pricing, commissions, or studio visits, write to Ron directly.
            </p>
          </div>
        </Container>
      </main>
      <PinkBand image="/cta-garden.jpg">
        <div className="flex flex-col items-center gap-y-8">
          <div className="flex min-w-0 flex-col items-center gap-3 text-lg">
            {mailto ? (
              <a href={mailto} className="w-fit max-w-full break-all font-display text-[clamp(26px,4vw,56px)] leading-tight text-white underline [text-shadow:0_2px_16px_rgba(0,30,30,.45)]">
                {artist.email}
              </a>
            ) : (
              <span className="font-display text-[clamp(32px,4vw,56px)] leading-tight">[EMAIL ADDRESS]</span>
            )}
            <a href={artist.instagram} rel="noopener noreferrer" className="w-fit text-white underline [text-shadow:0_1px_8px_rgba(0,30,30,.5)]">
              {artist.instagramHandle} on Instagram
            </a>
          </div>
        </div>
      </PinkBand>
    </>
  );
}
