import { db } from "@/firebase/config";
import {
  deleteDoc,
  doc,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";

export function useDeleteSubcategory() {
  const deleteSubcategory = async (subcategoryId) => {
    const q = query(
      collection(db, "products"),
      where("subcategoryId", "==", subcategoryId)
    );

    const result = await getDocs(q);

    if (!result.empty) {
      throw new Error("לא ניתן למחוק תת־קטגוריה שיש בה מוצרים");
    }

    await deleteDoc(doc(db, "subcategories", subcategoryId));
  };

  return { deleteSubcategory };
}
