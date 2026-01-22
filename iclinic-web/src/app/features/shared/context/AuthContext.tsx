"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { UserRole } from "../types/role";

type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

interface AuthContextData {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  signIn: (token: string, user: User) => void;
  signOut: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextData | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("@iclinic:user");
    const storedToken = localStorage.getItem("@iclinic:token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }

    setIsLoading(false);
  }, []);


  function signIn(token: string, user: User) {
    localStorage.setItem("@iclinic:token", token);
    localStorage.setItem("@iclinic:user", JSON.stringify(user));
    setUser(user);
    setToken(token);
  }

  function signOut() {
    localStorage.removeItem("@iclinic:token");
    localStorage.removeItem("@iclinic:user");
    setUser(null);
    setToken(null);
  }


  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>

  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
