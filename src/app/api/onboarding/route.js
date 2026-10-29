import { Resend } from "resend";
import { NextResponse } from "next/server";

const MAX_FIELD_LENGTH = 2000;

function sanitize(value) {
  return typeof value === "string" ? value.slice(0, MAX_FIELD_LENGTH) : "";
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = sanitize(body.name).trim();
  const email = sanitize(body.email).trim();
  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
  }

  const estate_type = sanitize(body.estate_type);
  const estate_location = sanitize(body.estate_location);
  const primary_goal = sanitize(body.primary_goal);
  const services_needed = Array.isArray(body.services_needed)
    ? body.services_needed.map(sanitize).filter(Boolean)
    : [];
  const timeline = sanitize(body.timeline);
  const phone = sanitize(body.phone);
  const details = sanitize(body.details);

  const apiKey = process.env.RESEND_API_KEY;
  // Comma-separated so this can fan out to more than one inbox, e.g.
  // "owner@gmail.com,advisor@prestigeestatemanagement.com".
  const ownerEmails = (process.env.OWNER_NOTIFICATION_EMAIL || "")
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);

  if (!apiKey || ownerEmails.length === 0) {
    // Don't tell the submitter anything is broken server-side -- but don't
    // silently pretend it worked either. Log loudly so this is visible in
    // Vercel's logs, since a missing env var here means every lead since
    // deploy has gone nowhere.
    console.error(
      "onboarding: RESEND_API_KEY / OWNER_NOTIFICATION_EMAIL not set -- cannot deliver this submission.",
      { name, email }
    );
    return NextResponse.json({ error: "Submission is temporarily unavailable" }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const fromAddress = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "(not provided)"],
    ["Estate type", estate_type],
    ["Location", estate_location],
    ["Primary goal", primary_goal],
    ["Services considered", services_needed.join(", ")],
    ["Timeline", timeline],
    ["Additional details", details || "(none)"],
  ];

  const html = `
    <h2>New onboarding consultation request</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:600;vertical-align:top">${escapeHtml(label)}</td><td>${escapeHtml(
              value
            ).replace(/\n/g, "<br/>")}</td></tr>`
        )
        .join("")}
    </table>
    <p>Reply directly to this email to reach ${escapeHtml(name)} at ${escapeHtml(email)}.</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: `Prestige Estate Management <${fromAddress}>`,
      to: ownerEmails,
      replyTo: email,
      subject: `New consultation request from ${name}`,
      html,
    });

    if (error) {
      console.error("onboarding: Resend API returned an error", error);
      return NextResponse.json({ error: "Unable to send your request" }, { status: 502 });
    }
  } catch (err) {
    console.error("onboarding: failed to send notification email", err);
    return NextResponse.json({ error: "Unable to send your request" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
