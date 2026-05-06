import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-[var(--ink)] text-[var(--background)]">
      <div className="absolute inset-x-0 top-0 h-px shimmer" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="font-display text-3xl gold-text mb-3">Sri Dev</div>
          <p className="text-sm text-white/60 leading-relaxed">
            A premier fashion design institute crafting tomorrow's couturiers with timeless skill and modern vision.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full border border-white/15 hover:border-[var(--gold)] hover:text-[var(--gold)] transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-[var(--gold)]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[var(--gold)]">About</Link></li>
            <li><Link to="/courses" className="hover:text-[var(--gold)]">Courses</Link></li>
            <li><Link to="/pricing" className="hover:text-[var(--gold)]">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--gold)]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-4">Visit</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[var(--gold)] flex-shrink-0" /> 2nd Street, Gandhipuram</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-[var(--gold)] flex-shrink-0" /> <a href="tel:9344251898" className="hover:text-[var(--gold)]">9344251898</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-[var(--gold)] flex-shrink-0" /> hello@sridevfashion.in</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-4">Hours</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Mon – Sat: 9am — 7pm</li>
            <li>Sunday: By appointment</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Sri Dev Fashion Academy. Crafted with elegance.
      </div>
    </footer>
  );
}
