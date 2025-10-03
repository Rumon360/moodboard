import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

function InviteButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <Plus className="mr-2 size-4" /> Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[calc(100%-2rem)] lg:max-w-4xl w-full p-0 border-none shadow-none">
        <DialogHeader hidden>
          <DialogTitle>Invite Memebers</DialogTitle>
        </DialogHeader>
        <OrganizationProfile
          routing="hash"
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

export default InviteButton;
