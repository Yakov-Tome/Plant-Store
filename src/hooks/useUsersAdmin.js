"use client";

import { useEffect, useMemo, useState } from "react";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/firebase/config";

export function useUsersAdmin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = collection(db, "users");

    const unsub = onSnapshot(
      ref,
      (snap) => {
        const results = snap.docs.map((d) => ({
          id: d.id, // doc id
          ...d.data(),
        }));
        setUsers(results);
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsub();
  }, []);

  const sortedUsers = useMemo(() => {
    return [...users].sort((a, b) => {
      const adminDiff = (b.isAdmin ? 1 : 0) - (a.isAdmin ? 1 : 0);
      if (adminDiff !== 0) return adminDiff;
      return (a.name || "").localeCompare(b.name || "", "he");
    });
  }, [users]);

  const toggleAdmin = async (userDocId, currentValue) => {
    try {
      setUpdatingId(userDocId);
      setError(null);

      const ref = doc(db, "users", userDocId);
      await updateDoc(ref, {
        isAdmin: !currentValue,
        updatedAt: serverTimestamp(),
      });
    } catch (err) {
      console.error("Failed to toggle admin:", err);
      setError(err);
      throw err;
    } finally {
      setUpdatingId(null);
    }
  };

  return {
    users: sortedUsers,
    loading,
    error,
    updatingId,
    toggleAdmin,
  };
}
