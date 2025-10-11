"use client";

import { useOthers, useSelf } from "@/liveblocks.config";
import UserAvatar from "./user-avatar";
import { connectionIdToColor } from "@/lib/utils";

const MAX = 2;

function Participants() {
  const users = useOthers();
  const self = useSelf((me) => me.info);

  const hasMoreUsers = users.length > MAX;

  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {users.slice(0, MAX).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              key={connectionId}
              src={info?.avatar}
              name={info?.name}
              fallback={info?.name?.[0] || "T"}
              borderColor={connectionIdToColor(connectionId)}
            />
          );
        })}
        {self && (
          <UserAvatar
            src={self.avatar}
            name={`${self?.name} (You)`}
            fallback={self?.name?.[0] || "T"}
            borderColor={connectionIdToColor(self.connectionId as number)}
          />
        )}
        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX} more`}
            fallback={`+${users.length - MAX}`}
          />
        )}
      </div>
    </div>
  );
}

export default Participants;

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]"></div>
  );
};
