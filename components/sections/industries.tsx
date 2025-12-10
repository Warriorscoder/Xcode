import { industries, sponsorship } from "../content";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function Industries() {
  return (
    <section
      id="industries"
      className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/50 p-8 shadow-2xl shadow-slate-950/40 md:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="space-y-3">
        <Badge variant="outline" className="text-cyan-100">
          Industries
        </Badge>
        <h2 className="text-3xl font-semibold">Where solutions meet demand</h2>
        <p className="text-slate-200/80">
          Built for buyers and builders across the property lifecycle — development, operations,
          investment, and community experience.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {industries.map((item) => (
            <Card
              key={item}
              className="text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-400/50"
            >
              {item}
            </Card>
          ))}
        </div>
      </div>
      <Card className="space-y-4">
        <Badge variant="outline" className="text-cyan-100">
          Why sponsor
        </Badge>
        <h3 className="text-xl font-semibold">ROI-driven visibility</h3>
        <p className="text-sm text-slate-200/80">
          Engage decision makers ready to evaluate and buy. Demonstrate proof-of-value onstage and on
          the expo floor.
        </p>
        <div className="space-y-3">
          {sponsorship.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-0.5 text-cyan-300">◆</span>
              <p className="text-sm text-slate-100">{item}</p>
            </div>
          ))}
        </div>
        <Button asChild>
          <a href="#sponsors">View sponsor packages</a>
        </Button>
      </Card>
    </section>
  );
}

