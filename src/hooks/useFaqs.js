"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
  writeBatch,
} from "firebase/firestore";
import { db } from "@/firebase/config";

export function useFaqs(options = {}) {
  const {
    enabled = true,
    onlyActive = true,
    live = false,
    orderField = "order",
    orderDirection = "asc",
  } = options;

  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(Boolean(enabled));
  const [error, setError] = useState(null);

  const q = useMemo(() => {
    const ref = collection(db, "faqs");
    const parts = [];

    if (onlyActive) parts.push(where("isActive", "==", true));
    parts.push(orderBy(orderField, orderDirection));

    return query(ref, ...parts);
  }, [onlyActive, orderField, orderDirection]);

  const refetch = useCallback(async () => {
    if (!enabled) return;

    setLoading(true);
    setError(null);

    try {
      const snap = await getDocs(q);
      const results = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setFaqs(results);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [enabled, q]);

  useEffect(() => {
    if (!enabled) {
      setLoading(false);
      return;
    }

    if (!live) {
      refetch();
      return;
    }

    setLoading(true);
    setError(null);

    const unsub = onSnapshot(
      q,
      (snap) => {
        const results = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setFaqs(results);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => unsub();
  }, [enabled, live, q, refetch]);

  return { faqs, loading, error, refetch };
}

export function useFaqActions() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createFaq = useCallback(
    async ({ question, answer, order = 1, isActive = true }) => {
      setLoading(true);
      setError(null);

      try {
        if (!String(question || "").trim()) throw new Error("שאלה נדרשת");
        if (!String(answer || "").trim()) throw new Error("תשובה נדרשת");

        const ref = collection(db, "faqs");

        const docRef = await addDoc(ref, {
          question: String(question).trim(),
          answer: String(answer).trim(),
          order: Number(order) || 1,
          isActive: Boolean(isActive),
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });

        return { id: docRef.id };
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const updateFaq = useCallback(async (id, patch = {}) => {
    setLoading(true);
    setError(null);

    try {
      if (!id) throw new Error("FAQ id is required");

      const faqRef = doc(db, "faqs", id);

      const nextPatch = { ...patch, updatedAt: serverTimestamp() };

      if (typeof nextPatch.question === "string")
        nextPatch.question = nextPatch.question.trim();
      if (typeof nextPatch.answer === "string")
        nextPatch.answer = nextPatch.answer.trim();
      if (typeof nextPatch.order !== "undefined")
        nextPatch.order = Number(nextPatch.order) || 1;
      if (typeof nextPatch.isActive !== "undefined")
        nextPatch.isActive = Boolean(nextPatch.isActive);

      await updateDoc(faqRef, nextPatch);
      return true;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteFaq = useCallback(async (id) => {
    setLoading(true);
    setError(null);

    try {
      if (!id) throw new Error("FAQ id is required");
      await deleteDoc(doc(db, "faqs", id));
      return true;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const disableFaq = useCallback(
    async (id) => updateFaq(id, { isActive: false }),
    [updateFaq]
  );

  const updateFaqOrders = useCallback(async (items = []) => {
    setLoading(true);
    setError(null);

    try {
      if (!Array.isArray(items) || items.length === 0) return true;

      const batch = writeBatch(db);

      items.forEach((it) => {
        if (!it?.id) return;
        const ref = doc(db, "faqs", it.id);
        batch.update(ref, {
          order: Number(it.order) || 1,
          updatedAt: serverTimestamp(),
        });
      });

      await batch.commit();
      return true;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    createFaq,
    updateFaq,
    deleteFaq,
    disableFaq,
    updateFaqOrders,
    loading,
    error,
  };
}
