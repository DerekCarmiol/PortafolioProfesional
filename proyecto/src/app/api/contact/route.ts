import { emailPattern, inRange, limits } from "../../../lib/contact";
import { contactReady } from "../../../lib/site";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? requestUrl.host;
  const protocol = request.headers.get("x-forwarded-proto") ?? requestUrl.protocol.slice(0, -1);
  if (request.headers.get("origin") !== `${protocol}://${host}`) {
    return Response.json({ error: "origin" }, { status: 403 });
  }

  const text = await request.text();
  if (text.length > 12_000) {
    return Response.json({ error: "payload" }, { status: 413 });
  }

  let input: unknown;
  try {
    input = JSON.parse(text);
  } catch {
    return Response.json({ error: "payload" }, { status: 400 });
  }
  if (!input || typeof input !== "object") {
    return Response.json({ error: "payload" }, { status: 400 });
  }

  const fields = input as Record<string, unknown>;
  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const message = typeof fields.message === "string" ? fields.message.trim() : "";

  if (fields.website) {
    return Response.json({ error: "payload" }, { status: 400 });
  }
  if (!inRange(name, limits.name) || email.length > 254 || !emailPattern.test(email) || !inRange(message, limits.message)) {
    return Response.json({ error: "validation" }, { status: 400 });
  }
  if (!contactReady()) {
    return Response.json({ error: "unavailable" }, { status: 503 });
  }

  try {
    const delivery = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      signal: AbortSignal.timeout(8_000),
      body: JSON.stringify({
        from: process.env.CONTACT_FROM,
        to: [process.env.CONTACT_TO],
        reply_to: email,
        subject: "Nuevo mensaje del portafolio",
        text: `Nombre: ${name}\nCorreo: ${email}\n\n${message}`,
      }),
    });

    if (delivery.ok) {
      const result = await delivery.json();
      if (typeof result.id === "string") return Response.json({ ok: true });
    }
  } catch {
    // Report provider errors to the form without sending private details to the browser.
  }

  return Response.json({ error: "delivery" }, { status: 502 });
}
