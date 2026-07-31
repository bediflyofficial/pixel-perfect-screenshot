import { useState, type FormEvent } from 'react';
import {
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Youtube,
  Linkedin,
  Loader2,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  CalendarCheck,
  Users,
} from 'lucide-react';
import { submitLead } from '@/lib/supabase';
import { CONTACTS } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
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
        email: String(data.get('email') ?? '').trim() || null,
        message: `Age: ${age} • City: ${city}`,
        interest: 'Demo Class',
        source: 'contact-form',
      });
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrMsg(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      );
    }
  }

  return (
    <section id="contact" className="section-pad bg-ink-900" ref={ref}>
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — info */}
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
              <HelpCircle className="h-3.5 w-3.5" /> We are here to help
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold text-white sm:text-4xl">
              Have questions? We are here to help!
            </h2>
            <p className="mt-4 text-brand-100/75">
              Reach out and our team will get back to you within 24 hours.
              Whether it is about packages, timings, or which plan suits you —
              just ask.
            </p>

            <div className="mt-8 space-y-3">
              <ContactRow
                icon={<Phone className="h-5 w-5" />}
                label="Call us"
                value={CONTACTS.phone}
                href={`tel:${CONTACTS.phone.replace(/\s/g, '')}`}
              />
              <ContactRow
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value={CONTACTS.email}
                href={`mailto:${CONTACTS.email}`}
              />
              <ContactRow
                icon={<MessageCircle className="h-5 w-5" />}
                label="WhatsApp"
                value="Chat with us instantly"
                href={CONTACTS.whatsapp}
              />
            </div>

            <div className="mt-8 flex items-center gap-3">
              <Social href={CONTACTS.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </Social>
              <Social href={CONTACTS.youtube} label="YouTube">
                <Youtube className="h-4 w-4" />
              </Social>
              <Social href={CONTACTS.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Social>
            </div>
          </div>

          {/* Right — form card (matches hero style) */}
          <div className="reveal">
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
                        We schedule your 1-on-1 demo class at a time that suits you.
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
                    <HeroField label="Full name" htmlFor="c-name" required>
                      <input
                        id="c-name"
                        name="name"
                        required
                        autoComplete="name"
                        maxLength={100}
                        placeholder="e.g. Riya Sharma"
                        className="lead-input"
                      />
                    </HeroField>
                    <HeroField label="Phone / WhatsApp" htmlFor="c-phone" required>
                      <input
                        id="c-phone"
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
                      <HeroField label="Age" htmlFor="c-age" required>
                        <input
                          id="c-age"
                          name="age"
                          type="number"
                          min={5}
                          max={99}
                          required
                          placeholder="e.g. 25"
                          className="lead-input"
                        />
                      </HeroField>
                      <HeroField label="City" htmlFor="c-city" required>
                        <input
                          id="c-city"
                          name="city"
                          required
                          maxLength={60}
                          placeholder="e.g. Mumbai"
                          className="lead-input"
                        />
                      </HeroField>
                    </div>
                    <HeroField label="Email" htmlFor="c-email" optional>
                      <input
                        id="c-email"
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
                      <Phone className="h-3.5 w-3.5" /> We'll call you back within 24 hours
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5" /> No spam, ever
                    </span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:border-brand-400/40 hover:bg-white/[0.07]"
    >
      <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-brand-400/15 text-brand-300">
        {icon}
      </span>
      <span className="leading-tight">
        <span className="block text-xs uppercase tracking-wider text-brand-100/50">
          {label}
        </span>
        <span className="block text-sm font-semibold text-white">{value}</span>
      </span>
    </a>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-brand-100 transition hover:border-brand-400/40 hover:bg-brand-400/15 hover:text-brand-300"
    >
      {children}
    </a>
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
