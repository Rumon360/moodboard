import { CTA } from "@/components/home/cta";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/home/navbar";
import React from "react";

function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
    </main>
  );
}

export default Home;
