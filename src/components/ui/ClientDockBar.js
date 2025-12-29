"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

export default function DockBar() {
  const pathname = usePathname();
  const { logout, user } = useAuth();
  const { cart } = useCart();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const cartCount = useMemo(() => {
    return (cart || []).reduce((sum, item) => sum + (item?.quantity || 0), 0);
  }, [cart]);

  const isActive = (path) => pathname === path;

  const dockClass =
    "dock bg-[#F6F7F3]/80 backdrop-blur-2xl lg:hidden shadow-lg border border-gray-300 rounded-lg h-16 px-6 flex justify-between items-center text-(--leaf-new) will-change-transform transform-gpu";

  const linkBase = "transition-transform duration-300 lg:hover:scale-110";
  const iconClass = "shrink-0 scale-100 transform-none";

  return (
    <div className={dockClass}>
      {/* Home */}
      <Link
        href="/"
        className={`${linkBase} ${isActive("/") ? "dock-active" : ""}`}
      >
        <IoHomeOutline size={24} className={iconClass} />
        <span className="dock-label text-sm">ראשי</span>
      </Link>

      {/* Cart */}
      <Link
        href="/cart"
        className={`${linkBase} ${isActive("/cart") ? "dock-active" : ""}`}
      >
        <div className="indicator">
          {/* ✅ Render badge only after mount to avoid hydration mismatch */}
          {mounted && user && cartCount > 0 && (
            <span className="indicator-item badge badge-sm badge-error text-white">
              {cartCount}
            </span>
          )}
          <BsCart3 size={24} className={iconClass} />
        </div>
        <span className="dock-label text-sm">עגלה</span>
      </Link>

      {/* Logged in only (after mount) */}
      {mounted && user && (
        <>
          <Link
            href="/settings"
            className={`${linkBase} ${
              isActive("/settings") ? "dock-active" : ""
            }`}
          >
            <IoSettingsOutline size={24} className={iconClass} />
            <span className="dock-label text-sm">הגדרות</span>
          </Link>

          <button onClick={logout} className={linkBase} type="button">
            <AiOutlineLogout size={24} className={iconClass} />
            <span className="dock-label text-sm">התנתק</span>
          </button>
        </>
      )}
    </div>
  );
}
