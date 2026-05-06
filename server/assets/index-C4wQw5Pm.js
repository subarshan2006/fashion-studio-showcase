import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-BhwJu8WE.js";
import { L as Link } from "./router-C-VyPS2E.js";
import { c as createLucideIcon, r as resolveElements, P as PageLayout, m as motion, R as Reveal } from "./Reveal-CDzIhyov.js";
import { u as useScroll, a as useTransform, g as g3, b as g8, M as Marquee } from "./Marquee-C8Jn2mXJ.js";
import { S as Sparkles } from "./sparkles-BJI1ZSRd.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }]
];
const Scissors = createLucideIcon("scissors", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry.target, entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer.unobserve(entry.target);
        }
      } else if (typeof onEnd === "function") {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
  const [isInView, setInView] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}
function Counter({ to, suffix = "", duration = 2e3 }) {
  const ref = reactExports.useRef(null);
  const inView2 = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView2) return;
    let start = null;
    let raf = 0;
    const step = (t) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView2, to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n.toLocaleString(),
    suffix
  ] });
}
const hero = "/fashion-studio-showcase/assets/hero-BbbDEse8.jpg";
const l1 = "/fashion-studio-showcase/assets/l1-Di84M2qc.png";
const l2 = "/fashion-studio-showcase/assets/l2-CuGqUbl4.png";
const l3 = "/fashion-studio-showcase/assets/l3-DvQH24_N.jpg";
const featured = [{
  icon: Scissors,
  title: "Women’s Couture Design",
  desc: "Explore 20+ blouse and garment silhouettes — from timeless princess cuts to contemporary katori styles."
}, {
  icon: Sparkles,
  title: "Art of hand Embroidery",
  desc: "Master intricate techniques like hook work, loop detailing, and zardosi — crafted for women’s fashion excellence."
}, {
  icon: Award,
  title: "Professional Fashion Diploma",
  desc: "Career-ready certification empowering women to thrive in the fashion industry."
}];
const testimonials = [{
  name: "Priya R.",
  text: "Sri Dev transformed me from a hobbyist into a designer running my own boutique.",
  role: "Founder, Priya Couture"
}, {
  name: "Anitha S.",
  text: "The attention to handwork detail is unmatched. Every neck, every sleeve — perfected.",
  role: "Senior Designer"
}, {
  name: "Lakshmi M.",
  text: "Best decision of my life. The mentorship is intimate and the curriculum is luxurious.",
  role: "Alumna 2024"
}];
function HomePage() {
  const heroRef = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const horizRef = reactExports.useRef(null);
  const {
    scrollYProgress: hp
  } = useScroll({
    target: horizRef
  });
  const x = useTransform(hp, [0, 1], ["2%", "-72%"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref: heroRef, className: "relative h-[100svh] min-h-[640px] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
        y: yImg
      }, className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "Couture fashion", className: "h-full w-full object-cover object-top" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
        y: yText
      }, className: "relative z-10 h-full flex flex-col items-center justify-center text-center px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.2,
          duration: 0.8
        }, className: "section-eyebrow !text-white/70", children: "Sri Dev Fashion Academy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 max-w-4xl font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95]", children: [
          "Design Your".split("").map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
            y: 80,
            opacity: 0
          }, animate: {
            y: 0,
            opacity: 1
          }, transition: {
            delay: 0.3 + i * 0.04,
            duration: 0.6
          }, className: "inline-block", children: c === " " ? " " : c }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
            opacity: 0
          }, animate: {
            opacity: 1
          }, transition: {
            delay: 1,
            duration: 1
          }, className: "italic gold-text", children: "Dream Career" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
            opacity: 0
          }, animate: {
            opacity: 1
          }, transition: {
            delay: 1.3
          }, className: "text-white", children: " in Fashion" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 1.4,
          duration: 0.8
        }, className: "mt-6 max-w-xl text-white/75 text-base md:text-lg", children: "A premier institute where craftsmanship meets couture. Train under master designers in the heart of Gandhipuram." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 1.6
        }, className: "mt-10 flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/courses", className: "btn-gold", children: [
            "Explore Courses ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-outline-gold !text-white !border-white/60 hover:!bg-white hover:!text-black", children: "Book a Visit" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
        y: [0, 8, 0]
      }, transition: {
        repeat: Infinity,
        duration: 1.8
      }, className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 text-[10px] tracking-[0.4em] uppercase", children: "Scroll" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-[var(--beige)]/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: [{
      v: 120,
      s: "+",
      l: "Students"
    }, {
      v: 25,
      s: "+",
      l: "Years"
    }, {
      v: 50,
      s: "+",
      l: "Awards"
    }, {
      v: 10,
      s: "+",
      l: "Course Modules"
    }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 0.1, direction: "up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl md:text-6xl gold-text", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.v, suffix: s.s }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs tracking-[0.3em] uppercase text-muted-foreground", children: s.l })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Featured Programs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-4xl md:text-6xl", children: [
          "Curated for the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "gold-text not-italic", children: "Modern Woman" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Three pillars of mastery — meticulously taught, beautifully executed." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid md:grid-cols-3 gap-6", children: featured.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.15, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxe-card p-8 h-full group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 grid place-items-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-colors duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: f.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/courses", className: "mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[var(--gold)] hover:gap-3 transition-all", children: [
          "Discover ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }) }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref: horizRef, className: "relative h-[300vh] hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 h-screen overflow-hidden flex items-center bg-[var(--ink)] text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-1/2 -translate-y-1/2 left-10 z-10 max-w-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow !text-white/60", children: "The Atelier" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-5xl", children: [
          "Scroll the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "gold-text not-italic", children: "journey" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: {
        x
      }, className: "flex gap-6 pl-[28rem] pr-20", children: [g3, l1, g8, l3, l2].map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[70vh] w-[55vw] flex-shrink-0 rounded-3xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-6 font-display text-3xl", children: [
          "Chapter ",
          i + 1
        ] })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 md:py-28 bg-[var(--beige)]/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto px-6 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Hall of Achievements" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-4xl md:text-5xl", children: [
          "A decade of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "gold-text not-italic", children: "distinction" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Voices" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-4xl md:text-5xl", children: [
          "Loved by our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "gold-text not-italic", children: "alumnae" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-6", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxe-card p-8 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-[var(--gold)]", children: Array.from({
          length: 5
        }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, j)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 font-display text-xl leading-relaxed", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: t.role })
        ] })
      ] }) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "zoom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl rounded-3xl overflow-hidden bg-[var(--ink)] text-white p-10 md:p-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--gold)]/30 blur-3xl float-slow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[var(--pink-soft)]/30 blur-3xl float-slow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-6xl", children: [
        "Ready to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "gold-text not-italic", children: "design" }),
        " your story?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/70 max-w-xl mx-auto", children: "Limited seats per batch. Reserve your place at Gandhipuram's most coveted fashion academy." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "btn-gold mt-8", children: [
        "Enroll Now ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) }) })
  ] });
}
export {
  HomePage as component
};
