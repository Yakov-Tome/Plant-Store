"use client";

import React, { useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { useCreateCategory } from "@/hooks/useCreateCategory";
import { useCreateSubcategory } from "@/hooks/useCreateSubcategory";
import { useCategories } from "@/hooks/useCategories";
import { BiRename } from "react-icons/bi";
import { RiEnglishInput } from "react-icons/ri";
import { FaFolderPlus } from "react-icons/fa";
import { FaFolderTree } from "react-icons/fa6";

export default function CategoriesAdminPage() {
  const [categoryName, setCategoryName] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const [subcategoryData, setSubcategoryData] = useState({
    categoryId: "",
    name: "",
    slug: "",
    description: "",
  });

  const { createCategory } = useCreateCategory();
  const { createSubcategory } = useCreateSubcategory();
  const { categories } = useCategories();

  // יצירת קטגוריה
  const handleCreateCategory = async (e) => {
    e.preventDefault();

    await createCategory({
      name: categoryName,
      slug: categorySlug,
      description: categoryDescription,
    });

    setCategoryName("");
    setCategorySlug("");
    setCategoryDescription("");
  };

  // יצירת תת־קטגוריה
  const handleCreateSubcategory = async (e) => {
    e.preventDefault();
    await createSubcategory(subcategoryData);

    setSubcategoryData({
      categoryId: "",
      name: "",
      slug: "",
      description: "",
    });
  };

  return (
    <div
      className="p-10 text-right font-mono text-[#084D49] w-full max-w-6xl mx-auto"
      dir="rtl"
    >
      <h1 className="text-xl font-bold text-center mb-10">
        ניהול קטגוריות ותתי־קטגוריות
      </h1>

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* ============= כרטיס יצירת קטגוריה ============= */}
        <div className="card bg-base-100 shadow-xs p-6 border-2 border-base-300">
          <h2 className="card-title text-2xl mb-4">
            <FaFolderPlus size={26} /> יצירת קטגוריה חדשה
          </h2>

          <form onSubmit={handleCreateCategory} className="space-y-4">
            {/* שם קטגוריה */}
            <label className="input flex items-center gap-2 w-full bg-white/10 p-2 rounded">
              <BiRename size={20} />
              <input
                className="w-full outline-none bg-transparent"
                type="text"
                placeholder="שם קטגוריה"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
              />
            </label>

            {/* SLUG */}
            <label className="input flex items-center gap-2 w-full bg-white/10 p-2 rounded">
              <RiEnglishInput size={20} />
              <input
                className="w-full outline-none bg-transparent"
                type="text"
                placeholder="באנגלית ללא רווחים"
                value={categorySlug}
                onChange={(e) => setCategorySlug(e.target.value)}
                required
              />
            </label>

            {/* תיאור קטגוריה */}
            <textarea
              className="textarea textarea-bordered w-full bg-white/10"
              placeholder="תיאור קטגוריה"
              value={categoryDescription}
              onChange={(e) => setCategoryDescription(e.target.value)}
              required
            ></textarea>

            <button className="btn btn-accent w-full mt-4">צור קטגוריה</button>
          </form>
        </div>

        {/* ============= כרטיס יצירת תת־קטגוריה ============= */}
        <div className="card bg-base-100 shadow-xs p-6 border-2 border-base-300">
          <h2 className="card-title text-2xl mb-4">
            <FaFolderTree size={26} /> יצירת תת־קטגוריה
          </h2>

          <form onSubmit={handleCreateSubcategory} className="space-y-4">
            {/* בחירת קטגוריה */}
            <label className="input flex items-center gap-2 w-full bg-white/10 p-2 rounded">
              <BiSolidCategory size={20} />
              <select
                className="w-full outline-none bg-transparent"
                value={subcategoryData.categoryId}
                onChange={(e) =>
                  setSubcategoryData({
                    ...subcategoryData,
                    categoryId: e.target.value,
                  })
                }
                required
              >
                <option value="">בחר קטגוריית אב...</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>

            {/* שם תת־קטגוריה */}
            <label className="input flex items-center gap-2 w-full bg-white/10 p-2 rounded">
              <BiRename size={20} />
              <input
                className="w-full outline-none bg-transparent"
                type="text"
                placeholder="שם תת־קטגוריה"
                value={subcategoryData.name}
                onChange={(e) =>
                  setSubcategoryData({
                    ...subcategoryData,
                    name: e.target.value,
                  })
                }
                required
              />
            </label>

            {/* SLUG */}
            <label className="input flex items-center gap-2 w-full bg-white/10 p-2 rounded">
              <RiEnglishInput size={20} />
              <input
                className="w-full outline-none bg-transparent"
                type="text"
                placeholder="באנגלית ללא רווחים"
                value={subcategoryData.slug}
                onChange={(e) =>
                  setSubcategoryData({
                    ...subcategoryData,
                    slug: e.target.value,
                  })
                }
                required
              />
            </label>

            {/* תיאור תת־קטגוריה */}
            <textarea
              className="textarea textarea-bordered w-full bg-white/10"
              placeholder="תיאור תת־קטגוריה"
              value={subcategoryData.description}
              onChange={(e) =>
                setSubcategoryData({
                  ...subcategoryData,
                  description: e.target.value,
                })
              }
              required
            ></textarea>

            <button
              className="btn btn-accent w-full mt-4"
              disabled={categories.length === 0}
            >
              צור תת־קטגוריה
            </button>

            {categories.length === 0 && (
              <p className="text-warning text-sm mt-2">
                אין קטגוריות עדיין – צור קטגוריה לפני תת־קטגוריה.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
