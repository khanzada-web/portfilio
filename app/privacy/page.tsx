import type { Metadata } from 'next'
import Link from 'next/link'
import { EditorialHeadline } from '@/app/components/ui/EditorialHeadline'
import { PageShell } from '@/app/components/ui/PageShell'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for mussawarhayat.site — how we collect, use, and protect personal data, cookies, analytics, and Google AdSense advertising.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <PageShell>
      <EditorialHeadline as="h1" index="/privacy" eyebrow="Legal" aside="Last updated: 5 September 2026" solid="Privacy" accent="Policy" />

      <div className="mt-16 max-w-3xl text-white/80 md:mt-24">
        <div className="space-y-12 font-sans text-sm leading-relaxed sm:text-base [&_h2]:mb-4 [&_h2]:border-t [&_h2]:border-white/10 [&_h2]:pt-8 [&_h2]:font-orbitron [&_h2]:text-base [&_h2]:font-black [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:text-white sm:[&_h2]:text-lg">
          <section>
            <h2 className="text-white text-lg font-semibold mb-3">1. Who we are</h2>
            <p>
              This website is operated by Mussawar Hayat (&quot;we&quot;, &quot;us&quot;), a full-stack and Web3 developer based in
              Pakistan, serving clients worldwide. Site: {' '}
              <Link href="/" className="text-neon underline decoration-neon/50 underline-offset-4 hover:decoration-neon">https://mussawarhayat.site</Link>.
              Contact: {' '}
              <a href="mailto:reply@mussawarhayat.site" className="text-neon underline decoration-neon/50 underline-offset-4 hover:decoration-neon">reply@mussawarhayat.site</a>.
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
                className="text-neon underline decoration-neon/50 underline-offset-4 hover:decoration-neon"
              >
                Google Ads Settings
              </a>
              {' '}and learn more at{' '}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon underline decoration-neon/50 underline-offset-4 hover:decoration-neon"
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
                className="text-neon underline decoration-neon/50 underline-offset-4 hover:decoration-neon"
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
              <a href="mailto:reply@mussawarhayat.site" className="text-neon underline decoration-neon/50 underline-offset-4 hover:decoration-neon">reply@mussawarhayat.site</a>.
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
              <a href="mailto:reply@mussawarhayat.site" className="text-neon underline decoration-neon/50 underline-offset-4 hover:decoration-neon">reply@mussawarhayat.site</a>
              {' '}· {' '}
              <Link href="/contact" className="text-neon underline decoration-neon/50 underline-offset-4 hover:decoration-neon">Contact page</Link>
            </p>
          </section>
        </div>
      </div>
    </PageShell>
  )
}
