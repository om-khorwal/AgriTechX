/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      // add any other remote hosts you use here
    ],
  },
};

module.exports = nextConfig;
