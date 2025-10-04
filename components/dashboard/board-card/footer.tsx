import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";

type Props = {
  isFavorite: boolean;
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  disabled: false;
  onClick: () => void;
};

function Footer({
  title,
  authorLabel,
  createdAtLabel,
  disabled,
  onClick,
  isFavorite,
}: Props) {
  return (
    <div className="relative bg-white p-3">
      <p className="text-[13px] truncate max-w-[calc(100%_-_20px)] ">{title}</p>
      <p className="text-[11px] truncate text-muted-foreground">
        {authorLabel}, {createdAtLabel}
      </p>
      <button
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
          disabled && "cursor-not-allowed opacity-75"
        )}
        disabled={disabled}
        onClick={onClick}
      >
        <Star
          className={cn("h-4 w-4", isFavorite && "fill-blue-600 text-blue-600")}
        />
      </button>
    </div>
  );
}

export default Footer;
