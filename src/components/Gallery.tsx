import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const INTERVAL = 3500;

export function Gallery() {
  const ref = useReveal<HTMLDivElement>();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = GALLERY.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused || count < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => clearInterval(t);
  }, [paused, count]);

  return (
    <section id="gallery" className="section-pad bg-ink-900/40" ref={ref}>
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our gallery</span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Moments from our live sessions
          </h2>
        </div>

        <div
          className="reveal relative mx-auto mt-12 max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => {
            setPaused(true);
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const start = touchX.current;
            touchX.current = null;
            setPaused(false);
            if (start === null) return;
            const delta = e.changedTouches[0].clientX - start;
            if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
          }}
        >
          <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-ink-900 shadow-lift">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {GALLERY.map((item, i) => (
                <div key={item.src} className="w-full flex-shrink-0">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="aspect-[16/9] w-full object-contain"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
            </div>
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-black/5 bg-white/90 text-ink-900 shadow-lift backdrop-blur transition hover:bg-white sm:-left-5"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-black/5 bg-white/90 text-ink-900 shadow-lift backdrop-blur transition hover:bg-white sm:-right-5"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="mt-6 flex items-center justify-center gap-2">
                {GALLERY.map((item, i) => (
                  <button
                    key={item.src}
                    type="button"
                    aria-label={`Go to photo ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index
                        ? 'w-7 bg-brand-600'
                        : 'w-2 bg-ink-900/20 hover:bg-ink-900/40'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
