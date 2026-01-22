"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../features/shared/context/AuthContext";
import { Header } from "../features/shared/ui/Header";
import { Sidebar } from "../features/shared/ui/Sidebar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) return null;
  if (!isAuthenticated) return null;

  return (
    <div className="flex h-screen flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
