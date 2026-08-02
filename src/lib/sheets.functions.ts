import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(1).max(200),
  phone: z.string().min(1).max(50),
  age: z.string().max(10).optional().nullable(),
  city: z.string().max(100).optional().nullable(),
  email: z.string().max(200).optional().nullable(),
  interest: z.string().max(200).optional().nullable(),
  source: z.string().max(100).optional().nullable(),
});

export const sendLeadToSheet = createServerFn({ method: "POST" })
  .validator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!url) {
      console.error("[Sheets] GOOGLE_SHEETS_WEBHOOK_URL is not set");
      throw new Error("Google Sheets webhook is not configured.");
    }

    const payload = JSON.stringify({
      name: data.name,
      phone: data.phone,
      age: data.age ?? "",
      city: data.city ?? "",
      email: data.email ?? "",
      interest: data.interest ?? "",
      source: data.source ?? "landing",
    });

    // Google Apps Script /exec responds with a 302 redirect to a result page.
    // Using redirect:"manual" treats the 302 as success without following it
    // (following a POST redirect causes a 405 on the result page).
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: payload,
      redirect: "manual",
    });

    // 0 = opaque redirect (fetch with redirect:manual returns type "opaqueredirect")
    // 302/303 = Google Apps Script redirect = script executed successfully
    const ok = res.ok || res.status === 0 || (res.status >= 300 && res.status < 400);
    if (!ok) {
      console.error("[Sheets] Webhook returned unexpected status", res.status);
      throw new Error(`Sheet webhook failed with status ${res.status}. Check your Apps Script deployment.`);
    }

    console.log("[Sheets] Lead sent to Google Sheet, status:", res.status);
    return { ok: true as const };
  });
