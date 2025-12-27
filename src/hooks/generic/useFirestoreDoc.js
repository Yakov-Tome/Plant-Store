import { useEffect, useState } from "react";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export function useFirestoreDoc(
  path,
  id,
  { listen = true, enabled = true } = {}
) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!!(path && id && enabled));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!path || !id || !enabled) return;

    const ref = doc(db, path, id);
    setLoading(true);

    if (listen) {
      const unsub = onSnapshot(
        ref,
        (snap) => {
          setData(snap.exists() ? { id: snap.id, ...snap.data() } : null);
          setLoading(false);
        },
        (err) => {
          setError(err);
          setLoading(false);
        }
      );
      return () => unsub();
    } else {
      getDoc(ref)
        .then((snap) => {
          setData(snap.exists() ? { id: snap.id, ...snap.data() } : null);
        })
        .catch(setError)
        .finally(() => setLoading(false));
    }
  }, [path, id, listen, enabled]);

  return { data, loading, error };
}
