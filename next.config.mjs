/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sui.ssgcdn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "simg.ssgcdn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "sitem.ssgcdn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "succ.ssgcdn.com",
        pathname: "**",
      },
    ],
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
    KAKAO_CLIENT_SECRET: process.env.KAKAO_CLIENT_SECRET,
  },
}

export default nextConfig
