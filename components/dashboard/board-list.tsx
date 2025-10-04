import React from "react";
import EmptySearch from "./empty-search";
import EmptyFavorites from "./empty-favorites";
import EmptyBoards from "./empty-boards";

type Props = { orgId: string; searchParams: URLSearchParams };

function BoardList({ orgId, searchParams }: Props) {
  const data = [];
  const search = searchParams.get("search");
  const favorites = searchParams.get("favorites") === "true";

  if (!data?.length && search) {
    return <EmptySearch />;
  }

  if (!data?.length && favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div></div>;
}

export default BoardList;
