import Canvas from "@/components/board/canvas";
import Loading from "@/components/board/loading";
import Room from "@/components/board/room";
import React from "react";

interface BoardIdPageProps {
  params: Promise<{ boardId: string }>;
}

async function BoardPage({ params }: BoardIdPageProps) {
  const { boardId } = await params;

  return (
    <Room roomId={boardId} fallback={<Loading />}>
      <Canvas boardId={boardId} />
    </Room>
  );
}

export default BoardPage;
