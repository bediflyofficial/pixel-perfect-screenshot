import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export function Faq() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="section-pad" ref={ref}>
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal">
            <span className="eyebrow">FAQs</span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold text-ink-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-ink-800/70">
              Everything you need to know before you begin. Still curious? Our
              team is a message away.
            </p>
          </div>

          <div className="reveal space-y-3">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen
                      ? 'border-brand-200 bg-brand-50/40'
                      : 'border-black/5 bg-white'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-full text-xs font-bold transition-colors ${
                        isOpen
                          ? 'bg-brand-600 text-white'
                          : 'bg-brand-50 text-brand-700'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 text-sm font-semibold text-ink-900 sm:text-base">
                      {f.q}
                    </span>
                    <span
                      className={`grid h-7 w-7 flex-shrink-0 place-items-center rounded-full transition-colors ${
                        isOpen ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-600'
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 sm:pl-17 text-sm leading-relaxed text-ink-800/75">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
