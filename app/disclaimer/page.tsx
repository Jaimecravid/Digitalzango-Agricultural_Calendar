import Link from "next/link"
import { Sprout } from "lucide-react"

export default function Disclaimer() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Disclaimer</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Information</h2>
            <p className="text-gray-700 mb-4">
              The information provided on the Calendário Agrícola para Angola website and mobile application is for
              general informational and educational purposes only. While we strive to provide accurate and up-to-date
              information, we make no representations or warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, suitability, or availability of the information, products, services,
              or related graphics contained on the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agricultural Advice Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The agricultural information, crop calendars, planting schedules, and farming advice provided on this
              platform are general guidelines based on typical conditions in Angola. However, agricultural practices
              should always be adapted to local conditions, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Specific soil conditions</li>
              <li>Local climate variations</li>
              <li>Water availability</li>
              <li>Local regulations and restrictions</li>
              <li>Market conditions</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>
                Always consult with local agricultural experts, extension officers, and relevant authorities before
                making significant farming decisions.
              </strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Weather Information Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              Weather forecasts and meteorological data provided through our service are obtained from third-party
              sources and are subject to change. Weather predictions are inherently uncertain and should not be the sole
              basis for critical farming decisions. We recommend:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Consulting multiple weather sources</li>
              <li>Monitoring local conditions</li>
              <li>Having contingency plans for unexpected weather</li>
              <li>Following guidance from local meteorological services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pest and Disease Information</h2>
            <p className="text-gray-700 mb-4">
              Information about pests, diseases, and their treatments is provided for educational purposes only. Before
              applying any pest control measures or treatments:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Consult with agricultural extension officers</li>
              <li>Verify the identification of pests or diseases</li>
              <li>Follow local regulations regarding pesticide use</li>
              <li>Consider environmental and safety implications</li>
              <li>Test treatments on a small scale first</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Financial and Economic Information</h2>
            <p className="text-gray-700 mb-4">
              Any financial information, cost estimates, or economic projections provided are for general guidance only
              and may not reflect current market conditions. Actual costs and returns may vary significantly based on:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Local market prices</li>
              <li>Input costs</li>
              <li>Transportation expenses</li>
              <li>Labor costs</li>
              <li>Economic conditions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event will Calendário Agrícola para Angola be liable for any loss or damage including, without
              limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Crop failures or reduced yields</li>
              <li>Financial losses</li>
              <li>Equipment damage</li>
              <li>Business interruption</li>
              <li>Use of or reliance on information provided</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">External Links Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to external websites that are not provided or maintained by us. We do not
              guarantee the accuracy, relevance, timeliness, or completeness of any information on these external
              websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Advice</h2>
            <p className="text-gray-700 mb-4">
              The information on this website is not intended to replace professional agricultural, veterinary,
              financial, or legal advice. Always seek the advice of qualified professionals regarding specific
              situations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates and Changes</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon
              posting on the website. Your continued use of the website after any changes constitutes acceptance of the
              new disclaimer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">If you have any questions about this disclaimer, please contact us at:</p>
            <p className="text-gray-700">
              Email: info@calendarioagricola.ao
              <br />
              Address: Luanda, Angola
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
