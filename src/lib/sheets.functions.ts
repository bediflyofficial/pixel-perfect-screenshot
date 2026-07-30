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

    const payload = JSON.stringify({
      name: data.name,
      phone: data.phone,
      email: data.email ?? "",
      interest: data.interest ?? "",
      message: data.message ?? "",
      source: data.source ?? "landing",
    });

    // Apps Script /exec answers with a 302 to googleusercontent; fetch would
    // downgrade the redirect to GET, so re-POST to the Location manually.
    const post = (target: string, redirect: RequestRedirect) =>
      fetch(target, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: payload,
        redirect,
      });

    try {
      let res = await post(url, "manual");
      const location = res.headers.get("location");
      if (res.status >= 300 && res.status < 400 && location) {
        res = await post(location, "follow");
      }
      return { ok: res.ok };
    } catch {
      return { ok: false as const };
    }
  });
