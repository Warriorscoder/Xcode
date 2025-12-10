import { personas, whyAttend } from "../content";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

export function About() {
  return (
    <section
      id="about"
      className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/50 p-8 shadow-2xl shadow-slate-950/40 md:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">About the Summit</h2>
        <p className="text-slate-200/80">
          The region’s premier platform for proptech leaders to share strategy, learn from real-world
          transformations, and build partnerships that accelerate the digitization of real estate assets.
        </p>
        <p className="text-slate-200/80">
          Expect immersive keynotes, live demos, and curated networking with decision makers across
          development, management, investment, and regulation.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {whyAttend.map((item) => (
            <Card key={item} className="flex items-start gap-3">
              <span className="mt-0.5 text-cyan-300">•</span>
              <p className="text-sm text-slate-100">{item}</p>
            </Card>
          ))}
        </div>
      </div>
      <Card className="border-cyan-400/20 bg-linear-to-br from-cyan-500/10 via-slate-900 to-slate-950">
        <Badge variant="outline" className="mb-4 text-cyan-100">
          Who you will meet
        </Badge>
        <div className="grid gap-3">
          {personas.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3 transition hover:border-cyan-400/50"
            >
              <div className="h-10 w-10 rounded-full bg-cyan-500/20 text-center text-lg font-semibold text-cyan-100">
                <span className="leading-10">✦</span>
              </div>
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-slate-200/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

