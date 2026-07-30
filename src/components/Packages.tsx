import { Check, Crown, ArrowRight } from 'lucide-react';
import { SPOKEN_PLANS, IELTS_PLANS, type Plan } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export function Packages({ onBookDemo }: { onBookDemo: (interest: string) => void }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="packages" className="section-pad" ref={ref}>
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Spoken English Packages</span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold text-ink-900 sm:text-4xl">
            A plan for every stage of your journey
          </h2>
          <p className="mt-4 text-ink-800/70">
            Transparent pricing, no hidden fees. Switch or upgrade anytime as
            you progress.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SPOKEN_PLANS.map((p, i) => (
            <PlanCard key={p.name} plan={p} onBookDemo={onBookDemo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function IELTS({ onBookDemo }: { onBookDemo: (interest: string) => void }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="ielts" className="section-pad bg-ink-900" ref={ref}>
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
            IELTS Preparation
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold text-white sm:text-4xl">
            Hit your target band — guaranteed roadmap
          </h2>
          <p className="mt-4 text-brand-100/70">
            Focused modules, unlimited writing reviews, and weekly mock band
            scores to keep you on track.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {IELTS_PLANS.map((p, i) => (
            <PlanCard
              key={p.name}
              plan={p}
              onBookDemo={onBookDemo}
              index={i}
              dark
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  plan,
  onBookDemo,
  index,
  dark = false,
}: {
  plan: Plan;
  onBookDemo: (interest: string) => void;
  index: number;
  dark?: boolean;
}) {
  return (
    <article
      className={`reveal relative flex flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1.5 ${
        plan.popular
          ? dark
            ? 'border-brand-400 bg-gradient-to-b from-brand-500/20 to-ink-800 shadow-glow'
            : 'border-brand-300 bg-gradient-to-b from-brand-50 to-white shadow-glow'
          : dark
            ? 'border-white/10 bg-white/[0.04] backdrop-blur hover:border-white/20'
            : 'border-black/5 bg-white shadow-soft hover:shadow-lift'
      }`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {plan.popular && (
        <span
          className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider ${
            dark ? 'bg-brand-400 text-ink-900' : 'bg-brand-600 text-white'
          }`}
        >
          <Crown className="h-3.5 w-3.5" /> Most popular
        </span>
      )}

      <div className="flex items-baseline justify-between">
        <h3 className={`text-lg font-bold ${dark ? 'text-white' : 'text-ink-900'}`}>
          {plan.name}
        </h3>
      </div>
      <p className={`mt-1 text-sm ${dark ? 'text-brand-100/70' : 'text-ink-800/60'}`}>
        {plan.tagline}
      </p>

      <div className="mt-5 flex items-end gap-1.5">
        <span className={`font-display text-4xl font-extrabold ${dark ? 'text-white' : 'text-ink-900'}`}>
          {plan.price}
        </span>
        <span className={`pb-1 text-sm ${dark ? 'text-brand-100/60' : 'text-ink-800/55'}`}>
          {plan.period}
        </span>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5 text-sm">
            <span
              className={`mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full ${
                dark ? 'bg-brand-400/20 text-brand-300' : 'bg-brand-50 text-brand-600'
              }`}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className={dark ? 'text-brand-100/85' : 'text-ink-800/80'}>
              {feat}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onBookDemo(`${plan.name} · ${plan.price}`)}
        className={`mt-7 w-full ${plan.popular ? 'btn-gold' : dark ? 'btn-ghost !border-white/15 !bg-white/10 !text-white hover:!bg-white/20' : 'btn-primary'}`}
      >
        {plan.cta} <ArrowRight className="h-4 w-4" />
      </button>
    </article>
  );
}
