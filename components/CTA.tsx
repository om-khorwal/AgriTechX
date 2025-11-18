

import React, { useState } from "react";


export default function CTA() {
const [email, setEmail] = useState("");
const [done, setDone] = useState(false);


function submit(e: React.FormEvent) {
e.preventDefault();
if (!email) return;
setDone(true);
setTimeout(() => setDone(false), 3000);
setEmail("");
}


return (
<div className="rounded-2xl p-6 sm:p-8 shadow-lg" style={{ background: "linear-gradient(90deg,#303030,#f0a515)" }}>
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="max-w-2xl text-white">
<h4 className="text-xl sm:text-2xl font-bold">Ready to boost your yield with data-driven farming?</h4>
<p className="mt-2 text-white/90">Request a free farm assessment — we’ll recommend sensors, irrigation and a prioritized action plan tailored to your fields.</p>
</div>


<form onSubmit={submit} className="flex gap-2 w-full sm:w-auto">
<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@farmmail.com" required className="px-3 py-2 rounded-md w-full sm:w-64 text-gray-800" />
<button className="px-4 py-2 rounded-md bg-white font-semibold" style={{ color: "#303030" }}>{done ? "Requested" : "Request assessment"}</button>
</form>
</div>
</div>
);
}