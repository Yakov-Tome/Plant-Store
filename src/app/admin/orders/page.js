"use client";

import React, { useId, useState } from "react";
import OrdersTable from "@/components/orders/OrdersTable";
import { useOrdersRealtime } from "@/hooks/useOrdersRealtime";

export default function AdminOrdersPage() {
  const tabsName = `orders_tabs_${useId()}`;

  const {
    pendingOrders,
    approvedOrders,
    approveOrder,
    removeOrder,
    updateOrderNote,
    loading,
    error,
  } = useOrdersRealtime();

  const [approvingId, setApprovingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [savingNoteId, setSavingNoteId] = useState(null);

  const handleApprove = async (orderId) => {
    try {
      setApprovingId(orderId);
      await approveOrder(orderId);
    } catch (e) {
      console.error(e);
      alert("שגיאה באישור ההזמנה. בדוק קונסול.");
    } finally {
      setApprovingId(null);
    }
  };

  const handleDelete = async (orderId) => {
    try {
      setDeletingId(orderId);
      await removeOrder(orderId);
    } catch (e) {
      console.error(e);
      alert("שגיאה במחיקת ההזמנה. בדוק קונסול.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleSaveNote = async (orderId, noteText) => {
    try {
      setSavingNoteId(orderId);
      await updateOrderNote(orderId, noteText);
    } catch (e) {
      console.error(e);
      alert("שגיאה בשמירת ההערה. בדוק קונסול.");
    } finally {
      setSavingNoteId(null);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="text-lg font-bold mb-4">הזמנות</div>
        <div className="opacity-70">טוען הזמנות בזמן אמת…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="text-lg font-bold mb-4">הזמנות</div>
        <div className="alert alert-error">
          <span>שגיאה בטעינת הזמנות: {String(error?.message || error)}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm mx-auto my-4 min-w-7xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">הזמנות</h1>

        <div className="stats shadow bg-base-100">
          <div className="stat">
            <div className="stat-title">ממתינות</div>
            <div className="stat-value text-warning">
              {pendingOrders.length}
            </div>
          </div>
          <div className="stat">
            <div className="stat-title">מאושרות</div>
            <div className="stat-value text-success">
              {approvedOrders.length}
            </div>
          </div>
        </div>
      </div>

      <div className="tabs tabs-border">
        <input
          type="radio"
          name={tabsName}
          className="tab"
          aria-label="הזמנות ממתינות"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-6">
          <OrdersTable
            title="הזמנות ממתינות"
            orders={pendingOrders}
            onApprove={handleApprove}
            onDelete={handleDelete}
            onSaveNote={handleSaveNote}
            approvingId={approvingId}
            deletingId={deletingId}
            savingNoteId={savingNoteId}
          />
        </div>

        <input
          type="radio"
          name={tabsName}
          className="tab"
          aria-label="הזמנות שאושרו"
        />
        <div className="tab-content border-base-300 bg-base-100 p-6">
          <OrdersTable
            title="הזמנות שאושרו"
            orders={approvedOrders}
            onDelete={handleDelete}
            onSaveNote={handleSaveNote}
            deletingId={deletingId}
            savingNoteId={savingNoteId}
          />
        </div>
      </div>
    </div>
  );
}
