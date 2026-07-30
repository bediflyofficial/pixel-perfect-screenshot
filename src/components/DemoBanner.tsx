import { Sparkles, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export function DemoBanner({ onBookDemo }: { onBookDemo: () => void }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="py-12 sm:py-16" ref={ref}>
      <div className="container-px">
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-700 to-ink-900 px-6 py-10 text-white shadow-lift sm:px-12 sm:py-14">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold-400/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-brand-300/20 blur-3xl" />

          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> Try before you commit
              </span>
              <h2 className="mt-4 text-balance text-2xl font-extrabold leading-tight sm:text-3xl">
                Experience a real class with a{' '}
                <span className="text-gold-300">free demo</span>
              </h2>
              <p className="mt-2 text-sm text-brand-100/85 sm:text-base">
                Feel the teaching style, atmosphere, and learning environment
                before you commit to a full course.
              </p>
            </div>
            <button
              onClick={onBookDemo}
              className="btn-gold group flex-shrink-0 text-base"
            >
              Book Your Demo Class
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
