import React from "react";

export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  photo?: string; // image URL
  links?: { label: string; href: string }[];
};

export default function TeamSection({ members = DEFAULT_TEAM }: { members?: TeamMember[] }) {
  return (
    <section id="team" className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-[#303030]">Meet the team</h3>
      <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
        Engineers, agronomists and operations specialists dedicated to bringing modern tools to farms.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {members.map((m) => (
          <article key={m.name} className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white -mt-12 shadow-md">
              <img
                src={m.photo || placeholderAvatar(m.name)}
                alt={m.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-4 font-semibold text-[#303030]">{m.name}</div>
            <div className="text-sm text-gray-500">{m.role}</div>
            {m.bio && <div className="mt-3 text-sm text-gray-600">{m.bio}</div>}

            {m.links && (
              <div className="mt-4 flex gap-3">
                {m.links.map((l) => (
                  <a key={l.href} href={l.href} className="text-sm text-[#f0a515] underline">
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

/* small helper that returns a seeded avatar placeholder (so each member looks distinct) */
function placeholderAvatar(seed: string) {
  // quick identicon-like placeholder using initials + bg color
  const initials = seed
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='420' height='420'><rect width='100%' height='100%' fill='%23f3f3f3'/><text x='50%' y='50%' font-size='80' dominant-baseline='middle' text-anchor='middle' fill='%23303030' font-family='Arial,Helvetica,sans-serif'>${initials}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const DEFAULT_TEAM: TeamMember[] = [
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
    bio: "Logistics & farmer onboarding across regions.",
    photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=80",
  },
];
