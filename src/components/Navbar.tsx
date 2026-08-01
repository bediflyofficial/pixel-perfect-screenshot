import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV, CONTACTS } from '@/data/content';

export function Navbar({ onBookDemo }: { onBookDemo: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 w-full max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-white/80 px-4 py-2.5 shadow-soft backdrop-blur-xl sm:px-5">
          <a href="#home" className="flex items-center">
            <Logo />
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
    <img
      src="/logo.png"
      alt="Eduvatee — Road to Excel"
      className="h-12 w-auto"
    />
  );
}
