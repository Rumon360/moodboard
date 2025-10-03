import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src={"/images/logo.svg"}
        alt="logo"
        width={100}
        height={100}
        className="animate-pulse duration-700"
      />
    </div>
  );
}

export default Loading;
