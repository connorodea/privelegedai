/**
 * Privileged — inquiry intake Worker.
 * Receives a POST from the marketing-site request-access form, validates it,
 * and emails the inquiry to the ops inbox via Resend. No inquiry content is
 * persisted; the Worker holds only a scoped sending-only Resend key as a secret.
 */

interface Env {
  RESEND_KEY: string;
  INQUIRY_TO: string;
  INQUIRY_FROM: string;
  ALLOWED_ORIGINS: string;
}

interface Inquiry {
  name?: string;
  email?: string;
  org?: string;
  role?: string;
  useCase?: string;
  workload?: string;
  message?: string;
  website?: string; // honeypot — must stay empty
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function corsHeaders(origin: string | null, allowed: string[]): Record<string, string> {
  const ok = origin && allowed.includes(origin) ? origin : allowed[0];
  return {
    "Access-Control-Allow-Origin": ok,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const allowed = (env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim());
    const origin = request.headers.get("Origin");
    const cors = corsHeaders(origin, allowed);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: cors });
    }

    let body: Inquiry;
    try {
      body = (await request.json()) as Inquiry;
    } catch {
      return json({ ok: false, error: "Invalid JSON" }, 400, cors);
    }

    // Honeypot: silently accept and drop bots.
    if (body.website && body.website.trim() !== "") {
      return json({ ok: true }, 200, cors);
    }

    const email = (body.email || "").trim();
    if (!EMAIL_RE.test(email)) {
      return json({ ok: false, error: "A valid work email is required." }, 400, cors);
    }

    const name = (body.name || "").trim().slice(0, 200) || "(no name)";
    const org = (body.org || "").trim().slice(0, 200) || "(no organization)";
    const role = (body.role || "").trim().slice(0, 200);
    const useCase = (body.useCase || "").trim().slice(0, 200);
    const workload = (body.workload || "").trim().slice(0, 200);
    const message = (body.message || "").trim().slice(0, 5000);

    const rows: [string, string][] = [
      ["Name", name],
      ["Work email", email],
      ["Organization", org],
      ["Role", role],
      ["Use case", useCase],
      ["Estimated workload", workload],
    ];

    const textLines = rows
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .concat(message ? ["", "Message:", message] : []);

    const htmlRows = rows
      .filter(([, v]) => v)
      .map(
        ([k, v]) =>
          `<tr><td style="padding:4px 12px 4px 0;color:#666;white-space:nowrap">${esc(k)}</td><td style="padding:4px 0;color:#111">${esc(v)}</td></tr>`,
      )
      .join("");
    const html = `<div style="font:14px/1.5 -apple-system,Segoe UI,sans-serif">
      <h2 style="margin:0 0 12px;font-size:16px">New Privileged inquiry</h2>
      <table style="border-collapse:collapse">${htmlRows}</table>
      ${message ? `<p style="margin:16px 0 4px;color:#666">Message</p><div style="white-space:pre-wrap;color:#111">${esc(message)}</div>` : ""}
    </div>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.INQUIRY_FROM,
        to: [env.INQUIRY_TO],
        reply_to: email,
        subject: `New inquiry — ${org !== "(no organization)" ? org : name}`,
        text: textLines.join("\n"),
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.log("resend error", res.status, detail.slice(0, 300));
      return json({ ok: false, error: "Could not send. Please email us directly." }, 502, cors);
    }

    return json({ ok: true }, 200, cors);
  },
};

function json(data: unknown, status: number, cors: Record<string, string>): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...cors },
  });
}
