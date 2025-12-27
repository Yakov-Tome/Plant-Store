import { db } from "@/firebase/config";
import {
  deleteDoc,
  doc,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";

export function useDeleteCategory() {
  const deleteCategory = async (categoryId) => {
    const q = query(
      collection(db, "products"),
      where("categoryId", "==", categoryId)
    );

    const result = await getDocs(q);

    if (!result.empty) {
      throw new Error("לא ניתן למחוק קטגוריה שיש בה מוצרים");
    }

    await deleteDoc(doc(db, "categories", categoryId));
  };

  return { deleteCategory };
}
