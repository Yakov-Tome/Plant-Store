import UsersTable from "@/components/admin/UsersTable";
import React from "react";

function Users() {
  return (
    <div className="bg-white/90 backdrop-blur-lg container mx-auto my-8 p-4 rounded-md shadow-md max-w-7xl">
      <UsersTable />
    </div>
  );
}

export default Users;
