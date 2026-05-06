import { T as jsxRuntimeExports } from "./worker-entry-BhwJu8WE.js";
import { L as Link } from "./router-C-VyPS2E.js";
import { P as PageLayout, R as Reveal } from "./Reveal-CDzIhyov.js";
import { S as Sparkles } from "./sparkles-BJI1ZSRd.js";
import { C as Check } from "./check-CkBzhYuJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const plans = [{
  name: "Basic",
  price: "12,000",
  duration: "1 month",
  desc: "Perfect for beginners stepping into fashion construction.",
  features: ["Machine practice", "Measurement basics", "5 blouse models", "Certificate"],
  highlight: false
}, {
  name: "Advanced",
  price: "24,000",
  duration: "3 months",
  desc: "Our most popular pathway — covers couture essentials.",
  features: ["Everything in Basic", "Katori & Princess cuts", "10 neck models", "8 sleeve styles", "Handwork foundations", "Industry diploma"],
  highlight: true
}, {
  name: "Master",
  price: "42,000",
  duration: "6 months",
  desc: "Full mastery — designed for aspiring couturiers.",
  features: ["Everything in Advanced", "All blouse modules", "All neck & sleeve models", "Advanced handwork", "Portfolio mentorship", "Placement support"],
  highlight: false
}];
function PricingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-32 md:pt-44 pb-12 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Investment" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl md:text-7xl", children: [
        "Choose your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "gold-text not-italic", children: "pathway" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-xl mx-auto", children: "Three carefully designed programmes — find the one that matches your ambition." }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pb-24 px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl grid md:grid-cols-3 gap-6 md:gap-8 items-stretch", children: plans.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative h-full rounded-3xl p-8 md:p-10 transition-all duration-500 ${p.highlight ? "bg-[var(--ink)] text-white shadow-[var(--shadow-luxe)] md:scale-105" : "luxe-card"}`, children: [
        p.highlight && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] tracking-[0.3em] uppercase font-medium", style: {
          background: "var(--gradient-gold)",
          color: "var(--ink)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "inline h-3 w-3 mr-1" }),
          " Most Loved"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs tracking-[0.3em] uppercase ${p.highlight ? "text-[var(--gold)]" : "text-muted-foreground"}`, children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex items-baseline gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-5xl md:text-6xl gold-text", children: [
          "₹",
          p.price
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mt-1 text-sm ${p.highlight ? "text-white/60" : "text-muted-foreground"}`, children: [
          p.duration,
          " programme"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-5 text-sm ${p.highlight ? "text-white/70" : "text-muted-foreground"}`, children: p.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 mt-0.5 text-[var(--gold)] flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: p.highlight ? "text-white/90" : "", children: f })
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: `mt-10 w-full inline-flex justify-center ${p.highlight ? "btn-gold" : "btn-outline-gold"}`, children: "Enroll Now" })
      ] }) }, p.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-12 text-center text-sm text-muted-foreground", children: "Flexible monthly instalments available. Visit us at 2nd Street, Gandhipuram for a personal consultation." }) })
    ] })
  ] });
}
export {
  PricingPage as component
};
