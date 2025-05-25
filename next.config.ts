import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: { // from where images are coming i am configuring that for optimization
    domains: ['images.unsplash.com','res.cloudinary.com']
  }
};

export default nextConfig;
