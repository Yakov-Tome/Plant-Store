"use client";

import Header from "@/components/Header";
import React from "react";
import { useFaqs } from "@/hooks/useFaqs";
import FaqList from "@/components/FaqList";

function FaqPage() {
  const { faqs, loading, error } = useFaqs({
    onlyActive: true,
    live: true,
    orderField: "order",
    orderDirection: "asc",
  });

  return (
    <div className="min-h-screen bg-[url('/faq.jpg')] bg-fixed bg-cover bg-center bg-no-repeat">
      <Header
        title="שאלות נפוצות"
        text="כאן תוכל למצוא תשובות לשאלות הנפוצות ביותר שלנו."
      />

      <div className="rounded-lg p-4 bg-[#F0F4E8]/60 max-w-3xl mx-auto mt-20">
        {loading && <div className="loading loading-dots loading-lg"></div>}

        {error && (
          <div className="alert alert-error">
            <span>{String(error.message || error)}</span>
          </div>
        )}

        {!loading && !error && <FaqList faqs={faqs} />}
      </div>
    </div>
  );
}

export default FaqPage;
