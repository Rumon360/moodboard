"use client";

import BoardList from "@/components/dashboard/board-list";
import EmptyOrg from "@/components/dashboard/empty-org";
import { useOrganization } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function Dashboard() {
  const { organization } = useOrganization();
  const searchParams = useSearchParams();

  return (
    <div className="flex-1 h-[calc(100%_-_80px)] lg:h-[calc(100%_-_75.8px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} searchParams={searchParams} />
      )}
    </div>
  );
}
