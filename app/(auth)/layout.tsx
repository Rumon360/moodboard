import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {children}
    </div>
  );
}

export default AuthLayout;
