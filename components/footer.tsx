export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-700 py-8 mt-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Legal Column - Required for AdSense */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="hover:text-green-600">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-green-600">Terms & Conditions</a></li>
              <li><a href="/affiliate-disclosure" className="hover:text-green-600">Affiliate Disclosure</a></li>
            </ul>
          </div>
          
          {/* Support Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/help" className="hover:text-green-600">Help Center</a></li>
              <li><a href="/contact" className="hover:text-green-600">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-green-600">About</a></li>
              <li><a href="/blog" className="hover:text-green-600">Blog</a></li>
            </ul>
          </div>
          
          {/* Social Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-600">Facebook</a></li>
              <li><a href="#" className="hover:text-green-600">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Digitalzango Agricultural Calendar. All Rights Reserved.</p>
          <p className="mt-1">Powered by Digitalzango</p>
        </div>
      </div>
    </footer>
  );
}
