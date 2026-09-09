import type { Metadata, Viewport } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const url = "https://esther-ingabire-portfolio.vercel.app";
const blurb =
  "Backend engineer in Kigali, Rwanda, building APIs, backend systems and the products they power. Currently CTO at HauxHunt.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0C0A09",
};

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Esther Ingabire · Backend Engineer",
  description: blurb,
  openGraph: {
    title: "Esther Ingabire · Backend Engineer",
    description: blurb,
    url,
    siteName: "Esther Ingabire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esther Ingabire · Backend Engineer",
    description: blurb,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
