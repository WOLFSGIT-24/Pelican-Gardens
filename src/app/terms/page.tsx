import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Pelican Gardens Jakkur",
  description: "Terms and conditions for Pelican Gardens, Jakkur, Bangalore.",
};

export default function TermsPage() {
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
          Terms & Conditions
        </h1>

        <div className="space-y-6 text-sm sm:text-base font-body text-[var(--muted)] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">1. Introduction</h2>
            <p>
              By accessing and using this website for Pelican Gardens, Jakkur, Bangalore, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">2. Project Information</h2>
            <p>
              The information presented on this website regarding Pelican Gardens — including but not limited to prices (₹10.2 Cr to ₹20.5 Cr), area (~4,450 sq.ft.), configurations (4 BHK + Home Office), amenities, specifications and layouts — is indicative and subject to change without prior notice.
            </p>
            <p className="mt-3">
              The developer reserves the right to modify, alter or change any aspect of the project including but not limited to specifications, features, dimensions, amenities and design at any time without prior notification.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">3. Not a Legal Offering</h2>
            <p>
              This website does not constitute a legal offering, agreement to sell, or invitation to offer. It is for informational purposes only. For binding terms, refer to the official Agreement for Sale.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">4. Renderings & Visuals</h2>
            <p>
              All images, renderings, computer-generated visuals, floor plans and artistic impressions on this website are representational only and may not reflect the actual finished product. Furniture, fixtures, furnishings and decorative items shown are not part of the standard offering.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">5. Views & Surroundings</h2>
            <p>
              References to lake views are based on the current project design and orientation. Views may vary by floor, unit and surrounding developments. The developer does not guarantee any specific view from any specific unit.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">6. Pricing</h2>
            <p>
              All prices mentioned are subject to change. The investment range of ₹10.2 Cr to ₹20.5 Cr is indicative. Final pricing will depend on floor plan, floor level, facing and applicable charges including but not limited to registration, stamp duty, GST, maintenance deposits and other statutory charges.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">7. Area Disclaimer</h2>
            <p>
              The area mentioned (~4,450 sq.ft.) is approximate and may vary based on the selected floor plan. Actual carpet area, built-up area and super built-up area will be as specified in the official agreement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">8. Limitation of Liability</h2>
            <p>
              The developer, its agents, partners and representatives shall not be liable for any loss, damage or claim arising from reliance on information presented on this website. Users are advised to independently verify all information before making any purchase decision.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">9. Intellectual Property</h2>
            <p>
              All content on this website including text, graphics, logos, images and software is the property of the developer or its licensors and is protected by copyright and intellectual property laws. Unauthorised use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">10. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">11. Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms and Conditions at any time. Continued use of the website constitutes acceptance of the revised terms.
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
