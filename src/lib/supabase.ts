import { sendLeadToSheet } from "@/lib/sheets.functions";

export type Lead = {
  name: string;
  phone: string;
  age?: string | null;
  city?: string | null;
  email?: string | null;
  interest?: string | null;
  message?: string | null;
  source?: string;
};

export async function submitLead(lead: Lead) {
  // Try Supabase if credentials are configured; skip silently if not.
  const supabaseUrl =
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_SUPABASE_URL) ||
    (typeof process !== "undefined" && process.env?.SUPABASE_URL);

  if (supabaseUrl) {
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.from("leads").insert({
        name: lead.name,
        phone: lead.phone,
        email: lead.email ?? null,
        interest: lead.interest ?? null,
        message: lead.message ?? null,
        source: lead.source ?? "landing",
      });
      if (error) console.warn("[Supabase] insert error:", error.message);
    } catch (err) {
      console.warn("[Supabase] unavailable, skipping:", err);
    }
  }

  // Google Sheet is the primary capture — always attempt it.
  await sendLeadToSheet({
    data: {
      name: lead.name,
      phone: lead.phone,
      age: lead.age ?? "",
      city: lead.city ?? "",
      email: lead.email ?? "",
      interest: lead.interest ?? "",
      source: lead.source ?? "landing",
    },
  });
}
