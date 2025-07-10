import Link from "next/link"
import { Sprout } from "lucide-react"

export default function AffiliateDisclosure() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Affiliate Disclosure</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Affiliate Relationships</h2>
            <p className="text-gray-700 mb-4">
              Calendário Agrícola para Angola participates in various affiliate marketing programs, which means we may
              earn commissions from qualifying purchases made through links on our website. This disclosure is made in
              accordance with the Federal Trade Commission's 16 CFR, Part 255: "Guides Concerning the Use of
              Endorsements and Testimonials in Advertising."
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What This Means for You</h2>
            <p className="text-gray-700 mb-4">
              When you click on certain links on our website and make a purchase, we may receive a small commission at
              no additional cost to you. These affiliate relationships help support our website and allow us to continue
              providing valuable agricultural content and tools to farmers in Angola.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to You</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                <strong>Honest Recommendations:</strong> We only recommend products and services that we believe will be
                beneficial to our users.
              </li>
              <li>
                <strong>Transparency:</strong> We clearly identify affiliate links and sponsored content when present.
              </li>
              <li>
                <strong>Independence:</strong> Our editorial content is not influenced by affiliate relationships. We
                maintain editorial independence in our reviews and recommendations.
              </li>
              <li>
                <strong>User Focus:</strong> Our primary goal is to provide valuable information to help farmers make
                informed decisions.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Affiliate Programs</h2>
            <p className="text-gray-700 mb-4">We may participate in affiliate programs for:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Agricultural equipment and tools</li>
              <li>Seeds and fertilizers</li>
              <li>Weather monitoring devices</li>
              <li>Agricultural software and apps</li>
              <li>Educational courses and resources</li>
              <li>Books and publications related to farming</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Google AdSense</h2>
            <p className="text-gray-700 mb-4">
              We also display advertisements through Google AdSense. These ads may be based on your browsing history and
              interests. Google may use cookies to serve relevant advertisements to you based on your visits to our site
              and other sites on the internet.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Choices</h2>
            <p className="text-gray-700 mb-4">
              You are under no obligation to purchase any products or services through our affiliate links. You can
              always search for products independently or visit the company's website directly. The choice is entirely
              yours.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Questions and Contact</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about our affiliate relationships or this disclosure, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: affiliates@calendarioagricola.ao
              <br />
              Address: Luanda, Angola
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We may update this affiliate disclosure from time to time to reflect changes in our affiliate
              relationships or legal requirements. Please check this page periodically for updates.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
