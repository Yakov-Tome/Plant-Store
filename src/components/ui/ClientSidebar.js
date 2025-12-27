"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { FaStore } from "react-icons/fa";

import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

function ClientSidebar() {
  const pathname = usePathname();
  const { logout, isAdmin } = useAuth();
  const { cart } = useCart();
  const { user } = useAuth();
  const [adminOpen, setAdminOpen] = useState(false);
  const wrapperRef = useRef(null);

  const isActiveExact = (path) => pathname === path;

  const isAdminActive = (href) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  const adminLinkClass = (href) =>
    `rounded-md px-2 py-1 transition ${
      isAdminActive(href)
        ? "bg-[#95D06F]/20 font-bold text-(--leaf-new)"
        : "hover:bg-[#95D06F]"
    }`;

  useEffect(() => {
    if (!isAdmin || !adminOpen) return;

    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setAdminOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [adminOpen, isAdmin]);

  useEffect(() => {
    setAdminOpen(false);
  }, [pathname]);

  return (
    <div
      ref={wrapperRef}
      className="fixed -left-2 top-1/2 -translate-y-1/2 hidden lg:block z-50"
    >
      <ul className="menu bg-[#F6F7F3]/80 backdrop-blur-2xl shadow-lg border border-gray-300 rounded-box text-(--leaf-new) gap-1 flex items-center justify-center flex-col p-2">
        <li>
          <Link
            href="/"
            className={`tooltip tooltip-right tooltip-success transition-all duration-300 ${
              isActiveExact("/") ? "bg-base-300 scale-110" : "hover:scale-110"
            }`}
            data-tip="בית"
          >
            <IoHomeOutline size={20} />
          </Link>
        </li>

        <li>
          <Link
            href="/cart"
            className={`tooltip tooltip-right tooltip-success relative transition-all duration-300 ${
              isActiveExact("/cart")
                ? "bg-base-300 scale-110"
                : "hover:scale-110"
            }`}
            data-tip="עגלה"
          >
            <BsCart3 size={20} />
            {cart.length > 0 && (
              <span className="badge badge-sm badge-error absolute -top-1 -right-1">
                {cart.length}
              </span>
            )}
          </Link>
        </li>
        {user && (
          <li>
            <Link
              href="/settings"
              className={`tooltip tooltip-right tooltip-success transition-all duration-300 ${
                isActiveExact("/settings")
                  ? "bg-base-300 scale-110"
                  : "hover:scale-110"
              }`}
              data-tip="הגדרות"
            >
              <IoSettingsOutline size={20} />
            </Link>
          </li>
        )}

        {isAdmin && (
          <li>
            <button
              type="button"
              onClick={() => setAdminOpen((prev) => !prev)}
              className="tooltip tooltip-right tooltip-success hover:scale-110 transition-transform duration-300 flex items-center justify-center"
              data-tip="ניהול חנות"
            >
              <FaStore size={20} />
            </button>

            {adminOpen && (
              <ul className="menu bg-white rounded-box border border-gray-200 shadow-inner text-sm min-w-40 mt-2 ml-2 text-black mx-auto p-2 flex flex-col gap-1 justify-center items-center">
                <li>
                  <Link href="/admin" className={adminLinkClass("/admin")}>
                    לוח ניהול
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/categories"
                    className={adminLinkClass("/admin/categories")}
                  >
                    קטגוריות
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/products"
                    className={adminLinkClass("/admin/products")}
                  >
                    מוצרים
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/edit"
                    className={adminLinkClass("/admin/edit")}
                  >
                    עריכה
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/delete"
                    className={adminLinkClass("/admin/delete")}
                  >
                    מחיקה
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/orders"
                    className={adminLinkClass("/admin/orders")}
                  >
                    הזמנות
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/faqs"
                    className={adminLinkClass("/admin/faqs")}
                  >
                    שאלות ותשובות
                  </Link>
                </li>
              </ul>
            )}
          </li>
        )}

        {user && (
          <li>
            <button
              onClick={logout}
              className="tooltip tooltip-right tooltip-success hover:scale-110"
              data-tip="יציאה"
            >
              <AiOutlineLogout size={20} />
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ClientSidebar;
