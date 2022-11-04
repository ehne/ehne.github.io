// next.config.js

const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = {
    swcMinify: true,
    staticPageGenerationTimeout: 200,
    i18n: {
        locales: ['en-AU'],
        defaultLocale: 'en-AU',
    },
    experimental: { 
        esmExternals: true,
    },
    images: {
        loader: 'custom',
        loaderFile: './lib/imageLoader.js',
        domains: ["collective-fullstack.github.io"],
        unoptimized: true
    },
}