"use client";

// src/components/admin/SortableFaqRow.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableFaqRow({
  id,
  faq,
  index,
  onToggleActive,
  onInlineSave,
  onRemove,
  busy = false,
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = useMemo(
    () => ({ transform: CSS.Transform.toString(transform), transition }),
    [transform, transition]
  );

  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState({ question: "", answer: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setDraft({
      question: String(faq?.question || ""),
      answer: String(faq?.answer || ""),
    });
  }, [faq?.question, faq?.answer]);

  const canSave = draft.question.trim() && draft.answer.trim();

  const startEdit = () => setEditing(true);

  const cancelEdit = () => {
    setEditing(false);
    setDraft({
      question: String(faq?.question || ""),
      answer: String(faq?.answer || ""),
    });
  };

  const saveEdit = async () => {
    if (!canSave) return;
    setSaving(true);
    try {
      await onInlineSave(id, {
        question: draft.question.trim(),
        answer: draft.answer.trim(),
      });
      setEditing(false);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={[
        "bg-base-100 rounded-box border border-base-200 p-3",
        "flex items-start gap-3",
        isDragging ? "opacity-60" : "opacity-100",
      ].join(" ")}
    >
      {/* Drag handle */}
      <button
        type="button"
        className="btn btn-ghost btn-xs mt-1 cursor-grab active:cursor-grabbing"
        aria-label="Drag"
        {...attributes}
        {...listeners}
        disabled={busy || saving}
      >
        ☰
      </button>

      <div className="flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="badge badge-outline">#{index + 1}</span>
              <span
                className={`badge ${
                  faq?.isActive ? "badge-success" : "badge-ghost"
                }`}
              >
                {faq?.isActive ? "פעיל" : "מוסתר"}
              </span>
              <span className="badge badge-ghost">
                מיקום: {faq?.order ?? index + 1}
              </span>
            </div>

            {!editing ? (
              <>
                <p className="font-bold wrap-break-word">{faq?.question}</p>
                <p className="mt-1 opacity-80 whitespace-pre-wrap wrap-break-word">
                  {faq?.answer}
                </p>
              </>
            ) : (
              <div className="space-y-2">
                <input
                  className="input input-bordered w-full"
                  value={draft.question}
                  onChange={(e) =>
                    setDraft((p) => ({ ...p, question: e.target.value }))
                  }
                  placeholder="שאלה"
                  disabled={saving}
                />
                <textarea
                  className="textarea textarea-bordered w-full"
                  rows={3}
                  value={draft.answer}
                  onChange={(e) =>
                    setDraft((p) => ({ ...p, answer: e.target.value }))
                  }
                  placeholder="תשובה"
                  disabled={saving}
                />
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 shrink-0">
            {!editing ? (
              <>
                <button
                  type="button"
                  className="btn btn-outline btn-sm text-(--leaf-new)"
                  onClick={startEdit}
                  disabled={busy || saving}
                >
                  ערוך
                </button>

                <button
                  type="button"
                  className={`btn btn-sm ${
                    faq?.isActive
                      ? "btn-outline text-(--leaf-new)"
                      : "btn-success"
                  }`}
                  onClick={() => onToggleActive(id, Boolean(faq?.isActive))}
                  disabled={busy || saving}
                >
                  {faq?.isActive ? "הסתר" : "הצג"}
                </button>

                <button
                  type="button"
                  className="btn btn-error btn-outline btn-sm "
                  onClick={() => onRemove(id)}
                  disabled={busy || saving}
                >
                  מחק
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-neutral btn-sm"
                  onClick={saveEdit}
                  disabled={busy || saving || !canSave}
                >
                  {saving ? "שומר..." : "שמור"}
                </button>

                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={cancelEdit}
                  disabled={busy || saving}
                >
                  ביטול
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
