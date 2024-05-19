/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "image.uniqlo.com",
      },
      {
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
