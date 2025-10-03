"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

function OrgSidebar() {
  const searchParams = useSearchParams();

  const favorites = searchParams.get("favorites");

  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5 ">
      <Link href={"/"}>
        <div className="flex items-center gap-x-2">
          <Image src={"images/logo.svg"} alt="logo" height={40} width={40} />
          <span className={cn("font-semibold text-xl", poppins.className)}>
            Moodboard
          </span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "8px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
            avatarBox: {
              width: "24px",
              height: "24px",
            },
            organizationPreviewMainIdentifier: {
              fontSize: "14px",
              fontWeight: 500,
            },
          },
        }}
      />
      <div className="space-y-1 w-full">
        <Button
          asChild
          size={"lg"}
          variant={favorites ? "outline" : "secondary"}
          className="font-normal justify-start px-2 w-full"
        >
          <Link href={"/"}>
            <LayoutDashboard className="mr-1 h-4 w-4" />
            Team boards
          </Link>
        </Button>
        <Button
          asChild
          size={"lg"}
          variant={favorites ? "secondary" : "outline"}
          className="font-normal justify-start px-2 w-full"
        >
          <Link href={{ pathname: "/", query: { favorites: true } }}>
            <Star className="mr-1 h-4 w-4" />
            Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default OrgSidebar;
