import { useEffect, useState, type FormEvent } from 'react';
import { X, Phone, Mail, Loader2, CheckCircle2, CalendarCheck } from 'lucide-react';
import { submitLead } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  interest: string;
  source: string;
};

export function LeadModal({
  open,
  onClose,
  title,
  subtitle,
  interest,
  source,
}: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setStatus('idle');
      setErrMsg('');
    }
  }, [open]);

  if (!open) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrMsg('');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await submitLead({
        name: String(data.get('name') ?? '').trim(),
        phone: String(data.get('phone') ?? '').trim(),
        email: String(data.get('email') ?? '').trim() || null,
        message: String(data.get('message') ?? '').trim() || null,
        interest,
        source,
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
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg overflow-hidden rounded-t-4xl bg-white shadow-lift sm:rounded-4xl animate-fade-up">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/5 text-ink-800 transition hover:bg-black/10"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-6 text-white">
          <div className="flex items-center gap-2 text-brand-100">
            <CalendarCheck className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em]">
              EDUVATEE
            </span>
          </div>
          <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>
          {subtitle && (
            <p className="mt-1 text-sm text-brand-100">{subtitle}</p>
          )}
        </div>

        {status === 'success' ? (
          <div className="px-6 py-12 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-brand-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h4 className="mt-5 text-xl font-bold text-ink-900">
              Request received!
            </h4>
            <p className="mx-auto mt-2 max-w-sm text-sm text-ink-800/70">
              Thanks for reaching out. Our team will contact you shortly to
              confirm your slot.
            </p>
            <button onClick={onClose} className="btn-primary mt-6">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6">
            <div className="grid gap-4">
              <Field label="Full name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="e.g. Riya Sharma"
                  className="lead-input"
                />
              </Field>
              <Field label="Phone / WhatsApp" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                  className="lead-input"
                />
              </Field>
              <Field label="Email (optional)" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@email.com"
                  className="lead-input"
                />
              </Field>
              <Field label="Message (optional)" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us your goals or preferred timings…"
                  className="lead-input resize-none"
                />
              </Field>
            </div>

            {status === 'error' && (
              <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                {errMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary mt-5 w-full"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
                </>
              ) : (
                <>Book my slot</>
              )}
            </button>

            <p className="mt-4 flex items-center justify-center gap-4 text-xs text-ink-800/60">
              <span className="inline-flex items-center gap-1">
                <Phone className="h-3.5 w-3.5" /> Call back within 24h
              </span>
              <span className="inline-flex items-center gap-1">
                <Mail className="h-3.5 w-3.5" /> No spam, ever
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
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
      <span className="mb-1.5 block text-sm font-medium text-ink-900">
        {label}
      </span>
      {children}
    </label>
  );
}
