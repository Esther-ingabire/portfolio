import type { Metadata } from "next";
import "./globals.css";

const url = "https://esther-ingabire.vercel.app";
const blurb =
  "Backend and full-stack engineer in Kigali, Rwanda. Supply-chain analytics, ride-hailing and payment systems in Python, Java and Go.";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Esther Ingabire — Backend & Full-Stack Engineer",
  description: blurb,
  openGraph: {
    title: "Esther Ingabire — Backend & Full-Stack Engineer",
    description: blurb,
    url,
    siteName: "Esther Ingabire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esther Ingabire — Backend & Full-Stack Engineer",
    description: blurb,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
