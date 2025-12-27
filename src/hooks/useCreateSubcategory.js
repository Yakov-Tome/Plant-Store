import { db } from "@/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export function useCreateSubcategory() {
  const createSubcategory = async ({ categoryId, name, slug, description }) => {
    if (!categoryId || !name || !slug || !description) {
      throw new Error("חסר אחד השדות הנדרשים לתת־קטגוריה");
    }

    await addDoc(collection(db, "subcategories"), {
      categoryId,
      name,
      slug,
      description,
      createdAt: serverTimestamp(),
    });
  };

  return { createSubcategory };
}
