import { FEATURES } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export function Features() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section-pad" ref={ref}>
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why EDUVATEE</span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Built for learners who want to actually <em>speak</em>
          </h2>
          <p className="mt-4 text-ink-800/70">
            Everything is designed around one outcome — confident, fluent
            communication in the real world.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <article
              key={f.title}
              className="reveal group card p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-800/70">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
