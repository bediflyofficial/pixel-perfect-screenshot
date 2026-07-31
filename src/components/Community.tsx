import { Quote } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export function Community({ onBookDemo }: { onBookDemo: () => void }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section-pad" ref={ref}>
      <div className="container-px">
        <div className="grid items-center gap-12">
          <div className="reveal">
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
