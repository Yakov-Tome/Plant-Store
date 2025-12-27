"use client";

import React, { useMemo, useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";

import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

import Modal from "@/components/Modal";
import OrderSuccessModal from "@/components/orders/OrderSuccessModal";
import { useCreateOrder } from "@/hooks/useCreateOrder";
import { useFirestoreDoc } from "@/hooks/generic/useFirestoreDoc";

export default function CartContent() {
  const { user } = useAuth();
  const {
    cart,
    loadingCart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const [modalOpen, setModalOpen] = useState(false);
  const [lastOrder, setLastOrder] = useState(null);

  const { data: userData } = useFirestoreDoc("users", user?.uid);

  console.log("User Data:", userData);

  const {
    createOrder,
    loading: creatingOrder,
    createdOrderId,
    error: createError,
  } = useCreateOrder();

  const total = useMemo(() => {
    return (cart || []).reduce(
      (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0),
      0
    );
  }, [cart]);

  const canSend = useMemo(() => {
    return (
      !!user?.uid && !loadingCart && !creatingOrder && (cart?.length || 0) > 0
    );
  }, [user?.uid, loadingCart, creatingOrder, cart?.length]);

  const handleCloseSuccessModal = () => {
    setModalOpen(false);
    clearCart();
  };

  const handleSendOrder = async () => {
    if (!user?.uid) return;
    if (!cart?.length) return;

    const itemsSnapshot = cart.map((item) => ({
      id: item.id,
      name: item.name,
      price: Number(item.price || 0),
      quantity: Number(item.quantity || 0),
      lineTotal: Number(item.price || 0) * Number(item.quantity || 0),
    }));

    const order = {
      userId: user.uid,
      name: userData?.name || "לא סופק",
      address: userData?.address || "לא סופק",
      city: userData?.city || "לא סופק",
      phone: userData?.phone || "לא סופק",
      items: itemsSnapshot,
      total,
      approved: false,
      createdAt: new Date().toISOString(),
    };

    try {
      const created = await createOrder(order);

      const orderIdString =
        (typeof created === "string" ? created : created?.id) ||
        (typeof createdOrderId === "string"
          ? createdOrderId
          : createdOrderId?.id) ||
        "—";

      setLastOrder({ ...order, orderId: orderIdString });
      setModalOpen(true);
    } catch (e) {
      console.error("FAILED TO SAVE ORDER:", e?.message || e);
    }
  };

  if (loadingCart) {
    return (
      <div className="max-w-4xl mx-auto p-4 font-mono">
        <div className="opacity-70">טוען עגלה...</div>
      </div>
    );
  }

  if (!cart?.length) {
    return (
      <div className="max-w-4xl mx-auto p-4 font-mono text-black pt-20">
        <div className="bg-base-100 rounded-box p-6 border border-base-200">
          <h1 className="text-xl font-bold mb-2">העגלה ריקה</h1>
          <p className="opacity-70">תוסיף מוצרים כדי לבצע הזמנה.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 font-mono text-black pt-20">
      <div className="bg-white/50 backdrop-blur-2xl p-6 rounded-box border border-base-200">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h1 className="text-2xl font-bold">עגלה</h1>

          <button
            className="btn btn-outline btn-neutral border-(--leaf-new) hover:bg-error hover:text-white hover:border-error"
            onClick={clearCart}
            type="button"
          >
            <AiOutlineClear className="text-2xl ml-1" />
            נקה עגלה
          </button>
        </div>
        {createError ? (
          <div className="alert alert-error mb-4">
            <span>אירעה שגיאה ביצירת הזמנה. נסה שוב.</span>
          </div>
        ) : null}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Items */}
          <div className="lg:col-span-2 space-y-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-base-100 rounded-box border border-base-200 p-4 flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <div className="font-bold text-lg truncate">{item.name}</div>
                  <div className="opacity-70 text-sm">
                    ₪{Number(item.price || 0).toFixed(0)} × {item.quantity} ={" "}
                    <span className="font-semibold">
                      ₪
                      {(
                        Number(item.price || 0) * Number(item.quantity || 0)
                      ).toFixed(0)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="btn btn-ghost btn-sm"
                    type="button"
                    onClick={() => decreaseQuantity(item.id)}
                    aria-label="הפחת כמות"
                  >
                    <CiSquareMinus className="text-2xl" />
                  </button>

                  <span className="min-w-8 text-center font-bold">
                    {item.quantity}
                  </span>

                  <button
                    className="btn btn-ghost btn-sm"
                    type="button"
                    onClick={() => increaseQuantity(item.id)}
                    aria-label="הגדל כמות"
                  >
                    <CiSquarePlus className="text-2xl" />
                  </button>

                  <button
                    className="btn btn-ghost btn-sm text-error"
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="הסר מוצר"
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-base-100 rounded-box border border-base-200 p-4 h-fit ">
            <h2 className="text-lg font-bold mb-3">סיכום הזמנה</h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="opacity-70">כמות פריטים</span>
                <span className="font-semibold">
                  {cart.reduce((s, i) => s + Number(i.quantity || 0), 0)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="opacity-70">סה״כ לתשלום</span>
                <span className="font-bold">₪{total.toFixed(0)}</span>
              </div>
            </div>

            <button
              className="btn btn-neutral bg-(--leaf-new) w-full mt-4 border-(--leaf-new) hover:btn-outline hover:bg-white/0 hover:text-(--leaf-new) hover:shadow-none"
              type="button"
              disabled={!canSend}
              onClick={handleSendOrder}
            >
              <IoStorefrontOutline className="text-2xl ml-1" />
              {creatingOrder ? "שולח הזמנה..." : "שלח הזמנה לחנות"}
            </button>

            {!userData ? (
              <p className="text-xs opacity-60 mt-2">
                * פרטי לקוח נטענים מהפרופיל (שם/כתובת/טלפון).
              </p>
            ) : null}
          </div>
        </div>
        {/* Success Modal */}
        <Modal open={modalOpen} onClose={handleCloseSuccessModal}>
          <OrderSuccessModal
            order={lastOrder}
            onClose={handleCloseSuccessModal}
          />
        </Modal>
      </div>
    </div>
  );
}
