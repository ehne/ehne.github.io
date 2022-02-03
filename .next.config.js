// next.config.js
module.exports = {
    i18n: {
        locales: ['en-AU'],
        defaultLocale: 'en-AU',
    },
    images: {
        loader: 'custom',
    },
    experimental: { esmExternals: true }
};