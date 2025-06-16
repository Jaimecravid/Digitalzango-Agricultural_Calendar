import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/language-context";
import { RegionProvider } from "./contexts/region-context";
import { WeatherProvider } from "./contexts/weather-context";
import Header from "./components/header";
import Footer from "./components/footer";
import HtmlLang from "./components/html-lang";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digitalzango - Calendário Agrícola de Angola",
  description: "Planeje suas atividades agrícolas com base no clima e região de Angola",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
