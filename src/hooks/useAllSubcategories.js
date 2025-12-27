import { db } from "@/firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";

export function useAllSubcategories() {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "subcategories"), (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSubcategories(list);
    });

    return () => unsub();
  }, []);

  return { subcategories };
}
