import { useState, type FormEvent } from 'react';
import {
  Star,
  ShieldCheck,
  Users,
  Loader2,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  CalendarCheck,
  MessageCircle,
} from 'lucide-react';
import { STATS, HERO_IMG, CONTACTS } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';
import { submitLead } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Hero({ onBookDemo }: { onBookDemo: () => void }) {
  const ref = useReveal<HTMLElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [errMsg, setErrMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrMsg('');
    const form = e.currentTarget;
    const data = new FormData(form);
    const age = String(data.get('age') ?? '').trim();
    const city = String(data.get('city') ?? '').trim();
    try {
      await submitLead({
        name: String(data.get('name') ?? '').trim(),
        phone: String(data.get('phone') ?? '').trim(),
        age,
        city,
        email: String(data.get('email') ?? '').trim() || null,
        message: `Age: ${age} • City: ${city}`,
        interest: 'Demo Class',
        source: 'hero-form',
      });
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.',
      );
    }
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden pt-28 sm:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_75%)]" />
      <div className="absolute -top-32 right-[-10%] -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-200/50 blur-3xl" />
      <div className="absolute top-40 left-[-15%] -z-10 h-[24rem] w-[24rem] rounded-full bg-gold-200/40 blur-3xl" />

      <div className="container-px grid items-start gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28">
        <div className="reveal">
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] text-ink-900 sm:text-5xl lg:text-6xl">
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

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-800/70">
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

          <div className="relative mx-auto mt-12 w-full max-w-md lg:mx-0">
            <div className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-200/60 to-gold-200/50 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-lift">
              <img
                src={HERO_IMG}
                alt="Dr. Meenu Ganju, founder and lead coach at EDUVATEE"
                className="aspect-[4/3] w-full object-cover object-center"
                width={1200}
                height={900}
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <div className="absolute -left-2 top-8 animate-float rounded-2xl border border-black/5 bg-white p-3 shadow-lift sm:-left-6">
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
          </div>
        </div>

        <div id="demo-form" className="reveal scroll-mt-28 lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-lift">
            <div className="bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-6 text-white sm:px-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-100">
                Limited seats available
              </span>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                Book Your Demo Class
              </h2>
              <p className="mt-1 text-sm text-brand-100">
                Experience a real class before you commit — no pressure.
              </p>
            </div>

            {status === 'success' ? (
              <div className="px-6 py-10 sm:px-8">
                <div className="text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-brand-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink-900">
                    Thank you — your demo request is confirmed!
                  </h3>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-ink-800/70">
                    A learning advisor from EDUVATEE will contact you within 24
                    hours to schedule your personalized demo class.
                  </p>
                </div>

                <div className="mt-7 space-y-3 rounded-2xl bg-brand-50/60 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                    What happens next
                  </p>
                  <ul className="space-y-2.5 text-sm text-ink-800/80">
                    <li className="flex items-start gap-2.5">
                      <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" />
                      Our team calls you to understand your goals and level.
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CalendarCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" />
                      We schedule your 1-on-1 demo class at a time that suits
                      you.
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Users className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" />
                      You meet your tutor and get a personalized learning plan.
                    </li>
                  </ul>
                </div>

                <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href={CONTACTS.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary flex-1 justify-center"
                  >
                    <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                  </a>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-ghost flex-1 justify-center"
                  >
                    Book another slot
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 py-6 sm:px-8">
                <div className="grid gap-4">
                  <HeroField label="Full name" htmlFor="hero-name" required>
                    <input
                      id="hero-name"
                      name="name"
                      required
                      autoComplete="name"
                      maxLength={100}
                      placeholder="e.g. Riya Sharma"
                      className="lead-input"
                    />
                  </HeroField>
                  <HeroField
                    label="Phone / WhatsApp"
                    htmlFor="hero-phone"
                    required
                  >
                    <input
                      id="hero-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      maxLength={20}
                      placeholder="+91 63573 48400"
                      className="lead-input"
                    />
                  </HeroField>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <HeroField label="Age" htmlFor="hero-age" required>
                      <input
                        id="hero-age"
                        name="age"
                        type="number"
                        min={5}
                        max={99}
                        required
                        placeholder="e.g. 25"
                        className="lead-input"
                      />
                    </HeroField>
                    <HeroField label="City" htmlFor="hero-city" required>
                      <input
                        id="hero-city"
                        name="city"
                        required
                        maxLength={60}
                        placeholder="e.g. Mumbai"
                        className="lead-input"
                      />
                    </HeroField>
                  </div>
                  <HeroField label="Email" htmlFor="hero-email" optional>
                    <input
                      id="hero-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={255}
                      placeholder="you@email.com"
                      className="lead-input"
                    />
                  </HeroField>
                </div>

                {status === 'error' && (
                  <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-gold mt-5 w-full text-base"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
                    </>
                  ) : (
                    <>
                      Book Your Demo Class
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-ink-800/60">
                  <span className="inline-flex items-center gap-1">
                    <Phone className="h-3.5 w-3.5" /> We'll call you back within
                    24 hours
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Mail className="h-3.5 w-3.5" /> No spam, ever
                  </span>
                </p>
              </form>
            )}
          </div>

          <button
            onClick={onBookDemo}
            className="mt-4 w-full text-center text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
          >
            Prefer to talk first? Request a callback
          </button>
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

function HeroField({
  label,
  htmlFor,
  required,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-900">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
        {optional && (
          <span className="ml-1 font-normal text-ink-800/50">(optional)</span>
        )}
      </span>
      {children}
    </label>
  );
}
