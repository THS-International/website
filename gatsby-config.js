module.exports = {
  siteMetadata: {
    title: `THS International Reception`,
    description: `THS International Reception`,
    author: `Oscar Synnemar`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logored.png`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-154897063-1",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    }
  ],
}
