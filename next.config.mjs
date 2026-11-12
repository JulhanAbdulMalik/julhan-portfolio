/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/artikel",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: "/artikel/:slug*",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/#portfolio",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
