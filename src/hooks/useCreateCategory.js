import { db } from "@/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export function useCreateCategory() {
  const createCategory = async ({ name, slug, description }) => {
    if (!name || !slug || !description) {
      throw new Error("חסר אחד השדות הנדרשים לקטגוריה");
    }

    await addDoc(collection(db, "categories"), {
      name,
      slug,
      description,
      createdAt: serverTimestamp(),
    });
  };

  return { createCategory };
}
