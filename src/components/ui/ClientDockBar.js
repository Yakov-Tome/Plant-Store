"use client";

import Link from "next/link";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

function DockBar() {
  const pathname = usePathname();
  const { logout, user } = useAuth();
  const { cart } = useCart();

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + (item.quantity || 0), 0),
    [cart]
  );

  const isActive = (path) => pathname === path;

  return (
    <div className="dock bg-[#F6F7F3]/80 backdrop-blur-2xl lg:hidden shadow-lg border border-gray-300 rounded-lg h-18 text-(--leaf-new)">
      <Link
        href="/"
        className={`hover:scale-110 transition-transform duration-300 ${
          isActive("/") ? "dock-active" : ""
        }`}
      >
        <IoHomeOutline size={24} />
        <span className="dock-label text-sm">ראשי</span>
      </Link>
      <Link
        href="/cart"
        className={`hover:scale-110 transition-transform duration-300 ${
          isActive("/cart") ? "dock-active" : ""
        }`}
      >
        <div className="indicator">
          {cartCount > 0 && user && (
            <span className="indicator-item badge badge-sm badge-error text-white">
              {cartCount}
            </span>
          )}
          <BsCart3 size={24} />
        </div>
        <span className="dock-label text-sm">עגלה</span>
      </Link>
      {user && (
        <>
          <Link
            href="/settings"
            className={`hover:scale-110 transition-transform duration-300 ${
              isActive("/settings") ? "dock-active" : ""
            }`}
          >
            <IoSettingsOutline size={24} />
            <span className="dock-label text-sm">הגדרות</span>
          </Link>
          <button
            onClick={logout}
            className="hover:scale-110 transition-transform duration-300"
          >
            <AiOutlineLogout size={24} />
            <span className="dock-label text-sm">התנתק</span>
          </button>
        </>
      )}
    </div>
  );
}

export default DockBar;
