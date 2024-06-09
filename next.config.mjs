/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.genius.com",
        pathname: "**",
      },
    ],
    domains: ["assets.genius.com"],
  },
};

export default nextConfig;
