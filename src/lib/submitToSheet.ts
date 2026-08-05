// ─────────────────────────────────────────────────────────────
//  Lead Submission via Webhook
//  Replace WEBHOOK_URL with your Make/Zapier/custom endpoint
// ─────────────────────────────────────────────────────────────
const WEBHOOK_URL = ""; // TODO: Add your webhook URL

export interface LeadData {
  name: string;
  phone: string;
  email: string;
  message?: string;
}

export async function submitToSheet(data: LeadData): Promise<void> {
  if (!WEBHOOK_URL) {
    console.warn("[submitToSheet] No webhook URL configured.");
    return;
  }

  const digits = data.phone.replace(/\D/g, "");
  const phone =
    digits.startsWith("91") && digits.length === 12
      ? "+" + digits
      : digits.length === 10
      ? "+91" + digits
      : "+" + digits;

  const date = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const payload = {
    name: data.name.trim(),
    phone,
    email: data.email.trim(),
    date,
    message: (data.message || "").trim(),
  };

  await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}
