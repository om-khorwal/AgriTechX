import React from "react";


export default function Hero() {
return (
<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-10 md:py-14">
<div className="space-y-6">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#303030]">Technology-driven agriculture that grows with you</h2>
<p className="text-lg text-gray-700 max-w-xl">Precision sensors, AI-driven farm intelligence and a marketplace to get better prices — built for small and large farms.</p>


<div className="flex gap-4 flex-wrap">
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-lg" style={{ background: "#f0a515", color: "#303030" }}>
Get a free farm assessment
</button>


<a className="px-4 py-3 rounded-md border" href="#products">Browse products</a>
</div>


<div className="mt-4 grid grid-cols-3 sm:grid-cols-3 gap-3 max-w-sm">
<div className="bg-gray-50 rounded-lg px-3 py-2 shadow-sm">
<div className="text-sm text-gray-600">Sensors deployed</div>
<div className="font-semibold">1.2K+</div>
</div>
<div className="bg-gray-50 rounded-lg px-3 py-2 shadow-sm">
<div className="text-sm text-gray-600">Farmers helped</div>
<div className="font-semibold">8,400+</div>
</div>
<div className="bg-gray-50 rounded-lg px-3 py-2 shadow-sm">
<div className="text-sm text-gray-600">Avg yield increase</div>
<div className="font-semibold">27%</div>
</div>
</div>
</div>


<div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 sm:h-96 lg:h-[520px]">
<img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80" alt="smart farm" className="w-full h-full object-cover" />


<div className="absolute left-4 right-4 bottom-6 rounded-xl p-4 shadow-lg bg-white border flex flex-col sm:flex-row items-center gap-3" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
<div className="flex-1">
<div className="font-bold text-sm text-[#303030]">Free farm assessment</div>
<div className="text-gray-600 text-sm">Enter your email and we’ll prepare a prioritized plan for sensors & irrigation.</div>
</div>


<div className="flex gap-2 w-full sm:w-auto">
<input className="px-3 py-2 rounded-md border w-full sm:w-64" placeholder="your@farmmail.com" />
<button className="px-4 py-2 rounded-md" style={{ background: "#303030", color: "#fff" }}>Request</button>
</div>
</div>
</div>
</section>
);
}