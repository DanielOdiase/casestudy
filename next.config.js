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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/file/d/1UPfBC84zOiQHghbBQ4tfu9lzLO2T2jKp/view?usp=share_link',
      },
    ],
  },
}
