import Link from "next/link";

export const metadata = {
  title: "Authorised Partner | Pelican Gardens Jakkur",
  description: "Authorised channel partner information for Pelican Gardens, Jakkur, Bangalore.",
};

export default function AuthorisedPartnerPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-bg)]">
      {/* Header */}
      <header className="w-full bg-white border-b border-[var(--border)] py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/image-removebg-preview.png" alt="Pelican Gardens" className="h-10 sm:h-12 w-auto" />
          </Link>
          <Link href="/" className="text-sm font-body font-medium text-[var(--accent)] hover:text-[var(--ink)] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="font-heading text-3xl sm:text-4xl text-[var(--ink)] font-light mb-8">
          Authorised Partner
        </h1>

        <div className="space-y-6 text-sm sm:text-base font-body text-[var(--muted)] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">About This Website</h2>
            <p>
              This website is operated and managed by an authorised channel partner of Pelican Gardens, Jakkur, Bangalore. We are officially engaged by the developer to market and facilitate sales for this project.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">Our Role</h2>
            <p>As an authorised partner, we provide:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Accurate and up-to-date project information</li>
              <li>Site visit scheduling and coordination</li>
              <li>Floor plan and pricing assistance</li>
              <li>End-to-end booking support</li>
              <li>Post-booking coordination with the developer</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">Legitimacy & Trust</h2>
            <p>
              We are a recognised and authorised sales partner. All information shared on this website is sourced directly from the developer. We operate under the guidelines and supervision of the developer&apos;s sales team.
            </p>
            <p className="mt-3">
              We do not independently modify project specifications, pricing or any material details. All representations are aligned with the developer&apos;s official communications.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">Project Details</h2>
            <div className="mt-3 p-5 rounded-2xl bg-white border border-[var(--border)]">
              <ul className="space-y-2">
                <li><strong className="text-[var(--ink)]">Project:</strong> Pelican Gardens</li>
                <li><strong className="text-[var(--ink)]">Location:</strong> Jakkur, North Bangalore, Karnataka</li>
                <li><strong className="text-[var(--ink)]">Configuration:</strong> 4 BHK + Home Office (~4,450 sq.ft.)</li>
                <li><strong className="text-[var(--ink)]">Total Residences:</strong> 133</li>
                <li><strong className="text-[var(--ink)]">Development Area:</strong> 4.81 Acres</li>
                <li><strong className="text-[var(--ink)]">Towers:</strong> 4 Wings, 19 Floors</li>
                <li><strong className="text-[var(--ink)]">Investment Range:</strong> ₹10.2 Cr – ₹20.5 Cr</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">Disclaimer</h2>
            <p>
              While we strive to keep all information accurate and current, the final terms of sale, specifications and pricing are determined solely by the developer. Buyers are advised to verify all details with the developer before making a purchase decision.
            </p>
            <p className="mt-3">
              This website is not the developer&apos;s official website. It is a marketing initiative by an authorised channel partner to facilitate lead generation and sales support for Pelican Gardens.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">Contact Us</h2>
            <p>
              For any queries regarding our partnership or the project, please reach out:
            </p>
            <p className="mt-2">
              <strong className="text-[var(--ink)]">Email:</strong> preciousfortune11426@gmail.com<br />
              <strong className="text-[var(--ink)]">Phone:</strong> +91 84040 25050<br />
              <strong className="text-[var(--ink)]">Location:</strong> Jakkur, North Bangalore, Karnataka
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-xs font-body text-[var(--muted)]">
            Last updated: August 2026
          </p>
        </div>
      </div>
    </main>
  );
}
