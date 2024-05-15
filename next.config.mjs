/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    unoptimized: true,
    domains: ["s3-alpha-sig.figma.com", "lh3.googleusercontent.com", "avatars.githubusercontent.com", "images.unsplash.com"]
    
  },
  

};

export default nextConfig;
