import Image from "next/image";
import React from "react";

function EmptySearch() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image
        src={"/images/empty-search.svg"}
        alt="Empty Search"
        height={140}
        width={140}
      />

      <h2 className="text-2xl pt-6 font-semibold">No results found!</h2>
      <p className="text-muted-foreground text-sm pt-2">
        Try searching for something else
      </p>
    </div>
  );
}

export default EmptySearch;
