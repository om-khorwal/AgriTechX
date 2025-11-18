"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Products from "../components/Products";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { INITIAL_PRODUCTS } from "../data";
import type { Product } from "../types";


export default function Page() {
const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);


function addProduct(p: Product) {
setProducts((s) => [p, ...s]);
}


return (
<div className="min-h-screen bg-white text-gray-900">
<Header />


<main className="max-w-7xl mx-auto px-4 md:px-6 lg:py-8">
<Hero />
<section className="py-12 md:py-16">
<CTA />
</section>


<section className="py-12 md:py-16">
<Products products={products} onAddProduct={addProduct} />
</section>
<section className="py-12 md:py-16">
 <AboutSection />
</section>
<section className="py-12 md:py-16">
 <TeamSection />
</section>

</main>


<Footer />
</div>
);
}