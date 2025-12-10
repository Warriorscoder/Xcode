"use client";

import { Header } from "../components/sections/header";
import { Hero } from "../components/sections/hero";
import { About } from "../components/sections/about";
import { Topics } from "../components/sections/topics";
import { Agenda } from "../components/sections/agenda";
import { Industries } from "../components/sections/industries";
import { Sponsors } from "../components/sections/sponsors";
import { Experience } from "../components/sections/experience";
import { FAQ } from "../components/sections/faq";
import { Contact } from "../components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="pointer-events-none fixed inset-0 opacity-50">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <Header />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-4 py-16 md:px-6">
        <Hero />
        <About />
        <Topics />
        <Agenda />
        <Industries />
        <Sponsors />
        <Experience />
        <FAQ />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-slate-950/80 py-8 text-center text-sm text-slate-400">
        <p>Middle East Proptech Innovation Summit 2023 • Dubai, UAE</p>
        <p className="text-xs text-slate-500">Embracing Proptech to drive Innovation in Real Estate</p>
      </footer>
    </div>
  );
}
