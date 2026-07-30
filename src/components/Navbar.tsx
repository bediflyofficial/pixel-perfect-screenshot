import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV, CONTACTS } from '@/data/content';

export function Navbar({ onBookDemo }: { onBookDemo: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 w-full max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-white/80 px-4 py-2.5 shadow-soft backdrop-blur-xl sm:px-5">
          <a href="#home" className="flex items-center gap-2.5">
            <Logo />
            <span className="font-display text-lg font-extrabold tracking-tight text-ink-900">
              EDU<span className="text-brand-600">VATEE</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-800/80 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <a
              href={`tel:${CONTACTS.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-ink-800 transition hover:text-brand-700"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <button onClick={onBookDemo} className="btn-gold">
              Book Your Demo Class
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white text-ink-900 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-black/5 bg-white p-4 shadow-lift lg:hidden">
            <nav className="flex flex-col">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-ink-800 transition hover:bg-brand-50"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => {
                setOpen(false);
                onBookDemo();
              }}
              className="btn-gold mt-3 w-full"
            >
              Book Your Demo Class
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

function Logo() {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path
          d="M3 7l9-4 9 4-9 4-9-4z"
          fill="currentColor"
          opacity="0.95"
        />
        <path
          d="M7 11v5c0 1 2.2 2.5 5 2.5s5-1.5 5-2.5v-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
