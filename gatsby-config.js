/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require('path')
const config = require('./src/config')

module.exports = {
  siteMetadata: {
    title: `Mariano Ibarra`,
    siteUrl: `https://www.marianoibarra.com`
  },
  //TO-DO "gatsby-plugin-google-gtag" config
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-plugin-sitemap", {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: 'Mariano Ibarra',
      short_name: 'Mariano Ibarra',
      start_url: '/',
      background_color: config.colors.darkNavy,
      theme_color: config.colors.navy,
      display: 'minimal-ui',
      icon: "src/images/icon.png"
    },
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'content',
      path: `${__dirname}/content/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `projects`,
      path: `${__dirname}/content/projects`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        // {
        //   // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
        //   resolve: 'gatsby-remark-external-links',
        //   options: {
        //     target: '_blank',
        //     rel: 'nofollow noopener noreferrer',
        //   },
        // },
        {
          // https://www.gatsbyjs.org/packages/gatsby-remark-images
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 700,
            linkImagesToOriginal: true,
            quality: 90,
            tracedSVG: { color: '#11aa11' },
          },
        },
        {
          // https://www.gatsbyjs.org/packages/gatsby-remark-code-titles/
          resolve: 'gatsby-remark-code-titles',
        }, // IMPORTANT: this must be ahead of other plugins that use code blocks
      ],
    },
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp",
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@elements': path.resolve(__dirname, 'src/components/elements'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
      extensions: [
        "js", "jsx"
      ],
    }
  }]
};