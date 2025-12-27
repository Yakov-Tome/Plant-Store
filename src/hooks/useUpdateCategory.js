import { useState } from "react";
import { db } from "@/firebase/config";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";

export function useUpdateCategory() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCategory = async (categoryId, updates) => {
    setLoading(true);
    setError(null);

    try {
      const ref = doc(db, "categories", categoryId);

      await updateDoc(ref, {
        ...updates,
        updatedAt: serverTimestamp(),
      });
    } catch (err) {
      console.error("Error updating category:", err);
      setError(err.message || "Failed to update category");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateCategory, loading, error };
}
