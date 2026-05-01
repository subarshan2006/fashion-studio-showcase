import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Check, Sparkles, Crown, Gem } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Sri Dev Fashion Academy" },
      { name: "description", content: "Eight signature programmes across Basic, Advanced and Master tiers — tailoring, blouse, churidar, designer wear, bridal couture and more." },
    ],
  }),
  component: CoursesPage,
});

type Course = {
  key: string;
  title: string;
  duration: string;
  blurb: string;
  topics: string[];
};

type Tier = {
  key: "basic" | "advanced" | "master";
  label: string;
  tagline: string;
  Icon: typeof Sparkles;
  courses: Course[];
};

const tiers: Tier[] = [
  {
    key: "basic",
    label: "Basic",
    tagline: "Foundations of stitching & tailoring",
    Icon: Sparkles,
    courses: [
      {
        key: "tailoring",
        title: "Basic Tailoring",
        duration: "2 Months",
        blurb: "Master the machine and learn essential tailoring fundamentals.",
        topics: [
          "Machine Practice",
          "Threading & Bobbin",
          "Paper Sample Cutting",
          "Measurement & Calculation",
          "Hook & Loop Handwork",
          "Hairband and Bow",
        ],
      },
      {
        key: "nightwear",
        title: "Nightwear & Kids",
        duration: "1.5 Months",
        blurb: "Stitch comfortable everyday and children's garments.",
        topics: [
          "Nighty Cutting & Stitching",
          "Maxi Gown",
          "Frock for Kids",
          "Pyjama Set",
          "Pleated Skirt",
          "Elastic Waist Pants",
        ],
      },
      {
        key: "salwar",
        title: "Salwar & Pant",
        duration: "1.5 Months",
        blurb: "Bottom-wear essentials including salwar, patiala and pants.",
        topics: [
          "Plain Salwar",
          "Patiala Salwar",
          "Palazzo Pant",
          "Cigarette Pant",
          "Dhoti Pant",
          "Leggings",
        ],
      },
    ],
  },
  {
    key: "advanced",
    label: "Advanced",
    tagline: "Couture techniques & specialisations",
    Icon: Gem,
    courses: [
      {
        key: "blouse",
        title: "Advanced Blouse Designing",
        duration: "3 Months",
        blurb: "Complete journey through couture blouse construction.",
        topics: [
          "Lining & Crosscut Blouse",
          "Piping & Princess Blouse",
          "Single & Double Katori",
          "Boat Neck & Canvas Neck",
          "Collar & Half Collar",
          "Sleeveless & Halter",
        ],
      },
      {
        key: "churidar",
        title: "Churidar & Anarkali",
        duration: "2 Months",
        blurb: "Traditional silhouettes with modern fit and flare.",
        topics: [
          "Plain Churidar",
          "Umbrella Churidar",
          "Anarkali — A-Line",
          "Anarkali — Floor Length",
          "Yoke Designs",
          "Lining & Canvas Work",
        ],
      },
      {
        key: "saree",
        title: "Saree & Drape Wear",
        duration: "1.5 Months",
        blurb: "Saree falls, pico, drapes and ready-to-wear sarees.",
        topics: [
          "Pico & Falls",
          "Pre-Stitched Saree",
          "Saree Gown",
          "Lehenga Saree",
          "Pleating Techniques",
          "Drape Styling",
        ],
      },
      {
        key: "designer",
        title: "Designer Wear",
        duration: "2.5 Months",
        blurb: "Contemporary western and indo-western design.",
        topics: [
          "Crop Top & Skirt",
          "Jumpsuit & Playsuit",
          "Designer Kurti",
          "Cape & Shrug",
          "Gowns — Princess Cut",
          "Pattern Drafting",
        ],
      },
    ],
  },
  {
    key: "master",
    label: "Master",
    tagline: "Couture artistry at its peak",
    Icon: Crown,
    courses: [
      {
        key: "bridal",
        title: "Bridal Couture & Embellishment",
        duration: "4 Months",
        blurb: "The signature programme — bridal lehengas, embellishment and finishing at the highest level.",
        topics: [
          "Bridal Lehenga Construction",
          "Bridal Blouse — Heavy Work",
          "Reception Gown",
          "Aari & Maggam Work",
          "Stone, Bead & Zardozi",
          "Cutwork & Mirror Work",
          "Lining, Canvas & Boning",
          "Finishing & Presentation",
        ],
      },
    ],
  },
];

function CoursesPage() {
  const [activeTier, setActiveTier] = useState<Tier["key"]>("basic");
  const [openCourse, setOpenCourse] = useState<string | null>("tailoring");

  const tier = tiers.find((t) => t.key === activeTier)!;

  return (
    <PageLayout>
      <section className="pt-32 md:pt-44 pb-12 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span className="section-eyebrow">Signature Programmes</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1]">
              Eight Courses. <em className="gold-text not-italic">Three Tiers.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              From foundational tailoring to bridal couture — a curated curriculum that grows with you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tier selector */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3">
              {tiers.map((t) => {
                const Icon = t.Icon;
                const active = activeTier === t.key;
                return (
                  <button
                    key={t.key}
                    onClick={() => {
                      setActiveTier(t.key);
                      setOpenCourse(t.courses[0].key);
                    }}
                    className={`relative px-5 md:px-6 py-3 rounded-full text-xs md:text-sm uppercase tracking-widest transition-all flex items-center gap-2 ${
                      active ? "text-[var(--ink)]" : "text-muted-foreground hover:text-foreground border border-border"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="tier-bg"
                        className="absolute inset-0 rounded-full"
                        style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <Icon className="h-4 w-4 relative" />
                    <span className="relative">{t.label}</span>
                    <span className="relative opacity-70 hidden sm:inline">· {t.courses.length}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-center text-sm tracking-[0.25em] uppercase text-[var(--gold)]">
              {tier.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Courses grid */}
      <section className="py-12 md:py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={tier.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-2"
            >
              {tier.courses.map((c, i) => {
                const open = openCourse === c.key;
                return (
                  <motion.div
                    key={c.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="luxe-card overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenCourse(open ? null : c.key)}
                      className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
                          <span>Course {String(i + 1).padStart(2, "0")}</span>
                          <span className="h-px w-8 bg-[var(--gold)]/40" />
                          <span>{c.duration}</span>
                        </div>
                        <h3 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
                          {c.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                      </div>
                      <div
                        className={`h-10 w-10 grid place-items-center rounded-full border border-[var(--gold)]/40 text-[var(--gold)] flex-shrink-0 transition-transform ${
                          open ? "rotate-180 bg-[var(--gold)]/10" : ""
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </div>
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
                          <div className="px-6 md:px-8 pb-6 md:pb-8">
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent mb-5" />
                            <ul className="grid sm:grid-cols-2 gap-3">
                              {c.topics.map((t, idx) => (
                                <motion.li
                                  key={t}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.04 }}
                                  className="flex items-start gap-3 text-sm"
                                >
                                  <span className="mt-0.5 h-5 w-5 grid place-items-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)] flex-shrink-0">
                                    <Check className="h-3 w-3" />
                                  </span>
                                  <span>{t}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </PageLayout>
  );
}
