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
    const data = new FormData(e.currentTarget);
    try {
      await submitLead({
        name: String(data.get('name') ?? '').trim(),
        phone: String(data.get('phone') ?? '').trim(),
        email: String(data.get('email') ?? '').trim() || null,
        message: String(data.get('message') ?? '').trim() || null,
        interest: 'General enquiry',
        source: 'contact',
      });
      setStatus('success');
      e.currentTarget.reset();
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

          <div className="reveal rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-brand-400/15 text-brand-300">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">
                  Message sent!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-brand-100/70">
                  Thanks for reaching out. Our team will contact you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <DarkField label="Full name" htmlFor="c-name">
                    <input
                      id="c-name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="dark-input"
                    />
                  </DarkField>
                  <DarkField label="Phone" htmlFor="c-phone">
                    <input
                      id="c-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      className="dark-input"
                    />
                  </DarkField>
                </div>
                <DarkField label="Email (optional)" htmlFor="c-email">
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@email.com"
                    className="dark-input"
                  />
                </DarkField>
                <DarkField label="Message" htmlFor="c-message">
                  <textarea
                    id="c-message"
                    name="message"
                    rows={4}
                    placeholder="How can we help you?"
                    className="dark-input resize-none"
                  />
                </DarkField>

                {status === 'error' && (
                  <p className="rounded-xl bg-red-500/15 px-4 py-3 text-sm text-red-200">
                    {errMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-gold w-full"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>Send message</>
                  )}
                </button>
              </form>
            )}
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

function DarkField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-medium text-brand-100/80">
        {label}
      </span>
      {children}
    </label>
  );
}
