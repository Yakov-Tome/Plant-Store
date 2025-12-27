"use client";

import React, { useMemo, useState } from "react";
import { useCategories } from "@/hooks/useCategories";
import { useAllSubcategories } from "@/hooks/useAllSubcategories";
import { useProducts } from "@/hooks/useProducts";
import { useUpdateCategory } from "@/hooks/useUpdateCategory";
import { useUpdateSubcategory } from "@/hooks/useUpdateSubcategory";
import { useUpdateProduct } from "@/hooks/useUpdateProduct";
import { FaFolder } from "react-icons/fa";
import { FaFolderTree } from "react-icons/fa6";
import { PiPottedPlantFill } from "react-icons/pi";

export default function EditPage() {
  // ===== Data hooks =====
  const { categories } = useCategories();
  const { subcategories } = useAllSubcategories();
  const { products } = useProducts();

  // ===== Update hooks =====
  const {
    updateCategory,
    loading: categoryLoading,
    error: categoryHookError,
  } = useUpdateCategory();

  const {
    updateSubcategory,
    loading: subcategoryLoading,
    error: subcategoryHookError,
  } = useUpdateSubcategory();

  const {
    updateProduct,
    loading: productLoading,
    error: productHookError,
  } = useUpdateProduct();

  // ===== Global alerts =====
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // ===== Category editing state =====
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryForm, setCategoryForm] = useState({
    name: "",
    slug: "",
    description: "",
  });

  // ===== Subcategory editing state =====
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [subcategoryForm, setSubcategoryForm] = useState({
    name: "",
    slug: "",
    categoryId: "",
    description: "",
  });

  // ===== Product editing state =====
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    title: "",
    description: "",
    price: "",

    // ✅ NEW
    categoryIds: [],
    subcategoryIds: [],

    imageUrl: "",
    file: null,
  });

  // ===== Helpers: normalize old/new fields (backward compatible) =====
  const normalizeCategoryIds = (prod) => {
    if (Array.isArray(prod?.categoryIds))
      return prod.categoryIds.filter(Boolean);
    if (prod?.categoryId) return [prod.categoryId];
    return [];
  };

  const normalizeSubcategoryIds = (prod) => {
    if (Array.isArray(prod?.subcategoryIds))
      return prod.subcategoryIds.filter(Boolean);
    if (prod?.subcategoryId) return [prod.subcategoryId];
    return [];
  };

  // Map: categoryId -> subcategories[]
  const subcategoriesByCategory = useMemo(() => {
    const map = new Map();
    (subcategories || []).forEach((s) => {
      const key = s?.categoryId;
      if (!key) return;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(s);
    });
    return map;
  }, [subcategories]);

  const getCategoryName = (categoryId) =>
    (categories || []).find((c) => c.id === categoryId)?.name || "לא נמצא";

  const getSubcategoryName = (subcategoryId) =>
    (subcategories || []).find((s) => s.id === subcategoryId)?.name ||
    "לא נמצא";

  const getCategoryNames = (categoryIds = []) =>
    (categoryIds || []).map((id) => getCategoryName(id)).filter(Boolean);

  const getSubcategoryNames = (subcategoryIds = []) =>
    (subcategoryIds || []).map((id) => getSubcategoryName(id)).filter(Boolean);

  // ===== Handlers: select items for edit =====
  const handleSelectCategory = (cat) => {
    setMessage("");
    setError("");
    setSelectedCategory(cat);
    setCategoryForm({
      name: cat.name || "",
      slug: cat.slug || "",
      description: cat.description || "",
    });
  };

  const handleSelectSubcategory = (sub) => {
    setMessage("");
    setError("");
    setSelectedSubcategory(sub);
    setSubcategoryForm({
      name: sub.name || "",
      slug: sub.slug || "",
      categoryId: sub.categoryId || "",
      description: sub.description || "",
    });
  };

  const handleSelectProduct = (product) => {
    setMessage("");
    setError("");
    setSelectedProduct(product);

    const categoryIds = normalizeCategoryIds(product);
    const subcategoryIds = normalizeSubcategoryIds(product);

    setProductForm({
      title: product.title || "",
      description: product.description || "",
      price: product.price ?? "",

      categoryIds,
      subcategoryIds,

      imageUrl: product.imageUrl || "",
      file: null,
    });
  };

  // ===== Handlers: submit updates =====
  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    if (!selectedCategory) return;

    setMessage("");
    setError("");

    const name = categoryForm.name.trim();
    const slug = categoryForm.slug.trim();
    const description = categoryForm.description.trim();

    if (!name || !slug || !description) {
      setError("יש למלא שם, slug ותיאור לקטגוריה.");
      return;
    }

    try {
      await updateCategory(selectedCategory.id, { name, slug, description });

      setSelectedCategory(null);
      setCategoryForm({ name: "", slug: "", description: "" });

      setMessage("הקטגוריה עודכנה בהצלחה ✅");
    } catch (err) {
      setError(err.message || "שגיאה בעדכון קטגוריה");
    }
  };

  const handleUpdateSubcategory = async (e) => {
    e.preventDefault();
    if (!selectedSubcategory) return;

    setMessage("");
    setError("");

    const name = subcategoryForm.name.trim();
    const slug = subcategoryForm.slug.trim();
    const categoryId = subcategoryForm.categoryId;
    const description = subcategoryForm.description.trim();

    if (!name || !slug || !categoryId || !description) {
      setError("יש למלא שם, slug, תיאור ולבחור קטגוריית אב עבור תת־הקטגוריה.");
      return;
    }

    try {
      await updateSubcategory(selectedSubcategory.id, {
        name,
        slug,
        categoryId,
        description,
      });

      setSelectedSubcategory(null);
      setSubcategoryForm({
        name: "",
        slug: "",
        categoryId: "",
        description: "",
      });

      setMessage("תת־הקטגוריה עודכנה בהצלחה ✅");
    } catch (err) {
      setError(err.message || "שגיאה בעדכון תת־קטגוריה");
    }
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    if (!selectedProduct) return;

    setMessage("");
    setError("");

    const title = productForm.title.trim();
    const description = productForm.description.trim();
    const price = productForm.price.toString().trim();

    const categoryIds = Array.isArray(productForm.categoryIds)
      ? productForm.categoryIds.filter(Boolean)
      : [];

    const subcategoryIds = Array.isArray(productForm.subcategoryIds)
      ? productForm.subcategoryIds.filter(Boolean)
      : [];

    const imageUrl = productForm.imageUrl;

    if (!title || !description || !price || categoryIds.length === 0) {
      setError(
        "חובה למלא כותרת, תיאור, מחיר ולבחור לפחות קטגוריה אחת עבור המוצר."
      );
      return;
    }

    try {
      await updateProduct(selectedProduct.id, {
        title,
        description,
        price,
        categoryIds,
        subcategoryIds,
        imageUrl,
        file: productForm.file, // can be null
      });

      setSelectedProduct(null);
      setProductForm({
        title: "",
        description: "",
        price: "",
        categoryIds: [],
        subcategoryIds: [],
        imageUrl: "",
        file: null,
      });

      setMessage("המוצר עודכן בהצלחה ✅");
    } catch (err) {
      setError(err.message || "שגיאה בעדכון מוצר");
    }
  };

  // ===== Derived for UI =====
  const isCategoryFormValid =
    categoryForm.name.trim() !== "" &&
    categoryForm.slug.trim() !== "" &&
    categoryForm.description.trim() !== "";

  const isSubcategoryFormValid =
    subcategoryForm.name.trim() !== "" &&
    subcategoryForm.slug.trim() !== "" &&
    subcategoryForm.categoryId !== "" &&
    subcategoryForm.description.trim() !== "";

  const isProductFormValid =
    productForm.title.trim() !== "" &&
    productForm.description.trim() !== "" &&
    productForm.price.toString().trim() !== "" &&
    Array.isArray(productForm.categoryIds) &&
    productForm.categoryIds.length > 0;

  // Subcategories that belong to selected categories (for chips display)
  const availableSubcategoriesForSelectedCategories = useMemo(() => {
    const ids = Array.isArray(productForm.categoryIds)
      ? productForm.categoryIds
      : [];
    const all = [];
    ids.forEach((cid) => {
      const arr = subcategoriesByCategory.get(cid) || [];
      all.push(...arr);
    });

    // Unique by id
    return Array.from(new Map(all.map((s) => [s.id, s])).values());
  }, [productForm.categoryIds, subcategoriesByCategory]);

  const removeSubcategoriesNotInSelectedCategories = (nextCategoryIds) => {
    const allowedSubIds = new Set();
    (nextCategoryIds || []).forEach((cid) => {
      (subcategoriesByCategory.get(cid) || []).forEach((s) =>
        allowedSubIds.add(s.id)
      );
    });

    setProductForm((prev) => ({
      ...prev,
      subcategoryIds: (prev.subcategoryIds || []).filter((sid) =>
        allowedSubIds.has(sid)
      ),
    }));
  };

  const toggleCategory = (categoryId) => {
    setProductForm((prev) => {
      const current = Array.isArray(prev.categoryIds) ? prev.categoryIds : [];
      const exists = current.includes(categoryId);

      const next = exists
        ? current.filter((id) => id !== categoryId)
        : [...current, categoryId];

      return { ...prev, categoryIds: next };
    });

    // Cleanup subs after category change
    // (use setTimeout to ensure we use nextCategoryIds, not stale prev)
    setTimeout(() => {
      const nextCategoryIds = (() => {
        const current = Array.isArray(productForm.categoryIds)
          ? productForm.categoryIds
          : [];
        return current.includes(categoryId)
          ? current.filter((id) => id !== categoryId)
          : [...current, categoryId];
      })();

      removeSubcategoriesNotInSelectedCategories(nextCategoryIds);
    }, 0);
  };

  const toggleSubcategory = (subcategoryId) => {
    setProductForm((prev) => {
      const current = Array.isArray(prev.subcategoryIds)
        ? prev.subcategoryIds
        : [];
      const exists = current.includes(subcategoryId);
      const next = exists
        ? current.filter((id) => id !== subcategoryId)
        : [...current, subcategoryId];
      return { ...prev, subcategoryIds: next };
    });
  };

  return (
    <div className="p-10 text-right font-mono text-[#084D49] w-full max-w-6xl mx-auto">
      <h1 className="text-xl font-bold text-center mb-8">
        עריכת מוצרים, קטגוריות ותתי־קטגוריות
      </h1>

      {/* ===== Alerts ===== */}
      <div className="max-w-5xl mx-auto mb-6 space-y-3">
        {message && (
          <div className="alert alert-success">
            <span>{message}</span>
          </div>
        )}
        {(error ||
          categoryHookError ||
          subcategoryHookError ||
          productHookError) && (
          <div className="alert alert-error">
            <span>
              {error ||
                categoryHookError ||
                subcategoryHookError ||
                productHookError}
            </span>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* ==================== קטגוריות ==================== */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl mb-2">
              <FaFolder /> קטגוריות
            </h2>
            <p className="text-sm text-base-content/70 mb-4">
              בחר קטגוריה מתוך הרשימה כדי לערוך את השם, השם באנגלית והתיאור.
            </p>

            <div className="space-y-3 max-h-[260px] overflow-y-auto mb-4">
              {categories.length === 0 && (
                <p className="text-sm text-base-content/60">
                  אין קטגוריות במערכת.
                </p>
              )}

              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className={`flex items-center justify-between border border-base-300 rounded-lg px-3 py-2 ${
                    selectedCategory?.id === cat.id ? "bg-base-200" : ""
                  }`}
                >
                  <div>
                    <div className="font-semibold">{cat.name}</div>
                    <div className="text-xs text-base-content/60">
                      שם באנגלית: {cat.slug || "-"}
                    </div>
                    {cat.description && (
                      <div className="text-xs text-base-content/60 line-clamp-2">
                        {cat.description}
                      </div>
                    )}
                  </div>
                  <button
                    className="btn btn-sm btn-outline"
                    onClick={() => handleSelectCategory(cat)}
                  >
                    עריכה
                  </button>
                </div>
              ))}
            </div>

            {selectedCategory && (
              <form onSubmit={handleUpdateCategory} className="space-y-3">
                <h3 className="font-semibold text-sm">
                  עריכת קטגוריה: {selectedCategory.name}
                </h3>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="שם קטגוריה"
                  value={categoryForm.name}
                  onChange={(e) =>
                    setCategoryForm((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  required
                />
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="באנגלית ללא רווחים"
                  value={categoryForm.slug}
                  onChange={(e) =>
                    setCategoryForm((prev) => ({
                      ...prev,
                      slug: e.target.value,
                    }))
                  }
                  required
                />
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="תיאור קטגוריה"
                  value={categoryForm.description}
                  onChange={(e) =>
                    setCategoryForm((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  required
                />

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm"
                    onClick={() => {
                      setSelectedCategory(null);
                      setCategoryForm({ name: "", slug: "", description: "" });
                    }}
                  >
                    ביטול
                  </button>
                  <button
                    type="submit"
                    className="btn btn-accent btn-sm"
                    disabled={categoryLoading || !isCategoryFormValid}
                  >
                    {categoryLoading ? "שומר..." : "שמירת שינויים"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ==================== תתי־קטגוריות ==================== */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl mb-2">
              <FaFolderTree />
              תתי־קטגוריות
            </h2>
            <p className="text-sm text-base-content/70 mb-4">
              בחר תת־קטגוריה מרשימת כל התתי־קטגוריות, וערוך שם, שם באנגלית,
              תיאור וקטגוריית אב.
            </p>

            <div className="space-y-3 max-h-[260px] overflow-y-auto mb-4">
              {subcategories.length === 0 && (
                <p className="text-sm text-base-content/60">
                  אין תתי־קטגוריות במערכת.
                </p>
              )}

              {subcategories.map((sub) => {
                const parentCategoryName = getCategoryName(sub.categoryId);

                return (
                  <div
                    key={sub.id}
                    className={`flex items-center justify-between border border-base-300 rounded-lg px-3 py-2 ${
                      selectedSubcategory?.id === sub.id ? "bg-base-200" : ""
                    }`}
                  >
                    <div>
                      <div className="font-semibold">{sub.name}</div>
                      <div className="text-xs text-base-content/60">
                        קטגוריית אב: {parentCategoryName}
                      </div>
                      <div className="text-xs text-base-content/60">
                        שם באנגלית: {sub.slug || "-"}
                      </div>
                      {sub.description && (
                        <div className="text-xs text-base-content/60 line-clamp-2">
                          {sub.description}
                        </div>
                      )}
                    </div>
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => handleSelectSubcategory(sub)}
                    >
                      עריכה
                    </button>
                  </div>
                );
              })}
            </div>

            {selectedSubcategory && (
              <form onSubmit={handleUpdateSubcategory} className="space-y-3">
                <h3 className="font-semibold text-sm">
                  עריכת תת־קטגוריה: {selectedSubcategory.name}
                </h3>

                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="שם תת־קטגוריה"
                  value={subcategoryForm.name}
                  onChange={(e) =>
                    setSubcategoryForm((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  required
                />

                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="באנגלית ללא רווחים"
                  value={subcategoryForm.slug}
                  onChange={(e) =>
                    setSubcategoryForm((prev) => ({
                      ...prev,
                      slug: e.target.value,
                    }))
                  }
                  required
                />

                <select
                  className="select select-bordered w-full"
                  value={subcategoryForm.categoryId}
                  onChange={(e) =>
                    setSubcategoryForm((prev) => ({
                      ...prev,
                      categoryId: e.target.value,
                    }))
                  }
                  required
                >
                  <option value="">בחר קטגוריית אב</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>

                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="תיאור תת־קטגוריה"
                  value={subcategoryForm.description}
                  onChange={(e) =>
                    setSubcategoryForm((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  required
                />

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm"
                    onClick={() => {
                      setSelectedSubcategory(null);
                      setSubcategoryForm({
                        name: "",
                        slug: "",
                        categoryId: "",
                        description: "",
                      });
                    }}
                  >
                    ביטול
                  </button>
                  <button
                    type="submit"
                    className="btn btn-accent btn-sm"
                    disabled={subcategoryLoading || !isSubcategoryFormValid}
                  >
                    {subcategoryLoading ? "שומר..." : "שמירת שינויים"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ==================== מוצרים ==================== */}
        <div className="card bg-base-100 shadow-xl col-span-1 lg:col-span-2">
          <div className="card-body">
            <h2 className="card-title text-xl mb-2">
              <PiPottedPlantFill /> מוצרים
            </h2>
            <p className="text-sm text-base-content/70 mb-4">
              בחר מוצר מתוך הרשימה כדי לערוך פרטים, שיוך לקטגוריות ותמונה.
            </p>

            <div className="space-y-3 max-h-[260px] overflow-y-auto mb-4">
              {products.length === 0 && (
                <p className="text-sm text-base-content/60">
                  אין מוצרים במערכת.
                </p>
              )}

              {products.map((product) => {
                const catIds = normalizeCategoryIds(product);
                const subIds = normalizeSubcategoryIds(product);

                const categoryNames = getCategoryNames(catIds);
                const subcategoryNames = getSubcategoryNames(subIds);

                return (
                  <div
                    key={product.id}
                    className={`flex items-center justify-between border border-base-300 rounded-lg px-3 py-2 ${
                      selectedProduct?.id === product.id ? "bg-base-200" : ""
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="font-semibold">{product.title}</div>
                      <div className="text-xs text-base-content/60">
                        מחיר: {product.price}
                      </div>
                      <div className="text-xs text-base-content/60">
                        קטגוריות:{" "}
                        {categoryNames.length ? categoryNames.join(" , ") : "—"}
                      </div>
                      {subcategoryNames.length > 0 && (
                        <div className="text-xs text-base-content/60">
                          תתי־קטגוריות: {subcategoryNames.join(" , ")}
                        </div>
                      )}
                    </div>
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => handleSelectProduct(product)}
                    >
                      עריכה
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Edit form for selected product */}
            {selectedProduct && (
              <form onSubmit={handleUpdateProduct} className="space-y-3">
                <h3 className="font-semibold text-sm">
                  עריכת מוצר: {selectedProduct.title}
                </h3>

                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="כותרת מוצר"
                  value={productForm.title}
                  onChange={(e) =>
                    setProductForm((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  required
                />

                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="תיאור מוצר"
                  value={productForm.description}
                  onChange={(e) =>
                    setProductForm((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  required
                />

                <input
                  type="number"
                  className="input input-bordered w-full"
                  placeholder="מחיר"
                  value={productForm.price}
                  onChange={(e) =>
                    setProductForm((prev) => ({
                      ...prev,
                      price: e.target.value,
                    }))
                  }
                  required
                />

                {/* ✅ Categories: TOGGLE CHIPS */}
                <div className="bg-base-200 p-4 rounded">
                  <div className="flex items-center gap-2 mb-3">
                    <FaFolder />
                    <span className="font-semibold">
                      קטגוריות (לחיצה לבחור/להסיר)
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {(categories || []).map((cat) => {
                      const selected = (productForm.categoryIds || []).includes(
                        cat.id
                      );

                      return (
                        <button
                          key={cat.id}
                          type="button"
                          className={`btn btn-sm ${
                            selected ? "btn-accent" : "btn-outline"
                          }`}
                          onClick={() => toggleCategory(cat.id)}
                        >
                          {cat.name}
                        </button>
                      );
                    })}
                  </div>

                  {(productForm.categoryIds || []).length === 0 && (
                    <p className="text-xs opacity-70 mt-2">
                      בחר לפחות קטגוריה אחת
                    </p>
                  )}
                </div>

                {/* ✅ Subcategories: TOGGLE CHIPS (only for selected categories) */}
                <div className="bg-base-200 p-4 rounded">
                  <div className="flex items-center gap-2 mb-3">
                    <FaFolderTree />
                    <span className="font-semibold">
                      תתי־קטגוריות (אופציונלי)
                    </span>
                  </div>

                  {availableSubcategoriesForSelectedCategories.length === 0 ? (
                    <p className="text-xs opacity-70">
                      אין תתי־קטגוריות לקטגוריות שנבחרו
                    </p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {availableSubcategoriesForSelectedCategories.map(
                        (sub) => {
                          const selected = (
                            productForm.subcategoryIds || []
                          ).includes(sub.id);

                          return (
                            <button
                              key={sub.id}
                              type="button"
                              className={`btn btn-sm ${
                                selected ? "btn-secondary" : "btn-outline"
                              }`}
                              onClick={() => toggleSubcategory(sub.id)}
                            >
                              {sub.name}
                            </button>
                          );
                        }
                      )}
                    </div>
                  )}
                </div>

                {/* Image section */}
                <div className="space-y-2">
                  {productForm.imageUrl && (
                    <div className="flex items-center gap-3">
                      <img
                        src={productForm.imageUrl}
                        alt={productForm.title}
                        className="w-20 h-20 object-cover rounded-lg border border-base-300"
                      />
                      <span className="text-xs text-base-content/70">
                        תמונה קיימת. אפשר להעלות קובץ חדש כדי להחליף.
                      </span>
                    </div>
                  )}

                  <input
                    type="file"
                    className="file-input file-input-bordered w-full"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      const MAX_SIZE = 10 * 1024 * 1024;
                      if (file && file.size > MAX_SIZE) {
                        alert("⚠️ התמונה גדולה מדי! המקסימום הוא 10MB.");
                        e.target.value = "";
                        return;
                      }
                      setProductForm((prev) => ({ ...prev, file }));
                    }}
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm"
                    onClick={() => {
                      setSelectedProduct(null);
                      setProductForm({
                        title: "",
                        description: "",
                        price: "",
                        categoryIds: [],
                        subcategoryIds: [],
                        imageUrl: "",
                        file: null,
                      });
                    }}
                  >
                    ביטול
                  </button>
                  <button
                    type="submit"
                    className="btn btn-accent btn-sm"
                    disabled={productLoading || !isProductFormValid}
                  >
                    {productLoading ? "שומר..." : "שמירת שינויים"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
