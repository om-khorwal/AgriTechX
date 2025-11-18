// app/page.tsx
"use client";

import React from "react";

export default function LandingPage() {
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
          <a className="hover:text-green-700" href="#features">Features</a>
          <a className="hover:text-green-700" href="#solutions">Solutions</a>
          <a className="hover:text-green-700" href="#diagram">Diagrams</a>
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
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=60"
              alt="smart-farm"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[520px] object-cover"
              loading="lazy"
            />
          </div>

          <div className="absolute -bottom-6 left-6 sm:left-8 md:left-10 lg:left-12 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100 w-64 sm:w-72 md:w-80 lg:w-96">
            <h4 className="font-semibold text-sm sm:text-base">Field Monitor</h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Soil moisture: <strong>32%</strong> · Temp: <strong>26°C</strong></p>
            <div className="mt-3 bg-gray-100 h-2 rounded-full overflow-hidden">
              <div style={{ width: "32%" }} className="h-2 bg-green-500" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FEATURES (scroll 1 end) */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-10 sm:py-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold">Built for modern farms</h3>
            <p className="text-gray-700 max-w-xl">AgriTechX bundles hardware, data, and actionable insights into one platform. Visualize farm health, predict irrigation needs, and connect directly with buyers.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <FeatureCard title="Precision Sensors" desc="Real-time soil and microclimate data for targeted interventions." icon={SensorIcon} />
              <FeatureCard title="AI Crop Insights" desc="Recommend planting schedules, fertilizer mixes and pest control using predictive models." icon={AiIcon} />
              <FeatureCard title="Marketplace" desc="List harvests directly, manage orders and logistics with built-in tools." icon={CartIcon} />
              <FeatureCard title="Farm Analytics" desc="Dashboards measuring yield, cost-per-acre and ROI over time." icon={ChartIcon} />
            </div>
          </div>

          <div>
            <div className="bg-white shadow-lg rounded-2xl p-5 sm:p-6">
              <h4 className="font-semibold">Live Farm Snapshot</h4>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <MiniCard label="Soil Moisture" value="32%" />
                <MiniCard label="pH" value="6.5" />
                <MiniCard label="Temp" value="26°C" />
                <MiniCard label="NDVI" value="0.78" />
              </div>

              <div className="mt-6">
                <img src="https://images.unsplash.com/photo-1503384314-8f0a6dfc1d5d?auto=format&fit=crop&w=900&q=60" alt="drone" className="w-full h-44 sm:h-56 object-cover rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: DIAGRAMS & SOLUTIONS (scroll 2 start) */}
      <section id="diagram" className="max-w-7xl mx-auto px-6 py-10 sm:py-16">
        <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center">How it works — end-to-end</h3>
        <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">Sensors, satellite & drone imagery feed into cloud analytics. Models create field-level prescriptions and a marketplace connects buyers to harvests.</p>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          <DiagramCard
            title="Data Collection"
            description="Sensors, drones and satellites collect high-frequency data from the field."
            svg={DataCollectionSVG}
          />

          <DiagramCard
            title="Processing & AI"
            description="Edge & cloud processing transform raw data into predictions and alerts."
            svg={ProcessingSVG}
          />

          <DiagramCard
            title="Action & Market"
            description="Automated irrigation, targeted inputs, and direct-to-buyer marketplace."
            svg={MarketSVG}
          />
        </div>

        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-green-50 to-white p-6 sm:p-8 rounded-2xl shadow-inner">
          <h4 className="font-semibold text-lg sm:text-xl">Ready to modernize your farm?</h4>
          <p className="text-gray-700 mt-2">Start with a free farm assessment — our experts will prepare a prioritized plan for sensors, irrigation and crop management.</p>
          <div className="mt-4 flex gap-3">
            <a href="#contact" className="px-5 py-3 rounded-md bg-green-600 text-white font-semibold">Request assessment</a>
            <a href="#contact" className="px-5 py-3 rounded-md border border-green-200 text-green-700">Contact Sales</a>
          </div>
        </div>
      </section>

      {/* CONTACT + FOOTER */}
      <footer id="contact" className="max-w-7xl mx-auto px-6 py-8 sm:py-12">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h5 className="font-bold">Get in touch</h5>
            <p className="text-gray-600 mt-2">Email: hello@agritechx.com</p>
            <p className="text-gray-600 mt-2">Phone: +91 98765 43210</p>
            <div className="mt-4 flex gap-2">
              <a className="text-sm text-gray-500">Privacy</a>
              <a className="text-sm text-gray-500">Terms</a>
            </div>
          </div>

          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <ul className="mt-3 text-gray-600 space-y-1">
              <li>Solutions</li>
              <li>Case Studies</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold">Subscribe</h5>
            <p className="text-gray-600 mt-2">Get monthly farming tips & product updates.</p>
            <div className="mt-3 flex gap-2">
              <input className="px-3 py-2 border rounded-l-md" placeholder="your email" />
              <button className="px-4 py-2 bg-green-600 text-white rounded-r-md">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-500">© {new Date().getFullYear()} AgriTechX — Built with ❤️ from TheOKcompany</div>
      </footer>
    </main>
  );
}

/* ----------------- Small components used above ----------------- */
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

/* ----------------- Simple SVG icons & diagrams ----------------- */
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
