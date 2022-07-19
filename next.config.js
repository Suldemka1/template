/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // APIpath: 'template-woad-psi.vercel.app',
    APIpath: 'localhost:3000'
  },
  images: {
    domains: ['i.imgur.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/'
      }
    ]
},

  reactStrictMode: true,
}

module.exports = nextConfig
