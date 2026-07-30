import { TUTORS } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export function Tutors({ onBookDemo }: { onBookDemo: () => void }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="tutors" className="section-pad bg-ink-900/40" ref={ref}>
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our team</span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Meet our top tutors
          </h2>
          <p className="mt-4 text-ink-800/70">
            Experienced, empathetic, and results-driven. Not comfortable with
            your assigned tutor? We will happily match you with another.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TUTORS.map((t, i) => (
            <article
              key={t.name}
              className="reveal group mx-auto flex w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative overflow-hidden">
                {t.img ? (
                  <img
                    src={t.img}
                    alt={t.name}
                    className="aspect-[5/6] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="grid aspect-[5/6] w-full place-items-center bg-gradient-to-br from-brand-100 to-brand-50">
                    <span className="font-display text-5xl font-extrabold text-brand-600">
                      {t.name
                        .replace(/^(Ms\.|Mr\.|Dr\.)\s*/, '')
                        .split(' ')
                        .map((w) => w[0])
                        .join('')}
                    </span>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950/60 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col items-center p-6 text-center">
                <h3 className="text-lg font-bold text-ink-900">{t.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-600">
                  {t.role}
                </p>
                <p className="mt-3 inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  {t.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <button onClick={onBookDemo} className="btn-dark">
            Get matched with a tutor
          </button>
        </div>
      </div>
    </section>
  );
}
