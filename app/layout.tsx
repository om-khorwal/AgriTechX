// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agritech",
  description: "Modern agri technology landing page — AgriTechX",
  // Add favicon and apple touch icon here. Place these files in /public
  icons: {
    icon: "/favicon.ico", // standard
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  // Optionally set theme color for mobile chrome
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0fff4" },
    { media: "(prefers-color-scheme: dark)", color: "#052e05" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
