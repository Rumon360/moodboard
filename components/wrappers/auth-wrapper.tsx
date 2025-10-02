import { useAuth } from "@clerk/nextjs";
import React from "react";
import Loading from "@/components/auth/loading";

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { isLoaded } = useAuth();

  if (!isLoaded) {
    return <Loading />;
  }

  return <>{children}</>;
}

export default AuthWrapper;
