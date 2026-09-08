import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Esther Ingabire — Software Engineer",
  description:
    "Backend & full-stack software engineer based in Kigali, Rwanda. Java, Python, Spring Boot, Django, React, Next.js.",
  openGraph: {
    title: "Esther Ingabire — Software Engineer",
    description: "Backend & full-stack engineer. Java · Python · Spring Boot · Django · React · Next.js.",
    url: "https://esther-ingabire.vercel.app",
    siteName: "Esther Ingabire",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
