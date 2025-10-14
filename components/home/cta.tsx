"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section className="relative flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md border-t antialiased">
      <div className="relative z-10 mx-auto w-full max-w-2xl p-4 text-center">
        <h2 className="relative z-10 mb-4 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text font-bold text-3xl text-transparent md:text-6xl">
          Start creating today
        </h2>
        <p className="relative z-10 mx-auto mb-8 mt-4 max-w-lg text-center text-base text-muted-foreground md:text-lg">
          Join thousands of teams already using Moodboard to bring their ideas
          to life. Get started for free, no credit card required.
        </p>
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Link href={"/dashboard"}>Get started free</Link>
          </Button>
        </div>
      </div>
      <div className="absolute h-[20%] bottom-[-10%] w-full bg-purple-300 blur-3xl rounded-full"></div>
    </section>
  );
}
