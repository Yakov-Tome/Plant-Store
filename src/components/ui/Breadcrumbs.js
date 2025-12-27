import Link from "next/link";
import React from "react";

function Breadcrumbs({ item, href }) {
  return (
    <div className="breadcrumbs text-sm text-gray-600 mb-4 float-right mr-4">
      <ul>
        <li>
          <Link href="/catalog">קטלוג</Link>
        </li>
        <li>
          <Link href={href}>{item}</Link>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
