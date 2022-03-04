/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL: process.env.NODE_ENV === 'production' ? 'https://productionurl' : 'http://localhost:3000',
    MONGODB_URI : "mongodb+srv://Bhaumik:N65IL0xkEai5vr4p@cluster0.cwjpp.mongodb.net/myFirstDatabase1?retryWrites=true&w=majority",
    MONGODB_DB: "myFirstDatabase1",
    APP_NAME: "TO do App"
  }
}

module.exports = nextConfig
