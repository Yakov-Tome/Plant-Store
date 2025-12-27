// app/(admin)/admin/products/page.jsx  (או איפה שהקומפוננטה נמצאת אצלך)

"use client";

import React, { useRef, useState } from "react";
import { useCreateProduct } from "@/hooks/useCreateProduct";
import { useCategories } from "@/hooks/useCategories";
import { useSubcategoriesMany } from "@/hooks/useSubcategoriesMany";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaFolderTree, FaFolder } from "react-icons/fa6";
import Loading from "@/components/loading";

export default function ProductsAdminPage() {
  const [productData, setProductData] = useState({
    title: "",
    slug: "",
    description: "",
    price: "",
    compareAtPrice: null, // ✅ NEW: optional "previous price"
    categoryIds: [],
    subcategoryIds: [],
    file: null,
  });

  const fileInputRef = useRef(null);

  const { createProduct, loading: creatingProduct } = useCreateProduct();
  const { categories, loading: loadingCategories } = useCategories();
  const { subcategories } = useSubcategoriesMany(productData.categoryIds);

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    await createProduct(productData);

    setProductData({
      title: "",
      slug: "",
      description: "",
      price: "",
      compareAtPrice: "", // ✅ reset
      categoryIds: [],
      subcategoryIds: [],
      file: null,
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  if (loadingCategories || creatingProduct) {
    return <Loading />;
  }

  return (
    <div className="p-10 text-right font-mono text-[#084D49] w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">ניהול מוצרים</h1>

      <div className="max-w-3xl mx-auto">
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="card-title text-2xl mb-4">
            <PiPottedPlantFill size={26} />
            יצירת מוצר חדש
          </h2>

          {categories.length === 0 && (
            <p className="text-error mb-4">
              אין קטגוריות במערכת! חובה ליצור קטגוריה לפני יצירת מוצר.
            </p>
          )}

          <form onSubmit={handleCreateProduct} className="space-y-4">
            <input
              className="input input-bordered w-full"
              placeholder="שם מוצר"
              value={productData.title}
              onChange={(e) =>
                setProductData((p) => ({ ...p, title: e.target.value }))
              }
              required
            />

            <input
              className="input input-bordered w-full"
              placeholder="באנגלית ללא רווחים"
              value={productData.slug}
              onChange={(e) =>
                setProductData((p) => ({ ...p, slug: e.target.value }))
              }
              required
            />

            <textarea
              className="textarea textarea-bordered w-full"
              rows={5}
              placeholder="תיאור מוצר"
              value={productData.description}
              onChange={(e) =>
                setProductData((p) => ({
                  ...p,
                  description: e.target.value,
                }))
              }
              required
            />

            <input
              type="number"
              className="input input-bordered w-full"
              placeholder="מחיר"
              value={productData.price}
              onChange={(e) =>
                setProductData((p) => ({ ...p, price: e.target.value }))
              }
              required
            />

            {/* ✅ NEW: Previous price (optional) */}
            <input
              type="number"
              className="input input-bordered w-full"
              placeholder="מחיר קודם (אופציונלי)"
              value={productData.compareAtPrice ?? ""}
              onChange={(e) =>
                setProductData((p) => ({
                  ...p,
                  compareAtPrice:
                    e.target.value === "" ? null : Number(e.target.value),
                }))
              }
            />

            <p className="text-xs opacity-70 -mt-2">
              אם ממלאים, אפשר להציג מחיר קודם ולהראות הנחה.
            </p>

            <div className="bg-base-200 p-4 rounded">
              <div className="flex items-center gap-2 mb-3">
                <FaFolder />
                <span className="font-semibold">קטגוריות</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const selected = productData.categoryIds.includes(cat.id);

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      className={`btn btn-sm ${
                        selected ? "btn-accent" : "btn-outline"
                      }`}
                      onClick={() => {
                        setProductData((prev) => {
                          if (selected) {
                            // remove category + its subcategories
                            return {
                              ...prev,
                              categoryIds: prev.categoryIds.filter(
                                (id) => id !== cat.id
                              ),
                              subcategoryIds: prev.subcategoryIds.filter(
                                (subId) =>
                                  !subcategories.some(
                                    (s) =>
                                      s.id === subId && s.categoryId === cat.id
                                  )
                              ),
                            };
                          }

                          // add category
                          return {
                            ...prev,
                            categoryIds: [...prev.categoryIds, cat.id],
                          };
                        });
                      }}
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TOGGLE */}
            <div className="bg-base-200 p-4 rounded">
              <div className="flex items-center gap-2 mb-3">
                <FaFolderTree />
                <span className="font-semibold">תתי־קטגוריות (אופציונלי)</span>
              </div>

              {subcategories.length === 0 ? (
                <p className="text-xs opacity-70">
                  אין תתי־קטגוריות לקטגוריות שנבחרו
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {subcategories.map((sub) => {
                    const selected = productData.subcategoryIds.includes(
                      sub.id
                    );

                    return (
                      <button
                        key={sub.id}
                        type="button"
                        className={`btn btn-sm ${
                          selected ? "btn-secondary" : "btn-outline"
                        }`}
                        onClick={() =>
                          setProductData((prev) => ({
                            ...prev,
                            subcategoryIds: selected
                              ? prev.subcategoryIds.filter(
                                  (id) => id !== sub.id
                                )
                              : [...prev.subcategoryIds, sub.id],
                          }))
                        }
                      >
                        {sub.name}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Image */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full"
              onChange={(e) =>
                setProductData((p) => ({
                  ...p,
                  file: e.target.files?.[0] ?? null,
                }))
              }
              required
            />

            <button
              type="submit"
              className="btn btn-accent w-full"
              disabled={creatingProduct}
            >
              {creatingProduct ? "יוצר מוצר..." : "צור מוצר"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
