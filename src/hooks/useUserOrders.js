import { useEffect, useState } from "react";
import { subscribeToUserOrders } from "@/firebase/orders";
import { useAuth } from "@/context/AuthContext";

export function useUserOrders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      setOrders([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    const unsubscribe = subscribeToUserOrders(
      user.uid,
      (ordersData) => {
        setOrders(ordersData);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => {
      unsubscribe && unsubscribe();
    };
  }, [user]);

  return {
    orders,
    loading,
    error,
    isLoggedIn: !!user,
  };
}
