import React from "react";
import EmptySearch from "./empty-search";
import EmptyFavorites from "./empty-favorites";
import EmptyBoards from "./empty-boards";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import BoardCard from "@/components/dashboard/board-card/index";
import NewBoardButton from "./new-board-button";

type Props = { orgId: string; searchParams: URLSearchParams };

function BoardList({ orgId, searchParams }: Props) {
  const data = useQuery(api.boards.get, { orgId });
  const searchTerm = searchParams.get("search");
  const isFavorites = searchParams.get("favorites") === "true";

  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl font-medium">
          {isFavorites ? "Favorite Boards" : "Team Boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewBoardButton disabled orgId={orgId} />
          {Array.from({ length: 4 }).map((_, index) => (
            <BoardCard.Skeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (!data?.length && searchTerm) {
    return <EmptySearch />;
  }

  if (!data?.length && isFavorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return (
    <div>
      <h2 className="text-3xl font-medium">
        {isFavorites ? "Favorite Boards" : "Team Boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  );
}

export default BoardList;
