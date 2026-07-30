import { GraduationCap, Quote } from 'lucide-react';
import { FOUNDER_IMG } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

const CREDS = [
  'PhD in Applied Linguistics',
  '15+ years coaching learners',
  'Certified IELTS trainer',
  'Mentored 12,000+ students',
];

export function Founder({ onBookDemo }: { onBookDemo: () => void }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="founder" className="section-pad" ref={ref}>
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-200/60 to-gold-200/50 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-lift">
              <img
                src={FOUNDER_IMG}
                alt="Dr. Meenu Ganju, Founder of EDUVATEE"
                className="aspect-[9/11] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 left-5 rounded-2xl border border-black/5 bg-white p-4 shadow-lift sm:left-8">
              <div className="flex items-center gap-2">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-100 text-gold-600">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-ink-900">Dr. Meenu Ganju</p>
                  <p className="text-xs text-ink-800/60">Founder & Lead Coach</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <span className="eyebrow">Meet our founder</span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold text-ink-900 sm:text-4xl">
              Transforming lives, one conversation at a time
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-800/75">
              At EDUVATEE Spoken English, we believe learning English is not
              just about grammar and vocabulary — it is about confidence,
              clarity, and real-world communication.
            </p>
            <p className="mt-4 text-ink-800/75">
              We know the fear of speaking English is rarely about forgetting
              rules — it is about hesitation, low self-esteem, and the feeling
              of being left behind. At EDUVATEE, we eliminate that fear with a
              practical, personalized, and emotionally supportive approach.
            </p>

            <blockquote className="mt-6 rounded-2xl border-l-4 border-brand-500 bg-brand-50/60 px-5 py-4">
              <Quote className="h-5 w-5 text-brand-400" />
              <p className="mt-1.5 text-base font-medium italic text-ink-900">
                “Fluency is not a talent — it is a skill anyone can build with
                the right guidance and the courage to begin.”
              </p>
            </blockquote>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {CREDS.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-2 text-sm text-ink-800/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {c}
                </li>
              ))}
            </ul>

            <button onClick={onBookDemo} className="btn-primary mt-8">
              Learn from Dr. Meenu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
