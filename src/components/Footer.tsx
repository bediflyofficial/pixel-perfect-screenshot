import { Phone, Mail, MapPin, Instagram, Youtube, Linkedin } from 'lucide-react';
import { NAV, CONTACTS } from '@/data/content';

export function Footer({ onBookDemo }: { onBookDemo: () => void }) {
  return (
    <footer className="border-t border-white/10 bg-ink-950 pt-16 text-brand-100/70">
      <div className="container-px">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                  <path d="M3 7l9-4 9 4-9 4-9-4z" fill="currentColor" />
                  <path
                    d="M7 11v5c0 1 2.2 2.5 5 2.5s5-1.5 5-2.5v-5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="font-display text-lg font-extrabold text-white">
                EDU<span className="text-brand-400">VATEE</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Empowering education through innovative teaching methodologies and
              personalized learning experiences for students of all ages.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={CONTACTS.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-brand-100/70 transition hover:border-brand-400/40 hover:text-brand-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={CONTACTS.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-brand-100/70 transition hover:border-brand-400/40 hover:text-brand-300"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={CONTACTS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-brand-100/70 transition hover:border-brand-400/40 hover:text-brand-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick links
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="transition hover:text-brand-300"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Programs
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#packages" className="transition hover:text-brand-300">
                  Spoken English
                </a>
              </li>
              <li>
                <a href="#ielts" className="transition hover:text-brand-300">
                  IELTS Preparation
                </a>
              </li>
              <li>
                <button
                  onClick={onBookDemo}
                  className="transition hover:text-brand-300"
                >
                  Demo Class
                </button>
              </li>
              <li>
                <a href="#tutors" className="transition hover:text-brand-300">
                  1-on-1 Coaching
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
                <a
                  href={`tel:${CONTACTS.phone.replace(/\s/g, '')}`}
                  className="transition hover:text-brand-300"
                >
                  {CONTACTS.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
                <a
                  href={`mailto:${CONTACTS.email}`}
                  className="transition hover:text-brand-300"
                >
                  {CONTACTS.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
                <span>Online · India-wide live sessions</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-brand-100/50 sm:flex-row">
          <p>© 2025 Eduvatee. All rights reserved.</p>
          <p>Master Fluent English — one conversation at a time.</p>
        </div>
      </div>
    </footer>
  );
}
