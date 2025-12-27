"use client";

import React from "react";
import { useCatalogTree } from "@/hooks/useCatalogTree";
import { FaFolder } from "react-icons/fa";
import { FaFolderTree } from "react-icons/fa6";
import { PiPottedPlantFill } from "react-icons/pi";

export default function CatalogTreePage() {
  const { catalogTree, loading } = useCatalogTree();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner text-accent"></span>
      </div>
    );
  }

  if (!catalogTree.length) {
    return (
      <p className="max-w-6xl mx-auto mt-40 text-2xl text-{--leaf-new} font-bold">
        אין קטגוריות במערכת.
      </p>
    );
  }

  return (
    <div className="p-10 text-right font-mono text-[#084D49] w-full max-w-6xl mx-auto">
      {catalogTree.map((category) => (
        <div
          key={category.id}
          className="border rounded-xl p-4 bg-base-100 shadow-sm mt-8 w-3/4 mx-auto"
        >
          {/* Category */}
          <div className="flex items-center gap-2 mb-2">
            <FaFolder className="text-warning" />
            <h2 className="font-bold text-lg">
              {category.name}{" "}
              <span className="text-xs text-gray-500">({category.slug})</span>
            </h2>
          </div>

          {/* Products directly under category */}
          {category.products && category.products.length > 0 && (
            <div className="ml-6 mb-3">
              <div className="flex items-center gap-2 mb-1">
                <PiPottedPlantFill className="text-success" />
                <span className="font-semibold text-sm">מוצרים בקטגוריה</span>
              </div>
              <ul className="list-disc list-inside text-sm space-y-1">
                {category.products.map((product) => (
                  <li key={product.id}>
                    {product.title}{" "}
                    {product.price && (
                      <span className="text-gray-500">- ₪{product.price}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Subcategories */}
          {category.subcategories && category.subcategories.length > 0 && (
            <div className="ml-4 space-y-3">
              {category.subcategories.map((sub) => (
                <div key={sub.id} className="border-t pt-2">
                  <div className="flex items-center gap-2 mb-1">
                    <FaFolderTree className="text-info" />
                    <h3 className="font-semibold text-sm">
                      {sub.name}{" "}
                      <span className="text-xs text-gray-500">
                        ({sub.slug})
                      </span>
                    </h3>
                  </div>

                  {sub.products && sub.products.length > 0 ? (
                    <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                      {sub.products.map((product) => (
                        <li key={product.id}>
                          {product.title}{" "}
                          {product.price && (
                            <span className="text-gray-500">
                              - ₪{product.price}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-gray-400 ml-4">
                      אין מוצרים בתת-קטגוריה זו.
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
