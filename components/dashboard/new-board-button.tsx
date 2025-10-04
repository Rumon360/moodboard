"use client";

import { api } from "@/convex/_generated/api";
import useApiMutation from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

type Props = { orgId: string; disabled?: boolean };

function NewBoardButton({ orgId, disabled }: Props) {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        console.log(id);
        toast.success("Board Created");
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };

  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 cursor-pointer aspect-[100/127] bg-blue-500 rounded-lg hover:bg-blue-600 flex flex-col justify-center items-center py-6",
        (disabled || pending) && "opacity-75 hover:bg-blue-500"
      )}
    >
      <div></div>
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">New Board</p>
    </button>
  );
}

export default NewBoardButton;
