"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import ShortId from "../ShortId";

function formatDate(value) {
  if (value?.toDate) {
    try {
      return value.toDate().toLocaleString("he-IL");
    } catch {
      return "";
    }
  }
  if (value instanceof Date) return value.toLocaleString("he-IL");
  if (typeof value === "string") return value;
  return "";
}

function formatMoney(value) {
  return `₪${Number(value ?? 0).toLocaleString("he-IL")}`;
}

export default function OrdersTable({
  title = "",
  orders = [],

  // Actions (optional)
  onApprove,
  onDelete,
  onSaveNote,

  approvingId = null,
  deletingId = null,

  // Optional: if parent already manages saving state
  savingNoteId = null,
}) {
  // Local notes buffer per orderId (so typing won't spam Firestore)
  const [notesDraft, setNotesDraft] = useState({});

  // Local saving indicator per orderId (if parent doesn't provide savingNoteId)
  const [localSaving, setLocalSaving] = useState({}); // { [id]: boolean }

  // UI state: which order row is expanded
  const [openId, setOpenId] = useState(null);

  // Debounce timers per orderId
  const saveTimersRef = useRef({}); // { [id]: TimeoutId }

  // Track last saved value per orderId to avoid redundant saves
  const lastSavedRef = useRef({}); // { [id]: string }

  // Keep track of latest drafts in a ref for flushing on unmount
  const draftsRef = useRef({});
  useEffect(() => {
    draftsRef.current = notesDraft;
  }, [notesDraft]);

  // Sync drafts when orders change (keeps existing edits if user typed)
  const incomingNotes = useMemo(() => {
    const map = {};
    (orders || []).forEach((o) => {
      map[o.id] = o?.note ?? "";
    });
    return map;
  }, [orders]);

  useEffect(() => {
    // Only fill missing drafts, do not override user typing
    setNotesDraft((prev) => {
      const next = { ...prev };
      for (const [id, note] of Object.entries(incomingNotes)) {
        if (next[id] === undefined) next[id] = note;
      }
      return next;
    });

    // Initialize lastSaved snapshot from incoming notes (first time only)
    // so we can compare changes accurately.
    for (const [id, note] of Object.entries(incomingNotes)) {
      if (lastSavedRef.current[id] === undefined) {
        lastSavedRef.current[id] = String(note ?? "");
      }
    }
  }, [incomingNotes]);

  const toggleOpen = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const setSavingFor = (id, value) => {
    setLocalSaving((prev) => ({ ...prev, [id]: value }));
  };

  const clearTimer = (id) => {
    const t = saveTimersRef.current[id];
    if (t) {
      clearTimeout(t);
      delete saveTimersRef.current[id];
    }
  };

  const canSave = (id, nextValue) => {
    // Do not save if no handler
    if (!onSaveNote) return false;

    const nextStr = String(nextValue ?? "");
    const lastSaved = String(lastSavedRef.current[id] ?? "");
    // Do not save if unchanged compared to last saved value
    if (nextStr === lastSaved) return false;

    return true;
  };

  const saveNow = async (id, value) => {
    if (!canSave(id, value)) return;

    // If parent manages savingNoteId, we still can keep localSaving for UI hint;
    // localSaving won't conflict.
    setSavingFor(id, true);

    try {
      await onSaveNote(id, String(value ?? ""));
      lastSavedRef.current[id] = String(value ?? "");
    } finally {
      setSavingFor(id, false);
    }
  };

  const scheduleSave = (id, value) => {
    // Clear previous debounce timer
    clearTimer(id);

    // If nothing changed, don't even schedule
    if (!canSave(id, value)) return;

    // Debounce: save after user stops typing
    saveTimersRef.current[id] = setTimeout(() => {
      // Use latest draft value at execution time
      const latest = draftsRef.current?.[id] ?? "";
      saveNow(id, latest);
      clearTimer(id);
    }, 900);
  };

  const handleChangeNote = (id, value) => {
    setNotesDraft((prev) => ({ ...prev, [id]: value }));
    scheduleSave(id, value);
  };

  const handleBlurNote = (id) => {
    // On blur, save immediately (flush)
    clearTimer(id);
    const latest = draftsRef.current?.[id] ?? "";
    saveNow(id, latest);
  };

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      const timers = saveTimersRef.current || {};
      Object.values(timers).forEach((t) => clearTimeout(t));
      saveTimersRef.current = {};
    };
  }, []);

  return (
    <div className="space-y-4">
      {title ? <h2 className="text-lg font-bold">{title}</h2> : null}

      {orders.length === 0 ? (
        <div className="opacity-70">אין הזמנות להצגה.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table bg-base-100">
            <thead>
              <tr>
                <th>תאריך</th>
                <th>שם</th>

                <th>טלפון</th>

                <th>סכום</th>
                <th>סטטוס</th>
                <th>הערות</th>
                <th>פעולות</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((o) => {
                const isOpen = openId === o.id;
                const items = Array.isArray(o?.items) ? o.items : [];
                const itemsCount = items.length;
                const draft = notesDraft[o.id] ?? o?.note ?? "";
                const createdAtText = formatDate(o?.createdAt);

                const isSaving =
                  savingNoteId === o.id || Boolean(localSaving[o.id]);

                const hasChanges =
                  String(draft ?? "") !==
                  String(lastSavedRef.current[o.id] ?? "");

                return (
                  <React.Fragment key={o.id}>
                    {/* Main row (click to toggle) */}
                    <tr
                      className={`hover cursor-pointer ${
                        isOpen ? "bg-base-200/40" : ""
                      }`}
                      onClick={() => toggleOpen(o.id)}
                      title="לחץ לצפייה בפרטי ההזמנה"
                    >
                      <td className="whitespace-nowrap">{createdAtText}</td>

                      <td className="min-w-40">
                        <div className="font-semibold flex items-center gap-2">
                          <span>{o?.name || "-"}</span>
                        </div>
                        <div className="text-xs opacity-70">
                          {itemsCount} פריטים
                        </div>
                      </td>

                      <td className="whitespace-nowrap">{o?.phone || "-"}</td>

                      <td className="whitespace-nowrap font-semibold">
                        {formatMoney(o?.total)}
                      </td>

                      <td className="whitespace-nowrap">
                        <span
                          className={`badge badge-sm ${
                            o?.approved
                              ? "badge-success"
                              : "badge-warning animate-pulse"
                          }`}
                        >
                          {o?.approved ? "מאושר" : "ממתין לאישור"}
                        </span>
                      </td>

                      {/* Notes column */}
                      <td
                        className="min-w-[260px]"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex flex-col gap-1">
                          <textarea
                            className="bg-amber-200 border border-base-300 rounded-md w-full p-2 text-sm"
                            placeholder="הערות להזמנה…"
                            value={draft}
                            onChange={(e) =>
                              handleChangeNote(o.id, e.target.value)
                            }
                            onBlur={() => handleBlurNote(o.id)}
                            onClick={(e) => e.stopPropagation()}
                          />

                          {/* Auto-save status */}
                          <div className="text-xs opacity-70 flex items-center justify-between">
                            <span>
                              {!onSaveNote
                                ? "שמירה לא זמינה"
                                : isSaving
                                ? "שומר..."
                                : hasChanges
                                ? "ממתין לשמירה..."
                                : "נשמר"}
                            </span>

                            {/* Tiny dot indicator */}
                            <span
                              className={`inline-flex items-center gap-1 ${
                                isSaving
                                  ? "text-warning"
                                  : hasChanges
                                  ? "text-info"
                                  : "text-success"
                              }`}
                            >
                              ●
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Actions */}
                      <td
                        className="text-left whitespace-nowrap"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex gap-2 justify-start">
                          {onApprove ? (
                            <button
                              className="btn btn-sm btn-success"
                              onClick={(e) => {
                                e.stopPropagation();
                                onApprove(o.id);
                              }}
                              disabled={approvingId === o.id}
                            >
                              {approvingId === o.id ? "מאשר..." : "אשר הזמנה"}
                            </button>
                          ) : null}

                          {onDelete ? (
                            <button
                              className="btn btn-sm btn-error"
                              onClick={(e) => {
                                e.stopPropagation();
                                const ok = confirm("למחוק את ההזמנה לצמיתות?");
                                if (!ok) return;
                                onDelete(o.id);
                              }}
                              disabled={deletingId === o.id}
                            >
                              {deletingId === o.id ? "מוחק..." : "מחק"}
                            </button>
                          ) : null}

                          {/* Small visual hint */}
                          <button
                            className="btn btn-sm btn-ghost"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleOpen(o.id);
                            }}
                            title={isOpen ? "סגור פרטים" : "פתח פרטים"}
                          >
                            {isOpen ? "▲" : "▼"}
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Details row (collapse style like your component) */}
                    {isOpen ? (
                      <tr>
                        <td colSpan={9} className="p-0">
                          <div
                            tabIndex={0}
                            className="collapse collapse-arrow bg-base-100 border-base-300 border rounded-none"
                          >
                            <div className="collapse-title font-semibold">
                              פרטי הזמנה — {o?.name || "-"} •{" "}
                              {formatMoney(o?.total)}
                            </div>

                            <div className="collapse-content text-sm">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Left: customer/order meta */}
                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <span className="font-semibold">
                                      מזהה הזמנה:
                                    </span>
                                    <span className="opacity-80">
                                      {ShortId(o?.id)}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="font-semibold">
                                      תאריך:
                                    </span>
                                    <span className="opacity-80">
                                      {createdAtText}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="font-semibold">
                                      טלפון:
                                    </span>
                                    <span className="opacity-80">
                                      {o?.phone || "-"}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="font-semibold">עיר:</span>
                                    <span className="opacity-80">
                                      {o?.city || "-"}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="font-semibold">
                                      כתובת:
                                    </span>
                                    <span className="opacity-80">
                                      {o?.address || "-"}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="font-semibold">
                                      סטטוס:
                                    </span>
                                    <span className="badge badge-outline">
                                      {o?.approved ? "מאושר" : "ממתין לאישור"}
                                    </span>
                                  </div>
                                </div>

                                {/* Right: items */}
                                <div className="space-y-2">
                                  <div className="font-semibold">
                                    פריטים בהזמנה
                                  </div>

                                  {items.length === 0 ? (
                                    <div className="opacity-70">
                                      אין פריטים.
                                    </div>
                                  ) : (
                                    <div className="overflow-x-auto">
                                      <table className="table table-sm">
                                        <thead>
                                          <tr>
                                            <th>מוצר</th>
                                            <th>כמות</th>
                                            <th>מחיר</th>
                                            <th>סה״כ שורה</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {items.map((it, idx) => (
                                            <tr key={`${o.id}-it-${idx}`}>
                                              <td className="min-w-40">
                                                <div className="font-semibold">
                                                  {it?.name || "-"}
                                                </div>
                                                <div className="text-xs opacity-70 flex items-center gap-1">
                                                  <p>מק״ט</p>
                                                  {ShortId(it?.id) || ""}{" "}
                                                </div>
                                              </td>
                                              <td className="whitespace-nowrap">
                                                {Number(it?.quantity ?? 0)}
                                              </td>
                                              <td className="whitespace-nowrap">
                                                {formatMoney(it?.price)}
                                              </td>
                                              <td className="whitespace-nowrap font-semibold">
                                                {formatMoney(it?.lineTotal)}
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                        <tfoot>
                                          <tr>
                                            <td
                                              colSpan={3}
                                              className="text-left font-bold"
                                            >
                                              סה״כ
                                            </td>
                                            <td className="font-bold">
                                              {formatMoney(o?.total)}
                                            </td>
                                          </tr>
                                        </tfoot>
                                      </table>
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* Note preview */}
                              <div className="mt-4">
                                <div className="font-semibold mb-1">הערות</div>
                                <div className="bg-base-200/50 border border-base-300 rounded-md p-3">
                                  {String(o?.note ?? "").trim()
                                    ? o.note
                                    : "אין הערות."}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ) : null}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
