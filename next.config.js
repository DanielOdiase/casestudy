/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media0.giphy.com',
        port: '',
        pathname: '/media/v1.Y2lkPTc5MGI3NjExMmM0ZWNiYmZmODdmNzA2M2YwZTM3NjIwN2IyNTI0MWU4NGRhMGFkMyZjdD1n/l1gYcLBSdL7PoDsizo/giphy.gif',
      },
    ],
  },
}
