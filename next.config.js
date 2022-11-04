/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.ctfassets.net']
  }
}

module.exports = nextConfig

module.exports = {
  async redirects() {
    return [
      {
        source: '/fl-features',
        destination: 'https://github.com/pngme/pngme-feature-library',
        permanent: true,
        basePath: false,
      }
    ]
  }
}