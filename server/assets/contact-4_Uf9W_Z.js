import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-BhwJu8WE.js";
import { c as createLucideIcon, P as PageLayout, R as Reveal, m as motion, M as MapPin, a as Phone, b as Mail, I as Instagram, F as Facebook, Y as Youtube } from "./Reveal-CDzIhyov.js";
import { C as Check } from "./check-CkBzhYuJ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-C-VyPS2E.js";
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const submit = (e) => {
    e.preventDefault();
    const text = `*New Enquiry - Sri Dev Fashion Academy*
------------------------------
👤 Name: ${form.name}
📧 Email: ${form.email}
📱 Phone: ${form.phone}
💬 Message: ${form.message}`;
    const phoneNumber = "919344251898";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4e3);
    setForm({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-32 md:pt-44 pb-12 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: "Get in Touch" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl md:text-7xl", children: [
        "Begin your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "gold-text not-italic", children: "journey" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-xl mx-auto", children: "Reach out for admissions, course details, or simply to visit our studio in Gandhipuram." }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl grid lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "luxe-card p-8 md:p-10 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Your Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }), className: "mt-2 w-full bg-transparent border-b border-border focus:border-[var(--gold)] outline-none py-2 text-lg transition", placeholder: "Priya R." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", value: form.email, onChange: (e) => setForm({
              ...form,
              email: e.target.value
            }), className: "mt-2 w-full bg-transparent border-b border-border focus:border-[var(--gold)] outline-none py-2 transition", placeholder: "you@example.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: form.phone, onChange: (e) => setForm({
              ...form,
              phone: e.target.value
            }), className: "mt-2 w-full bg-transparent border-b border-border focus:border-[var(--gold)] outline-none py-2 transition", placeholder: "9344251898" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 4, value: form.message, onChange: (e) => setForm({
            ...form,
            message: e.target.value
          }), className: "mt-2 w-full bg-transparent border-b border-border focus:border-[var(--gold)] outline-none py-2 transition resize-none", placeholder: "I'd love to learn more about the Advanced Blouse course..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { type: "submit", whileHover: {
          scale: 1.02
        }, whileTap: {
          scale: 0.98
        }, className: "btn-gold w-full", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
          " Message Sent"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Send Message ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        [{
          Icon: MapPin,
          label: "Visit",
          value: "2nd Street, Gandhipuram",
          href: "https://maps.google.com/?q=Gandhipuram"
        }, {
          Icon: Phone,
          label: "Call",
          value: "9344251898",
          href: "tel:9344251898"
        }, {
          Icon: Mail,
          label: "Email",
          value: "hello@sridevfashion.in",
          href: "mailto:hello@sridevfashion.in"
        }].map(({
          Icon,
          label,
          value,
          href
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, className: "luxe-card p-6 flex items-center gap-5 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 grid place-items-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-xl", children: value })
          ] })
        ] }, label)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "luxe-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3", children: "Follow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [Instagram, Facebook, Youtube].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "h-11 w-11 grid place-items-center rounded-full border border-border hover:border-[var(--gold)] hover:text-[var(--gold)] transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }, i)) })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "zoom", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl rounded-3xl overflow-hidden luxe-card !p-0 h-[400px] md:h-[500px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Sri Dev Fashion Academy Location", src: "https://www.google.com/maps?q=Gandhipuram,Coimbatore&output=embed", className: "w-full h-full border-0", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) }) }) })
  ] });
}
export {
  ContactPage as component
};
