"use client";

import Link from "next/link";
import { MdManageAccounts } from "react-icons/md";

export default function NavbarAdminButton() {
  return (
    <Link
      href="/admin"
      className="hidden lg:block lg:top-6 lg:left-10 lg:bg-[#F6F7F3] lg:p-3 lg:rounded-full text-(--leaf-new) hover:scale-110 transition-shadow shadow-(--leaf-new) hover:shadow-[0_0_16px_rgba(0,0,0,0.28)]
 duration-800"
    >
      <MdManageAccounts size={28} />
    </Link>
  );
}
