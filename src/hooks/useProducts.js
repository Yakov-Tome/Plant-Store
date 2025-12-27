import { db } from "@/firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "products"), (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(list);
    });

    return () => unsub();
  }, []);

  return { products };
}
