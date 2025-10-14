import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-x-2">
            <Image
              src={"images/logo.svg"}
              priority
              alt="logo"
              height={40}
              width={40}
            />
            <span className={cn("font-semibold text-xl", poppins.className)}>
              Moodboard
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm">
            <Link href={"/dashboard"}>Log in</Link>
          </Button>
          <Button asChild size="sm">
            <Link href={"/dashboard"}>Try for free</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
