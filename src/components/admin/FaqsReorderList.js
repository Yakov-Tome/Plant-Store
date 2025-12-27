"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useFaqActions } from "@/hooks/useFaqs";
import SortableFaqRow from "./SortableFaqRow";

export default function FaqsReorderList({
  faqs = [],
  title = "רשימת שאלות קיימות (גרור לשינוי סדר)",
}) {
  const { updateFaqOrders, updateFaq, deleteFaq, loading, error } =
    useFaqActions();

  // Local copy for instant drag UX
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(Array.isArray(faqs) ? faqs : []);
  }, [faqs]);

  const itemIds = useMemo(() => items.map((x) => x.id), [items]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const onDragEnd = async (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setItems((prev) => {
      const oldIndex = prev.findIndex((x) => x.id === active.id);
      const newIndex = prev.findIndex((x) => x.id === over.id);
      const next = arrayMove(prev, oldIndex, newIndex);

      // Persist new order (1..N)
      queueMicrotask(async () => {
        const payload = next.map((x, idx) => ({ id: x.id, order: idx + 1 }));
        try {
          await updateFaqOrders(payload);
        } catch {
          // Firestore live listener will re-sync anyway
        }
      });

      return next;
    });
  };

  // Actions passed down to each row
  const onToggleActive = async (id, current) => {
    await updateFaq(id, { isActive: !current });
  };

  const onInlineSave = async (id, patch) => {
    await updateFaq(id, patch);
  };

  const onRemove = async (id) => {
    const ok = confirm("למחוק את השאלה לצמיתות?");
    if (!ok) return;
    await deleteFaq(id);
  };

  return (
    <div className="bg-white/40 rounded-box p-4 border border-base-200 text-black">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h2 className="text-lg font-bold">{title}</h2>

        <div className="flex items-center gap-2">
          <span className="badge badge-outline">{items.length} פריטים</span>
          {loading && <span className="loading loading-dots loading-sm"></span>}
        </div>
      </div>

      {error && (
        <div className="alert alert-error mb-3">
          <span>{String(error.message || error)}</span>
        </div>
      )}

      {items.length === 0 ? (
        <div className="opacity-70">אין עדיין שאלות.</div>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}
        >
          <SortableContext
            items={itemIds}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-2">
              {items.map((faq, index) => (
                <SortableFaqRow
                  key={faq.id}
                  id={faq.id}
                  faq={faq}
                  index={index}
                  onToggleActive={onToggleActive}
                  onInlineSave={onInlineSave}
                  onRemove={onRemove}
                  busy={loading}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}

      <p className="mt-3 text-xs opacity-70">
        גרור באמצעות ☰ לשינוי סדר. עריכה/הסתרה/מחיקה זמינים בכל שורה.
      </p>
    </div>
  );
}
