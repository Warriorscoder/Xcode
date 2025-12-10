import { faqs } from "../content";
import { Badge } from "../ui/badge";

export function FAQ() {
  return (
    <section
      id="faq"
      className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/55 p-8 shadow-2xl shadow-slate-950/40"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <Badge variant="outline" className="text-cyan-100">
            FAQ
          </Badge>
          <h2 className="mt-2 text-3xl font-semibold">Everything you need to know</h2>
        </div>
        <a className="text-sm text-cyan-100 hover:text-cyan-50" href="mailto:abdc@gmail.com">
          Still have a question? Contact us ↗
        </a>
      </div>
      <div className="space-y-3">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-cyan-300/60"
          >
            <summary className="cursor-pointer list-none px-5 py-4 text-base font-semibold transition group-open:bg-white/10">
              {item.q}
            </summary>
            <div className="px-5 pb-4 text-sm text-slate-200/80">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

