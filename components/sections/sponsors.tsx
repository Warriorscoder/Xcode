import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const sponsorBlocks = [
  {
    title: "Thought Leadership",
    copy: "Deliver a keynote or moderate a panel to a pre-qualified audience.",
  },
  {
    title: "Demand Generation",
    copy: "Meet senior buyers with budgets and timelines to deploy solutions.",
  },
  {
    title: "Brand Positioning",
    copy: "Stay top-of-mind with decision makers evaluating partners this year.",
  },
];

export function Sponsors() {
  return (
    <section
      id="sponsors"
      className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/55 p-8 shadow-2xl shadow-slate-950/40"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <Badge variant="outline" className="text-cyan-100">
            Sponsors & Partners
          </Badge>
          <h2 className="mt-2 text-3xl font-semibold">Partner to stand out</h2>
        </div>
        <Badge variant="outline" className="text-white/80">
          Expo • Keynotes • Awards • Media
        </Badge>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {sponsorBlocks.map((item) => (
          <Card
            key={item.title}
            className="transition hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="mt-2 text-sm text-slate-200/75">{item.copy}</p>
          </Card>
        ))}
      </div>
      <Card className="bg-linear-to-r from-cyan-500/10 via-fuchsia-500/10 to-slate-900">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-cyan-100">Built for outcomes</p>
            <p className="text-sm text-slate-200/80">
              Sponsorship designed around thought leadership, demo visibility, and qualified meetings.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href="mailto:abdc@gmail.com">Email the team</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+919876543210">Call +91 98765 43210</a>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}

