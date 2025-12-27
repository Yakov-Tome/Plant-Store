"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function RequireAdmin({ children }) {
  const { user, isAdmin, loadingAuth } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // עדיין טוען משתמש או עדיין לא יודעים אם אדמין → לא לעשות כלום
    if (loadingAuth || isAdmin === undefined) return;

    // לא מחובר → לדף התחברות (אפשר לשמור from אם תרצה)
    if (!user) {
      router.replace(`/login?from=${encodeURIComponent(pathname)}`);
      return;
    }

    // מחובר אבל לא אדמין → לדף ראשי (או מה שאתה רוצה)
    if (!isAdmin) {
      router.replace("/");
    }
  }, [user, isAdmin, loadingAuth, router, pathname]);

  // בזמן טעינת Auth / סטטוס isAdmin
  if (loadingAuth || isAdmin === undefined) {
    return (
      <div className="flex justify-center items-center h-screen">
        בודק הרשאות...
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null; // בזמן רידיירקט
  }

  return children;
}
