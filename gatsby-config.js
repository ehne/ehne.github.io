module.exports = {
  siteMetadata: {
    title: `darcylf.me`,
    description: `Hi! I'm Darcy Lugt-Falk, a web designer and developer based in Melbourne`,
    author: `darcy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-json`,
    {
      resolve:`gatsby-plugin-transition-link`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/_data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `darcylf.me`,
        short_name: `darcylf.me`,
        start_url: `/`,
        background_color: `#ffc53f`,
        theme_color: `#ffc53f`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
