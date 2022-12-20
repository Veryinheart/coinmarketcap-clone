/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      's2.coinmarketcap.com',
      's3.coinmarketcap.com',
      'assets.coingecko.com',
      'www.coingecko.com',
    ],
  },
}

module.exports = nextConfig
