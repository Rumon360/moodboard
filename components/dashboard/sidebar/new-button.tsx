"use client";

import Hint from "@/components/hint";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { PlusIcon } from "lucide-react";

function NewButton() {
  return (
    <Dialog>
      <Hint
        label="Create Organization"
        side="right"
        align="start"
        sideOffset={10}
      >
        <DialogTrigger asChild>
          <button className="aspect-square bg-white/25 flex justify-center items-center rounded-md opacity-60 hover:opacity-100 transition">
            <PlusIcon className="text-white" />
          </button>
        </DialogTrigger>
      </Hint>

      <DialogContent className="max-w-[calc(100%-2rem)] lg:max-w-lg w-full p-0 border-none shadow-none">
        <CreateOrganization
          appearance={{
            variables: { colorShadow: "none" },
            elements: {
              rootBox: { width: "100%", height: "100%" },
              cardBox: { width: "100%", height: "100%" },
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

export default NewButton;
