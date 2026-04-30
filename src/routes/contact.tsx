import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Instagram, Facebook, Youtube, Check } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sri Dev Fashion Academy" },
      { name: "description", content: "Visit Sri Dev Fashion Academy at 2nd Street, Gandhipuram. Call 9344251898 to enroll." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <PageLayout>
      <section className="pt-32 md:pt-44 pb-12 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal><span className="section-eyebrow">Get in Touch</span></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl">Begin your <em className="gold-text not-italic">journey</em></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Reach out for admissions, course details, or simply to visit our studio in Gandhipuram.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <Reveal direction="left">
            <form onSubmit={submit} className="luxe-card p-8 md:p-10 space-y-5">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Your Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-[var(--gold)] outline-none py-2 text-lg transition"
                  placeholder="Priya R."
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                  <input
                    required type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full bg-transparent border-b border-border focus:border-[var(--gold)] outline-none py-2 transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 w-full bg-transparent border-b border-border focus:border-[var(--gold)] outline-none py-2 transition"
                    placeholder="9344251898"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  required rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-[var(--gold)] outline-none py-2 transition resize-none"
                  placeholder="I'd love to learn more about the Advanced Blouse course..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gold w-full"
              >
                {sent ? <><Check className="h-4 w-4" /> Message Sent</> : <>Send Message <Send className="h-4 w-4" /></>}
              </motion.button>
            </form>
          </Reveal>

          {/* Info */}
          <Reveal direction="right">
            <div className="space-y-6">
              {[
                { Icon: MapPin, label: "Visit", value: "2nd Street, Gandhipuram", href: "https://maps.google.com/?q=Gandhipuram" },
                { Icon: Phone, label: "Call", value: "9344251898", href: "tel:9344251898" },
                { Icon: Mail, label: "Email", value: "hello@sridevfashion.in", href: "mailto:hello@sridevfashion.in" },
              ].map(({ Icon, label, value, href }) => (
                <a key={label} href={href} className="luxe-card p-6 flex items-center gap-5 group">
                  <div className="h-12 w-12 grid place-items-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
                    <div className="mt-1 font-display text-xl">{value}</div>
                  </div>
                </a>
              ))}

              <div className="luxe-card p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Follow</div>
                <div className="flex gap-3">
                  {[Instagram, Facebook, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="h-11 w-11 grid place-items-center rounded-full border border-border hover:border-[var(--gold)] hover:text-[var(--gold)] transition">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-24">
        <Reveal direction="zoom">
          <div className="mx-auto max-w-7xl rounded-3xl overflow-hidden luxe-card !p-0 h-[400px] md:h-[500px]">
            <iframe
              title="Sri Dev Fashion Academy Location"
              src="https://www.google.com/maps?q=Gandhipuram,Coimbatore&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </PageLayout>
  );
}
