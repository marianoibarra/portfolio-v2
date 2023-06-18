/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require('path')

module.exports = {
  siteMetadata: {
    title: `My portfolio - Mariano Ibarra`,
    siteUrl: `https://www.marianoibarra.com`
  },
  //TO-DO "gatsby-plugin-google-gtag" config
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        // "@src": "src",
        // "@components": "src/components",
        // "@layouts": "src/layouts",
        // "@pages": "src/pages",
        // "@templates": "src/templates",
        '@components': path.resolve(__dirname, 'src/components'),
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