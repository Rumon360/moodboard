import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function EmptyBoards() {
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
        <Button size={"lg"}>Create Board</Button>
      </div>
    </div>
  );
}

export default EmptyBoards;
