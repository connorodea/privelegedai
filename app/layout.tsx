import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

// Wordmark only — preserves brand continuity with the existing mark.
const brandMont = localFont({
  src: "../fonts/mont-heavy.otf",
  display: "swap",
  variable: "--font-brand-mont",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://privilegedinfra.com"),
  title: "Privileged — Private AI Infrastructure for Legal",
  description:
    "Run AI over privileged data in isolated, ephemeral compute. Requests execute in protected environments, exit through controlled static egress, and leave no persistent session state behind.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Privileged — Private AI Infrastructure for Legal",
    description:
      "Ephemeral by default. Privileged by design. Isolated ephemeral compute, static egress, private models, and one security boundary for legal workloads.",
    type: "website",
    url: "https://privilegedinfra.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privileged — Private AI Infrastructure for Legal",
    description:
      "Ephemeral by default. Privileged by design. Private AI infrastructure for legal workloads.",
  },
};

export const viewport: Viewport = {
  themeColor: "#070809",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${brandMont.variable}`}
    >
      <body className="bg-bg font-sans text-[16px] leading-relaxed text-ink antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
