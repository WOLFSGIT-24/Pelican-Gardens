import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Pelican Gardens Jakkur",
  description: "Privacy policy for Pelican Gardens, Jakkur, Bangalore.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>

        <div className="space-y-6 text-sm sm:text-base font-body text-[var(--muted)] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">1. Information We Collect</h2>
            <p>When you interact with our website or submit an enquiry form, we may collect the following information:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>Email Address (if provided)</li>
              <li>Browsing behaviour and device information</li>
              <li>IP address and location data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">2. How We Use Your Information</h2>
            <p>Your information is collected solely for the purpose of:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Responding to your enquiry about Pelican Gardens</li>
              <li>Scheduling site visits and sharing project information</li>
              <li>Providing pricing, floor plans and brochure upon request</li>
              <li>Following up via phone, email or messaging services</li>
              <li>Improving our website and marketing effectiveness</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">3. Data Sharing</h2>
            <p>
              We do not sell, rent or share your personal information with unrelated third parties. Your data may be shared with:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>The developer&apos;s sales team for lead processing</li>
              <li>Authorised channel partners involved in the sales process</li>
              <li>Technology service providers for CRM and communication purposes</li>
            </ul>
            <p className="mt-3">
              All parties with access to your data are bound by confidentiality obligations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">4. Cookies & Tracking</h2>
            <p>
              This website uses cookies and tracking technologies (including Google Analytics, Meta Pixel and Google Tag Manager) to understand user behaviour and improve our services. You may disable cookies through your browser settings, but this may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">5. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information from unauthorised access, alteration or disclosure. However, no method of electronic transmission or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">6. Data Retention</h2>
            <p>
              Your personal data is retained for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Enquiry data is typically retained for a period of 24 months from the date of submission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at info@pelicangardens.in.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">8. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies independently.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of the website constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)] mb-3">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              <strong className="text-[var(--ink)]">Email:</strong> info@pelicangardens.in<br />
              <strong className="text-[var(--ink)]">Phone:</strong> +91 99999 99999<br />
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
