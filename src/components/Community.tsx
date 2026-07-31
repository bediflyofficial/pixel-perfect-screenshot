import { Quote, Star } from 'lucide-react';
import { COMMUNITY_IMG } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export function Community({ onBookDemo }: { onBookDemo: () => void }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section-pad" ref={ref}>
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative order-2 lg:order-1">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold-200/50 to-brand-200/50 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-lift">
              <img
                src={COMMUNITY_IMG}
                alt="A community of successful EDUVATEE learners"
                className="aspect-[11/9] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-black/5 bg-white p-4 shadow-lift sm:right-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>
              <p className="mt-1.5 text-sm font-bold text-ink-900">
                2,000+ success stories
              </p>
              <p className="text-xs text-ink-800/60">and counting</p>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <span className="eyebrow">Community</span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold text-ink-900 sm:text-4xl">
              Join a community of successful learners
            </h2>
            <p className="mt-4 text-lg text-ink-800/75">
              Thousands of students have achieved their language goals with
              EDUVATEE — from cracking interviews to speaking confidently in
              meetings and everyday life.
            </p>

            <div className="mt-7 space-y-4">
              <Testimonial
                text="My hesitation disappeared within weeks. I now lead client calls in English without a second thought."
                name="Priya S."
                role="Engineer, Pune"
              />
              <Testimonial
                text="The supportive environment made all the difference. I finally enjoy speaking English."
                name="Karan P."
                role="IELTS Band 8"
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onBookDemo} className="btn-primary">
                Start with a demo class
              </button>
              <a href="#reviews" className="btn-ghost">
                Read more reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial({
  text,
  name,
  role,
}: {
  text: string;
  name: string;
  role: string;
}) {
  return (
    <blockquote className="rounded-2xl border border-black/5 bg-white p-5 shadow-soft">
      <Quote className="h-5 w-5 text-brand-400" />
      <p className="mt-2 text-sm leading-relaxed text-ink-800/85">“{text}”</p>
      <footer className="mt-3 text-xs">
        <span className="font-semibold text-ink-900">{name}</span>{' '}
        <span className="text-ink-800/60">· {role}</span>
      </footer>
    </blockquote>
  );
}
