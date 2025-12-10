import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

const experiences = [
  "C-level lounge for deal-making and peer exchange.",
  "Expo and solution showcase with live product demos.",
  "Awards evening celebrating proptech innovation and delivery.",
  "Workshops for hands-on learning with practitioners.",
];

const interactive = [
  { title: "Build My Schedule", description: "Bookmark sessions and create a personal flow." },
  { title: "Live Polls", description: "Shape discussions with on-the-spot insights." },
  { title: "Meeting Concierge", description: "Curated 1:1s with tech buyers and partners." },
  { title: "Real-Time Demos", description: "See blockchain, AI, and IoT solutions in action." },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/50 p-8 shadow-2xl shadow-slate-950/40 md:grid-cols-[1fr_1fr]"
    >
      <div className="space-y-4">
        <Badge variant="outline" className="text-cyan-100">
          Experience
        </Badge>
        <h2 className="text-3xl font-semibold">Beyond sessions</h2>
        <p className="text-slate-200/80">
          Curated experiences to maximize connection time and tangible outcomes.
        </p>
        <div className="space-y-3">
          {experiences.map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm text-slate-100">
              <span className="mt-0.5 text-cyan-300">✺</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <Card>
        <Badge variant="outline" className="text-cyan-100">
          Interactive Elements
        </Badge>
        <div className="mt-4 grid gap-3">
          {interactive.map((item) => (
            <Card key={item.title} className="bg-slate-950/60">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-slate-200/75">{item.description}</p>
            </Card>
          ))}
        </div>
      </Card>
    </section>
  );
}

