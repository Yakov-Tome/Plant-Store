"use client";

import AdminSidebar from "@/components/admin/AdminSidebar";
import RequireAdmin from "@/components/auth/RequireAdmin";

export default function AdminLayout({ children }) {
  return (
    <RequireAdmin>
      <main className="flex min-h-screen bg-gray-100 space-y-6 bg-[url('/bg.jpg')] bg-fixed bg-cover bg-no-repeat text-[#084D49] font-mono">
        <AdminSidebar />
        {children}
      </main>
    </RequireAdmin>
  );
}
