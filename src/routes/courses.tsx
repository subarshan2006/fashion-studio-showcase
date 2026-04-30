import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Advanced Blouse Designing | Sri Dev Fashion Academy" },
      { name: "description", content: "Master the Advanced Blouse Designing Course — from machine practice to katori, neck, sleeve, and handwork specialisations." },
    ],
  }),
  component: CoursesPage,
});

const modules = [
  {
    key: "intro",
    title: "Introduction",
    items: [
      "Machine Practice",
      "Paper Sample",
      "Handwork — Hook & Loop",
      "Measurement & Calculation",
      "Portion",
      "Shoulder Portion",
      "Hairband and Bow",
    ],
  },
  {
    key: "blouse",
    title: "Blouse Construction",
    items: [
      "Lining Blouse",
      "Crosscut Blouse",
      "Piping Blouse",
      "Princess Blouse",
      "With Patti",
      "Without Patti",
      "Boat Neck Blouse",
      "Back Neck — 2 Models",
      "Canvas Neck Model",
      "Katori Blouse with Patti",
      "Close Neck Blouse",
      "Single Katori Blouse",
      "Double Katori Blouse",
      "Collar Neck",
      "Half Collar",
      "Sleeveless Blouse",
    ],
  },
  {
    key: "neck",
    title: "Neck Designs (Choose Any 5)",
    items: [
      "Round Neck",
      "Pentagon Neck",
      "Square Neck",
      "V-Neck",
      "Collar Neck",
      "Scallop Neck",
      "Sweet Heart Neck",
      "Sleeveless Halter Neck",
      "Backless Neck",
      "High Neck",
      "Boat Neck",
      "Neck Canvas Model",
    ],
  },
  {
    key: "sleeve",
    title: "Sleeve Mastery",
    items: [
      "Short Sleeve",
      "Elbow Sleeve",
      "3/4 Sleeve",
      "Cap Sleeve",
      "Puff Sleeve",
      "High Puff Sleeve",
      "Pleated Sleeve",
      "Petal Sleeve",
      "Puff with Border Sleeve",
      "Pleated Border Sleeve",
    ],
  },
];

function CoursesPage() {
  const [active, setActive] = useState<string>("intro");
  const [openMobile, setOpenMobile] = useState<string | null>("intro");

  const activeMod = modules.find((m) => m.key === active)!;

  return (
    <PageLayout>
      <section className="pt-32 md:pt-44 pb-12 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span className="section-eyebrow">Signature Programme</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1]">
              Advanced <em className="gold-text not-italic">Blouse Designing</em> Course
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              A complete journey through couture blouse construction — from foundational machine practice to advanced katori, neck, and sleeve specialisations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Desktop tabs */}
      <section className="hidden md:block py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {modules.map((m) => (
                <button
                  key={m.key}
                  onClick={() => setActive(m.key)}
                  className={`relative px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-all ${
                    active === m.key
                      ? "text-[var(--ink)]"
                      : "text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {active === m.key && (
                    <motion.span
                      layoutId="tab-bg"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative">{m.title}</span>
                </button>
              ))}
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {activeMod.items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="luxe-card p-6 group flex items-start gap-4"
                >
                  <div className="h-9 w-9 grid place-items-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-colors">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Module {String(i + 1).padStart(2, "0")}</div>
                    <div className="mt-1 font-display text-xl">{item}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Mobile accordion */}
      <section className="md:hidden py-8 px-6">
        <div className="space-y-3">
          {modules.map((m) => {
            const open = openMobile === m.key;
            return (
              <div key={m.key} className="luxe-card overflow-hidden">
                <button
                  onClick={() => setOpenMobile(open ? null : m.key)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-display text-xl">{m.title}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform text-[var(--gold)] ${open ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <ul className="px-5 pb-5 space-y-2">
                        {m.items.map((it) => (
                          <li key={it} className="flex items-start gap-3 text-sm">
                            <Check className="h-4 w-4 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
}
