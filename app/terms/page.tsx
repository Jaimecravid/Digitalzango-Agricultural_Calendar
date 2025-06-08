import Link from "next/link"
import { Sprout } from "lucide-react"

export default function TermsAndConditions() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using the Calendário Agrícola para Angola website and mobile application (collectively,
              the "Service"), you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              Calendário Agrícola para Angola provides agricultural planning tools, weather forecasts, crop calendars,
              and farming resources specifically designed for farmers in Angola. The Service includes but is not limited
              to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Agricultural calendar and crop planning tools</li>
              <li>Weather forecasts and alerts</li>
              <li>Pest and disease information</li>
              <li>Resource management tools</li>
              <li>Community features for farmer collaboration</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">Users are responsible for:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Providing accurate information when using the Service</li>
              <li>Using the Service in compliance with applicable laws</li>
              <li>Respecting the intellectual property rights of others</li>
              <li>Not using the Service for any unlawful or prohibited activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-4">
              The information provided through our Service is for educational and informational purposes only. While we
              strive to provide accurate and up-to-date information, we make no warranties or representations about the
              accuracy, completeness, or reliability of any information provided.
            </p>
            <p className="text-gray-700 mb-4">
              Agricultural decisions should always be made in consultation with local agricultural experts and
              authorities. Weather forecasts and agricultural advice are provided as general guidance and should not be
              the sole basis for farming decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall Calendário Agrícola para Angola be liable for any direct, indirect, incidental, special,
              or consequential damages arising out of or in connection with your use of the Service, including but not
              limited to crop losses, financial losses, or business interruption.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
              Service, to understand our practices regarding the collection, use, and disclosure of your personal
              information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive
              property of Calendário Agrícola para Angola and its licensors. The Service is protected by copyright,
              trademark, and other laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modifications to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try
              to provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: legal@calendarioagricola.ao
              <br />
              Address: Luanda, Angola
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
