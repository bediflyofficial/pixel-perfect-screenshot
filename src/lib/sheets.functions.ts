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
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!url) return { ok: false as const };

    const payload = JSON.stringify({
      name: data.name,
      phone: data.phone,
      age: data.age ?? "",
      city: data.city ?? "",
      email: data.email ?? "",
      interest: data.interest ?? "",
      source: data.source ?? "landing",
    });

    // Apps Script runs doPost at /exec and then 302s to a googleusercontent
    // result page. The 302 itself means the script executed, so treat it as
    // success and don't follow (the result page rejects POST).
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: payload,
        redirect: "manual",
      });
      return { ok: res.ok || (res.status >= 300 && res.status < 400) };
    } catch {
      return { ok: false as const };
    }
  });
