// ─────────────────────────────────────────────────────────────
//  Lead Submission via Webhook (Make.com)
// ─────────────────────────────────────────────────────────────
const WEBHOOK_URL = "https://hook.us1.make.com/t45ytgy3n7e31iwuvvsmwsm443olvoid";

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

  // Use text/plain content type to avoid CORS preflight
  // Make.com still parses JSON from the body
  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload),
    });
  } catch {
    // Fallback: submit via hidden iframe to bypass CORS entirely
    const iframe = document.createElement("iframe");
    iframe.name = "lead_submit_frame";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = WEBHOOK_URL;
    form.target = "lead_submit_frame";

    Object.entries(payload).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    setTimeout(() => {
      document.body.removeChild(form);
      document.body.removeChild(iframe);
    }, 3000);
  }
}
