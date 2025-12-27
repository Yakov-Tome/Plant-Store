import { db } from "@/firebase/config";
import { deleteDoc, doc } from "firebase/firestore";

export function useDeleteProduct() {
  const deleteProduct = async (productId) => {
    await deleteDoc(doc(db, "products", productId));
  };

  return { deleteProduct };
}
