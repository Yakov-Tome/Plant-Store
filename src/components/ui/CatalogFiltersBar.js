"use client";

import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { MdOutlineFilterList } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { LuMinimize } from "react-icons/lu";

export default function CatalogFiltersBar({
  categories = [],
  subcategories = [],
  onCloseFilters,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentCategoryId = searchParams.get("categoryId") || "";
  const currentSubcategoryId = searchParams.get("subcategoryId") || "";
  const currentSearch = searchParams.get("q") || "";

  const filteredSubcategories = currentCategoryId
    ? subcategories.filter((sub) => sub.categoryId === currentCategoryId)
    : subcategories;

  const pushWithParams = (params) => {
    const qs = params.toString();
    if (!qs) {
      router.push(pathname, { scroll: false });
    } else {
      router.push(`${pathname}?${qs}`, { scroll: false });
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("categoryId", value);
      params.delete("subcategoryId");
      pushWithParams(params);
    } else {
      params.delete("categoryId");
      params.delete("subcategoryId");
      pushWithParams(params);
    }
  };

  const handleSubcategoryChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("subcategoryId", value);
      pushWithParams(params);
    } else {
      params.delete("subcategoryId");
      pushWithParams(params);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    pushWithParams(params);
  };

  const handleClear = () => {
    router.push(pathname, { scroll: false }); // clear all filters and search
  };

  return (
    <div className="bg-white/80 backdrop-blur-md border-gray-200 px-4 py-3 rounded-2xl border shadow-xs mb-6 max-w-7xl mx-auto">
      <div className="inline-flex w-full justify-between gap-4">
        <div className="grid grid-cols-1 gap-2 w-[60%]">
          <div className="flex-1 flex gap-2">
            <MdOutlineFilterList size={32} className="text-(--leaf-new)/70" />

            {/* Category select */}
            <select
              className="select select-bordered select-sm w-1/2 bg-white text-(--leaf-new) border-(--leaf-new)/30 focus:border-(--leaf-new)/70 focus:ring-(--leaf-new)/50"
              value={currentCategoryId}
              onChange={handleCategoryChange}
            >
              <option value="">כל הקטגוריות</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>

            {/* Subcategory select */}
            <select
              className="select select-bordered select-sm w-1/2 bg-white text-(--leaf-new) border-(--leaf-new)/30 focus:border-(--leaf-new)/70 focus:ring-(--leaf-new)/50"
              value={currentSubcategoryId}
              onChange={handleSubcategoryChange}
              disabled={
                !currentCategoryId || filteredSubcategories.length === 0
              }
            >
              <option value="">
                {currentCategoryId ? "כל תתי-הקטגוריות" : "בחר קטגוריה קודם"}
              </option>
              {filteredSubcategories.map((sub) => (
                <option key={sub.id} value={sub.id}>
                  {sub.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Manual search input */}
        <div className="flex items-center">
          <label className="input input-sm w-full flex items-center gap-2 bg-white text-(--leaf-new)/70 placeholder:(--leaf-new)/50 border-(--leaf-new)/30 focus:border-(--leaf-new)/70 focus:ring-(--leaf-new)/50">
            <CiSearch color="brown" />
            <input
              type="text"
              className="w-full"
              placeholder="חיפוש ידני במוצרים..."
              value={currentSearch}
              onChange={handleSearchChange}
            />
          </label>
          <button
            type="button"
            onClick={handleClear}
            className="btn btn-ghost btn-sm whitespace-nowrap text-(--leaf-new)/70 hover:bg-black/0 shadow-none border-none hover:text-rose-800 text-sm"
          >
            ניקוי
          </button>
          <button
            data-tip="הסתדר מסננים"
            data-ti-position="bottom"
            className="tooltip tooltip-error"
            type="button"
            onClick={onCloseFilters}
          >
            <LuMinimize className="text-(--leaf-new)/70 hover:text-(--leaf-light) cursor-pointer hover:scale-125" />
          </button>
        </div>
      </div>
    </div>
  );
}
