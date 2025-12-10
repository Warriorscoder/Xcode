import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const travelItems = [
  { title: "Accommodation", copy: "Premium hotel partners close to the venue." },
  { title: "Travel", copy: "Metro, ride-share, and dedicated chauffeur options." },
  { title: "Visa Support", copy: "Guidance for international attendees and sponsors." },
  { title: "Health & Safety", copy: "Compliant with the latest local regulations." },
];

const ctaRows = [
  { label: "Register as Delegate", action: "Register" },
  { label: "Submit to Speak", action: "Share topic" },
  { label: "Sponsor / Exhibit", action: "Request prospectus" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/55 p-8 shadow-2xl shadow-slate-950/40 md:grid-cols-[1.2fr_0.8fr]"
    >
      <div className="space-y-4">
        <Badge variant="outline" className="text-cyan-100">
          Venue & Travel
        </Badge>
        <h2 className="text-3xl font-semibold">Plan your trip</h2>
        <Card>
          <p className="text-sm font-semibold text-cyan-100">Location</p>
          <p className="text-lg font-semibold">Dubai, United Arab Emirates</p>
          <p className="text-sm text-slate-200/75">
            Global hub with visa-friendly access, connected flights, and premium hospitality.
          </p>
        </Card>
        <div className="grid gap-3 sm:grid-cols-2">
          {travelItems.map((item) => (
            <Card key={item.title} className="bg-slate-950/60">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-slate-200/75">{item.copy}</p>
            </Card>
          ))}
        </div>
      </div>
      <Card className="space-y-4">
        <Badge variant="outline" className="text-cyan-100">
          Get involved
        </Badge>
        <h3 className="text-xl font-semibold">Tell us your focus</h3>
        <p className="text-sm text-slate-200/80">
          Whether you are attending, sponsoring, or speaking, we will tailor your summit journey.
        </p>
        <div className="space-y-3">
          {ctaRows.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3"
            >
              <p className="text-sm font-semibold">{item.label}</p>
              <Badge variant="outline" className="bg-cyan-500/10 text-cyan-100">
                {item.action}
              </Badge>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          <Button asChild>
            <a href="mailto:abdc@gmail.com">Email abdc@gmail.com</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="tel:+919876543210">Call +91 98765 43210</a>
          </Button>
        </div>
        <p className="text-xs text-slate-200/70">
          Download agendas, sponsorship packages, and speaker guidelines upon request.
        </p>
      </Card>
    </section>
  );
}

