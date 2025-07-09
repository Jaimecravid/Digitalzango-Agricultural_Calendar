import Link from "next/link"
import { Sprout } from "lucide-react"

export default function CookiePolicy() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are stored on your computer or mobile device when you visit our website.
              They help us provide you with a better experience by remembering your preferences and understanding how
              you use our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
              <p className="text-gray-700 mb-2">
                These cookies are necessary for the website to function properly. They enable basic functions like page
                navigation and access to secure areas of the website.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Session management</li>
                <li>Security features</li>
                <li>Language preferences</li>
                <li>Region selection</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
              <p className="text-gray-700 mb-2">
                These cookies help us understand how visitors interact with our website by collecting and reporting
                information anonymously.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Google Analytics</li>
                <li>Page view statistics</li>
                <li>User behavior analysis</li>
                <li>Performance monitoring</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advertising Cookies</h3>
              <p className="text-gray-700 mb-2">
                These cookies are used to deliver advertisements that are relevant to you and your interests.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Google AdSense</li>
                <li>Personalized advertisements</li>
                <li>Ad performance tracking</li>
                <li>Remarketing campaigns</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Cookies</h3>
              <p className="text-gray-700 mb-2">These cookies enable enhanced functionality and personalization.</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>User preferences</li>
                <li>Customized content</li>
                <li>Social media integration</li>
                <li>Chat functionality</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              We may also use third-party services that set cookies on your device. These include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                <strong>Google Analytics:</strong> For website analytics and performance monitoring
              </li>
              <li>
                <strong>Google AdSense:</strong> For displaying relevant advertisements
              </li>
              <li>
                <strong>Social Media Platforms:</strong> For social sharing functionality
              </li>
              <li>
                <strong>Weather Services:</strong> For providing accurate weather data
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-gray-700 mb-4">You have several options for managing cookies:</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
              <p className="text-gray-700 mb-2">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Block all cookies</li>
                <li>Block third-party cookies</li>
                <li>Delete existing cookies</li>
                <li>Receive notifications when cookies are set</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Opt-Out Links</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Analytics Opt-out
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/settings/ads"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Ads Settings
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.aboutads.info/choices/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Digital Advertising Alliance Opt-out
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Impact of Disabling Cookies</h2>
            <p className="text-gray-700 mb-4">
              Please note that disabling certain cookies may affect the functionality of our website:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>You may need to re-enter your preferences each visit</li>
              <li>Some features may not work properly</li>
              <li>Personalized content may not be available</li>
              <li>Analytics data may be incomplete</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. Please check this page periodically for updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: cookies@calendarioagricola.ao
              <br />
              Address: Luanda, Angola
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
