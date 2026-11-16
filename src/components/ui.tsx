import { useEffect, type ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { artist } from "../content";

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${artist.name}` : artist.name;
  }, [title]);
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1200px] px-10 ${className}`}>{children}</div>;
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
    <div className="mb-12 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-rule pt-6">
      <h2 className="font-display text-[44px] font-normal leading-tight">{title}</h2>
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

function SiteHeader() {
  return (
    <Container className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4 py-7">
      <Link to="/" className="font-display text-[26px] text-fg no-underline">
        {artist.name}
      </Link>
      <nav aria-label="Primary" className="flex flex-wrap gap-x-7 gap-y-2 text-sm">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `py-2.5 text-fg no-underline ${isActive ? "underline decoration-2 underline-offset-8" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </Container>
  );
}

/** Teal band with nav. Children render below the nav inside the band. */
export function TealBand({ children }: { children: ReactNode }) {
  return (
    <div className="band-teal relative overflow-hidden">
      <GardenBackdrop />
      <div className="relative">
        <SiteHeader />
        {children}
      </div>
      <svg aria-hidden="true" viewBox="0 0 1440 60" preserveAspectRatio="none" className="relative -mt-px block h-[60px] w-full">
        <path
          className="fill-bg"
          d="M0 30 C 180 0 360 60 540 30 S 900 0 1080 30 S 1300 55 1440 25 L1440 60 L0 60 Z"
        />
      </svg>
    </div>
  );
}

/** Compact band for inner pages. */
export function PageBand({ title, kicker }: { title: string; kicker?: string }) {
  return (
    <TealBand>
      <Container className="pb-[72px] pt-10">
        {kicker ? <p className="m-0 mb-4 text-[13px] uppercase tracking-[.14em] text-muted">{kicker}</p> : null}
        <h1 className="m-0 font-display text-[clamp(56px,8vw,112px)] font-normal leading-[.95] tracking-tight">{title}</h1>
      </Container>
    </TealBand>
  );
}

export function PinkBand({ children }: { children: ReactNode }) {
  return (
    <div className="band-pink relative">
      <svg aria-hidden="true" viewBox="0 0 1440 60" preserveAspectRatio="none" className="-mt-px block h-[60px] w-full">
        <path
          className="fill-bg"
          d="M0 0 L1440 0 L1440 25 C 1300 55 1260 0 1080 30 S 900 60 720 30 S 360 0 180 30 S 60 50 0 30 Z"
        />
      </svg>
      <Container className="pb-[72px] pt-12">{children}</Container>
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <Container className="flex flex-wrap justify-between gap-x-6 gap-y-2 pb-10 pt-6 text-[13px] text-muted">
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
