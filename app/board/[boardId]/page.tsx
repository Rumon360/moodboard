import Canvas from "@/components/board/canvas";
import Loading from "@/components/board/loading";
import Room from "@/components/board/room";
import React from "react";

interface BoardIdPageProps {
  params: { boardId: string };
}

function BoardPage({ params }: BoardIdPageProps) {
  return <Loading />;
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
}

export default BoardPage;
