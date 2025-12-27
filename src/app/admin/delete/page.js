"use client";

import React, { useState } from "react";
import { useCategories } from "@/hooks/useCategories";
import { useAllSubcategories } from "@/hooks/useAllSubcategories";
import { useProducts } from "@/hooks/useProducts";
import { useDeleteCategory } from "@/hooks/useDeleteCategory";
import { useDeleteSubcategory } from "@/hooks/useDeleteSubcategory";
import { useDeleteProduct } from "@/hooks/useDeleteProduct";
import { FaFolder } from "react-icons/fa";
import { FaFolderTree } from "react-icons/fa6";
import { PiPottedPlantFill } from "react-icons/pi";

export default function DeletePage() {
  const { categories } = useCategories();
  const { subcategories } = useAllSubcategories();
  const { products } = useProducts();

  const { deleteCategory } = useDeleteCategory();
  const { deleteSubcategory } = useDeleteSubcategory();
  const { deleteProduct } = useDeleteProduct();

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleDeleteProduct = async (id) => {
    setMessage("");
    setError("");
    try {
      await deleteProduct(id);
      setMessage("המוצר נמחק בהצלחה ✅");
    } catch (err) {
      setError(err.message || "שגיאה במחיקת מוצר");
    }
  };

  const handleDeleteCategory = async (id) => {
    setMessage("");
    setError("");
    try {
      await deleteCategory(id);
      setMessage("הקטגוריה נמחקה בהצלחה ✅");
    } catch (err) {
      setError(err.message || "שגיאה במחיקת קטגוריה");
    }
  };

  const handleDeleteSubcategory = async (id) => {
    setMessage("");
    setError("");
    try {
      await deleteSubcategory(id);
      setMessage("תת־הקטגוריה נמחקה בהצלחה ✅");
    } catch (err) {
      setError(err.message || "שגיאה במחיקת תת־קטגוריה");
    }
  };

  // Helper: count products per category / subcategory
  const getCategoryProductCount = (categoryId) =>
    products.filter((p) => p.categoryId === categoryId).length;

  const getSubcategoryProductCount = (subcategoryId) =>
    products.filter((p) => p.subcategoryId === subcategoryId).length;

  return (
    <div
      className="p-10 text-right font-mono text-[#084D49] w-full max-w-6xl mx-auto"
      dir="rtl"
    >
      <h1 className="text-xl font-bold text-center mb-8">
        מחיקת מוצרים, קטגוריות ותתי־קטגוריות
      </h1>

      {/* Alerts */}
      <div className="max-w-5xl mx-auto mb-6 space-y-3">
        {message && (
          <div className="alert alert-success">
            <span>{message}</span>
          </div>
        )}
        {error && (
          <div className="alert alert-error">
            <span>{error}</span>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* ======== מחיקת קטגוריות ======== */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl mb-2">
              <FaFolder /> קטגוריות
            </h2>
            <p className="text-sm text-base-content/70 mb-4">
              ניתן למחוק רק קטגוריות ללא מוצרים.
            </p>

            <div className="space-y-3 max-h-[420px] overflow-y-auto">
              {categories.length === 0 && (
                <p className="text-sm text-base-content/60">
                  אין קטגוריות במערכת.
                </p>
              )}

              {categories.map((cat) => {
                const count = getCategoryProductCount(cat.id);
                const canDelete = count === 0;

                return (
                  <div
                    key={cat.id}
                    className="flex items-center justify-between border border-base-300 rounded-lg px-3 py-2"
                  >
                    <div>
                      <div className="font-semibold">{cat.name}</div>
                      <div className="text-xs text-base-content/60">
                        מוצרים בקטגוריה: {count}
                      </div>
                    </div>
                    <button
                      className="btn btn-error btn-sm"
                      disabled={!canDelete}
                      onClick={() => handleDeleteCategory(cat.id)}
                    >
                      מחיקה
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ======== מחיקת תתי־קטגוריות ======== */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl mb-2">
              <FaFolderTree /> תתי־קטגוריות
            </h2>
            <p className="text-sm text-base-content/70 mb-4">
              ניתן למחוק רק תתי־קטגוריות ללא מוצרים.
            </p>

            <div className="space-y-3 max-h-[420px] overflow-y-auto">
              {subcategories.length === 0 && (
                <p className="text-sm text-base-content/60">
                  אין תתי־קטגוריות במערכת.
                </p>
              )}

              {subcategories.map((sub) => {
                const count = getSubcategoryProductCount(sub.id);
                const canDelete = count === 0;

                const parentCategory = categories.find(
                  (c) => c.id === sub.categoryId
                );

                return (
                  <div
                    key={sub.id}
                    className="flex items-center justify-between border border-base-300 rounded-lg px-3 py-2"
                  >
                    <div>
                      <div className="font-semibold">{sub.name}</div>
                      <div className="text-xs text-base-content/60">
                        קטגוריית אב: {parentCategory?.name || "לא נמצא"}
                      </div>
                      <div className="text-xs text-base-content/60">
                        מוצרים בתת־קטגוריה: {count}
                      </div>
                    </div>
                    <button
                      className="btn btn-error btn-sm"
                      disabled={!canDelete}
                      onClick={() => handleDeleteSubcategory(sub.id)}
                    >
                      מחיקה
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ======== מחיקת מוצרים ======== */}
        <div className="card bg-base-100 shadow-xl col-span-1 lg:col-span-2">
          <div className="card-body">
            <h2 className="card-title text-xl mb-2">
              <PiPottedPlantFill /> מוצרים
            </h2>
            <p className="text-sm text-base-content/70 mb-4">
              מחיקה מוחקת את המוצר לצמיתות מהקטלוג.
            </p>

            <div className="space-y-3 max-h-[420px] overflow-y-auto">
              {products.length === 0 && (
                <p className="text-sm text-base-content/60">
                  אין מוצרים במערכת.
                </p>
              )}

              {products.map((product) => {
                const category = categories.find(
                  (c) => c.id === product.categoryId
                );
                const subcategory = subcategories.find(
                  (s) => s.id === product.subcategoryId
                );

                return (
                  <div
                    key={product.id}
                    className="flex items-center justify-between border border-base-300 rounded-lg px-3 py-2"
                  >
                    <div className="space-y-1">
                      <div className="font-semibold">{product.title}</div>
                      <div className="text-xs text-base-content/60">
                        מחיר: {product.price}
                      </div>
                      <div className="text-xs text-base-content/60">
                        קטגוריה: {category?.name || "לא נמצא"}
                      </div>
                      {subcategory && (
                        <div className="text-xs text-base-content/60">
                          תת־קטגוריה: {subcategory.name}
                        </div>
                      )}
                    </div>
                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      מחיקה
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
