import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Award, Scissors, Star } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { Counter } from "@/components/Counter";
import hero from "@/assets/hero.jpg";
import g3 from "@/assets/g3.jpg";
import g8 from "@/assets/g8.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Dev Fashion Academy — Design Your Dream Career in Fashion" },
      { name: "description", content: "Premier fashion design institute in Gandhipuram. Master couture blouse design with expert mentorship at Sri Dev Fashion Academy." },
      { property: "og:title", content: "Sri Dev Fashion Academy" },
      { property: "og:description", content: "Design Your Dream Career in Fashion. Premier blouse design courses in Gandhipuram." },
    ],
  }),
  component: HomePage,
});

const featured = [
  { icon: Scissors, title: "Couture Blouse", desc: "Master 20+ silhouettes from princess cuts to katori." },
  { icon: Sparkles, title: "Hand Embroidery", desc: "Hook, loop, zardosi — heritage handwork techniques." },
  { icon: Award, title: "Industry Diploma", desc: "Career-ready certification recognised across the industry." },
];

const testimonials = [
  { name: "Priya R.", text: "Sri Dev transformed me from a hobbyist into a designer running my own boutique.", role: "Founder, Priya Couture" },
  { name: "Anitha S.", text: "The attention to handwork detail is unmatched. Every neck, every sleeve — perfected.", role: "Senior Designer" },
  { name: "Lakshmi M.", text: "Best decision of my life. The mentorship is intimate and the curriculum is luxurious.", role: "Alumna 2024" },
];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // Horizontal scroll section
  const horizRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: hp } = useScroll({ target: horizRef });
  const x = useTransform(hp, [0, 1], ["2%", "-72%"]);

  return (
    <PageLayout>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] overflow-hidden">
        <motion.div style={{ y: yImg }} className="absolute inset-0">
          <img src={hero} alt="Couture fashion" className="h-full w-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
        </motion.div>

        <motion.div style={{ y: yText }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="section-eyebrow !text-white/70"
          >
            Sri Dev Fashion Academy
          </motion.div>

          <h1 className="mt-6 max-w-4xl font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95]">
            {"Design Your".split("").map((c, i) => (
              <motion.span key={i} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 + i * 0.04, duration: 0.6 }} className="inline-block">
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
              className="italic gold-text"
            >
              Dream Career
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
              className="text-white"
            > in Fashion</motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-6 max-w-xl text-white/75 text-base md:text-lg"
          >
            A premier institute where craftsmanship meets couture. Train under master designers in the heart of Gandhipuram.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link to="/courses" className="btn-gold">
              Explore Courses <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-outline-gold !text-white !border-white/60 hover:!bg-white hover:!text-black">
              Book a Visit
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 text-[10px] tracking-[0.4em] uppercase"
        >
          Scroll
        </motion.div>
      </section>

      {/* COUNTERS */}
      <section className="py-16 md:py-24 bg-[var(--beige)]/30">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: 1200, s: "+", l: "Students" },
            { v: 25, s: "+", l: "Years" },
            { v: 50, s: "+", l: "Awards" },
            { v: 30, s: "+", l: "Course Modules" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.1} direction="up">
              <div className="font-display text-5xl md:text-6xl gold-text">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-2 text-xs tracking-[0.3em] uppercase text-muted-foreground">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="section-eyebrow">Featured Programs</span>
              <h2 className="mt-5 font-display text-4xl md:text-6xl">Curated for the <em className="gold-text not-italic">connoisseur</em></h2>
              <p className="mt-4 text-muted-foreground">Three pillars of mastery — meticulously taught, beautifully executed.</p>
            </div>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {featured.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.15} direction="up">
                <div className="luxe-card p-8 h-full group">
                  <div className="h-14 w-14 grid place-items-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-colors duration-500">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{f.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  <Link to="/courses" className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[var(--gold)] hover:gap-3 transition-all">
                    Discover <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HORIZONTAL SCROLL SECTION */}
      <section ref={horizRef} className="relative h-[300vh] hidden md:block">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-[var(--ink)] text-white">
          <div className="absolute top-1/2 -translate-y-1/2 left-10 z-10 max-w-xs">
            <span className="section-eyebrow !text-white/60">The Atelier</span>
            <h2 className="mt-4 font-display text-5xl">Scroll the <em className="gold-text not-italic">journey</em></h2>
          </div>
          <motion.div style={{ x }} className="flex gap-6 pl-[28rem] pr-20">
            {[g3, g8, hero, g3, g8].map((src, i) => (
              <div key={i} className="relative h-[70vh] w-[55vw] flex-shrink-0 rounded-3xl overflow-hidden">
                <img src={src} alt="" className="h-full w-full object-cover" />
                <div className="absolute bottom-6 left-6 font-display text-3xl">Chapter {i + 1}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ACHIEVEMENTS MARQUEE */}
      <section className="py-20 md:py-28 bg-[var(--beige)]/30">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto px-6 mb-12">
            <span className="section-eyebrow">Hall of Achievements</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">A decade of <em className="gold-text not-italic">distinction</em></h2>
          </div>
        </Reveal>
        <Marquee />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="section-eyebrow">Voices</span>
              <h2 className="mt-5 font-display text-4xl md:text-5xl">Loved by our <em className="gold-text not-italic">alumnae</em></h2>
            </div>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="luxe-card p-8 h-full">
                  <div className="flex gap-1 text-[var(--gold)]">
                    {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-4 font-display text-xl leading-relaxed">"{t.text}"</p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6">
        <Reveal direction="zoom">
          <div className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden bg-[var(--ink)] text-white p-10 md:p-20 text-center">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--gold)]/30 blur-3xl float-slow" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[var(--pink-soft)]/30 blur-3xl float-slow" />
            <h2 className="font-display text-4xl md:text-6xl">Ready to <em className="gold-text not-italic">design</em> your story?</h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">Limited seats per batch. Reserve your place at Gandhipuram's most coveted fashion academy.</p>
            <Link to="/contact" className="btn-gold mt-8">Enroll Now <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
      </section>
    </PageLayout>
  );
}
