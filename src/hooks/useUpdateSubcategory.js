import { useState } from "react";
import { db } from "@/firebase/config";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";

export function useUpdateSubcategory() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateSubcategory = async (subcategoryId, updates) => {
    setLoading(true);
    setError(null);

    try {
      const ref = doc(db, "subcategories", subcategoryId);

      await updateDoc(ref, {
        ...updates,
        updatedAt: serverTimestamp(),
      });
    } catch (err) {
      console.error("Error updating subcategory:", err);
      setError(err.message || "Failed to update subcategory");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateSubcategory, loading, error };
}
