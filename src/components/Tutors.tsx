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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TUTORS.map((t, i) => (
            <article
              key={t.name}
              className="reveal group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="aspect-[5/6] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950/70 to-transparent" />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-base font-bold text-ink-900">{t.name}</h3>
                <p className="mt-0.5 text-sm text-brand-600">{t.role}</p>
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
