import RequireAuth from "@/components/auth/RequireAuth";
import React from "react";

function layout({ children }) {
  return (
    <RequireAuth>
      <div className="min-h-screen bg-[url('/cart.jpg')] bg-no-repeat bg-cover bg-fixed relative">
        {children}
      </div>
    </RequireAuth>
  );
}

export default layout;
