"use client";

import React from "react";
import ShortId from "../ShortId";

export default function OrderSuccessModal({ order, onClose }) {
  if (!order) return null;
  console.log(order);

  return (
    <div className="w-full max-w-2xl font-mono">
      <div className="bg-base-100 rounded-box border border-base-200 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold">✅ ההזמנה נשלחה בהצלחה!</h2>
            <p className="opacity-70 text-sm mt-1">
              מספר הזמנה:{" "}
              <span className="font-bold">{ShortId(order.orderId)}</span>
            </p>
          </div>

          <button
            className="btn btn-sm btn-outline"
            type="button"
            onClick={onClose}
          >
            סגור
          </button>
        </div>

        <div className="divider my-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="bg-base-200/40 rounded-box p-3">
            <div className="font-bold mb-1">פרטי לקוח</div>
            <div>שם: {order.name}</div>
            <div>טלפון: {order.phone}</div>
            <div>עיר: {order.city}</div>
            <div>כתובת: {order.address}</div>
          </div>

          <div className="bg-base-200/40 rounded-box p-3">
            <div className="font-bold mb-1">סיכום</div>
            <div>
              כמות פריטים:{" "}
              {order.items?.reduce((s, i) => s + Number(i.quantity || 0), 0)}
            </div>
            <div className="font-bold mt-1">
              סה״כ לתשלום: ₪{Number(order.total || 0).toFixed(0)}
            </div>
            <div className="opacity-70 mt-1">סטטוס: ממתין לאישור</div>
          </div>
        </div>

        <div className="divider my-4" />

        <div className="text-sm">
          <div className="font-bold mb-2">פריטים בהזמנה</div>

          <div className="max-h-64 overflow-auto border border-base-200 rounded-box">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>מוצר</th>
                  <th className="text-center">כמות</th>
                  <th className="text-end">מחיר</th>
                  <th className="text-end">סה״כ</th>
                </tr>
              </thead>
              <tbody>
                {(order.items || []).map((it) => (
                  <tr key={it.id}>
                    <td className="max-w-[220px] truncate">{it.name}</td>
                    <td className="text-center">{it.quantity}</td>
                    <td className="text-end">
                      ₪{Number(it.price || 0).toFixed(0)}
                    </td>
                    <td className="text-end">
                      ₪{Number(it.lineTotal || 0).toFixed(0)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            className="btn btn-neutral w-full mt-4"
            type="button"
            onClick={onClose}
          >
            סיום
          </button>
        </div>
      </div>
    </div>
  );
}
