"use client";

import { useState, useMemo } from "react";
import { useUsersAdmin } from "@/hooks/useUsersAdmin";
import { CiSearch } from "react-icons/ci";

export default function UsersTable() {
  const { users, loading, error, updatingId, toggleAdmin } = useUsersAdmin();
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    if (!search.trim()) return users;

    const q = search.toLowerCase();

    return users.filter((u) => {
      const fullName =
        u.name || `${u.firstName || ""} ${u.lastName || ""}`.trim();

      return (
        fullName.toLowerCase().includes(q) ||
        (u.email || "").toLowerCase().includes(q)
      );
    });
  }, [users, search]);

  if (loading) return <p className="opacity-70">טוען משתמשים...</p>;
  if (error) return <p className="text-red-500">שגיאה בטעינה</p>;

  return (
    <div className="space-y-4">
      <div className="max-w-sm">
        <label className="input w-full">
          <CiSearch />
          <input
            type="text"
            placeholder="חיפוש לפי שם או אימייל…"
            className="input w-full outline-none border-0 focus:ring-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      <div className="overflow-x-auto border border-gray-300 rounded-lg">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>שם</th>
              <th>עיר</th>
              <th>טלפון</th>
              <th>סטטוס</th>
              <th>פעולות</th>
              <th>ניהול</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((u) => {
              const isUpdating = updatingId === u.id;

              return (
                <tr key={u.id}>
                  <td className="font-medium">
                    <div className="flex flex-col">
                      <span>
                        {u.name ||
                          `${u.firstName || ""} ${u.lastName || ""}`.trim() ||
                          "-"}
                      </span>
                      <span className="text-xs opacity-60">
                        {u.email || "-"}
                      </span>
                    </div>
                  </td>

                  <td>{u.city || "-"}</td>
                  <td dir="ltr">{u.phone || "-"}</td>

                  <td>
                    <span
                      className={`badge ${
                        u.online ? "badge-success" : "badge-ghost"
                      }`}
                    >
                      {u.online ? "מחובר" : "מנותק"}
                    </span>
                  </td>

                  <td>
                    <button
                      className={`btn btn-sm min-w-[90px] ${
                        u.isAdmin ? "btn-error" : "btn-success"
                      }`}
                      disabled={isUpdating}
                      onClick={() => toggleAdmin(u.id, !!u.isAdmin)}
                    >
                      {isUpdating
                        ? "שומר..."
                        : u.isAdmin
                        ? "בטל ניהול"
                        : "הפוך למנהל"}
                    </button>
                  </td>

                  <td>{u.isAdmin ? "מנהל" : "משתמש"}</td>
                </tr>
              );
            })}

            {!filteredUsers.length && (
              <tr>
                <td colSpan={6} className="text-center opacity-60 py-6">
                  לא נמצאו משתמשים
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
