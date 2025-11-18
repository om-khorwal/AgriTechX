"use client";

import React, { useState } from "react";
import Image from "next/image";

/**
 * AgriTechX Landing (extended)
 * Paste into app/page.tsx
 *
 * NOTE: Make sure next.config.js allows images.unsplash.com
 */

export default function LandingPage() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [notifyList, setNotifyList] = useState<Record<string, string[]>>({});
  const [showAddModal, setShowAddModal] = useState(false);

  // CTA form state (custom CTA)
  const [assessmentEmail, setAssessmentEmail] = useState("");
  const [assessmentSent, setAssessmentSent] = useState(false);

  function addToCart(id: string) {
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
    toast("Added to cart");
  }

  function notifyMe(id: string) {
    const email = window.prompt("Enter your email to be notified for this product:");
    if (!email) return;
    setNotifyList((n) => ({ ...n, [id]: [...(n[id] ?? []), email.trim()] }));
    toast("Thanks — we will notify you at " + email);
  }

  function addProduct(payload: { title: string; subtitle?: string; price: string; image: string }) {
    const newProduct = { id: `p${Date.now()}`, ...payload };
    setProducts((p) => [newProduct, ...p]);
    setShowAddModal(false);
    toast("Product added");
  }

  function submitAssessment(e: React.FormEvent) {
    e.preventDefault();
    if (!assessmentEmail) return;
    setAssessmentSent(true);
    toast("Assessment requested: " + assessmentEmail);
    setAssessmentEmail("");
    setTimeout(() => setAssessmentSent(false), 4000);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-green-50 to-green-100 text-gray-900">
      {/* NAV */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-400 flex items-center justify-center shadow-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12c0 4.418 3.582 8 8 8s8-3.582 8-8" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 12L12 8l4 4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-base sm:text-lg lg:text-xl">AgriTechX</h1>
            <p className="text-xs text-gray-600 -mt-0.5">Modern farming. Smarter yields.</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a className="hover:text-green-700" href="#about">About</a>
          <a className="hover:text-green-700" href="#features">Features</a>
          <a className="hover:text-green-700" href="#solutions">Solutions</a>
          <a className="hover:text-green-700" href="#diagram">Diagrams</a>
          <a className="hover:text-green-700" href="#products">Products</a>
          <a className="hover:text-green-700" href="#contact">Contact</a>
          <button className="ml-2 px-4 py-2 rounded-lg bg-green-600 text-white shadow">Get Started</button>
        </div>

        <div className="md:hidden">
          <button aria-label="menu" className="p-2 rounded-lg bg-white/60 backdrop-blur">☰</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-10 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">Technology-driven agriculture that grows with you</h2>
          <p className="text-md sm:text-lg md:text-lg text-gray-700 max-w-xl">From precision sensors and AI-driven crop insights to marketplace-ready produce — we combine modern tech and sustainable farming practices to increase yield and profitability.</p>

          <div className="flex gap-3 items-center flex-wrap">
            <a href="#contact" className="px-5 py-3 rounded-md bg-gradient-to-r from-green-600 to-emerald-400 text-white font-semibold shadow-lg text-sm sm:text-base">Talk to an expert</a>
            <a href="#features" className="px-4 py-3 rounded-md border border-green-200 text-green-700 font-medium text-sm sm:text-base">Explore features</a>
          </div>

          <div className="mt-4 grid grid-cols-3 sm:grid-cols-3 gap-3 max-w-sm">
            <Stat label="Sensors deployed" value="1.2K+" />
            <Stat label="Farmers helped" value="8,400+" />
            <Stat label="Avg yield increase" value="27%" />
          </div>
        </div>

        <div className="relative order-first md:order-last">
          <div className="rounded-2xl overflow-hidden shadow-2xl relative w-full h-64 sm:h-80 md:h-96 lg:h-[520px]">
            <Image src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80" alt="smart-farm-hero" fill className="object-cover" priority />
          </div>

          <div className="absolute -bottom-6 left-6 sm:left-8 md:left-10 lg:left-12 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100 w-64 sm:w-72 md:w-80 lg:w-96">
            <h4 className="font-semibold text-sm sm:text-base">Field Monitor</h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Soil moisture: <strong>32%</strong> · Temp: <strong>26°C</strong></p>
            <div className="mt-3 bg-gray-100 h-2 rounded-full overflow-hidden">
              <div style={{ width: "32%" }} className="h-2 bg-green-500" />
            </div>

            <div className="mt-3 flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-md border overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1503384314-8f0a6dfc1d5d?auto=format&fit=crop&w=500&q=60" alt="monitor-thumb" fill className="object-cover" />
              </div>
              <div className="text-xs text-gray-600">Live feed snapshot — drone view</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / MISSION */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold">About AgriTechX</h3>
            <p className="text-gray-700 max-w-xl">AgriTechX was founded to bridge the gap between smallholder farmers and modern agri-tech. We deliver affordable sensors, practical AI insights and a digital marketplace that helps farms increase yield and access better prices.</p>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex gap-3 items-start">
                <div className="mt-1 w-9 h-9 rounded-md bg-green-50 flex items-center justify-center text-green-700">✓</div>
                <div>
                  <div className="font-semibold">Sustainable practices</div>
                  <div className="text-sm text-gray-600">Minimize inputs, maximize output.</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="mt-1 w-9 h-9 rounded-md bg-green-50 flex items-center justify-center text-green-700">⚙️</div>
                <div>
                  <div className="font-semibold">Built for farmers</div>
                  <div className="text-sm text-gray-600">Simple, offline-friendly tools with local support.</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="mt-1 w-9 h-9 rounded-md bg-green-50 flex items-center justify-center text-green-700">📈</div>
                <div>
                  <div className="font-semibold">Data-driven</div>
                  <div className="text-sm text-gray-600">Actionable recommendations daily.</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="mt-1 w-9 h-9 rounded-md bg-green-50 flex items-center justify-center text-green-700">🤝</div>
                <div>
                  <div className="font-semibold">Market access</div>
                  <div className="text-sm text-gray-600">Sell directly to buyers in our marketplace.</div>
                </div>
              </li>
            </ul>

            <div className="mt-4 flex gap-3">
              <a href="#contact" className="px-5 py-3 rounded-md bg-gradient-to-r from-green-600 to-emerald-400 text-white font-semibold shadow-lg">Get a free demo</a>
              <a href="#products" className="px-4 py-3 rounded-md border border-green-200 text-green-700 font-medium">Browse products</a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96">
            <Image src="https://images.unsplash.com/photo-1501004031159-efd71a3a30a8?auto=format&fit=crop&w=1200&q=80" alt="about-photo" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="max-w-7xl mx-auto px-6 py-10 sm:py-14">
        <h3 className="text-2xl sm:text-3xl font-bold text-center">Meet the team</h3>
        <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">Engineers, agronomists and supply-chain experts — working together to bring modern tools to farms.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {TEAM.map((m) => (
            <div key={m.name} className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white -mt-12 shadow-md">
                <Image src={m.photo} alt={m.name} fill className="object-cover" />
              </div>
              <div className="mt-4 font-semibold">{m.name}</div>
              <div className="text-sm text-gray-500">{m.role}</div>
              <div className="mt-3 text-sm text-gray-600">{m.bio}</div>
              <div className="mt-4 flex gap-2">
                <a className="text-sm text-green-700 underline" href="#">Message</a>
                <a className="text-sm text-gray-500" href="#">Profile</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="max-w-7xl mx-auto px-6 py-10 sm:py-14">
        <h3 className="text-2xl sm:text-3xl font-bold text-center">Farmers we helped</h3>
        <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">Real results from real farms — collected via our on-field partnerships.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.id} className="bg-white rounded-2xl p-6 shadow">
              <div className="text-gray-700">“{t.quote}”</div>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden relative">
                  <Image src={t.photo} alt={t.author} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.author}</div>
                  <div className="text-xs text-gray-500">{t.place}</div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      {/* PARTNERS / TRUSTED BY */}
      <section id="partners" className="max-w-7xl mx-auto px-6 py-10 sm:py-14">
        <h4 className="text-lg font-semibold text-center text-gray-700">Trusted by</h4>
        <div className="mt-6 flex items-center justify-center gap-8 flex-wrap">
          <div className="w-28 h-12 flex items-center justify-center bg-white rounded-md shadow-sm">AgriCo</div>
          <div className="w-28 h-12 flex items-center justify-center bg-white rounded-md shadow-sm">FarmEx</div>
          <div className="w-28 h-12 flex items-center justify-center bg-white rounded-md shadow-sm">GreenLab</div>
          <div className="w-28 h-12 flex items-center justify-center bg-white rounded-md shadow-sm">CropNet</div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-7xl mx-auto px-6 py-10 sm:py-14">
        <h3 className="text-2xl sm:text-3xl font-bold text-center">Frequently asked questions</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {FAQ.map((q, i) => (
            <AccordionItem key={q.q} index={i} q={q.q} a={q.a} />
          ))}
        </div>
      </section>

      {/* Custom CTA strip */}
      <section id="cta" className="max-w-7xl mx-auto px-6 py-8 sm:py-10">
        <div className="rounded-2xl bg-gradient-to-r from-green-700 to-emerald-600 text-white p-6 sm:p-8 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="max-w-2xl">
            <h4 className="text-xl sm:text-2xl font-bold">Ready to boost your yield with data-driven farming?</h4>
            <p className="mt-2 text-white/90">Request a free farm assessment — we’ll recommend sensors, irrigation and a prioritized action plan tailored to your fields.</p>
          </div>

          <form onSubmit={submitAssessment} className="flex gap-2 w-full sm:w-auto">
            <input value={assessmentEmail} onChange={(e) => setAssessmentEmail(e.target.value)} type="email" placeholder="you@farmmail.com" required className="px-3 py-2 rounded-md text-gray-800 w-full sm:w-64" />
            <button type="submit" className="px-4 py-2 rounded-md bg-white text-emerald-700 font-semibold hover:scale-105 transition">{assessmentSent ? "Requested" : "Request assessment"}</button>
          </form>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">Products</h3>
            <p className="text-gray-600 mt-1 max-w-xl">Handpicked tools, seeds and sensors — curated for modern farms. Click any product to learn more or add to cart.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#products" className="text-sm text-green-700 underline hidden sm:inline">View all products</a>
            <button onClick={() => setShowAddModal(true)} className="rounded-md bg-white border px-3 py-2 text-sm shadow hover:shadow-md">+ Add product</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={() => addToCart(p.id)} onNotify={() => notifyMe(p.id)} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#contact" className="inline-block px-6 py-3 rounded-md bg-green-600 text-white font-semibold shadow">Contact sales for bulk orders</a>
        </div>
      </section>

      {/* ---------- START: Footer (full width carpet + inner area) ---------- */}
      <footer id="contact" className="w-full mt-10">
        <div className="w-full bg-gradient-to-tr from-emerald-700 via-green-600 to-emerald-500 text-white">
          <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
            <div className="relative">
              <div className="pointer-events-none absolute -top-20 -left-20 w-56 h-56 rounded-full bg-white/5 blur-3xl" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12c0 4.418 3.582 8 8 8s8-3.582 8-8" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 12L12 8l4 4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-bold">AgriTechX</div>
                      <div className="text-xs text-white/80 -mt-0.5">Modern farming. Smarter yields.</div>
                    </div>
                  </div>

                  <p className="text-sm text-white/85 max-w-sm">
                    We help farms grow smarter: precision sensors, AI insights and a marketplace to sell your harvest. Trusted by growers nationwide.
                  </p>

                  <div className="flex items-center gap-3">
                    <SocialIcon name="twitter" />
                    <SocialIcon name="facebook" />
                    <SocialIcon name="instagram" />
                    <SocialIcon name="linkedin" />
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <div className="text-xs text-white/80">Accepted payments</div>
                    <div className="flex items-center gap-2 ml-2">
                      <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-xs">VISA</div>
                      <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-xs">MC</div>
                      <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-xs">UPI</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 gap-4">
                  <div>
                    <h6 className="font-semibold">Product</h6>
                    <ul className="mt-3 space-y-2 text-sm text-white/90">
                      <li><a className="hover:underline" href="#products">All Products</a></li>
                      <li><a className="hover:underline" href="#features">Features</a></li>
                      <li><a className="hover:underline" href="#diagram">How it works</a></li>
                      <li><a className="hover:underline" href="#contact">Contact Sales</a></li>
                    </ul>
                  </div>

                  <div>
                    <h6 className="font-semibold">Resources</h6>
                    <ul className="mt-3 space-y-2 text-sm text-white/90">
                      <li><a className="hover:underline" href="#">Case studies</a></li>
                      <li><a className="hover:underline" href="#">Pricing</a></li>
                      <li><a className="hover:underline" href="#">Blog</a></li>
                      <li><a className="hover:underline" href="#">Support</a></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/6 p-4 rounded-xl">
                  <h6 className="font-semibold text-white">Stay informed</h6>
                  <p className="mt-2 text-sm text-white/85">Subscribe to monthly farming tips and product updates — no spam.</p>

                  <NewsletterForm />

                  <div className="mt-4 border-t border-white/10 pt-3 text-sm text-white/80">
                    <div className="font-medium">Contact</div>
                    <div className="mt-1">hello@agritechx.com · +91 98765 43210</div>
                    <div className="mt-2 text-xs">Office: 12 Greenway, Agri Park, State</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-white/80">© {new Date().getFullYear()} AgriTechX — Built with ❤️ for modern farming</div>

                <div className="flex items-center gap-4">
                  <a className="text-sm text-white/80 hover:text-white" href="#">Privacy</a>
                  <a className="text-sm text-white/80 hover:text-white" href="#">Terms</a>
                  <a className="text-sm text-white/80 hover:text-white" href="#">Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ---------- END: Footer ---------- */}

      {/* Floating cart summary / add product button */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-3 items-end z-50">
        <CartBubble cart={cart} products={products} />
        <button onClick={() => setShowAddModal(true)} title="Add product" className="bg-white p-3 rounded-full shadow hover:shadow-lg">
          ➕
        </button>
      </div>

      {/* Add Product Modal */}
      {showAddModal && <AddProductModal onClose={() => setShowAddModal(false)} onCreate={(payload) => addProduct(payload)} />}
    </main>
  );
}

/* ----------------- helpers & components ----------------- */

function toast(msg: string) {
  // quick console feedback for now
  // eslint-disable-next-line no-console
  console.log("toast:", msg);
}

function CartBubble({ cart, products }: { cart: Record<string, number>; products: Product[] }) {
  const total = Object.values(cart).reduce((s, n) => s + n, 0);
  return (
    <div className="bg-white rounded-full px-3 py-2 shadow flex items-center gap-3">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" className="text-green-600">
        <path d="M3 3h2l1 12h12" stroke="#15803D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="20" r="1" fill="#15803D" />
        <circle cx="18" cy="20" r="1" fill="#15803D" />
      </svg>
      <div className="text-sm">Cart</div>
      <div className="bg-green-600 text-white text-xs px-2 py-0.5 rounded">{total}</div>
    </div>
  );
}

function ProductCard({ product, onAdd, onNotify }: { product: Product; onAdd: () => void; onNotify: () => void }) {
  return (
    <article className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <div className="w-full h-44 sm:h-40 md:h-44 lg:h-36 xl:h-44 overflow-hidden relative">
        <Image src={product.image} alt={product.title} fill className="object-cover" />
      </div>

      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <h4 className="font-semibold text-sm sm:text-base">{product.title}</h4>
          {product.subtitle && <p className="text-xs text-gray-500 mt-1">{product.subtitle}</p>}
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="text-lg font-semibold">{product.price}</div>
          <div className="flex items-center gap-2">
            <button onClick={onNotify} className="px-3 py-1 text-sm rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">Notify me</button>
            <button onClick={onAdd} className="px-3 py-1 text-sm rounded-md bg-green-600 text-white">Add</button>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ----------------- Add Product Modal ----------------- */
function AddProductModal({ onClose, onCreate }: { onClose: () => void; onCreate: (p: { title: string; subtitle?: string; price: string; image: string }) => void }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !price || !image) {
      // eslint-disable-next-line no-alert
      alert("Please provide title, price and image URL");
      return;
    }
    onCreate({ title, subtitle, price, image });
    setTitle("");
    setSubtitle("");
    setPrice("");
    setImage("");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <form onSubmit={submit} className="relative bg-white rounded-2xl p-6 w-full max-w-md z-10 shadow-lg">
        <h4 className="font-semibold text-lg mb-3">Add product</h4>

        <label className="block mb-2 text-sm">Title
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 w-full border px-3 py-2 rounded" placeholder="e.g. Precision Soil Sensor" />
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
          <button type="submit" className="px-4 py-2 rounded-md bg-green-600 text-white">Create</button>
        </div>
      </form>
    </div>
  );
}

/* ----------------- Small UI building blocks ----------------- */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/60 rounded-lg px-3 py-2 shadow-sm">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: React.FC }) {
  return (
    <div className="flex gap-4 items-start p-3 sm:p-4 rounded-lg bg-white shadow-sm">
      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-md bg-green-50">
        <div className="w-6 h-6 sm:w-8 sm:h-8">{React.createElement(icon)}</div>
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-600">{desc}</div>
      </div>
    </div>
  );
}

function MiniCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-3 text-sm">
      <div className="text-gray-500">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}

function DiagramCard({ title, description, svg }: { title: string; description: string; svg: React.FC }) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow hover:shadow-lg transition">
      <div className="w-full h-32 sm:h-44 flex items-center justify-center mb-3">
        {React.createElement(svg)}
      </div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-gray-600 mt-2">{description}</div>
    </div>
  );
}

/* ----------------- Team / Testimonial / FAQ data & helpers ----------------- */

const TEAM = [
  {
    name: "Asha Rao",
    role: "Co-founder & Agronomist",
    bio: "12 years advising smallholders on soil health & sustainable cropping.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ravi Patel",
    role: "CTO",
    bio: "Building simple, offline-first sensor firmware and cloud analytics.",
    photo: "https://images.unsplash.com/photo-1545996124-3b0b5a6d7a05?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Meera Singh",
    role: "Head of Operations",
    bio: "Logistics & farmer onboarding across states.",
    photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=80",
  },
];

const TESTIMONIALS = [
  { id: "t1", quote: "Sensors saved me time and gave clear irrigation schedules — yields up 22%.", author: "Suresh (Karnataka)", place: "Karnataka", photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=400&q=80" },
  { id: "t2", quote: "Market access meant better prices and less waste — the platform paid for itself.", author: "Fatima (Maharashtra)", place: "Maharashtra", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" },
  { id: "t3", quote: "The NDVI drone reports made pest detection simple and cheap.", author: "Raju (Punjab)", place: "Punjab", photo: "https://images.unsplash.com/photo-1545996124-3b0b5a6d7a05?auto=format&fit=crop&w=400&q=80" },
];

const FAQ = [
  { q: "How quickly will sensors show results?", a: "Sensors transmit data immediately; you’ll start seeing insights in the dashboard within 24-48 hours once installed." },
  { q: "Do sensors work offline?", a: "Yes — devices buffer data locally and sync when connectivity is available. Battery-backed storage prevents data loss." },
  { q: "Can you help with installation?", a: "Absolutely — we provide installation guides, remote support and on-field technicians in many regions." },
];

function AccordionItem({ q, a, index }: { q: string; a: string; index?: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <button onClick={() => setOpen((s) => !s)} className="w-full flex items-center justify-between text-left">
        <div>
          <div className="font-medium">{q}</div>
          <div className="text-sm text-gray-500">{open ? "Hide answer" : "Read answer"}</div>
        </div>
        <div className="ml-4 text-green-600">{open ? "−" : "+"}</div>
      </button>
      {open && <div className="mt-3 text-sm text-gray-700">{a}</div>}
    </div>
  );
}

/* ----------------- Data & SVGs (unchanged) ----------------- */

type Product = { id: string; title: string; subtitle?: string; price: string; image: string };

const INITIAL_PRODUCTS: Product[] = [
  { id: "p1", title: "Precision Soil Sensor", subtitle: "Moisture & EC sensor", price: "₹3,499", image: "" },
  { id: "p2", title: "Hybrid Seed Pack - 1kg", subtitle: "High-yield variety", price: "₹699", image: "" },
  { id: "p3", title: "Smart Irrigation Controller", subtitle: "WiFi + Soil-driven", price: "₹7,999", image: "" },
  { id: "p4", title: "Organic Fertilizer (10kg)", subtitle: "Slow-release compost", price: "₹1,199", image: "" },
  { id: "p5", title: "Drone Scouting Package", subtitle: "Weekly NDVI reports", price: "₹12,499", image: "" },
  { id: "p6", title: "Pest Trap Kit", subtitle: "Eco-friendly monitoring", price: "₹449", image: "" },
  { id: "p7", title: "Soil Test Kit", subtitle: "pH, NPK & organic matter", price: "₹349", image: "" },
  { id: "p8", title: "Seedling Tray Set", subtitle: "Reusable 50-cells", price: "₹249", image: "" },
];

const SensorIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="4" stroke="#16A34A" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="3" stroke="#16A34A" strokeWidth="1.2" />
  </svg>
);

const AiIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3v6" stroke="#15803D" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M12 15v6" stroke="#15803D" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M3 12h6" stroke="#15803D" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M15 12h6" stroke="#15803D" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const CartIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3h2l1 12h12" stroke="#15803D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="20" r="1" fill="#15803D" />
    <circle cx="18" cy="20" r="1" fill="#15803D" />
  </svg>
);

const ChartIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20v-7" stroke="#15803D" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M10 20v-3" stroke="#15803D" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M16 20v-10" stroke="#15803D" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const DataCollectionSVG: React.FC = () => (
  <svg viewBox="0 0 160 100" width="220" height="140" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="30" width="48" height="36" rx="6" fill="#ECFDF5" stroke="#16A34A" />
    <circle cx="28" cy="48" r="6" fill="#16A34A" />
    <rect x="58" y="18" width="40" height="64" rx="6" fill="#F0FDF4" stroke="#16A34A" />
    <path d="M110 10c12 8 24 18 36 28" stroke="#86EFAC" strokeWidth="3" strokeLinecap="round" />
    <circle cx="132" cy="38" r="10" fill="#A7F3D0" />
  </svg>
);

const ProcessingSVG: React.FC = () => (
  <svg viewBox="0 0 160 100" width="220" height="140" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="20" width="140" height="60" rx="10" fill="#ECFDF5" stroke="#16A34A" />
    <circle cx="40" cy="50" r="10" fill="#34D399" />
    <circle cx="80" cy="50" r="10" fill="#34D399" />
    <circle cx="120" cy="50" r="10" fill="#34D399" />
    <path d="M40 60 L120 60" stroke="#86EFAC" strokeWidth="2" />
  </svg>
);

const MarketSVG: React.FC = () => (
  <svg viewBox="0 0 160 100" width="220" height="140" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="24" width="44" height="44" rx="8" fill="#F0FFF4" stroke="#16A34A" />
    <path d="M90 36h40v28h-40z" fill="#ECFDF5" stroke="#16A34A" />
    <path d="M18 48h132" stroke="#A7F3D0" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/* ---------- Newsletter form component used in footer ---------- */
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    toast("Subscribed: " + email);
    setEmail("");
    setTimeout(() => setDone(false), 3000);
  }

  return (
    <form onSubmit={submit} className="mt-4 flex gap-2">
      <input aria-label="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" required className="flex-1 px-3 py-2 rounded-md bg-white/8 placeholder-white/60 text-white outline-none focus:ring-2 focus:ring-white/20" />
      <button type="submit" className="px-4 py-2 rounded-md bg-white text-emerald-700 font-semibold hover:scale-105 transition">{done ? "Done" : "Subscribe"}</button>
    </form>
  );
}

/* ---------- SocialIcon helper ---------- */
function SocialIcon({ name }: { name: "twitter" | "facebook" | "instagram" | "linkedin" }) {
  const base = "w-9 h-9 flex items-center justify-center rounded-md bg-white/8 hover:bg-white/12 transition";
  if (name === "twitter") {
    return (
      <a className={base} href="#" aria-label="twitter">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 3s-1 2-3 3c0 0 1 0 2 1-1 0-2 0-3 1-1 1-3 1-5 1-3 0-5-2-6-4 0 0-3 6 4 9-1 0-3 0-3 1 0 6 7 9 12 6 0 0 0 0 1 0 2-1 5-3 6-6 1-3 1-6 0-8 1 0 2-1 2-1z" stroke="white" strokeWidth="0.8" fill="currentColor" />
        </svg>
      </a>
    );
  }
  if (name === "facebook") {
    return (
      <a className={base} href="#" aria-label="facebook">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.84 3.44 8.84 7.94 9.76v-6.9H7.9v-2.86h2.04V9.4c0-2.02 1.2-3.14 3.03-3.14.88 0 1.8.16 1.8.16v1.98h-1.01c-.99 0-1.3.62-1.3 1.25v1.5h2.22l-.36 2.86h-1.86v6.9C18.56 20.9 22 16.91 22 12.07z" fill="currentColor" />
        </svg>
      </a>
    );
  }
  if (name === "instagram") {
    return (
      <a className={base} href="#" aria-label="instagram">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zM17.5 6.2a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" stroke="white" strokeWidth="0.6" fill="currentColor" />
        </svg>
      </a>
    );
  }
  return (
    <a className={base} href="#" aria-label="linkedin">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.94 21H3.5V9h3.44v12zM5.22 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM21 21h-3.44V14c0-1.66-.6-2.78-2.08-2.78-1.13 0-1.8.77-2.1 1.51-.11.27-.14.66-.14 1.05v6.22H9.1s.05-10.08 0-11.12h3.44v1.58c.46-.7 1.28-1.7 3.1-1.7 2.27 0 3.97 1.48 3.97 4.66V21z" fill="currentColor" />
      </svg>
    </a>
  );
}
