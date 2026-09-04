import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Mussawar Hayat',
  description:
    'Terms of Service for mussawarhayat.site — acceptable use of the website, blog content, and professional services offered by Mussawar Hayat.',
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#060B16] text-white/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <p className="text-[#39FF14] text-xs font-orbitron uppercase tracking-widest mb-4">Legal</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white font-orbitron mb-4">Terms of Service</h1>
        <p className="text-white/50 text-sm mb-10">Last updated: 5 September 2026</p>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed font-sans">
          <section>
            <h2 className="text-white text-lg font-semibold mb-3">1. Agreement</h2>
            <p>
              By accessing https://mussawarhayat.site (the &quot;Site&quot;), you agree to these Terms of Service. If you do
              not agree, do not use the Site. The Site is operated by Mussawar Hayat (&quot;we&quot;, &quot;us&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">2. What the Site provides</h2>
            <p>
              The Site offers information about professional software development services, a portfolio, and a
              technical blog. Blog content is for general educational and informational purposes. It is not legal,
              financial, security, or professional advice tailored to your situation.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">3. Acceptable use</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Do not attempt to disrupt, probe, or compromise the Site or related infrastructure</li>
              <li>Do not use the contact form to spam, harass, or send unlawful content</li>
              <li>Do not scrape the Site in a way that overloads servers or violates robots rules</li>
              <li>Do not misrepresent affiliation with Mussawar Hayat or the Site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">4. Intellectual property</h2>
            <p>
              Unless otherwise stated, original content on the Site (text, branding, layout, and original code
              samples authored for the blog) is owned by Mussawar Hayat or used under licence. You may link to
              pages and quote short excerpts with attribution and a link back. You may not republish full articles
              or scrape the Site for commercial reuse without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">5. Third-party services and links</h2>
            <p>
              The Site may link to third-party sites, tools, documentation, or services (including advertising
              networks such as Google AdSense). We are not responsible for third-party content, policies, or
              availability. Your use of third-party services is governed by their terms.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">6. Professional services</h2>
            <p>
              Project work, consulting, and development services are governed by a separate written agreement or
              statement of work between you and Mussawar Hayat. These website Terms do not replace a client
              contract. Pricing and scope discussed on the Site are indicative unless confirmed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">7. Disclaimers</h2>
            <p>
              The Site and blog content are provided &quot;as is&quot; without warranties of any kind, express or implied,
              including fitness for a particular purpose. Technology changes quickly; code samples and guides may
              become outdated. Always test in a safe environment and verify against official documentation before
              production use.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">8. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, Mussawar Hayat is not liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits, data, or goodwill, arising from
              your use of the Site or reliance on blog content. Total liability for claims relating to the Site is
              limited to the greater of one hundred US dollars (USD 100) or the amount you paid us (if any) for
              Site access in the twelve months before the claim.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">9. Indemnity</h2>
            <p>
              You agree to indemnify and hold harmless Mussawar Hayat from claims arising from your misuse of the
              Site, violation of these Terms, or infringement of third-party rights through content you submit.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">10. Changes</h2>
            <p>
              We may update these Terms. The &quot;Last updated&quot; date will change when we do. Continued use of the Site
              after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">11. Governing law</h2>
            <p>
              These Terms are governed by the laws of Pakistan, without regard to conflict-of-law principles.
              Courts in Pakistan shall have exclusive jurisdiction, except where mandatory consumer protections in
              your country require otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">12. Contact</h2>
            <p>
              Questions about these Terms:{' '}
              <a href="mailto:zada38843@gmail.com" className="text-[#39FF14] hover:underline">zada38843@gmail.com</a>
              {' '}· {' '}
              <Link href="/contact" className="text-[#39FF14] hover:underline">Contact page</Link>
              {' '}· {' '}
              <Link href="/privacy" className="text-[#39FF14] hover:underline">Privacy Policy</Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
