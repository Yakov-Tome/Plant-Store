"use client";

import { useCallback, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/config";

export function useCreateOrder() {
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState(null);
  const [createdOrderId, setCreatedOrderId] = useState(null);

  const createOrder = useCallback(async (order) => {
    setCreating(true);
    setError(null);
    setCreatedOrderId(null);

    try {
      if (!order?.userId) throw new Error("Missing userId");
      if (!Array.isArray(order?.items) || order.items.length === 0)
        throw new Error("Order items are empty");

      const ref = collection(db, "orders");

      const payload = {
        userId: String(order.userId),
        name: String(order.name ?? "לא סופק"),
        address: String(order.address ?? "לא סופק"),
        city: String(order.city ?? "לא סופק"),
        phone: String(order.phone ?? "לא סופק"),

        items: order.items.map((it) => ({
          id: String(it.id),
          name: String(it.name ?? ""),
          price: Number(it.price ?? 0),
          quantity: Number(it.quantity ?? 0),
          lineTotal: Number(
            it.lineTotal ?? Number(it.price ?? 0) * Number(it.quantity ?? 0)
          ),
        })),

        total: Number(order.total ?? 0),
        approved: Boolean(order.approved ?? false),

        createdAt: serverTimestamp(),
      };

      const docRef = await addDoc(ref, payload);
      setCreatedOrderId(docRef.id);
      return { id: docRef.id };
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setCreating(false);
    }
  }, []);

  return { createOrder, creating, error, createdOrderId };
}
