import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Sri Dev Fashion Academy" },
      { name: "description", content: "Transparent pricing for our Basic, Advanced, and Master fashion design programmes." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Basic",
    price: "12,000",
    duration: "1 month",
    desc: "Perfect for beginners stepping into fashion construction.",
    features: ["Machine practice", "Measurement basics", "5 blouse models", "Certificate"],
    highlight: false,
  },
  {
    name: "Advanced",
    price: "24,000",
    duration: "3 months",
    desc: "Our most popular pathway — covers couture essentials.",
    features: ["Everything in Basic", "Katori & Princess cuts", "10 neck models", "8 sleeve styles", "Handwork foundations", "Industry diploma"],
    highlight: true,
  },
  {
    name: "Master",
    price: "42,000",
    duration: "6 months",
    desc: "Full mastery — designed for aspiring couturiers.",
    features: ["Everything in Advanced", "All blouse modules", "All neck & sleeve models", "Advanced handwork", "Portfolio mentorship", "Placement support"],
    highlight: false,
  },
];

function PricingPage() {
  return (
    <PageLayout>
      <section className="pt-32 md:pt-44 pb-12 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal><span className="section-eyebrow">Investment</span></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl">Choose your <em className="gold-text not-italic">pathway</em></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Three carefully designed programmes — find the one that matches your ambition.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} direction="up">
              <div
                className={`relative h-full rounded-3xl p-8 md:p-10 transition-all duration-500 ${
                  p.highlight
                    ? "bg-[var(--ink)] text-white shadow-[var(--shadow-luxe)] md:scale-105"
                    : "luxe-card"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] tracking-[0.3em] uppercase font-medium" style={{ background: "var(--gradient-gold)", color: "var(--ink)" }}>
                    <Sparkles className="inline h-3 w-3 mr-1" /> Most Loved
                  </div>
                )}
                <div className={`text-xs tracking-[0.3em] uppercase ${p.highlight ? "text-[var(--gold)]" : "text-muted-foreground"}`}>{p.name}</div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl md:text-6xl gold-text">₹{p.price}</span>
                </div>
                <div className={`mt-1 text-sm ${p.highlight ? "text-white/60" : "text-muted-foreground"}`}>{p.duration} programme</div>
                <p className={`mt-5 text-sm ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>{p.desc}</p>

                <ul className="mt-8 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 mt-0.5 text-[var(--gold)] flex-shrink-0" />
                      <span className={p.highlight ? "text-white/90" : ""}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-10 w-full inline-flex justify-center ${p.highlight ? "btn-gold" : "btn-outline-gold"}`}
                >
                  Enroll Now
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 text-center text-sm text-muted-foreground">
            Flexible monthly instalments available. Visit us at 2nd Street, Gandhipuram for a personal consultation.
          </p>
        </Reveal>
      </section>
    </PageLayout>
  );
}
