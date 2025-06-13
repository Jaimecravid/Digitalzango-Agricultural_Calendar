import Header from './components/header';
import Footer from './components/footer';
import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "../styles/weather-animations.css"
import { LanguageProvider } from "./contexts/language-context";
import { WeatherProvider } from "./contexts/weather-context";
import { RegionProvider } from "./contexts/region-context";
import ServiceWorkerRegister from './components/ServiceWorkerRegister';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CalendÃ¡rio AgrÃ­cola para Angola",
  description: "AplicaÃ§Ã£o de planeamento agrÃ­cola inteligente para agricultores angolanos",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "AgroCalendÃ¡rio",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const themeColor = "#16a34a"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-AO">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AgroCalendÃ¡rio" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={inter.className}>
        <ServiceWorkerRegister />
        <LanguageProvider>
          <RegionProvider>
            <WeatherProvider>
              <Header />
              {children}
              <Footer />
            </WeatherProvider>
          </RegionProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
