"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import useApiMutation from "@/hooks/use-api-mutation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function EmptyBoards() {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const router = useRouter();

  const onClick = () => {
    if (!organization) return;

    mutate({
      title: "Untitled",
      orgId: organization.id,
    })
      .then((id) => {
        toast.success("Board Created");
        router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image
        src={"/images/note.svg"}
        alt="Empty Boards"
        height={110}
        width={110}
      />

      <h2 className="text-2xl pt-6 font-semibold">Create your first board!</h2>
      <p className="text-muted-foreground text-sm pt-2">
        Start by creating a board for your oganization.
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size={"lg"}>
          Create Board
        </Button>
      </div>
    </div>
  );
}

export default EmptyBoards;
