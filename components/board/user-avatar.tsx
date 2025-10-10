import React from "react";
import Hint from "../hint";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
};

function UserAvatar({ name, src, fallback, borderColor }: Props) {
  return (
    <Hint label={name || "Teammate"} side="bottom" sideOffset={18}>
      <Avatar className="h-8 w-8 border-2" style={{ borderColor: borderColor }}>
        <AvatarImage src={src} />
        <AvatarFallback className="text-sm font-semibold">
          {fallback}
        </AvatarFallback>
      </Avatar>
    </Hint>
  );
}

export default UserAvatar;
