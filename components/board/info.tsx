"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { Poppins } from "next/font/google";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Hint from "../hint";
import useRenameModal from "@/store/useRenameModal";
import Actions from "../actions";
import { Menu } from "lucide-react";

interface infoProps {
  boardId: string;
}

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

const TabSepparator = () => {
  return <div className="text-neutral-300 px-1.5">|</div>;
};

function Info({ boardId }: infoProps) {
  const data = useQuery(api.board.get, { id: boardId as Id<"boards"> });
  const { onOpen } = useRenameModal();

  if (!data) {
    return <Info.Skeleton />;
  }

  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Hint label="Go to boards" side="bottom" sideOffset={10}>
        <Button asChild variant={"board"} className="px-2">
          <Link href={"/"}>
            <Image
              src={"/images/logo.svg"}
              width={40}
              height={40}
              alt="logo"
              priority
            />
            <span
              className={cn(
                "font-semibold text-xl ml-2 text-black",
                poppins.className
              )}
            >
              Moodboard
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSepparator />
      <Hint label="Edit title" side="bottom" sideOffset={10}>
        <Button
          onClick={() => onOpen(data._id, data.title)}
          variant={"board"}
          className="text-base font-normal px-2"
        >
          {data.title}
        </Button>
      </Hint>
      <TabSepparator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Main Menu" side="bottom" sideOffset={10}>
            <Button size={"icon"} variant={"board"}>
              <Menu className="" />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
}

export default Info;

Info.Skeleton = function InfoSkeleton() {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]"></div>
  );
};
