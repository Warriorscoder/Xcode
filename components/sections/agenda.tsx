import { useMemo, useState } from "react";
import { agenda } from "../content";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export function Agenda() {
  const [activeDay, setActiveDay] = useState(0);
  const activeAgenda = useMemo(() => agenda[activeDay], [activeDay]);

  return (
    <section
      id="agenda"
      className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-2xl shadow-slate-950/40"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Badge variant="outline" className="text-cyan-100">
            Agenda
          </Badge>
          <h2 className="mt-2 text-3xl font-semibold">Program schedule</h2>
          <p className="text-sm text-slate-200/70">
            Keynotes, panels, workshops, roundtables, and awards across two immersive days.
          </p>
        </div>
        <div className="flex gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm">
          {agenda.map((day, index) => (
            <Button
              key={day.day}
              variant={activeDay === index ? "primary" : "ghost"}
              className={activeDay === index ? "" : "px-4 py-2 text-slate-100"}
              onClick={() => setActiveDay(index)}
            >
              {day.day}
            </Button>
          ))}
        </div>
      </div>
      <Card className="bg-white/5">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold">{activeAgenda.day}</p>
            <p className="text-xs text-slate-200/70">{activeAgenda.date}</p>
          </div>
          <p className="text-sm text-cyan-100">{activeAgenda.summary}</p>
        </div>
        <div className="mt-4 space-y-3">
          {activeAgenda.items.map((item) => (
            <Card
              key={item.title}
              className="bg-slate-950/60 transition hover:-translate-y-0.5 hover:border-cyan-400/50"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="border-cyan-400/40 bg-cyan-500/10 text-cyan-100">
                    {item.time}
                  </Badge>
                  <p className="font-semibold">{item.title}</p>
                </div>
                <div className="flex gap-2 text-xs text-slate-200/70">
                  <Badge variant="outline" className="px-2 py-1 text-xs">
                    {item.format}
                  </Badge>
                  <Badge variant="outline" className="px-2 py-1 text-xs">
                    {item.focus}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </section>
  );
}

