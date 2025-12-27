import { db } from "./config";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

export function subscribeToUserOrders(userId, onSuccess, onError) {
  const q = query(
    collection(db, "orders"),
    where("userId", "==", userId),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(
    q,
    (snapshot) => {
      const orders = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      onSuccess(orders);
    },
    (error) => {
      console.error("Error listening to user orders:", error);
      if (onError) onError(error);
    }
  );
}
