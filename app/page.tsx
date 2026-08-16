import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { ProductTabs } from "@/components/home/product-tabs";
import { Problem } from "@/components/home/problem";
import { Architecture } from "@/components/home/architecture";
import { Capabilities } from "@/components/home/capabilities";
import { Security } from "@/components/home/security";
import { Cta } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Privileged — AI Infrastructure for Law",
  description:
    "Privileged is the ephemeral inference layer for legal AI. Ephemeral containers, static-IP egress, and zero-data retention — built in, not negotiated.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Privileged — AI Infrastructure for Law",
    description:
      "Ephemeral containers. Static IPs. Zero-data retention. One DPA, signed in days — not months.",
    type: "website",
    url: "https://privilegedinfra.com",
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <ProductTabs />
        <Problem />
        <Architecture />
        <Capabilities />
        <Security />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
