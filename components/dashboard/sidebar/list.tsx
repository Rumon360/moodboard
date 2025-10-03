"use client";

import { useOrganizationList } from "@clerk/nextjs";
import Item from "./item";
import { Skeleton } from "@/components/ui/skeleton";

function List() {
  const { userMemberships } = useOrganizationList({
    userMemberships: { infinite: true },
  });

  if (userMemberships.isLoading) {
    return (
      <ul className="space-y-4">
        {[...Array(2)].map((_, index) => (
          <li key={index} className="aspect-square relative">
            <Skeleton className="w-full h-full rounded-md opacity-75" />
          </li>
        ))}
      </ul>
    );
  }

  if (!userMemberships?.data?.length) return null;

  return (
    <ul className="space-y-4">
      {userMemberships.data.map((membership) => (
        <Item
          key={membership.organization.id}
          id={membership.organization.id}
          name={membership.organization.name}
          imageUrl={membership.organization.imageUrl}
        />
      ))}
    </ul>
  );
}

export default List;
