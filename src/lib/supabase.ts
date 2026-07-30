import { supabase } from "@/integrations/supabase/client";

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
}
