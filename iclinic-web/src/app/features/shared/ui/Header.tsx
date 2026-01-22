"use client";

import { useAuth } from "../context/AuthContext";


export function Header() {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <header className="flex items-center justify-between border-b px-6 py-4">
      <h1 className="text-lg font-semibold">Iclinic</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          {user.name} ({user.role})
        </span>

        <button
          onClick={signOut}
          className="rounded bg-red-500 px-3 py-1 text-sm text-white"
        >
          Sair
        </button>
      </div>
    </header>
  );
}
