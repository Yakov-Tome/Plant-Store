"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function RequireAuth({ children }) {
  const { user, loadingAuth } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loadingAuth && !user) {
      // Redirect to login and keep "from" so you can redirect back
      router.replace(`/login?from=${encodeURIComponent(pathname)}`);
    }
  }, [user, loadingAuth, router, pathname]);

  if (loadingAuth) {
    // You can replace with nice spinner (DaisyUI)
    return (
      <div className="flex justify-center items-center h-screen">טוען...</div>
    );
  }

  if (!user) {
    return null; // while redirecting
  }

  return children;
}
