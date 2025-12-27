"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

function Navbar() {
  const pathname = usePathname();
  const { loadingAuth } = useAuth();
  const { user } = useAuth();

  const RouteAll = [
    { id: "1", href: "/", name: "בית" },
    { id: "2", href: "/catalog", name: "קטלוג מוצרים" },
    { id: "3", href: "/faq", name: "שאלות נפוצות" },
    { id: "4", href: "/contact", name: "צור קשר" },
  ];

  const RouteA = RouteAll.slice(0, 2);
  const RouteB = RouteAll.slice(2);

  return (
    <nav className="navbar bg-white/80 backdrop-blur-2xl shadow-md text-[#4F3F31] rounded-full h-16 px-3 sm:px-6 pointer-events-auto font-mono">
      {/* ▶ מובייל */}
      <div className="navbar-start flex justify-between w-full">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost active:bg-(--leaf-new) lg:hidden hover:bg-(--leaf-new) rounded-full"
          >
            <RiMenu3Fill size={22} />
          </button>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow bg-white/95"
          >
            {RouteAll.map((r) => (
              <li
                key={r.id}
                className={`rounded-2xl ${
                  pathname === r.href
                    ? "bg-[#95D06F]/20 text-[#95D06F]-content font-bold"
                    : "hover:bg-[#95D06F] hover:text-black"
                }`}
              >
                <Link className="text-sm" href={r.href}>
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden flex items-center">
          <h1 className="text-2xl">המשתלה בנווה צדק</h1>
        </div>

        <div>
          <Link href="/">
            <Image
              src="/logoA.png"
              width={120}
              height={120}
              alt="logo"
              className="object-contain"
            />
          </Link>
        </div>
      </div>

      {/* ▶ דסקטופ */}
      <div className="navbar-center hidden lg:grid lg:min-w-full lg:grid-cols-[1fr_auto_1fr] items-center">
        {/* צד ימין */}
        <ul className="menu menu-horizontal px-1 w-full justify-center gap-6">
          {RouteA.map((r) => (
            <li key={r.id}>
              <Link
                href={r.href}
                className={`text-xl transition-all active:bg-(--leaf-new)/0 ${
                  pathname === r.href
                    ? "text-[#95D06F]-content font-bold border-b-2 border-[#95D06F] hover:bg-white/0"
                    : "hover:text-[#95D06F] hover:bg-white/0"
                }`}
              >
                {r.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* לוגו */}
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/logoA.png"
              width={120}
              height={120}
              alt="logo"
              className="object-contain"
            />
          </Link>
        </div>

        {/* צד שמאל */}
        <ul className="menu menu-horizontal px-1 w-full justify-center gap-6 relative">
          {RouteB.map((r) => (
            <li key={r.id}>
              <Link
                href={r.href}
                className={`text-xl transition-all active:bg-(--leaf-new)/0 ${
                  pathname === r.href
                    ? "text-[#95D06F]-content font-bold border-b-2 border-[#95D06F]"
                    : "hover:text-[#95D06F] hover:bg-white/0"
                }`}
              >
                {r.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
