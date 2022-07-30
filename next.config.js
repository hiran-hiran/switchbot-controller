/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    URL: process.env.URL,
    TOKEN: process.env.TOKEN,
  },
};

module.exports = nextConfig;
