import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-BhwJu8WE.js";
import { P as PageLayout, R as Reveal, m as motion } from "./Reveal-CDzIhyov.js";
import { u as useScroll, a as useTransform, M as Marquee } from "./Marquee-C8Jn2mXJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-C-VyPS2E.js";
const l4 = "/fashion-studio-showcase/assets/l4-BexDekz6.png";
const timeline = [{
  year: "2014",
  title: "Education Journey",
  text: "Started degree in fashion and design, building the foundation for a creative career."
}, {
  year: "2015",
  title: "First Tailor Shop",
  text: "Opened a small tailoring shop named 'Sree Start', serving local customers."
}, {
  year: "2020",
  title: "Teaching Milestone",
  text: "Trained and mentored over 250+ students in tailoring and design skills."
}, {
  year: "2023",
  title: "Boutique Launch",
  text: "Expanded into a boutique shop, offering customized fashion and designer wear."
}, {
  year: "2025",
  title: "Sri Dev Academy",
  text: "Established a grand fashion institution 'Sri Dev Academy' to shape future designers."
}];
function AboutPage() {
  const horizRef = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: horizRef
  });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-78%"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-32 md:pt-44 pb-16 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Our Story" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl md:text-7xl", children: [
        "B KAVITHA & M BHANUMATHI ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "gold-text not-italic", children: "Founder of " }),
        "SRI DEV FASHION ACADEMY"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] rounded-3xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: l4, alt: "Atelier", className: "h-full w-full object-cover", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-[var(--gold)]/30 to-transparent" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { direction: "right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "The Founders" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-3xl", children: "SRI DEV FASHION ACADEMY is an emerging centre of excellence." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "In fashion education, located in the heart of Coimbatore. Our academy is committed to transforming passionate individuals into confident, industry-ready fashion professionals." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl gold-text", children: "Vision" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "To create life-changing opportunities through fashion education and empower every learner to design their own future with dignity and confidence." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl gold-text", children: "Mission" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "To provide an accessible, innovative, and supportive learning platform where students can Earn after completing the courses, building financial independence and real-time experience during their training period.." })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref: horizRef, className: "relative h-[280vh] hidden md:block bg-[var(--ink)] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 h-screen overflow-hidden flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: {
      x
    }, className: "flex gap-8 pl-20 pr-20", children: timeline.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] luxe-card !bg-white/5 !border-white/10 p-10 backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-7xl gold-text", children: t.year }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-3xl", children: t.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/70", children: t.text })
    ] }, i)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "md:hidden py-16 px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Timeline" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 relative pl-6 border-l border-[var(--gold)]/40", children: timeline.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-[var(--gold)] ring-4 ring-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl gold-text", children: t.year }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-2xl", children: t.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: t.text })
      ] }) }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 bg-[var(--beige)]/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Achievements" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-4xl md:text-5xl", children: [
          "Moments of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "gold-text not-italic", children: "pride" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl grid md:grid-cols-3 gap-6", children: [{
      t: "Vision",
      d: "To redefine fashion education through craft, mentorship, and elegance."
    }, {
      t: "Mission",
      d: "Empower every student with the skill and confidence to lead in fashion."
    }, {
      t: "Values",
      d: "Craft. Discipline. Originality. Sisterhood."
    }].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.12, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxe-card p-10 h-full text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl gold-text", children: v.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: v.d })
    ] }) }, v.t)) }) })
  ] });
}
export {
  AboutPage as component
};
