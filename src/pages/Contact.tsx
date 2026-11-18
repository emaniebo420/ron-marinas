import { useSearchParams } from "react-router-dom";
import { InstagramIcon, PageBand, PinkBand, usePageTitle } from "../components/ui";
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
        <PinkBand image="/cta-garden.jpg">
          <div className="mx-auto flex max-w-[640px] flex-col items-center gap-y-7 py-6 sm:py-12">
            <p className="m-0 text-lg leading-relaxed [text-shadow:0_1px_10px_rgba(0,30,30,.55)] sm:text-xl">
              {work ? `Inquiring about “${work}”. ` : ""}
              For availability, pricing, commissions, or studio visits, message Ron directly.
            </p>
            <a
              href={artist.instagramDm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center gap-3 rounded-full bg-white px-9 text-sm font-medium uppercase tracking-[.18em] text-[#1b1a18] no-underline shadow-[0_6px_24px_rgba(0,30,30,.35)] hover:bg-[#f6f4ef]"
            >
              <InstagramIcon className="h-5 w-5" />
              Message on Instagram
            </a>
            {work ? <p className="m-0 text-sm [text-shadow:0_1px_8px_rgba(0,30,30,.6)]">Mention “{work}” in your message.</p> : null}
            {mailto ? (
              <p className="m-0 text-sm [text-shadow:0_1px_8px_rgba(0,30,30,.6)]">
                Prefer email?{" "}
                <a href={mailto} className="break-all text-white underline underline-offset-4">
                  {artist.email}
                </a>
              </p>
            ) : null}
          </div>
        </PinkBand>
      </main>
    </>
  );
}
