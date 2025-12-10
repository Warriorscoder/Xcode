import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { resources, stats } from "../content";

export function Hero() {
  return (
    <section
      id="hero"
      className="grid gap-10 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-2xl shadow-slate-950/40 md:grid-cols-[1.2fr_0.8fr]"
    >
      <div className="space-y-6">
        <Badge className="gap-2 text-cyan-100" variant="outline">
          Embracing Proptech to drive Innovation in Real Estate
          <span className="text-[10px] text-white/60">Dubai • UAE</span>
        </Badge>
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Summit logo" width={52} height={52} className="rounded-full border border-white/10 bg-white/10 p-2" />
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Middle East Proptech Innovation Summit 2023
          </h1>
        </div>
        <p className="max-w-2xl text-lg text-slate-200/80">
          Two days of strategy, technology, and partnerships to accelerate digital transformation
          across property development, management, and investment.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href="#cta">Secure Your Seat</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#sponsors">Sponsorship Options</a>
          </Button>
          <Button variant="outline" className="border-white/10 bg-white/5 text-cyan-100" asChild>
            <a href="#agenda">View Agenda</a>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <Card key={item.label} className="shadow-inner shadow-white/5">
              <p className="text-2xl font-semibold text-cyan-200">{item.value}</p>
              <p className="text-sm text-slate-200/70">{item.label}</p>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-white/0 p-6 text-sm text-slate-100">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-100">Event Snapshot</p>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-300/80">Dates</p>
              <p className="text-base font-semibold">23 & 24 May 2023</p>
            </div>
            <Badge>2 Days</Badge>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-300/80">Venue</p>
              <p className="text-base font-semibold">Dubai, United Arab Emirates</p>
            </div>
            <Badge variant="outline">In-Person</Badge>
          </div>
        </Card>
        <Card>
          <p className="text-xs text-slate-300/80">Why now?</p>
          <p className="text-sm text-slate-100">
            Dubai real estate leads global growth. With new freehold and visa reforms fueling record investment,
            the summit unites leaders to embed proptech at scale.
          </p>
        </Card>
        <div className="grid grid-cols-2 gap-3">
          {resources.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:-translate-y-0.5 hover:border-cyan-300"
            >
              <span className="font-semibold">{item.title}</span>
              <span className="text-lg">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

