import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      {children}
    </main>
  );
}

export default AuthLayout;
