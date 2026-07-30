import { MessageCircle } from 'lucide-react';
import { CONTACTS } from '@/data/content';

export function FloatingCTA({ onBookDemo }: { onBookDemo: () => void }) {
  return (
    <>
      <a
        href={CONTACTS.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        <MessageCircle className="relative h-7 w-7" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/90 p-3 backdrop-blur-xl sm:hidden">
        <div className="flex items-center gap-3">
          <a
            href={`tel:${CONTACTS.phone.replace(/\s/g, '')}`}
            className="btn-ghost flex-1"
          >
            Call
          </a>
          <button onClick={onBookDemo} className="btn-gold flex-[2]">
            Book Your Demo Class
          </button>
        </div>
      </div>
    </>
  );
}
