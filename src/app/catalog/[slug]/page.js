"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useCatalogTree } from "@/hooks/useCatalogTree";
import Header from "@/components/Header";
import CatalogSidebar from "@/components/ui/CatalogSidebar";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ShareButton from "@/components/ui/ShareButton";

export default function ProductPage() {
  const { slug } = useParams(); // slug from URL
  const router = useRouter();

  const { categories, subcategories, products, loading, error } =
    useCatalogTree();

  const { cart, addToCart, removeFromCart, setItemQuantity } = useCart();

  const product = React.useMemo(() => {
    if (!products) return null;

    // Match by slug (fallback to id if needed)
    return products.find((prod) => prod.slug === slug || prod.id === slug);
  }, [products, slug]);

  const category = React.useMemo(() => {
    if (!product || !categories?.length) return null;
    return categories.find((c) => c.id === product.categoryId) || null;
  }, [product, categories]);

  const subcategory = React.useMemo(() => {
    if (!product || !subcategories?.length) return null;
    return subcategories.find((s) => s.id === product.subcategoryId) || null;
  }, [product, subcategories]);

  // Loading state
  if (loading) {
    return (
      <div>
        <Header title="טוען מוצר..." text="אנחנו אוספים את פרטי הצמח עבורך" />
        <div className="flex min-h-screen bg-white/50 font-sans">
          <div className="hidden lg:block">
            <CatalogSidebar />
          </div>
          <main className="flex-1 p-4 flex items-center justify-center">
            <p className="text-sm text-gray-500">טוען מוצר...</p>
          </main>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div>
        <Header title="שגיאה בטעינת מוצר" text="משהו השתבש בטעינת הנתונים" />
        <div className="flex min-h-screen bg-white/50 font-sans">
          <div className="hidden lg:block">
            <CatalogSidebar />
          </div>
          <main className="flex-1 p-4 flex flex-col items-center justify-center">
            <p className="text-red-500 mb-4">שגיאה: {error}</p>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => router.push("/catalog")}
            >
              חזרה לקטלוג
            </button>
          </main>
        </div>
      </div>
    );
  }

  // Not found state
  if (!product) {
    return (
      <div>
        <Header title="המוצר לא נמצא" text="לא הצלחנו למצוא את המוצר שביקשת" />
        <div className="flex min-h-screen bg-white/50 font-sans">
          <div className="hidden lg:block">
            <CatalogSidebar />
          </div>
          <main className="flex-1 p-4 flex flex-col items-center justify-center">
            <p className="text-sm text-gray-500 mb-4">
              ייתכן שהמוצר הוסר או שהקישור אינו תקין.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => router.push("/catalog")}
            >
              חזרה לקטלוג
            </button>
          </main>
        </div>
      </div>
    );
  }

  const title = product.title || product.name || "מוצר מהמשתלה";
  const price = product.price;
  const imageUrl = product.imageUrl;
  const description = product.description;

  // ✅ find quantity in cart for this product
  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="bg-[url('/plain-wall-with-leaves-white-marble-floor-product-background.jpg')] bg-cover bg-center bg-fixed min-h-screen">
      <Header
        title={title}
        text={
          category?.name
            ? `מקטגוריית ${category.name}${
                subcategory?.name ? ` / ${subcategory.name}` : ""
              }`
            : "דף מוצר מהמשתלה האורבנית"
        }
      />

      <div className="flex font-sans min-h-screen bg-white/50">
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <CatalogSidebar />
        </div>

        <main className="flex-1 p-4 relative">
          <Breadcrumbs item={title} href={`/catalog/${slug}`} />
          <div className="min-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/30 backdrop-blur-lg rounded-3xl shadow-sm border p-4 md:p-6 mt-10">
            {/* Image section */}
            <div>
              {imageUrl ? (
                <div className="aspect-square overflow-hidden rounded-3xl border bg-gray-50">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-square rounded-3xl border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
                  ללא תמונה למוצר זה
                </div>
              )}
            </div>

            {/* Info section */}
            <article className="flex flex-col gap-4">
              <header>
                <h1 className="text-2xl md:text-3xl font-bold text-[#4F3F31]">
                  {title}
                </h1>

                {(category || subcategory) && (
                  <p className="mt-2 text-sm text-gray-500">
                    {category?.name && <span>{category.name}</span>}
                    {subcategory?.name && (
                      <span className="mr-2 text-gray-400">
                        / {subcategory.name}
                      </span>
                    )}
                  </p>
                )}

                {price && (
                  <p className="mt-4 inline-flex items-center gap-1 text-xl font-semibold text-[#4F3F31]">
                    <span>{price}</span>
                    <span className="text-base">₪</span>
                  </p>
                )}
              </header>

              {description && (
                <section>
                  <h2 className="text-sm font-semibold text-gray-700 mb-1">
                    תיאור המוצר
                  </h2>
                  <p className="text-sm leading-relaxed text-[#4F3F31]">
                    {description}
                  </p>
                </section>
              )}

              {/* ✅ Cart controls section */}
              <section className="mt-4">
                <h2 className="text-sm font-semibold text-gray-700 mb-2">
                  הוספה לעגלה
                </h2>

                {quantity === 0 ? (
                  <button
                    type="button"
                    className="btn btn-success text-(--leaf-new) "
                    onClick={() => addToCart(product)}
                  >
                    הוסף לעגלה
                  </button>
                ) : (
                  <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-full px-3 py-2 text-(--leaf-new)">
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                      className="hover:scale-105 duration-300"
                    >
                      <PiMinusCircleDuotone size={42} />
                    </button>

                    <input
                      type="number"
                      min={0}
                      value={quantity}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        setItemQuantity(product, value);
                      }}
                      className="w-14 text-center border border-green-300 rounded-md text-sm bg-white"
                    />

                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="hover:scale-105 duration-300"
                    >
                      <PiPlusCircleDuotone size={42} />
                    </button>
                  </div>
                )}
              </section>

              {/* Actions row */}
              <div className="mt-auto flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                <Link
                  className="btn bg-(--leaf-new) hover:bg-(--leaf-new)/90 text-white"
                  href="/cart"
                >
                  לעגלה וקנייה
                </Link>

                <ShareButton
                  title={title}
                  text={description ? description.slice(0, 80) : ""}
                  url={`/catalog/${slug}`} // אפשר גם בלי url בכלל
                  className="btn btn-outline border-(--leaf-new) text-(--leaf-new) hover:bg-(--leaf-new) hover:text-white"
                />

                <Link
                  href="/catalog"
                  className="btn text-(--leaf-new) hover:text-(--leaf-new)/70 bg-white/0 shadow-none border-0"
                >
                  חזרה לקטלוג
                </Link>
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}
