import { supabase } from "@/integrations/supabase/client";
import { sendLeadToSheet } from "@/lib/sheets.functions";


export type Lead = {
  name: string;
  phone: string;
  email?: string | null;
  interest?: string | null;
  message?: string | null;
  source?: string;
};

export async function submitLead(lead: Lead) {
  const { error } = await supabase.from("leads").insert({
    name: lead.name,
    phone: lead.phone,
    email: lead.email ?? null,
    interest: lead.interest ?? null,
    message: lead.message ?? null,
    source: lead.source ?? "landing",
  });
  if (error) throw error;

  // Mirror the lead into the Google Sheet (non-blocking failure)
  try {
    await sendLeadToSheet({
      data: {
        name: lead.name,
        phone: lead.phone,
        email: lead.email ?? "",
        interest: lead.interest ?? "",
        message: lead.message ?? "",
        source: lead.source ?? "landing",
      },
    });
  } catch {
    // ignore sheet errors so the user still sees success
  }
}
