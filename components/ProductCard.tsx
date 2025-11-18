import React from "react";
import type { Product } from "../types";

const placeholder =
  "https://via.placeholder.com/400x300.png?text=No+Image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <div className="w-full h-44 sm:h-40 md:h-44 lg:h-36 xl:h-44 overflow-hidden relative">
        <img
          src={product.image || placeholder}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <h4 className="font-semibold text-sm sm:text-base">{product.title}</h4>
          {product.subtitle && (
            <p className="text-xs text-gray-500 mt-1">{product.subtitle}</p>
          )}
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="text-lg font-semibold">{product.price}</div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-sm rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">
              Notify me
            </button>
            <button className="px-3 py-1 text-sm rounded-md bg-[#303030] text-white">
              Add
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
