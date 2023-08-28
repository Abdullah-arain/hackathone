/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "full-stack-ecommerce-clothing-web.vercel.app",
          port: "",
          pathname: "/**",
        }
      ],
      domains: ["cdn.sanity.io"],
    },
    headers: {
      'My-Header': 'My-Value',
    },
  };
  
  module.exports = nextConfig;
