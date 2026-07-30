import { Star, Play, Sparkles, ShieldCheck, Users } from 'lucide-react';
import { STATS, HERO_IMG } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export function Hero({ onBookDemo }: { onBookDemo: () => void }) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden pt-28 sm:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_75%)]" />
      <div className="absolute -top-32 right-[-10%] -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-200/50 blur-3xl" />
      <div className="absolute top-40 left-[-15%] -z-10 h-[24rem] w-[24rem] rounded-full bg-gold-200/40 blur-3xl" />

      <div className="container-px grid items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <div className="reveal">
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" /> Live 1-on-1 English coaching
          </span>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] text-ink-900 sm:text-5xl lg:text-6xl">
            Master Fluent English with{' '}
            <span className="relative whitespace-nowrap text-brand-600">
              EDUVATEE
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 9c70-6 220-6 296 0"
                  stroke="#34d3a3"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            — the smartest way to learn.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-800/75">
            Personalized, live sessions led by expert instructors. We eliminate
            the fear of speaking English with a practical, emotionally
            supportive approach — so you speak with confidence, not hesitation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={onBookDemo} className="btn-gold">
              <Play className="h-4 w-4" /> Book ₹99 Demo Class
            </button>
            <a href="#packages" className="btn-ghost">
              Explore packages
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-800/70">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>
              <span className="font-semibold text-ink-900">4.9/5</span>
              <span>from 2,000+ learners</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-brand-600" />
              <span>12,000+ students coached</span>
            </div>
          </div>
        </div>

        <div className="reveal relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-200/60 to-gold-200/50 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-lift">
              <img
                src={HERO_IMG}
                alt="Student attending a live online English class"
                className="aspect-[5/6] w-full object-cover"
                loading="eager"
              />
            </div>

            <div className="absolute -left-4 top-8 animate-float rounded-2xl border border-black/5 bg-white p-3 shadow-lift sm:-left-8">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-semibold text-ink-900">
                    Dedicated tutor
                  </p>
                  <p className="text-[11px] text-ink-800/60">
                    For your whole course
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 bottom-10 animate-float rounded-2xl border border-black/5 bg-white p-3 shadow-lift [animation-delay:1.5s] sm:-right-6">
              <div className="flex items-center gap-2">
                <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-green-50 text-green-600">
                  <span className="absolute inset-0 rounded-xl bg-green-400/40 animate-pulse-ring" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-semibold text-ink-900">Live now</p>
                  <p className="text-[11px] text-ink-800/60">
                    1-on-1 session active
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-px pb-14">
        <div className="grid grid-cols-2 divide-x divide-y divide-black/5 rounded-3xl border border-black/5 bg-white/70 backdrop-blur sm:grid-cols-4 sm:divide-y-0">
          {STATS.map((s) => (
            <div key={s.label} className="px-6 py-7 text-center">
              <p className="font-display text-3xl font-extrabold text-brand-600 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-ink-800/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
