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
      },
      {
        source: '/ECR',
        destination: 'https://developers.api.pngme.com/reference/anatomy-of-a-credit-report',
        permanent: true,
        basePath: false,
      },
      {
        source: '/CBA',
        destination: 'https://app.hubspot.com/login',
        permanent: true,
        basePath: false,
      },
      {
        source: '/B&T',
        destination: 'https://developers.api.pngme.com/reference/anatomy-of-a-transaction',
        permanent: true,
        basePath: false,
      },
      {
        source: '/FL',
        destination: 'https://github.com/pngme/pngme-feature-library',
        permanent: true,
        basePath: false,
      },
      {
        source: '/DD',
        destination: 'http://admin.pngme.com/',
        permanent: true,
        basePath: false,
      },
      {
        source: '/FDM',
        destination: 'https://developers.api.pngme.com/reference/getting-started-with-your-api',
        permanent: true,
        basePath: false,
      },
    ]
  }
}