import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Community } from "@/components/Community";
import { DemoBanner } from "@/components/DemoBanner";
import { Packages, IELTS } from "@/components/Packages";
import { Founder } from "@/components/Founder";
import { Tutors } from "@/components/Tutors";
import { Reviews } from "@/components/Reviews";
import { Gallery } from "@/components/Gallery";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { LeadModal } from "@/components/LeadModal";

const TITLE = "EDUVATEE — Live 1-on-1 Spoken English & IELTS Coaching";
const DESCRIPTION =
  "Personalised live English fluency and IELTS coaching with expert tutors. Flexible 1, 3 and 6-month plans. Book a ₹99 demo class today.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type ModalState = { open: boolean; interest: string; source: string };

const DEMO: ModalState = {
  open: false,
  interest: "₹99 Demo Class",
  source: "demo",
};

function Index() {
  const [modal, setModal] = useState<ModalState>(DEMO);

  const openDemo = (interest: string = "₹99 Demo Class") =>
    setModal({ open: true, interest, source: "demo" });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--bg)]">
      <Navbar onBookDemo={() => openDemo()} />
      <main>
        <Hero onBookDemo={() => openDemo()} />
        <Features />
        <Packages onBookDemo={(interest) => openDemo(interest)} />
        <DemoBanner onBookDemo={() => openDemo()} />
        <Community onBookDemo={() => openDemo()} />
        <IELTS onBookDemo={(interest) => openDemo(interest)} />
        <Founder onBookDemo={() => openDemo()} />
        <Tutors onBookDemo={() => openDemo()} />
        <Reviews />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer onBookDemo={() => openDemo()} />
      <FloatingCTA onBookDemo={() => openDemo()} />

      <LeadModal
        open={modal.open}
        onClose={() => setModal((m) => ({ ...m, open: false }))}
        title={
          modal.interest === "₹99 Demo Class"
            ? "Book your ₹99 demo class"
            : "Reserve your spot"
        }
        subtitle={
          modal.interest === "₹99 Demo Class"
            ? "Experience a real class before you commit."
            : `Selected: ${modal.interest}`
        }
        interest={modal.interest}
        source={modal.source}
      />
    </div>
  );
}
