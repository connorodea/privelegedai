import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { Procurement } from "@/components/home/procurement";
import { ExecutionLifecycle } from "@/components/home/execution-lifecycle";
import { CrystalSection } from "@/components/home/crystal-section";
import { Primitives } from "@/components/home/primitives";
import { Architecture } from "@/components/home/architecture";
import { Security } from "@/components/home/security";
import { BigNumbers } from "@/components/home/big-numbers";
import { Infrastructure } from "@/components/home/infrastructure";
import { UseCases } from "@/components/home/use-cases";
import { Convergence } from "@/components/home/convergence";
import { Cta } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Privileged — Private AI Infrastructure for Legal",
  description:
    "Run AI over privileged data in isolated, ephemeral compute. Requests execute in protected environments, exit through controlled static egress, and leave no persistent session state behind.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Privileged — Private AI Infrastructure for Legal",
    description:
      "Ephemeral by default. Privileged by design. Isolated ephemeral compute, static egress, private models, and one security boundary for legal workloads.",
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
        <Procurement />
        <ExecutionLifecycle />
        <CrystalSection />
        <Primitives />
        <Architecture />
        <Security />
        <BigNumbers />
        <Infrastructure />
        <UseCases />
        <Convergence />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
