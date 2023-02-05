/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
  },
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja'
  }
}
