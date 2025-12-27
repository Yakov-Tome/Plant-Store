"use client";

import { useState } from "react";
import { db } from "@/firebase/config";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";

export function useUpdateUserProfile() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateUserProfile = async (uid, data) => {
    if (!uid) throw new Error("Missing uid");

    try {
      setLoading(true);
      setError(null);

      const ref = doc(db, "users", uid);

      await updateDoc(ref, {
        ...data,
        updatedAt: serverTimestamp(),
      });
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateUserProfile, loading, error };
}
