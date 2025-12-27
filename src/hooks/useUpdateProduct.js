import { useState } from "react";
import { db } from "@/firebase/config";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { uploadImage } from "@/lib/uploadImage";

export function useUpdateProduct() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateProduct = async (productId, updates) => {
    setLoading(true);
    setError(null);

    try {
      const { file, imageUrl: currentImageUrl, ...restFields } = updates;

      let finalImageUrl = currentImageUrl || null;

      if (file) {
        const uploadedUrl = await uploadImage(file);
        if (!uploadedUrl) {
          throw new Error("Image upload failed, no URL returned");
        }
        finalImageUrl = uploadedUrl;
      }

      const ref = doc(db, "products", productId);

      await updateDoc(ref, {
        ...restFields,
        imageUrl: finalImageUrl,
        updatedAt: serverTimestamp(),
      });
    } catch (err) {
      console.error("Error updating product:", err);
      setError(err.message || "Failed to update product");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateProduct, loading, error };
}
