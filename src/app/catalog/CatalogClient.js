"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCatalogTree } from "@/hooks/useCatalogTree";
import CatalogSidebar from "@/components/ui/CatalogSidebar";
import Header from "@/components/Header";
import CatalogFiltersBar from "@/components/ui/CatalogFiltersBar";
import { useCart } from "@/context/CartContext";
import { FiSearch } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";

export default function CatalogClient() {
  const [showFilters, setShowFilters] = useState(true);
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");
  const subcategoryId = searchParams.get("subcategoryId");
  const searchQuery = (searchParams.get("q") || "").toLowerCase().trim();

  const { cart, addToCart, decreaseQuantity, setItemQuantity } = useCart();
  const { categories, subcategories, products, loading, error } =
    useCatalogTree();

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    let list = [...products];

    if (subcategoryId) {
      list = list.filter((prod) => {
        const subIds = Array.isArray(prod.subcategoryIds)
          ? prod.subcategoryIds
          : prod.subcategoryId
          ? [prod.subcategoryId]
          : [];

        return subIds.includes(subcategoryId);
      });
    } else if (categoryId) {
      list = list.filter((prod) => {
        const catIds = Array.isArray(prod.categoryIds)
          ? prod.categoryIds
          : prod.categoryId
          ? [prod.categoryId]
          : [];

        return catIds.includes(categoryId);
      });
    }

    if (searchQuery) {
      list = list.filter((prod) => {
        const title = (prod.title || prod.name || "").toLowerCase();
        const desc = (prod.description || "").toLowerCase();
        return title.includes(searchQuery) || desc.includes(searchQuery);
      });
    }

    return list;
  }, [products, categoryId, subcategoryId, searchQuery]);

  const getCategoryName = () => {
    if (!categoryId) return "כל המוצרים";
    const cat = (categories || []).find((c) => c.id === categoryId);
    return cat ? cat.name : "קטגוריה";
  };

  const getSubcategoryName = () => {
    if (!subcategoryId) return null;
    const sub = (subcategories || []).find((s) => s.id === subcategoryId);
    return sub ? sub.name : null;
  };

  return (
    <div className="bg-[url('/beautiful-flowers-white-background.jpg')] bg-cover bg-left bg-no-repeat bg-fixed relative min-h-screen">
      <Header
        title="קטלוג מוצרים"
        text="עיין במוצרים לפי קטגוריות ותת-קטגוריות"
      />

      <div className="flex font-sans min-h-screen bg-white/50 backdrop-blur-[2px] pb-10">
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <CatalogSidebar />
        </div>

        <main className="flex-1 p-4">
          {/* Filters bar for mobile */}
          {showFilters ? (
            <div className={`lg:${showFilters ? "block" : "hidden"}`}>
              <CatalogFiltersBar
                onCloseFilters={() => setShowFilters(false)}
                categories={categories}
                subcategories={subcategories}
              />
            </div>
          ) : (
            <button
              className="btn btn-outline btn-neutral border-(--leaf-new) bg-white/30 backdrop-blur-2xl hover:bg-(--leaf-new)/80 hover:text-white mb-4 flex items-center gap-2 float-left"
              onClick={() => setShowFilters(true)}
            >
              הצג מסננים
              <FiSearch />
            </button>
          )}

          {/* Title / breadcrumb */}
          <div className="mb-4 mt-3">
            <h1 className="text-2xl font-bold text-[#4F3F31]">
              {getCategoryName()}
              {getSubcategoryName() && (
                <span className="text-base font-normal text-gray-500 mr-2">
                  / {getSubcategoryName()}
                </span>
              )}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              נמצא {filteredProducts.length} מוצרים
            </p>
          </div>

          {/* Loading / error / empty states */}
          {loading && <div>טוען מוצרים...</div>}
          {error && <div className="text-red-500">שגיאה: {error}</div>}

          {!loading && !error && filteredProducts.length === 0 && (
            <div className="text-sm text-gray-500 mt-4">
              לא נמצאו מוצרים להצגה.
            </div>
          )}

          {/* Products grid */}
          {!loading && !error && filteredProducts.length > 0 && (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 lg:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl mx-auto">
              {filteredProducts.map((prod) => {
                const productSlug = prod.slug || prod.id;

                const cartItem = cart.find((item) => item.id === prod.id);
                const quantity = cartItem?.quantity || 0;

                return (
                  <Link
                    key={prod.id}
                    href={`/catalog/${productSlug}`}
                    className="block h-full"
                  >
                    <article className="card shadow-sm border h-full hover:shadow-md transition group cursor-pointer flex flex-col bg-white overflow-hidden rounded-lg">
                      {prod.imageUrl && (
                        <figure className="relative aspect-4/3 overflow-hidden rounded-t-md group">
                          <img
                            src={prod.imageUrl}
                            alt={prod.title || prod.name || "מוצר מהמשתלה"}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                          <span className="pointer-events-none absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-500 ease-in-out" />
                        </figure>
                      )}

                      <div className="card-body text-[#4F3F31] p-4">
                        <h2 className="card-title text-lg">
                          {prod.title || prod.name}
                        </h2>

                        {prod.description && (
                          <p className="text-sm text-[#4F3F31] line-clamp-3">
                            {prod.description}
                          </p>
                        )}

                        {prod.price && (
                          <p className="mt-2 text-xl badge badge-soft max-h-10 badge-warning border border-(--leaf-new)/20 text-(--leaf-new) min-h-10 flex items-center gap-1 px-4 py-2 rounded-full w-fit">
                            <span>{prod.price}</span>
                            <span className="text-sm">₪</span>
                          </p>
                        )}
                      </div>

                      {/* Bottom area */}
                      {quantity === 0 ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addToCart(prod);
                          }}
                          className="w-full bg-[#CCD2B6] text-(--leaf-new) py-2 rounded-b-md hover:bg-[#D3D9C3] transition cursor-pointer"
                        >
                          <FaCartShopping
                            size={20}
                            className="inline-block ml-2"
                          />
                          הוסף לעגלה
                        </button>
                      ) : (
                        <div className="w-full rounded-b-md border-t bg-[#D0D6B8]/70 backdrop-blur-xl px-3 py-2 flex items-center justify-between text-(--leaf-new)">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              decreaseQuantity(prod.id);
                            }}
                            className="btn btn-sm bg-(--leaf-new)/10 hover:scale-110 transition-transform duration-300 w-8 h-8 flex items-center justify-center rounded-full border border-(--leaf-new) text-(--leaf-new) text-lg"
                          >
                            −
                          </button>

                          <input
                            type="number"
                            min={0}
                            value={quantity}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                            onChange={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              const value = Number(e.target.value);
                              setItemQuantity(prod, value);
                            }}
                            className="w-14 text-center border border-(--leaf-new) rounded-md text-sm"
                          />

                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              addToCart(prod);
                            }}
                            className="btn btn-sm bg-(--leaf-new)/10 hover:scale-110 transition-transform duration-300 w-8 h-8 flex items-center justify-center rounded-full border border-(--leaf-new) text-lg text-(--leaf-new)"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </article>
                  </Link>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
