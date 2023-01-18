/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGODB_URL: "mongodb://localhost:27017/testDB"
  }
}

module.exports = nextConfig
