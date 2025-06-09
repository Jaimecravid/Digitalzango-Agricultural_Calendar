import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Legal Section */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">
              ⚖️ Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-green-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-green-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-gray-600 hover:text-green-600">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-green-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">
              🌱 Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guias" className="text-gray-600 hover:text-green-600">
                  Farming Guides
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-green-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-600 hover:text-green-600">
                  Recommended Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">
              ❓ Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-gray-600 hover:text-green-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-green-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Digitalzango Brand */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">
              🚀 Digitalzango
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Empowering Angolan farmers with digital innovation and smart agricultural planning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-600">
                📘 Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600">
                📷 Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            © 2025 Digitalzango Agricultural Calendar. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Powered by Digitalzango - Digital Innovation for Agriculture
          </p>
        </div>
      </div>
    </footer>
  );
}