import { NavLink } from "react-router-dom";
import { GardenBackdrop, usePageTitle } from "../components/ui";
import { artist } from "../content";
import { heroAlt, heroImage } from "../home";

const links = [
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Home() {
  usePageTitle("");
  const hasImage = heroImage !== "";

  return (
    <main className="band-teal relative flex min-h-screen flex-col overflow-hidden">
      {hasImage ? (
        <img
          src={heroImage}
          alt={heroAlt}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-left-top"
        />
      ) : (
        <GardenBackdrop />
      )}

      <div className="relative flex flex-col items-center gap-5 px-6 pt-10 text-center">
        <h1
          className={`m-0 font-sans text-[clamp(24px,5.2vw,64px)] font-semibold uppercase leading-none tracking-[.38em] ${
            hasImage ? "text-white [text-shadow:0_1px_12px_rgba(0,70,70,.55)]" : "text-fg"
          }`}
        >
          <span className="sr-only">{artist.name}</span>
          <span aria-hidden="true">Ron Mariñas</span>
        </h1>

        <nav
          aria-label="Primary"
          className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-[clamp(15px,1.9vw,22px)] uppercase tracking-[.06em] text-[#0B4F52]"
        >
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className="py-2.5 text-inherit no-underline hover:underline hover:underline-offset-8">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <p className="mb-0 mt-6 text-[clamp(13px,1.6vw,19px)] font-bold uppercase tracking-[.06em] text-[#0B4F52]">
          {artist.tagline}
        </p>
      </div>
    </main>
  );
}
