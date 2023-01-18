/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGODB_URL: "mongodb+srv://deepak_singh_5219:singhdeepak@cluster0.r3b1b.mongodb.net/testDB"
  }
}

module.exports = nextConfig
