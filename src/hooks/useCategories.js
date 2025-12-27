import { db } from "@/firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "categories"), (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCategories(list);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return { categories, loading };
}
