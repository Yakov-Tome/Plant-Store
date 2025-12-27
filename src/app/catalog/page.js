import { Suspense } from "react";
import CatalogClient from "./CatalogClient";

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="p-4">טוען קטלוג...</div>}>
      <CatalogClient />
    </Suspense>
  );
}
