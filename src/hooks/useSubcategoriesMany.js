"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export function useSubcategoriesMany(categoryIds = []) {
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const normalizedIds = useMemo(() => {
    return (categoryIds || []).filter(Boolean).map(String);
  }, [categoryIds]);

  useEffect(() => {
    let alive = true;

    const run = async () => {
      try {
        setLoading(true);
        setError(null);

        if (normalizedIds.length === 0) {
          if (alive) setSubcategories([]);
          return;
        }

        const chunks = [];
        for (let i = 0; i < normalizedIds.length; i += 10) {
          chunks.push(normalizedIds.slice(i, i + 10));
        }

        const all = [];

        for (const chunk of chunks) {
          const qRef = query(
            collection(db, "subcategories"),
            where("categoryId", "in", chunk)
          );
          const snap = await getDocs(qRef);

          const results = snap.docs.map((d) => ({
            id: d.id,
            ...d.data(),
          }));

          all.push(...results);
        }

        const unique = Array.from(new Map(all.map((x) => [x.id, x])).values());

        if (alive) setSubcategories(unique);
      } catch (err) {
        if (alive) setError(err);
      } finally {
        if (alive) setLoading(false);
      }
    };

    run();

    return () => {
      alive = false;
    };
  }, [normalizedIds]);

  return { subcategories, loading, error };
}
