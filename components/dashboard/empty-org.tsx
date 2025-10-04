import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreateOrganization } from "@clerk/nextjs";

function EmptyOrg() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={"/images/elements.svg"}
        alt="Empty"
        height={200}
        width={200}
      />
      <h2 className="font-semibold pt-6 text-2xl">Welcome to Moodboard</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an organization to get started
      </p>
      <div className="pt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"lg"}>Create Organization</Button>
          </DialogTrigger>

          <DialogContent className="max-w-[calc(100%-2rem)] lg:max-w-lg w-full p-0 border-none shadow-none">
            <DialogHeader hidden>
              <DialogTitle>Create Organization</DialogTitle>
            </DialogHeader>
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
      </div>
    </div>
  );
}

export default EmptyOrg;
