import { useMemo } from "react";
import { useCategories } from "./useCategories";
import { useAllSubcategories } from "./useAllSubcategories";
import { useProducts } from "./useProducts";

export function useCatalogTree() {
  const { categories, loading: categoriesLoading } = useCategories();
  const { subcategories } = useAllSubcategories();
  const { products } = useProducts();

  const catalogTree = useMemo(() => {
    if (!categories.length && !subcategories.length && !products.length) {
      return [];
    }

    return categories.map((category) => {
      const categoryProducts = products.filter(
        (product) =>
          product.categoryId === category.id &&
          (!product.subcategoryId || product.subcategoryId === "")
      );

      const categorySubcategories = subcategories.filter(
        (sub) => sub.categoryId === category.id
      );

      const subcategoriesWithProducts = categorySubcategories.map((sub) => {
        const subProducts = products.filter(
          (product) => product.subcategoryId === sub.id
        );

        return {
          ...sub,
          products: subProducts,
        };
      });

      return {
        ...category,
        products: categoryProducts,
        subcategories: subcategoriesWithProducts,
      };
    });
  }, [categories, subcategories, products]);

  const loading = categoriesLoading;

  return {
    catalogTree,
    loading,
    categories,
    subcategories,
    products,
  };
}
