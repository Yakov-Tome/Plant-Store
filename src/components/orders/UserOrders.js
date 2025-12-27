"use client";

import { useUserOrders } from "@/hooks/useUserOrders";
import ShortId from "../ShortId";

export default function UserOrders() {
  const { orders, loading, error, isLoggedIn } = useUserOrders();

  if (!isLoggedIn) {
    return (
      <div className="max-w-2xl mx-auto mt-8 font-mono">
        <p>כדי לראות הזמנות יש להתחבר למערכת.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto mt-8 font-mono">
        <p>טוען את ההזמנות שלך...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto mt-8 font-mono text-red-500">
        <p>אירעה שגיאה במהלך טעינת ההזמנות.</p>
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="max-w-2xl mx-auto font-mono text-(--leaf-new) flex justify-center items-center">
        <p>עדיין לא ביצעת הזמנות </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white/60 backdrop-blur-2xl p-6 rounded-3xl shadow-sm font-mono h-164 overflow-y-auto text-center scroll-mashtela">
      <h2 className="text-2xl font-semibold mb-4 text-(--leaf-new)">
        ההזמנות שלי
      </h2>

      <ul className="space-y-4 text-(--leaf-new)">
        {orders.map((order) => {
          const createdAt = order.createdAt?.toDate?.() ?? null;

          return (
            <li
              key={order.id}
              className="border rounded-lg p-4 bg-base-100 shadow-sm"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold">מזהה הזמנה:</span>
                <span>{ShortId(order.providerOrderId || order.id)}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span>תאריך:</span>
                <span>
                  {createdAt ? createdAt.toLocaleString("he-IL") : "-"}
                </span>
              </div>

              <div className="flex justify-between mb-2">
                <span>סכום:</span>
                <span>{order.total} ₪</span>
              </div>

              <div className="flex justify-between mb-2">
                <span>סטטוס:</span>
                <span
                  className={`badge ${
                    order.approved
                      ? "badge-success"
                      : "badge-warning animate-pulse"
                  }`}
                >
                  {order.approved ? "מאושר" : "ממתין לאישור"}
                </span>
              </div>

              {order.items?.length ? (
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow bg-base-100 border border-base-300 mt-3 rounded-lg text-white"
                >
                  <div className="collapse-title font-semibold text-sm bg-black text-white max-h-8 flex items-center justify-center">
                    הצג פרטי הזמנה
                  </div>
                  <div className="collapse-content text-sm border border-(--leaf-new)/20 bg-(--leaf-new) text-white text-right">
                    <ul className="space-y-1 mt-3">
                      {order.items.map((item) => (
                        <li key={item.id}>
                          {item.name} × {item.quantity} — {item.price} ₪
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
