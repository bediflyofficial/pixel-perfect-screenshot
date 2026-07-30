import { GALLERY } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export function Gallery() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section-pad bg-ink-900/40" ref={ref}>
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our gallery</span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Moments from our live sessions
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {GALLERY.map((src, i) => (
            <div
              key={src}
              className={`reveal group overflow-hidden rounded-2xl border border-black/5 shadow-soft ${
                i === 0 ? 'col-span-2 row-span-2 sm:col-span-2 lg:col-span-2' : ''
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={src}
                alt={`EDUVATEE class moment ${i + 1}`}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  i === 0 ? 'aspect-square sm:aspect-[4/3] lg:aspect-square' : 'aspect-square'
                }`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
