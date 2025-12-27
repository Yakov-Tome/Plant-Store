"use client";

import React from "react";

export default function FaqList({ faqs = [] }) {
  if (!faqs.length) {
    return <div className="opacity-70">אין עדיין שאלות נפוצות.</div>;
  }

  return (
    <div className="space-y-2 font-mono">
      {faqs.map((f) => (
        <div
          key={f.id}
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border rounded-box"
        >
          <div className="collapse-title font-semibold bg-(--leaf-new)">
            {f.question}
          </div>

          <div className="collapse-content text-xl">
            <p className="whitespace-pre-wrap text-(--leaf-new) mt-4">
              {f.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
