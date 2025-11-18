import React from "react";

type Feature = { title: string; subtitle?: string; icon?: React.ReactNode };

export default function AboutSection({
  features = DEFAULT_FEATURES,
}: {
  features?: Feature[];
}) {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: text */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#303030] leading-tight">
            About AgriTechX
          </h2>

          <p className="mt-4 text-gray-700 max-w-xl">
            AgriTechX brings together sensors, simple on-field tools and AI-driven
            recommendations to help farmers make faster, data-backed decisions.
            We focus on sustainable yields, affordable hardware and direct market access.
          </p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <li key={f.title} className="flex gap-3 items-start bg-white border rounded-lg p-3 shadow-sm">
                <div className="flex-none w-10 h-10 rounded-md flex items-center justify-center" style={{ background: "#f0a515" }}>
                  {/* simple icon placeholder */}
                  <span className="text-[#303030] font-bold text-lg">{f.title.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-semibold text-[#303030]">{f.title}</div>
                  {f.subtitle && <div className="text-sm text-gray-600">{f.subtitle}</div>}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold shadow-lg"
              style={{ background: "#f0a515", color: "#303030" }}
            >
              Get a free demo
            </a>

            <a
              href="#products"
              className="inline-flex items-center px-5 py-3 rounded-lg border text-[#303030] hover:shadow-sm"
            >
              Browse products
            </a>
          </div>
        </div>

        {/* Right: image / visual */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-96">
          <img
            src="https://images.unsplash.com/photo-1501004031159-efd71a3a30a8?auto=format&fit=crop&w=1200&q=80"
            alt="about agri"
            className="w-full h-full object-cover"
            loading="lazy"
          />

          <div className="absolute left-4 bottom-4 bg-white rounded-xl p-4 shadow-md w-[88%]">
            <div className="text-sm text-gray-600">Start small, scale fast</div>
            <div className="font-semibold text-[#303030]">Pilot sensors on one field — expand as you see results</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const DEFAULT_FEATURES: Feature[] = [
  { title: "Sustainable practices", subtitle: "Minimize inputs — maximize output." },
  { title: "Built for farmers", subtitle: "Offline-friendly tools and local support." },
  { title: "Data-driven", subtitle: "Actionable recommendations daily." },
  { title: "Market access", subtitle: "Sell directly to buyers in our marketplace." },
];
