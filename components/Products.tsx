

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "../types";
import AddProductModal from "./AddProductModal";


export default function Products({ products, onAddProduct }: { products: Product[]; onAddProduct: (p: Product) => void }) {
const [showModal, setShowModal] = useState(false);


return (
<section id="products">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-2xl sm:text-3xl font-bold">Products</h3>
<p className="text-gray-600 mt-1 max-w-xl">Handpicked tools, seeds and sensors — curated for modern farms.</p>
</div>


<div className="flex items-center gap-3">
<button onClick={() => setShowModal(true)} className="rounded-md bg-white border px-3 py-2 text-sm shadow hover:shadow-md">+ Add product</button>
</div>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{products.map((p) => (
<ProductCard key={p.id} product={p} />
))}
</div>


{showModal && <AddProductModal onClose={() => setShowModal(false)} onCreate={(p) => { onAddProduct(p); setShowModal(false); }} />}
</section>
);
}