import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-BhwJu8WE.js";
import { c as createLucideIcon, P as PageLayout, R as Reveal, m as motion, A as AnimatePresence } from "./Reveal-CDzIhyov.js";
import { S as Sparkles } from "./sparkles-BJI1ZSRd.js";
import { C as Check } from "./check-CkBzhYuJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-C-VyPS2E.js";
const __iconNode$2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
      key: "1vdc57"
    }
  ],
  ["path", { d: "M5 21h14", key: "11awu3" }]
];
const Crown = createLucideIcon("crown", __iconNode$1);
const __iconNode = [
  ["path", { d: "M10.5 3 8 9l4 13 4-13-2.5-6", key: "b3dvk1" }],
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",
      key: "7w4byz"
    }
  ],
  ["path", { d: "M2 9h20", key: "16fsjt" }]
];
const Gem = createLucideIcon("gem", __iconNode);
const tiers = [{
  key: "basic",
  label: "Basic",
  tagline: "Foundations of stitching & tailoring",
  Icon: Sparkles,
  courses: [{
    key: "tailoring",
    title: "Basic Tailoring",
    duration: "2 Months",
    blurb: "Master the machine and learn essential tailoring fundamentals.",
    topics: ["Machine Practice", "Handwork – Hook & Loop", "Paper Sample", "Body Measurement & Calculation", "Neck Portion", "Shoulder Portion", "Pillow Cover", "Hairband & Bow", "Inskirt", "Frill Inskirt", "Six Part Inskirt", "Nighty Model", "Kameez (Without Lining)", "Kameez (With Lining)", "Salwar", "Pattiyala", "Center & Pleated Model", "Normal Blouse", "Lining Blouse", "Crosscut Blouse", "Normal Sleeve", "Elbow Sleeve", "3/4 Sleeve", "Cap Sleeve", "Puff Sleeve"]
  }, {
    key: "kameez",
    title: "Kameez and Salwar",
    duration: "2 Months",
    blurb: "Learn to design and stitch elegant kameez styles with perfect fitting, patterns, and finishing.",
    topics: ["Machine Practice", "Handwork – Hook & Loop", "Paper Sample", "Body Measurement & Calculation", "Neck Portion", "Shoulder Portion", "Pillow Cover", "Hairband & Bow", "Normal Sleeve", "Elbow Sleeve", "3/4 Sleeve", "Cap Sleeve", "Puff Sleeve", "High Puff Sleeve", "Frill Sleeve", "Puff with Border", "Petal Sleeve", "Pleated Sleeve", "Balloon Sleeve", "Bell Sleeve", "3/4 Folding with Button Sleeve", "Pompom Sleeve", "Round Neck", "V-Neck", "Square Neck", "Pentagon Neck", "Collar Neck", "Scallop Neck", "Sweetheart Neck", "Sleeveless Halter Neck", "Backless Neck", "High Neck", "Boat Neck", "Neck Canvas Model", "Kameez (Without Lining)", "Kameez (With Lining)", "Neck Canvas Model", "Neck Pattern Kameez", "Panel Cut Kameez", "Apple Cut Kameez", "Boat Neck Kameez", "Collar Neck Kameez", "Back Boat & Front Normal Neck", "Front Neck Normal, Back Neck Boat with Keyhole", "Pattiyala", "Center & Pleated Model", "Normal Straight Pant", "Gathering Pant", "Palazzo Pant", "Cigarette Pant"]
  }, {
    key: "aari",
    title: "Basic Aari Embroidery",
    duration: "2 Months",
    blurb: "Stitch beautiful Aari embroidery designs for garments and accessories.",
    topics: ["Highlight Stitch", "Chain Stitch", "Double Chain Stitch", "Triple Chain Stitch", "Filling Chain Stitch", "Zig Zag Stitch", "Magic Chain Stitch", "Zari Work", "Knotted Chain Stitch", "Scalloping", "Satin Filling", "Chain with Satin Filling", "Lazy Daisy", "Romanian Stitch", "Water Wave Stitch", "Short and Long Stitch", "Sugar Cane Stitch", "One Side Fish Bone", "Mat Stitch", "One Side Satin", "Applique Work", "Cut Work", "Cut Tubes", "Bead Work", "Chamki Work (Single)", "Chamki Work (Flat)", "Chamki Work (Running)", "Chamki Work (Filling)", "Mirror Work", "Zardosi Work", "Stem Stitch", "Padded Satin Stitch", "French Knot", "French Rose", "Lace Designs", "Net Work", "Stone Work", "Spider Web Stitch", "Suriya Kala", "Chandira Kala"]
  }, {
    key: "blouse",
    title: "Basic Blouse",
    duration: "2 Months",
    blurb: "Master blouse stitching techniques and create perfectly fitted designs with various necks and sleeves.",
    topics: ["Machine Practice", "Handwork – Hook & Loop", "Paper Sample", "Body Measurement & Calculation", "Neck Portion", "Shoulder Portion", "Hairband & Bow", "Normal Blouse", "Lining Blouse", "Crosscut Blouse", "Piping Blouse", "Princess Blouse", "With Patti", "Without Patti", "Boat Neck Blouse", "Back Neck (2 Models)", "Canvas Neck Model", "Round Neck", "Pentagon Neck", "Square Neck", "V-Neck", "Collar Neck", "Scallop Neck", "Sweetheart Neck", "Sleeveless Halter Neck", "Backless Neck", "High Neck", "Boat Neck", "Neck Canvas Model", "Short Sleeve", "Elbow Sleeve", "3/4 Sleeve", "Cap Sleeve", "Puff Sleeve", "High Puff Sleeve", "Pleated Sleeve", "Petal Sleeve", "Puff with Border Sleeve", "Pleated with Border Sleeve"]
  }]
}, {
  key: "advanced",
  label: "Advanced",
  tagline: "Couture techniques & specialisations",
  Icon: Gem,
  courses: [{
    key: "blouse",
    title: "Advanced Blouse Designing",
    duration: "3 Months",
    blurb: "Complete journey through couture blouse construction.",
    topics: ["Machine Practice", "Paper Sample", "Handwork – Hook & Loop", "Measurement & Calculation", "Neck Portion", "Shoulder Portion", "Hairband & Bow", "Lining Blouse", "Crosscut Blouse", "Piping Blouse", "Princess Blouse", "With Patti", "Without Patti", "Boat Neck Blouse", "Back Neck (2 Models)", "Canvas Neck Model", "Katori Blouse with Patti", "Close Neck Blouse", "Single Katori Blouse", "Double Katori Blouse", "Collar Neck Blouse", "Half Collar Blouse", "Sleeveless Blouse", "Round Neck", "Pentagon Neck", "Square Neck", "V-Neck", "Collar Neck", "Scallop Neck", "Sweetheart Neck", "Sleeveless Halter Neck", "Backless Neck", "High Neck", "Boat Neck", "Neck Canvas Model", "Short Sleeve", "Elbow Sleeve", "3/4 Sleeve", "Cap Sleeve", "Puff Sleeve", "High Puff Sleeve", "Pleated Sleeve", "Petal Sleeve", "Puff with Border Sleeve", "Pleated Border Sleeve"]
  }, {
    key: "kameez",
    title: "Advance Kameez and Salwar",
    duration: "3 Months",
    blurb: "Learn to design and stitch elegant kameez styles with perfect fitting, patterns, and finishing.",
    topics: ["Machine Practice", "Handwork – Hook & Loop", "Paper Sample", "Body Measurement & Calculation", "Neck Portion", "Shoulder Portion", "Pillow Cover", "Hairband & Bow", "Normal Sleeve", "Elbow Sleeve", "3/4 Sleeve", "Cap Sleeve", "Puff Sleeve", "High Puff Sleeve", "Frill Sleeve", "Puff with Border", "Petal Sleeve", "Pleated Sleeve", "Balloon Sleeve", "Bell Sleeve", "3/4 Folding with Button Sleeve", "Pompom Sleeve", "Round Neck", "V-Neck", "Square Neck", "Pentagon Neck", "Collar Neck", "Scallop Neck", "Sweetheart Neck", "Sleeveless Halter Neck", "Backless Neck", "High Neck", "Boat Neck", "Neck Canvas Model", "Kameez (Without Lining)", "Kameez (With Lining)", "Neck Canvas Model", "Neck Pattern Kameez", "Panel Cut Kameez", "Apple Cut Kameez", "Boat Neck Kameez", "Collar Neck Kameez", "Back Boat & Front Normal Neck", "Front Neck Normal, Back Neck Boat with Keyhole", "Pattiyala", "Center & Pleated Model", "Normal Straight Pant", "Gathering Pant", "Palazzo Pant", "Cigarette Pant", "Crop Top", "Skirt", "Short Frock Model", "Waist Belt", "Umbrella Cut", "Apple Cut", "Angarakha", "Anarkali", "Masakali", "Full Panel Maxi", "Full Pleated Maxi", "High & Low Model Tops", "Elastic & Non-Elastic Models", "Frill Frock"]
  }, {
    key: "tailoring",
    title: "Advance Tailoring Course",
    duration: "3 Months",
    blurb: "You learn Advance tailoring courses.",
    topics: ["Machine Practice", "Handwork – Hook & Loop", "Paper Sample", "Body Measurement & Calculation", "Neck Portion", "Shoulder Portion", "Pillow Cover", "Hairband & Bow", "Frill Inskirt", "Six Part Inskirt", "Nighty Model", "A-Line Frock", "A-Line One Side Strap", "Umbrella Frock", "Pattu Pavadai", "Kameez (Without Lining)", "Kameez (With Lining)", "Neck Canvas Model", "Neck Pattern Kameez", "Pattiyala", "Center & Pleated Model", "Normal Straight Pant", "Normal Blouse", "Lining Blouse", "Crosscut Blouse", "Piping Blouse", "Normal Sleeve", "Elbow Sleeve", "3/4 Sleeve", "Cap Sleeve", "Puff Sleeve", "Puff with Border"]
  }, {
    key: "designer",
    title: "Advance Fashion Designer Course",
    duration: "6 Months",
    blurb: "You almost complete fashion designing.",
    topics: ["Machine Practice", "Handwork – Hook & Loop", "Paper Sample", "Body Measurement & Calculation", "Neck Portion", "Shoulder Portion", "Pillow Cover", "Hairband & Bow", "Frill Inskirt", "Six Part Inskirt", "Nighty Model", "A-Line Frock", "A-Line One Side Strap", "Umbrella Frock", "Pattu Pavadai", "Circle Frock", "Semi Circle Frock", "V-Cut Frock", "Kameez (Without Lining)", "Kameez (With Lining)", "Neck Canvas Model", "Neck Pattern Kameez", "Panel Cut Kameez", "Apple Cut Kameez", "Boat Neck Kameez", "Collar Neck Kameez", "Umbrella Maxi", "Circle Maxi", "Semi Circle Maxi", "Lehenga", "Two Tier Maxi", "Nair Cut Maxi", "Alaic Cut Maxi", "Anarkali", "Pleated Maxi", "Saree Converted Maxi", "Long Frock", "Pattiyala", "Center & Pleated Model", "Normal Straight Pant", "Gathering Pant", "Palazzo Pant", "Cigarette Pant", "Round Neck", "V-Neck", "Square Neck", "Pentagon Neck", "Collar Neck", "Scallop Neck", "Sweetheart Neck", "Sleeveless Halter Neck", "Backless Neck", "High Neck", "Boat Neck", "Neck Canvas Model", "Normal Blouse", "Lining Blouse", "Crosscut Blouse", "Piping Blouse", "Princess Blouse", "With Patti", "Without Patti", "Boat Neck Blouse", "Front & Back Shape", "Front Neck & Back Shapes", "Katori Blouse", "Normal Katori Blouse", "Double Katori Blouse", "Half Shoulder Blouse", "Madhubala Blouse", "Designer Model Blouse", "Normal Sleeve", "Elbow Sleeve", "3/4 Sleeve", "Cap Sleeve", "Puff Sleeve", "High Puff Sleeve", "Frill Sleeve", "Puff with Border", "Petal Sleeve", "Pleated Sleeve", "Balloon Sleeve", "Bell Sleeve", "3/4 Folding with Button Sleeve", "Pompom Sleeve", "Saree Pre-Pleating"]
  }]
}, {
  key: "master",
  label: "Master",
  tagline: "Couture artistry at its peak",
  Icon: Crown,
  courses: [{
    key: "master",
    title: "Professional Diplomo Fashion Design Course",
    duration: "8 Months",
    blurb: "A professional diploma programme in fashion design — mastering garment construction, pattern development, couture techniques, and high-quality finishing..",
    topics: ["Introduction to Fashion", "Kids Wear", "Trendy Pattern", "Adult Garments (Maxi)", "Pattern", "Neck Design", "Saree Pre-Pleating", "Aari Embroidery", "Machine Practice", "Measurement Session", "Calculation Class", "Samples", "Miniatures", "Nighty", "Petticoat", "Normal Frock", "Allan Frock", "A-Line Frock", "A-Line One Side Strap", "Fish Cut Model", "Jumpsuit", "Threadwork Wear", "Full Frock", "3 Layer Frock", "Skirt & Top", "Umbrella Frock", "Pattu Pavadai", "Circle Frock", "Semi Circle Frock", "V-Cut Frock", "Cinderella Frock", "Kids Lehenga", "Two Tone Frock", "Pattern Making", "Fabric Cutting", "Theory Session", "Practical Session", "Inskirt", "Frill Inskirt", "Normal Kameez", "Lining Kameez", "Princess Cut Kameez", "Front Open Collar Kameez", "Half Collar Kameez", "Chinese Collar Kameez", "Boat Neck with Hole Kameez", "Pattiyala Pant", "Punjabi Suit", "Full Panel Cut Kameez", "Angarakha", "Designer Pattern Kameez", "Gathering Pant", "Cigarette Pant", "Straight Pant", "Palazzo Pant", "Semi Circle", "Full Circle", "Crop Top", "Skirt", "Short Frock Model", "Waist Belt", "Umbrella Cut", "Apple Cut", "Anarkali", "Masakali", "Full Panel Maxi", "Full Pleated Maxi", "High & Low Tops", "Elastic & Non-Elastic Models", "Frill Frock", "Full Flare with Yoke", "Princess Cut", "Handkerchief Model", "Boho Layered", "Semi Flare", "Full Overcoat", "Short Overcoat", "Fish Cut Pattern", "Round Neck", "V-Neck", "Square Neck", "Pentagon Neck", "Collar Neck", "Scallop Neck", "Cowl Neck", "Scoop Neck", "Halter Neck", "Closed Neckline", "Short Collar Port Neck", "Star Neck", "Sweetheart Neck", "Sleeveless Halter Neck", "Backless Neck", "High Neck", "Boat Neck", "Neck Canvas Model", "Lehenga", "Layer Gown", "Bridal Gown", "Half Saree", "Saree Converted Dress", "Gharara", "Ruffle Frock", "Mastani", "Ghagra Choli", "Sharara", "Mom & Daughter Combo", "Double Layer Ruffle Frock", "Multi Layer Ruffle Frock", "Pencil Skirt", "Box Pleated Skirt", "Full Circle Skirt", "Half Circle Skirt", "High & Low Skirt", "Layer Skirt", "Pleated Skirt", "Normal Blouse", "Lining Blouse", "Crosscut Blouse", "Piping Blouse", "Princess Blouse", "Without Patti", "Boat Neck Blouse", "Keyhole Blouse", "Normal Katori Blouse", "Double Katori Blouse", "Collar Neck Blouse", "Self Collar Neck", "Flop Neck", "Knotted Neck", "Padded Blouse", "Normal Sleeve", "Elbow Sleeve", "3/4 Sleeve", "Cap Sleeve", "Puff Sleeve", "High Puff Sleeve", "Frill Sleeve", "Bell Sleeve", "Balloon Sleeve", "Puff with Border", "Petal Sleeve", "Pleated Sleeve", "3/4 Folding with Button Sleeve", "Pompom Sleeve", "Fabric Painting", "Fashion Illustration", "Saree Pre-Pleating", "Aari Embroidery"]
  }]
}];
function CoursesPage() {
  const [activeTier, setActiveTier] = reactExports.useState("basic");
  const [openCourse, setOpenCourse] = reactExports.useState("tailoring");
  const tier = tiers.find((t) => t.key === activeTier);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-32 md:pt-44 pb-12 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Signature Programmes" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl md:text-7xl leading-[1]", children: [
        "Eight Courses. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "gold-text not-italic", children: "Three Tiers." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-2xl mx-auto", children: "From foundational tailoring to bridal couture — a curated curriculum that grows with you." }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-3", children: tiers.map((t) => {
        const Icon = t.Icon;
        const active = activeTier === t.key;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          setActiveTier(t.key);
          setOpenCourse(t.courses[0].key);
        }, className: `relative px-5 md:px-6 py-3 rounded-full text-xs md:text-sm uppercase tracking-widest transition-all flex items-center gap-2 ${active ? "text-[var(--ink)]" : "text-muted-foreground hover:text-foreground border border-border"}`, children: [
          active && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { layoutId: "tier-bg", className: "absolute inset-0 rounded-full", style: {
            background: "var(--gradient-gold)",
            boxShadow: "var(--shadow-gold)"
          }, transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 relative" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: t.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative opacity-70 hidden sm:inline", children: [
            "· ",
            t.courses.length
          ] })
        ] }, t.key);
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-center text-sm tracking-[0.25em] uppercase text-[var(--gold)]", children: tier.tagline }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 md:py-16 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: -20
    }, transition: {
      duration: 0.4
    }, className: "grid gap-5 md:grid-cols-2 lg:grid-cols-2", children: tier.courses.map((c, i) => {
      const open = openCourse === c.key;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: i * 0.08
      }, className: "luxe-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenCourse(open ? null : c.key), className: "w-full text-left p-6 md:p-8 flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[var(--gold)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Course ",
                String(i + 1).padStart(2, "0")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-[var(--gold)]/40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.duration })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-3xl md:text-4xl leading-tight", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: c.blurb })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-10 w-10 grid place-items-center rounded-full border border-[var(--gold)]/40 text-[var(--gold)] flex-shrink-0 transition-transform ${open ? "rotate-180 bg-[var(--gold)]/10" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          height: 0,
          opacity: 0
        }, animate: {
          height: "auto",
          opacity: 1
        }, exit: {
          height: 0,
          opacity: 0
        }, transition: {
          duration: 0.35
        }, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 md:px-8 pb-6 md:pb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent mb-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-2 gap-3", children: c.topics.map((t, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, { initial: {
            opacity: 0,
            x: -10
          }, animate: {
            opacity: 1,
            x: 0
          }, transition: {
            delay: idx * 0.04
          }, className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 h-5 w-5 grid place-items-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)] flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t })
          ] }, t)) })
        ] }) }) })
      ] }, c.key);
    }) }, tier.key) }) }) })
  ] });
}
export {
  CoursesPage as component
};
