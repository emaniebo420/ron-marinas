import { type FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, InstagramIcon, PageBand, usePageTitle } from "../components/ui";
import { artist, works } from "../content";

/** Messages are delivered straight to Ron's Gmail through FormSubmit (no account or API key needed). */
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${artist.email}`;

const SUBJECTS = ["Artwork Inquiry", "Purchase Inquiry", "Commission Request", "Collaboration", "General Question"] as const;

const fieldClass =
  "w-full rounded-xl border border-rule bg-white px-4 py-3 text-base text-fg placeholder:text-muted/70 focus:border-fg focus:outline-none";
const labelClass = "flex flex-col gap-2 text-sm font-medium text-fg";
const eyebrowClass = "m-0 mb-4 text-xs uppercase tracking-[.3em] text-muted";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  usePageTitle("Contact");
  const [params] = useSearchParams();
  const workTitle = params.get("work");
  const [piece, setPiece] = useState(() => works.find((w) => w.title === workTitle) ?? null);
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("_honey") ?? "") !== "") return; // spam trap field, humans leave it empty
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subjectChoice = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "").trim();
    const subject = piece ? `${subjectChoice}: ${piece.title}` : subjectChoice;
    const body = `${piece ? `Inquiring about: ${piece.title}\n\n` : ""}${message}`;

    setStatus("sending");
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name,
          email,
          _replyto: email,
          _subject: `Website inquiry: ${subject}`,
          _template: "table",
          _captcha: "false",
          message: body,
        }),
      });
      const result = (await res.json().catch(() => null)) as { success?: string | boolean } | null;
      if (!res.ok || String(result?.success) === "false") throw new Error(`FormSubmit ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timer);
    }
  }

  return (
    <>
      <PageBand title="Contact" kicker={artist.tagline} image="/cta-garden.jpg" />
      <main>
        <Container className="pb-20 pt-10 sm:pb-28">
          <p className="m-0 mx-auto mb-12 max-w-[640px] text-center text-base leading-relaxed sm:mb-16 sm:text-lg">
            For availability, pricing, commissions, or studio visits, write to Ron directly.
          </p>

          <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-[1.25fr_1fr]">
            <div className="min-w-0">
              {status === "success" && (
                <p role="status" className="mb-6 rounded-xl border border-[#86efac] bg-[#f0fdf4] px-4 py-3 text-center text-[#166534]">
                  Message sent. Ron will get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="mb-6 rounded-xl border border-[#fca5a5] bg-[#fef2f2] px-4 py-3 text-center text-[#991b1b]">
                  Something went wrong. Please try again, or message Ron on Instagram.
                </p>
              )}
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                {piece && (
                  <div className="flex items-center gap-3 rounded-xl border border-rule bg-white p-3">
                    {piece.image && <img src={piece.image} alt="" className="h-16 w-14 rounded-md object-cover" />}
                    <div className="min-w-0 flex-1 text-sm">
                      <p className="m-0 text-[10px] uppercase tracking-[.25em] text-muted">Inquiring about</p>
                      <p className="m-0 truncate font-medium">{piece.title}</p>
                    </div>
                    <button type="button" onClick={() => setPiece(null)} className="min-h-11 px-2 text-xs text-muted underline">
                      Remove
                    </button>
                  </div>
                )}
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <label className={labelClass}>
                  Name
                  <input name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClass} />
                </label>
                <label className={labelClass}>
                  Email
                  <input name="email" type="email" required autoComplete="email" placeholder="your@email.com" className={fieldClass} />
                </label>
                <label className={labelClass}>
                  Subject
                  <select name="subject" required defaultValue={piece ? "Artwork Inquiry" : ""} className={fieldClass}>
                    <option value="" disabled>
                      Select a subject
                    </option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={labelClass}>
                  Message
                  <textarea name="message" rows={6} required placeholder="Tell Ron about your inquiry..." className={fieldClass} />
                </label>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="min-h-12 rounded-full bg-[#45b7c6] px-8 text-sm font-medium uppercase tracking-[.18em] text-white hover:opacity-90 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>

            <aside className="min-w-0 md:pt-1">
              <p className={eyebrowClass}>Direct contact</p>
              <a href={`mailto:${artist.email}`} className="block break-all text-base text-fg">
                {artist.email}
              </a>
              <hr className="my-8 border-0 border-t border-rule" />
              <p className={eyebrowClass}>Social media</p>
              <a href={artist.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-base text-fg no-underline">
                <InstagramIcon className="h-5 w-5" />
                {artist.instagramHandle}
              </a>
              <a
                href={artist.instagramDm}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-fg px-6 text-xs font-medium uppercase tracking-[.18em] text-fg no-underline hover:bg-fg hover:text-white"
              >
                Message on Instagram
              </a>
            </aside>
          </div>
        </Container>
      </main>
    </>
  );
}
