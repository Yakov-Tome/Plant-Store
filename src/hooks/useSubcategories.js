import { db } from "@/firebase/config";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";

export function useSubcategories(categoryId) {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    if (!categoryId) return;

    const q = query(
      collection(db, "subcategories"),
      where("categoryId", "==", categoryId)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSubcategories(list);
    });

    return () => unsub();
  }, [categoryId]);

  return { subcategories };
}
