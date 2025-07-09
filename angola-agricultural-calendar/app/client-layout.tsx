"use client";

import { RegionProvider } from "./contexts/region-context";
import { WeatherProvider } from "./contexts/weather-context";
import { LanguageProvider } from "./contexts/language-context";
import Header from "./components/header";
import Footer from "./components/footer";
import HtmlLang from "./components/html-lang";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <RegionProvider>
        <WeatherProvider>
          <HtmlLang />
          <Header />
          <main>{children}</main>
          <Footer />
        </WeatherProvider>
      </RegionProvider>
    </LanguageProvider>
  );
}
