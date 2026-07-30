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
  "Personalised live English fluency and IELTS coaching with expert tutors. Flexible 1, 3 and 6-month plans. Book your demo class today.";

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

function Index() {
  const [modal, setModal] = useState<ModalState>({
    open: false,
    interest: "",
    source: "packages",
  });

  // Demo-class CTAs scroll to the booking form in the hero.
  const scrollToDemoForm = () => {
    const el = document.getElementById("demo-form");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    const firstInput = el.querySelector<HTMLInputElement>("input");
    window.setTimeout(() => firstInput?.focus({ preventScroll: true }), 700);
  };

  // Package / plan CTAs open the enquiry modal.
  const openPlan = (interest: string) =>
    setModal({ open: true, interest, source: "packages" });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--bg)]">
      <Navbar onBookDemo={scrollToDemoForm} />
      <main>
        <Hero onBookDemo={scrollToDemoForm} />
        <Features />
        <Packages onBookDemo={(interest) => openPlan(interest)} />
        <DemoBanner onBookDemo={scrollToDemoForm} />
        <Community onBookDemo={scrollToDemoForm} />
        <IELTS onBookDemo={(interest) => openPlan(interest)} />
        <Founder onBookDemo={scrollToDemoForm} />
        <Tutors onBookDemo={scrollToDemoForm} />
        <Reviews />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer onBookDemo={scrollToDemoForm} />
      <FloatingCTA onBookDemo={scrollToDemoForm} />

      <LeadModal
        open={modal.open}
        onClose={() => setModal((m) => ({ ...m, open: false }))}
        title="Reserve your spot"
        subtitle={modal.interest ? `Selected: ${modal.interest}` : undefined}
        interest={modal.interest}
        source={modal.source}
      />
    </div>
  );
}

