import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { AuroraBackground } from "../ui/aurora-background";
import Link from "next/link";

export function Hero() {
  return (
    <AuroraBackground>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5">
              <span className="font-semibold">New:</span>
              <span className="ml-2">Real-time collaboration</span>
            </Badge>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance md:text-7xl">
              The complete platform for visual collaboration
            </h1>

            <p className="mb-10 text-lg text-muted-foreground text-pretty md:text-xl">
              Your team&apos;s toolkit to create, collaborate, and innovate.
              Build stunning moodboards with powerful tools for real-time
              teamwork.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href={"/dashboard"}>Get started free</Link>
              </Button>
            </div>

            <div className="mt-16 rounded-xl border border-border bg-card p-2 shadow">
              <div className="aspect-video relative w-full overflow-hidden rounded-lg">
                <Image
                  fill
                  src="/images/modern-whiteboard.jpg"
                  alt="Moodboard interface preview"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
}
