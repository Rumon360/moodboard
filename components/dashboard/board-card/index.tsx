import Image from "next/image";
import Link from "next/link";
import React from "react";
import Overlay from "./overlay";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import Footer from "./footer";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName?: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
};

function BoardCard({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  orgId,
  isFavorite,
}: Props) {
  const { userId } = useAuth();

  const autherLabel = userId === authorId ? "You" : authorName || "Unknown";
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt={title} fill className="object-contain" />
          <Overlay />
        </div>
        <Footer
          title={title}
          authorLabel={autherLabel}
          createdAtLabel={createdAtLabel}
          disabled={false}
          isFavorite={isFavorite}
          onClick={() => {}}
        />
      </div>
    </Link>
  );
}

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};

export default BoardCard;
