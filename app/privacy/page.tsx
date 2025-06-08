import Link from "next/link"
import { Sprout } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-green-600 p-2 rounded-lg">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Calendário Agrícola de Angola</h1>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us, such as when you create an account, use our services,
              or contact us for support. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Name and contact information</li>
              <li>Farm location and agricultural preferences</li>
              <li>Usage data and preferences within the application</li>
              <li>Communications with our support team</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Personalize your experience with region-specific content</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze usage patterns to improve our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent, except as described in this policy. We may share information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>With your consent or at your direction</li>
              <li>With service providers who assist us in operating our website</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and the safety of our users</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to collect and use personal information about you. This
              includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand how you use our site</li>
              <li>Advertising cookies to show relevant advertisements</li>
              <li>Preference cookies to remember your settings</li>
            </ul>
            <p className="text-gray-700 mb-4">
              You can control cookies through your browser settings, but disabling certain cookies may affect the
              functionality of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Google AdSense and Advertising</h2>
            <p className="text-gray-700 mb-4">
              We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads
              based on your prior visits to our website or other websites. You may opt out of personalized advertising
              by visiting Google's Ads Settings.
            </p>
            <p className="text-gray-700 mb-4">
              Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your
              website or other websites. Users may opt out of Google's use of cookies by visiting the Google advertising
              opt-out page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
              100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Control cookie preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal
              information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: privacy@calendarioagricola.ao
              <br />
              Address: Luanda, Angola
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
