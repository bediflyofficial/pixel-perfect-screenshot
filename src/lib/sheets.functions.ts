import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(1).max(200),
  phone: z.string().min(1).max(50),
  email: z.string().max(200).optional().nullable(),
  interest: z.string().max(200).optional().nullable(),
  message: z.string().max(2000).optional().nullable(),
  source: z.string().max(100).optional().nullable(),
});

export const sendLeadToSheet = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!url) return { ok: false as const };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email ?? "",
          interest: data.interest ?? "",
          message: data.message ?? "",
          source: data.source ?? "landing",
        }),
      });
      return { ok: res.ok };
    } catch {
      return { ok: false as const };
    }
  });
