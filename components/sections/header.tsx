import Image from "next/image";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Summit logo"
            width={40}
            height={40}
            className="rounded-full border border-white/10 bg-white/10"
          />
          <div>
            <p className="text-sm font-semibold tracking-tight text-slate-100">
              Middle East Proptech Innovation Summit
            </p>
            <p className="text-xs text-cyan-200">23-24 May • Dubai</p>
          </div>
        </div>
        <nav className="hidden items-center gap-4 text-sm font-medium text-slate-200 md:flex">
          <a className="hover:text-cyan-200" href="#about">
            About
          </a>
          <a className="hover:text-cyan-200" href="#agenda">
            Agenda
          </a>
          <a className="hover:text-cyan-200" href="#topics">
            Topics
          </a>
          <a className="hover:text-cyan-200" href="#sponsors">
            Sponsors
          </a>
          <a className="hover:text-cyan-200" href="#contact">
            Contact
          </a>
        </nav>
        <Button asChild className="hidden md:inline-flex">
          <a href="#cta">Register Interest</a>
        </Button>
      </div>
    </header>
  );
}

