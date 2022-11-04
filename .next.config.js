// next.config.js

const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
    swcMinify: true,
    staticPageGenerationTimeout: 200,
    i18n: {
        locales: ['en-AU'],
        defaultLocale: 'en-AU',
    },
    images: {
        loader: 'custom',
    },
    experimental: { esmExternals: true }
});