/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:anything",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
