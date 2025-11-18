import React from "react";


export default function Header() {
return (
<header className="py-6">
<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shadow-md" style={{ background: "linear-gradient(135deg,#303030,#f0a515)" }}>
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12c0 4.418 3.582 8 8 8s8-3.582 8-8" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
<path d="M8 12L12 8l4 4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</div>
<div>
<h1 className="font-bold text-base sm:text-lg lg:text-xl">AgriTechX</h1>
<p className="text-xs text-gray-600 -mt-0.5">Modern farming. Smarter yields.</p>
</div>
</div>


<nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
<a href="#about" className="hover:text-[#2C5539]">About</a>
<a href="#features" className="hover:text-[#2C5539]">Features</a>
<a href="#soil" className="hover:text-[#2C5539]">Soil</a>
<a href="#products" className="hover:text-[#2C5539]">Products</a>
<a href="#contact" className="hover:text-[#2C5539]">Contact</a>
<button className="ml-2 px-4 py-2 rounded-lg text-white" style={{ background: "#303030" }}>Get Started</button>
</nav>


<div className="md:hidden">
<button aria-label="menu" className="p-2 rounded-lg bg-gray-50">☰</button>
</div>
</div>
</header>
);
}