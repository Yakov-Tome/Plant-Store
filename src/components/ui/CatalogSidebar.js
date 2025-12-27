"use client";

import React from "react";
import { useCatalogTree } from "@/hooks/useCatalogTree";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function CatalogSidebar() {
  const { categories, subcategories, products, loading, error } =
    useCatalogTree();

  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategoryId = searchParams.get("categoryId");
  const activeSubcategoryId = searchParams.get("subcategoryId");

  const handleCategoryClick = (categoryId) => {
    router.push(`/catalog?categoryId=${categoryId}`);
  };

  const handleSubcategoryClick = (categoryId, subcategoryId) => {
    router.push(
      `/catalog?categoryId=${categoryId}&subcategoryId=${subcategoryId}`
    );
  };

  if (loading) {
    return (
      <aside className="w-full max-w-xs border-r bg-base-100 p-4">
        <div>טוען קטגוריות...</div>
      </aside>
    );
  }

  if (error) {
    return (
      <aside className="w-full max-w-xs border-r bg-base-100 p-4">
        <div className="text-red-500">שגיאה: {error}</div>
      </aside>
    );
  }

  const safeProducts = Array.isArray(products) ? products : [];
  const safeSubs = Array.isArray(subcategories) ? subcategories : [];
  const safeCats = Array.isArray(categories) ? categories : [];

  const getSubcategoriesForCategory = (categoryId) =>
    safeSubs.filter((sub) => sub.categoryId === categoryId);

  const getProductsForCategory = (categoryId) =>
    safeProducts.filter((prod) => {
      const catIds = Array.isArray(prod.categoryIds)
        ? prod.categoryIds
        : prod.categoryId
        ? [prod.categoryId]
        : [];

      return catIds.includes(categoryId);
    });

  const getProductsForSubcategory = (subcategoryId) =>
    safeProducts.filter((prod) => {
      const subIds = Array.isArray(prod.subcategoryIds)
        ? prod.subcategoryIds
        : prod.subcategoryId
        ? [prod.subcategoryId]
        : [];

      return subIds.includes(subcategoryId);
    });

  const getProductsForCategoryNoSub = (categoryId) => {
    const subsForCat = getSubcategoriesForCategory(categoryId);
    const subIdsForCat = new Set(subsForCat.map((s) => s.id));

    return safeProducts.filter((prod) => {
      // belongs to category?
      const catIds = Array.isArray(prod.categoryIds)
        ? prod.categoryIds
        : prod.categoryId
        ? [prod.categoryId]
        : [];

      if (!catIds.includes(categoryId)) return false;

      // has any subcategory under this category?
      const prodSubIds = Array.isArray(prod.subcategoryIds)
        ? prod.subcategoryIds
        : prod.subcategoryId
        ? [prod.subcategoryId]
        : [];

      const hasSubInThisCategory = prodSubIds.some((sid) =>
        subIdsForCat.has(sid)
      );
      return !hasSubInThisCategory;
    });
  };

  return (
    <aside className="sticky top-0 w-[250px] max-w-xs border-r bg-base-100 p-4 h-screen overflow-y-auto text-(--leaf-new)">
      <Link href="/catalog">
        <h2 className="flex items-center gap-2 text-xl bg-[#E3B94C] text-[#5BB7DB]-content p-2 font-bold mb-4 rounded-sm cursor-pointer hover:bg-[#E3B94C]/80">
          קטלוג מוצרים
        </h2>
      </Link>
      <ul className="space-y-3">
        {safeCats.map((cat) => {
          const catSubs = getSubcategoriesForCategory(cat.id);
          const catProducts = getProductsForCategory(cat.id);
          const catProductsNoSub = getProductsForCategoryNoSub(cat.id);

          const isCategoryActive =
            activeCategoryId === cat.id ||
            catSubs.some((s) => s.id === activeSubcategoryId);

          return (
            <li key={cat.id}>
              {/* ===== CATEGORY ===== */}
              <button
                type="button"
                onClick={() => handleCategoryClick(cat.id)}
                className={`w-full flex items-center justify-between gap-2 font-semibold text-right px-2 py-1 rounded-md cursor-pointer transition
                  ${
                    isCategoryActive
                      ? "bg-[#5BB7DB] text-[#5BB7DB]-content"
                      : "hover:bg-[#5BB7DB]/30"
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <span>{cat.name}</span>
                </div>

                <span className="badge badge-sm badge-neutral bg-(--leaf-new)">
                  {catProducts.length}
                </span>
              </button>

              {/* ===== SUBCATEGORIES ===== */}
              <div className="mt-1 space-y-1 text-sm">
                {catSubs.map((sub) => {
                  const subProducts = getProductsForSubcategory(sub.id);
                  const isSubActive = activeSubcategoryId === sub.id;

                  return (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => handleSubcategoryClick(cat.id, sub.id)}
                      className={`w-full flex items-center justify-between gap-2 text-[13px] px-2 py-1 rounded-md text-right transition cursor-pointer
                        ${
                          isSubActive
                            ? "bg-[#99CE75] text-[#99CE75]-content"
                            : "hover:bg-[#99CE75]/30"
                        }
                      `}
                    >
                      <span>{sub.name}</span>
                      <span className="badge badge-sm badge-ghost bg-(--leaf-new) text-white">
                        {subProducts.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
