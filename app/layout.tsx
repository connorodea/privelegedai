import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

const brandMont = localFont({
  src: "../fonts/mont-heavy.otf",
  display: "swap",
  variable: "--font-brand-mont",
});

const brandEspera = localFont({
  src: "../fonts/espera-bold.ttf",
  display: "swap",
  variable: "--font-brand-espera",
});

const brandNoName = localFont({
  src: "../fonts/no-name-37-regular.otf",
  display: "swap",
  variable: "--font-brand-noname",
});

const brandBarq = localFont({
  src: "../fonts/barq-bold.ttf",
  display: "swap",
  variable: "--font-brand-barq",
});

const brandCircula = localFont({
  src: "../fonts/circula-medium.otf",
  display: "swap",
  variable: "--font-brand-circula",
});

const brandIdentidad = localFont({
  src: "../fonts/identidad-extrabold.otf",
  display: "swap",
  variable: "--font-brand-identidad",
});

const brandStark = localFont({
  src: "../fonts/stark.otf",
  display: "swap",
  variable: "--font-brand-stark",
});

const brandSantana = localFont({
  src: "../fonts/santana-black.ttf",
  display: "swap",
  variable: "--font-brand-santana",
});

const brandGenerica = localFont({
  src: "../fonts/generica-bold.otf",
  display: "swap",
  variable: "--font-brand-generica",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://privilegedinfra.com"),
  title: "Privileged — AI Infrastructure for Law",
  description:
    "Privileged is the ephemeral inference layer for legal AI. Ephemeral containers, static-IP egress, and zero-data retention — built in, not negotiated.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Privileged — AI Infrastructure for Law",
    description:
      "Ephemeral containers. Static IPs. Zero-data retention. One DPA, signed in days — not months.",
    type: "website",
    url: "https://privilegedinfra.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable} ${brandMont.variable} ${brandEspera.variable} ${brandNoName.variable} ${brandBarq.variable} ${brandCircula.variable} ${brandIdentidad.variable} ${brandStark.variable} ${brandSantana.variable} ${brandGenerica.variable}`}
    >
      <body className="bg-bg font-sans text-[16px] leading-relaxed text-ink">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
