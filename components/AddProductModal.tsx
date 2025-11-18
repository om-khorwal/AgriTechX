import React, { useState } from "react";
import type { Product } from "../types";


export default function AddProductModal({ onClose, onCreate }: { onClose: () => void; onCreate: (p: Product) => void }) {
const [title, setTitle] = useState("");
const [subtitle, setSubtitle] = useState("");
const [price, setPrice] = useState("");
const [image, setImage] = useState("");


function submit(e: React.FormEvent) {
e.preventDefault();
if (!title || !price) return alert("Title + price required");
onCreate({ id: `p${Date.now()}`, title, subtitle, price, image });
}


return (
<div className="fixed inset-0 z-50 flex items-center justify-center">
<div className="absolute inset-0 bg-black/40" onClick={onClose} />
<form onSubmit={submit} className="relative bg-white rounded-2xl p-6 w-full max-w-md z-10 shadow-lg">
<h4 className="font-semibold text-lg mb-3">Add product</h4>


<label className="block mb-2 text-sm">Title
<input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 w-full border px-3 py-2 rounded" placeholder="Precision Soil Sensor" />
</label>


<label className="block mb-2 text-sm">Subtitle
<input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="mt-1 w-full border px-3 py-2 rounded" placeholder="short description (optional)" />
</label>


<label className="block mb-2 text-sm">Price
<input value={price} onChange={(e) => setPrice(e.target.value)} className="mt-1 w-full border px-3 py-2 rounded" placeholder="₹3,499" />
</label>


<label className="block mb-4 text-sm">Image URL
<input value={image} onChange={(e) => setImage(e.target.value)} className="mt-1 w-full border px-3 py-2 rounded" placeholder="https://..." />
</label>


<div className="flex justify-end gap-3">
<button type="button" onClick={onClose} className="px-4 py-2 rounded-md border">Cancel</button>
<button type="submit" className="px-4 py-2 rounded-md bg-[#303030] text-white">Create</button>
</div>
</form>
</div>
);
}