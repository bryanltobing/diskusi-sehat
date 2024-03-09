/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'http://baku-hantam.vercel.app',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
