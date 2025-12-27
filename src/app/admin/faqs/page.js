"use client";

import React, { useMemo, useState } from "react";
import { useFaqs, useFaqActions } from "@/hooks/useFaqs";
import FaqsReorderList from "@/components/admin/FaqsReorderList";

export default function AdminFaqsPage() {
  const {
    faqs,
    loading: listLoading,
    error: listError,
  } = useFaqs({
    onlyActive: false,
    live: true,
    orderField: "order",
    orderDirection: "asc",
  });

  const { createFaq, loading: saving, error: saveError } = useFaqActions();

  const [form, setForm] = useState({
    question: "",
    answer: "",
  });

  // Next order (simple approach)
  const nextOrder = useMemo(() => {
    if (!faqs?.length) return 1;
    const max = Math.max(...faqs.map((x) => Number(x.order) || 0));
    return max + 1;
  }, [faqs]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await createFaq({
      question: form.question,
      answer: form.answer,
      order: nextOrder,
      isActive: true,
    });
    setForm({ question: "", answer: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {/* Create form */}
      <div className="bg-white/40 rounded-box p-4 border border-base-200">
        <h1 className="text-2xl font-bold mb-4">שאלות נפוצות - ניהול</h1>

        <form onSubmit={onSubmit} className="space-y-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">שאלה</span>
            </div>
            <input
              className="input input-bordered w-full"
              value={form.question}
              onChange={(e) =>
                setForm((p) => ({ ...p, question: e.target.value }))
              }
              placeholder="הזן שאלה"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">תשובה</span>
            </div>
            <textarea
              className="textarea textarea-bordered w-full"
              rows={4}
              value={form.answer}
              onChange={(e) =>
                setForm((p) => ({ ...p, answer: e.target.value }))
              }
              placeholder="הזן תשובה"
            />
          </label>

          <button className="btn btn-neutral" disabled={saving}>
            {saving ? "שומר..." : "הוסף שאלה"}
          </button>

          {saveError && (
            <p className="text-error">
              {String(saveError.message || saveError)}
            </p>
          )}
        </form>
      </div>

      {/* Existing list in separate component */}
      {listError && (
        <div className="alert alert-error">
          {String(listError.message || listError)}
        </div>
      )}
      {listLoading ? (
        <div className="loading loading-dots loading-lg"></div>
      ) : (
        <FaqsReorderList faqs={faqs} />
      )}
    </div>
  );
}
