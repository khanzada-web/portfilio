import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Mussawar Hayat',
  description:
    'Privacy Policy for mussawarhayat.site — how we collect, use, and protect personal data, cookies, analytics, and Google AdSense advertising.',
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#060B16] text-white/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <p className="text-[#39FF14] text-xs font-orbitron uppercase tracking-widest mb-4">Legal</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white font-orbitron mb-4">Privacy Policy</h1>
        <p className="text-white/50 text-sm mb-10">Last updated: 5 September 2026</p>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed font-sans">
          <section>
            <h2 className="text-white text-lg font-semibold mb-3">1. Who we are</h2>
            <p>
              This website is operated by Mussawar Hayat (&quot;we&quot;, &quot;us&quot;), a full-stack and Web3 developer based in
              Pakistan, serving clients worldwide. Site: {' '}
              <Link href="/" className="text-[#39FF14] hover:underline">https://mussawarhayat.site</Link>.
              Contact: {' '}
              <a href="mailto:zada38843@gmail.com" className="text-[#39FF14] hover:underline">zada38843@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">2. What this policy covers</h2>
            <p>
              This policy explains what information we collect when you visit the site, use the contact form,
              subscribe to updates, or view pages that display advertising. It also explains cookies, analytics,
              and Google AdSense.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">3. Information we collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-white/90">Contact form data</strong> — name, email address, and message content
                you voluntarily submit.
              </li>
              <li>
                <strong className="text-white/90">Newsletter or subscription data</strong> — email address if you opt in.
              </li>
              <li>
                <strong className="text-white/90">Technical and usage data</strong> — IP address, browser type, device
                type, pages viewed, and approximate location derived from IP, typically via hosting and analytics logs.
              </li>
              <li>
                <strong className="text-white/90">Cookie and advertising data</strong> — identifiers used by Google
                AdSense and related partners to serve and measure ads (see section 6).
              </li>
            </ul>
            <p className="mt-3">
              We do not intentionally collect special categories of personal data (for example health or biometric data)
              through this site.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">4. How we use information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Respond to enquiries and project requests</li>
              <li>Operate, secure, and improve the website</li>
              <li>Send optional updates if you subscribed</li>
              <li>Measure traffic and content performance</li>
              <li>Display advertising through Google AdSense where enabled</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">5. Legal bases (where GDPR applies)</h2>
            <p>
              Depending on your location, we process data under: consent (cookies/marketing where required),
              contract or pre-contract steps (responding to project enquiries), legitimate interests (site security,
              basic analytics, fraud prevention), and legal obligation where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">6. Cookies, analytics, and Google AdSense</h2>
            <p className="mb-3">
              This site may use cookies and similar technologies for essential operation, analytics, and advertising.
            </p>
            <p className="mb-3">
              <strong className="text-white/90">Google AdSense.</strong> We use Google AdSense to display ads.
              Google and its partners may use cookies to serve ads based on prior visits to this and other sites.
              You can manage ad personalisation via{' '}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#39FF14] hover:underline"
              >
                Google Ads Settings
              </a>
              {' '}and learn more at{' '}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#39FF14] hover:underline"
              >
                How Google uses data when you use partner sites
              </a>
              .
            </p>
            <p>
              Third-party vendors, including Google, may use cookies to serve ads based on a user&apos;s prior visits
              to this website or other websites. Users may opt out of personalised advertising by visiting{' '}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#39FF14] hover:underline"
              >
                aboutads.info/choices
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">7. Sharing of information</h2>
            <p>
              We do not sell your personal information. We share data only with service providers needed to run the
              site (hosting such as Vercel, email delivery, analytics, and Google advertising services), or when
              required by law. Those providers process data under their own terms and security controls.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">8. Retention</h2>
            <p>
              Contact messages are retained as long as needed to handle your request and for legitimate business
              records. Analytics and logs are retained according to the tools&apos; defaults or our configured
              retention windows. You may request deletion of contact data where applicable (see section 10).
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">9. Security</h2>
            <p>
              We use HTTPS and standard hosting security practices. No method of transmission or storage is
              completely secure. Do not send passwords or private keys through the public contact form.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">10. Your rights</h2>
            <p className="mb-3">
              Depending on your location, you may have rights to access, correct, delete, or restrict processing of
              your personal data, and to object or withdraw consent. To exercise these rights, email{' '}
              <a href="mailto:zada38843@gmail.com" className="text-[#39FF14] hover:underline">zada38843@gmail.com</a>.
            </p>
            <p>
              If you are in the EEA/UK, you may also lodge a complaint with your local supervisory authority.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">11. Children</h2>
            <p>
              This site is aimed at professionals and is not directed at children under 16. We do not knowingly
              collect personal data from children.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">12. Changes</h2>
            <p>
              We may update this policy from time to time. The &quot;Last updated&quot; date at the top will change when we do.
              Continued use of the site after changes means you acknowledge the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">13. Contact</h2>
            <p>
              Privacy questions: {' '}
              <a href="mailto:zada38843@gmail.com" className="text-[#39FF14] hover:underline">zada38843@gmail.com</a>
              {' '}· {' '}
              <Link href="/contact" className="text-[#39FF14] hover:underline">Contact page</Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
