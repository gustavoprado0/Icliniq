"use client";

import Link from "next/link";
import { hasPermission } from "../utils/hasPermission";
import { useAuth } from "../context/AuthContext";

export function Sidebar() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <aside className="w-60 border-r p-4">
      <nav className="space-y-2">
        <Link href="/dashboard" className="block">
          Dashboard
        </Link>

        {hasPermission(user.role, ["patient"]) && (
          <Link href="/appointments" className="block">
            Agendar consulta
          </Link>
        )}

        {hasPermission(user.role, ["doctor", "admin"]) && (
          <Link href="/schedule" className="block">
            Agenda
          </Link>
        )}

        {hasPermission(user.role, ["admin"]) && (
          <Link href="/users" className="block">
            Usuários
          </Link>
        )}
      </nav>
    </aside>
  );
}