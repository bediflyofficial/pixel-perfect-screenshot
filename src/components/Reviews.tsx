import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export function Reviews() {
  const ref = useReveal<HTMLDivElement>();
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="section-pad" ref={ref}>
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Ambitious people ♥ Eduvatee
          </h2>
          <p className="mt-4 text-ink-800/70">
            Real stories from learners who transformed their confidence and
            careers.
          </p>
        </div>
      </div>

      <div className="reveal mt-14 overflow-hidden mask-fade-x">
        <div className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]">
          {loop.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <figure className="w-[320px] flex-shrink-0 rounded-3xl border border-black/5 bg-white p-6 shadow-soft sm:w-[380px]">
      <div className="flex items-center justify-between">
        <Quote className="h-7 w-7 text-brand-300" />
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
          ))}
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-ink-800/85">
        “{review.text}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <img
          src={review.img}
          alt={review.name}
          className="h-11 w-11 rounded-full object-cover"
          loading="lazy"
        />
        <div className="leading-tight">
          <p className="text-sm font-bold text-ink-900">{review.name}</p>
          <p className="text-xs text-ink-800/60">{review.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
