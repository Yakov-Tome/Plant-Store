"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillDashboard } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { IoPricetags } from "react-icons/io5";
import { RiEditFill } from "react-icons/ri";
import { IoTrashBinSharp } from "react-icons/io5";
import { FaClipboardQuestion } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";

function AdminSidebar() {
  const pathname = usePathname();

  const list = [
    {
      name: "לוח ניהול",
      link: "/admin",
      icon: <AiFillDashboard size={24} />,
    },
    {
      name: "קטגוריות",
      link: "/admin/categories",
      icon: <BiSolidCategory size={24} />,
    },
    {
      name: "מוצרים",
      link: "/admin/products",
      icon: <IoPricetags size={24} />,
    },
    { name: "עריכה", link: "/admin/edit", icon: <RiEditFill size={24} /> },
    {
      name: "מחיקה",
      link: "/admin/delete",
      icon: <IoTrashBinSharp size={24} />,
    },
    { name: "הזמנות", link: "/admin/orders", icon: <IoPricetags size={24} /> },
    {
      name: "שאלות נפוצות",
      link: "/admin/faqs",
      icon: <FaClipboardQuestion size={24} />,
    },
    {
      name: "משתמשים",
      link: "/admin/users",
      icon: <FaUsers size={24} />,
    },
  ];

  return (
    <aside className="min-w-64 p-4 bg-[#D2D8C0] font-mono min-h-screen hidden lg:block mb-0">
      <ul className="menu bg-gray-200 rounded-box w-full space-y-2 p-4">
        {list.map((item) => {
          const isActive = pathname === item.link;

          return (
            <li key={item.link}>
              <Link
                href={item.link}
                className={`text-lg ${
                  isActive
                    ? "font-bold  bg-white rounded-lg px-3 py-2 text-accent-content"
                    : "text-(--leaf-new) hover:bg-accent rounded-lg px-3 py-2"
                }`}
              >
                {item.icon && (
                  <span className="mr-2 inline-block">{item.icon}</span>
                )}
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default AdminSidebar;
