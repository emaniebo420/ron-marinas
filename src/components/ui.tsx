import { useEffect, type ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { artist } from "../content";

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${artist.name}` : artist.name;
  }, [title]);
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1200px] px-5 sm:px-10 ${className}`}>{children}</div>;
}

export function Slot({ label, className }: { label: string; className: string }) {
  return (
    <div className={`flex items-center justify-center bg-slot p-6 text-center text-[13px] text-muted ${className}`}>
      {label}
    </div>
  );
}

export function SectionHeading({ title, note }: { title: string; note?: string }) {
  return (
    <div className="mb-8 flex flex-wrap sm:mb-12 items-baseline justify-between gap-x-6 gap-y-2 border-t border-rule pt-6">
      <h2 className="font-display text-[clamp(32px,5vw,44px)] font-normal leading-tight">{title}</h2>
      {note ? <span className="text-[13px] text-muted">{note}</span> : null}
    </div>
  );
}

function Flower({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse key={angle} cx="0" cy="-70" rx="40" ry="72" fill="#F2D54B" transform={`rotate(${angle})`} />
      ))}
      <circle cx="0" cy="0" r="30" fill="#F4778F" />
    </g>
  );
}

export function GardenBackdrop() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <circle cx="90" cy="860" r="240" fill="#F4778F" opacity=".92" />
      <circle cx="1250" cy="120" r="150" fill="#F4778F" opacity=".75" />
      <path d="M1360 470 C 1320 600, 1380 720, 1340 900" stroke="#2E8B57" strokeWidth="14" fill="none" strokeLinecap="round" />
      <path d="M1350 640 C 1290 610, 1250 640, 1230 700 C 1290 720, 1330 700, 1350 640 Z" fill="#7BC96F" />
      <Flower x={1360} y={380} />
      <path d="M120 640 C 150 720, 110 800, 150 900" stroke="#2E8B57" strokeWidth="12" fill="none" strokeLinecap="round" />
      <path d="M130 760 C 190 730, 240 750, 260 810 C 200 830, 150 820, 130 760 Z" fill="#7BC96F" />
      <Flower x={120} y={600} scale={0.7} />
    </svg>
  );
}

const navItems = [
  { to: "/gallery", label: "Gallery", end: false },
  { to: "/about", label: "About", end: false },
  { to: "/contact", label: "Contact", end: false },
] as const;

function SiteHeader({ light = false }: { light?: boolean }) {
  return (
    <header
      className={`flex flex-col items-center px-5 pt-9 text-center sm:pt-12 ${
        light ? "text-white [text-shadow:0_1px_10px_rgba(0,40,45,.45)]" : "text-[#073b3e]"
      }`}
    >
      {light ? (
        <Link to="/" aria-label={artist.name} className="block">
          <img
            src="/signature.png"
            alt={artist.name}
            className="block h-auto w-[240px] [filter:drop-shadow(0_1px_6px_rgba(0,60,60,.45))] sm:w-[320px]"
          />
        </Link>
      ) : (
        <Link
          to="/"
          className="text-[clamp(15px,2.2vw,20px)] font-semibold uppercase tracking-[.32em] text-inherit no-underline [text-indent:.32em]"
        >
          {artist.name}
        </Link>
      )}
      <nav aria-label="Primary" className="mt-3 flex items-center justify-center gap-x-1 sm:gap-x-3">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `px-3 py-3 text-[clamp(12px,1.4vw,15px)] font-medium uppercase tracking-[.18em] text-inherit no-underline sm:px-5 ${
                isActive ? "underline decoration-2 underline-offset-[10px]" : ""
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

/** Sky-teal band (same colour as the Home painting) with centered header. */
export function TealBand({ children, image }: { children: ReactNode; image?: string }) {
  return (
    <div
      className={image ? "text-white" : "bg-[rgb(15,217,205)]"}
      style={
        image
          ? {
              backgroundColor: "rgb(40,150,170)",
              backgroundImage: `linear-gradient(rgba(0,40,55,.18), rgba(0,40,55,.18)), url(${image})`,
              backgroundSize: "max(100%, 900px) auto",
              backgroundPosition: "center 17%",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      <SiteHeader light={Boolean(image)} />
      {children}
      <svg aria-hidden="true" viewBox="0 0 1440 60" preserveAspectRatio="none" className="-mt-px block h-[40px] w-full sm:h-[60px]">
        <path
          className="fill-bg"
          d="M0 30 C 180 0 360 60 540 30 S 900 0 1080 30 S 1300 55 1440 25 L1440 60 L0 60 Z"
        />
      </svg>
    </div>
  );
}

/** Compact band for inner pages. */
export function PageBand({ title, kicker, image }: { title: string; kicker?: string; image?: string }) {
  return (
    <TealBand image={image}>
      <div
        className={`px-5 pb-10 pt-10 text-center sm:pb-14 sm:pt-14 ${
          image ? "text-white [text-shadow:0_2px_16px_rgba(0,40,55,.5)]" : "text-[#073b3e]"
        }`}
      >
        {kicker ? (
          <p className="m-0 mb-4 text-xs uppercase tracking-[.3em] [text-indent:.3em]">{kicker}</p>
        ) : null}
        <h1 className="m-0 font-display text-[clamp(38px,7.2vw,80px)] font-normal leading-[.95] tracking-tight">{title}</h1>
      </div>
    </TealBand>
  );
}

export function PinkBand({ children, image }: { children: ReactNode; image?: string }) {
  return (
    <div
      className={image ? "relative text-white" : "band-pink relative"}
      style={
        image
          ? {
              backgroundColor: "#1d4d4a",
              backgroundImage: `linear-gradient(rgba(8,32,32,.30), rgba(8,32,32,.30)), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center 74%",
            }
          : undefined
      }
    >
      <svg aria-hidden="true" viewBox="0 0 1440 60" preserveAspectRatio="none" className="-mt-px block h-[60px] w-full">
        <path
          className="fill-bg"
          d="M0 0 L1440 0 L1440 25 C 1300 55 1260 0 1080 30 S 900 60 720 30 S 360 0 180 30 S 60 50 0 30 Z"
        />
      </svg>
      <Container className="pb-14 pt-10 text-center sm:pb-[72px] sm:pt-12">{children}</Container>
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <Container className="flex flex-col items-center gap-y-2 pb-10 pt-6 text-center text-[13px] text-muted sm:flex-row sm:justify-between sm:text-left">
        <span>
          © {new Date().getFullYear()} {artist.name}
        </span>
        <a href={artist.instagram} rel="noopener noreferrer" className="underline">
          {artist.instagramHandle}
        </a>
      </Container>
    </footer>
  );
}
