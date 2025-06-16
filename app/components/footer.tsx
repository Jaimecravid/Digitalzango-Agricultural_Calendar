"use client";
import { useLanguage } from "../contexts/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-gray-100 text-gray-700 py-8 mt-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Legal Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t("legal")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="hover:text-green-600">
                  {t("privacyPolicy")}
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-green-600">
                  {t("termsAndConditions")}
                </a>
              </li>
              <li>
                <a href="/affiliate-disclosure" className="hover:text-green-600">
                  {t("affiliateDisclosure")}
                </a>
              </li>
            </ul>
          </div>
          {/* Support Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t("support")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/help" className="hover:text-green-600">
                  {t("helpCenter")}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-600">
                  {t("contactUs")}
                </a>
              </li>
            </ul>
          </div>
          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t("company")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-green-600">
                  {t("about")}
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-green-600">
                  {t("blog")}
                </a>
              </li>
            </ul>
          </div>
          {/* Social Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t("followUs")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-600">
                  {t("facebook")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  {t("instagram")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Digitalzango {t("agriculturalCalendar")}. {t("allRightsReserved")}
          </p>
          <p className="mt-1">
            {t("poweredBy")} Digitalzango
          </p>
        </div>
      </div>
    </footer>
  );
}
