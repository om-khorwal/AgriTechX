import React from "react";


export default function Footer() {
return (
<footer className="w-full mt-10 bg-[#303030] text-white">
<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-3 gap-8">
<div>
<h4 className="text-lg font-bold">AgriTechX</h4>
<p className="mt-2 text-sm">Precision sensors, AI insights and marketplaces — built for farms.</p>
</div>


<div className="flex gap-8">
<div>
<h6 className="font-semibold">Product</h6>
<ul className="mt-3 space-y-2 text-sm">
<li><a href="#products" className="hover:underline">All Products</a></li>
<li><a href="#features" className="hover:underline">Features</a></li>
</ul>
</div>


<div>
<h6 className="font-semibold">Resources</h6>
<ul className="mt-3 space-y-2 text-sm">
<li><a href="#" className="hover:underline">Case studies</a></li>
<li><a href="#" className="hover:underline">Blog</a></li>
</ul>
</div>
</div>


<div>
<h6 className="font-semibold">Contact</h6>
<div className="mt-2 text-sm">hello@agritechx.com · +91 98765 43210</div>
<div className="mt-4">
<form onSubmit={(e) => { e.preventDefault(); alert('Subscribed'); }}>
<div className="flex gap-2">
<input type="email" placeholder="Your email" required className="px-3 py-2 rounded-md w-full text-sm text-black" />
<button className="px-4 py-2 rounded-md font-semibold" style={{ background: "#f0a515", color: "#303030" }}>Subscribe</button>
</div>
</form>
</div>
</div>
</div>


<div className="mt-8 text-center text-sm opacity-80">© {new Date().getFullYear()} AgriTechX — Built with ♥ for modern farming</div>
</div>
</footer>
);
}