import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import l4 from "@/assets/l4.png";
import g3 from "@/assets/g3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sri Dev Fashion Academy" },
      { name: "description", content: "Discover the story, vision, and mission of Sri Dev Fashion Academy in Gandhipuram." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2014", title: "Education Journey", text: "Started degree in fashion and design, building the foundation for a creative career." },
  { year: "2015", title: "First Tailor Shop", text: "Opened a small tailoring shop named 'Sree Start', serving local customers." },
  { year: "2020", title: "Teaching Milestone", text: "Trained and mentored over 250+ students in tailoring and design skills." },
  { year: "2023", title: "Boutique Launch", text: "Expanded into a boutique shop, offering customized fashion and designer wear." },
  { year: "2025", title: "Sri Dev Academy", text: "Established a grand fashion institution 'Sri Dev Academy' to shape future designers." },
];

function AboutPage() {
  const horizRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: horizRef });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-78%"]);

  return (
    <PageLayout>
      <section className="pt-32 md:pt-44 pb-16 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span className="section-eyebrow">Our Story</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl">B KAVITHA & M BHANUMATHI <em className="gold-text not-italic">Founder of </em>SRI DEV FASHION ACADEMY</h1>
          </Reveal>
          {/* <Reveal delay={0.2}>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              For over two decades, Sri Dev Fashion Academy has shaped India's most discerning designers. We blend heritage handwork with contemporary couture — a place where ambition meets artistry.
            </p>
          </Reveal> */}
        </div>
      </section>

      {/* Two col image + text */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img src={l4} alt="Atelier" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--gold)]/30 to-transparent" />
            </div>
          </Reveal>
          <Reveal direction="right">
            <span className="section-eyebrow">The Founders</span>
            <h2 className="mt-4 font-display text-4xl md:text-3xl">SRI DEV FASHION ACADEMY is an emerging centre of excellence.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              In fashion education, located in the heart of Coimbatore. Our academy is committed to transforming passionate individuals into confident, industry-ready fashion professionals.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="font-display text-3xl gold-text">Vision</div>
                <p className="mt-2 text-sm text-muted-foreground">To create life-changing opportunities through fashion education and empower every learner to design their own future with dignity and confidence.</p>
              </div>
              <div>
                <div className="font-display text-3xl gold-text">Mission</div>
                <p className="mt-2 text-sm text-muted-foreground">To provide an accessible, innovative, and supportive learning platform where students can Earn after completing the courses, building financial independence and real-time experience during their training period..</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Horizontal storytelling */}
      <section ref={horizRef} className="relative h-[280vh] hidden md:block bg-[var(--ink)] text-white">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div style={{ x }} className="flex gap-8 pl-20 pr-20">
            {timeline.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] luxe-card !bg-white/5 !border-white/10 p-10 backdrop-blur">
                <div className="font-display text-7xl gold-text">{t.year}</div>
                <h3 className="mt-4 font-display text-3xl">{t.title}</h3>
                <p className="mt-3 text-white/70">{t.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mobile timeline */}
      <section className="md:hidden py-16 px-6">
        <Reveal><span className="section-eyebrow">Timeline</span></Reveal>
        <div className="mt-8 relative pl-6 border-l border-[var(--gold)]/40">
          {timeline.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative mb-10">
                <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-[var(--gold)] ring-4 ring-background" />
                <div className="font-display text-4xl gold-text">{t.year}</div>
                <h3 className="mt-1 font-display text-2xl">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <section className="py-20 bg-[var(--beige)]/30">
        <Reveal>
          <div className="text-center mb-12 px-6">
            <span className="section-eyebrow">Achievements</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">Moments of <em className="gold-text not-italic">pride</em></h2>
          </div>
        </Reveal>
        <Marquee />
      </section>

      {/* Vision/Mission/Values */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-6">
          {[
            { t: "Vision", d: "To redefine fashion education through craft, mentorship, and elegance." },
            { t: "Mission", d: "Empower every student with the skill and confidence to lead in fashion." },
            { t: "Values", d: "Craft. Discipline. Originality. Sisterhood." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 0.12} direction="up">
              <div className="luxe-card p-10 h-full text-center">
                <div className="font-display text-4xl gold-text">{v.t}</div>
                <p className="mt-4 text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
