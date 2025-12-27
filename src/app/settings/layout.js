import RequireAuth from "@/components/auth/RequireAuth";
import React from "react";

function layout({ children }) {
  return (
    <RequireAuth>
      <div>{children}</div>
    </RequireAuth>
  );
}

export default layout;
