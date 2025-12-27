"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function RequireGuest({ children }) {
  const { user, loadingAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loadingAuth && user) {
      // If already logged in, redirect (e.g. to dashboard)
      router.replace("/");
    }
  }, [user, loadingAuth, router]);

  if (loadingAuth) {
    return (
      <div className="flex justify-center items-center h-screen">טוען...</div>
    );
  }

  if (user) {
    return null; // while redirecting
  }

  return children;
}
