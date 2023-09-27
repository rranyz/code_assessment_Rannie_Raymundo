/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    YT_URL: process.env.YT_EMBEB_URL,
    YT_KEY: process.env.YT_KEY
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/vi/**'
      }
    ]
  }
}

module.exports = nextConfig
