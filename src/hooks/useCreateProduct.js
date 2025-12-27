import { db } from "@/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { uploadImage } from "@/lib/uploadImage";
import { useState } from "react";

export function useCreateProduct() {
  const [loading, setLoading] = useState(false);

  const createProduct = async (productData) => {
    const {
      title,
      slug,
      description,
      price,

      categoryIds = [],
      subcategoryIds = [],

      file,
    } = productData;

    if (!file) throw new Error("No image file provided");

    if (!slug || !slug.trim()) {
      throw new Error("Product slug is required");
    }

    try {
      setLoading(true);

      const imageUrl = await uploadImage(file);
      if (!imageUrl) throw new Error("Image upload failed");

      await addDoc(collection(db, "products"), {
        title,
        name: title,
        slug: slug.trim(),
        description,
        price: Number(price),

        categoryIds: categoryIds.map(String),
        subcategoryIds: Array.isArray(subcategoryIds)
          ? subcategoryIds.map(String)
          : [],

        imageUrl,
        createdAt: serverTimestamp(),
      });
    } finally {
      setLoading(false);
    }
  };

  return { createProduct, loading };
}
