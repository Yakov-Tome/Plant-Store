"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/firebase/config";

const STATUS_PENDING = false;
const STATUS_APPROVED = true;

export function useOrdersRealtime() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = collection(db, "orders");
    const q = query(ref, orderBy("createdAt", "desc"));

    const unsub = onSnapshot(
      q,
      (snap) => {
        const next = snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));
        setOrders(next);
        setLoading(false);
        setError(null);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => unsub();
  }, []);

  const pendingOrders = useMemo(
    () => orders.filter((o) => o?.approved === STATUS_PENDING),
    [orders]
  );

  const approvedOrders = useMemo(
    () => orders.filter((o) => o?.approved === STATUS_APPROVED),
    [orders]
  );

  const approveOrder = useCallback(async (orderId) => {
    const ref = doc(db, "orders", orderId);
    await updateDoc(ref, {
      approved: STATUS_APPROVED,
      updatedAt: serverTimestamp(),
    });
  }, []);

  const updateOrderNote = useCallback(async (orderId, noteText) => {
    const ref = doc(db, "orders", orderId);
    await updateDoc(ref, {
      note: String(noteText ?? "").trim(),
      updatedAt: serverTimestamp(),
    });
  }, []);

  const removeOrder = useCallback(async (orderId) => {
    const ref = doc(db, "orders", orderId);
    await deleteDoc(ref);
  }, []);

  return {
    orders,
    pendingOrders,
    approvedOrders,
    approveOrder,
    updateOrderNote,
    removeOrder,
    loading,
    error,
    STATUS_PENDING,
    STATUS_APPROVED,
  };
}
