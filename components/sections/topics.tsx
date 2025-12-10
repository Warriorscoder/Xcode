import { topics } from "../content";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

export function Topics() {
  return (
    <section
      id="topics"
      className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/50 p-8 shadow-2xl shadow-slate-950/40"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <Badge variant="outline" className="text-cyan-100">
            Topic Highlights
          </Badge>
          <h2 className="mt-2 text-3xl font-semibold">What we will unpack</h2>
        </div>
        <Badge variant="outline" className="text-white/80">
          Curated for builders, operators, and investors
        </Badge>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {topics.map((topic) => (
          <Card
            key={topic.title}
            className="group relative overflow-hidden transition hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <div className="absolute -left-6 -top-6 h-16 w-16 rounded-full bg-cyan-500/10 blur-xl transition duration-500 group-hover:scale-150" />
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold">{topic.title}</p>
              <span className="text-2xl">{topic.icon}</span>
            </div>
            <p className="mt-3 text-sm text-slate-200/75">{topic.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

