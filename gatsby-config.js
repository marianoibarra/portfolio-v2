/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require("path");
const config = require("./src/config");

module.exports = {
  siteMetadata: {
    title: `Mariano Ibarra`,
    siteUrl: `https://www.marianoibarra.com`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",   
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mariano Ibarra",
        short_name: "Mariano Ibarra",
        start_url: "/",
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: "minimal-ui",
        icon: "src/images/icon.png",
        icons: [
          {
            src: "icons/favicons/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "icons/favicons/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "icons/favicons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/favicons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-X1QCQ2EZWW",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
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
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              tracedSVG: { color: "#11aa11" },
            },
          },
          {
            resolve: "gatsby-remark-code-titles",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@elements": path.resolve(__dirname, "src/components/elements"),
          "@config": path.resolve(__dirname, "src/config"),
          "@fonts": path.resolve(__dirname, "src/fonts"),
          "@hooks": path.resolve(__dirname, "src/hooks"),
          "@images": path.resolve(__dirname, "src/images"),
          "@pages": path.resolve(__dirname, "src/pages"),
          "@styles": path.resolve(__dirname, "src/styles"),
          "@utils": path.resolve(__dirname, "src/utils"),
        },
        extensions: ["js", "jsx"],
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          selfHosted: [
            {
              family: "SF Mono",
              urls: {
                woff2: `/src/fonts/SFMono/SFMono-Regular.woff2`,
                woff: `/src/fonts/SFMono/SFMono-Regular.woff`,
              },
              "font-weight": 400,
              "font-style": "normal",
              "font-display": "swap",
            },
            {
              family: "Inter",
              urls: {
                woff2: `/src/fonts/Inter/Inter-Regular.woff2`,
                woff: `/src/fonts/Inter/Inter-Regular.woff`,
              },
              "font-weight": 400,
              "font-style": "normal",
              "font-display": "swap",
            },
            {
              family: "Inter",
              urls: {
                woff2: `/src/fonts/Inter/Inter-Medium.woff2`,
                woff: `/src/fonts/Inter/Inter-Medium.woff`,
              },
              "font-weight": 500,
              "font-style": "normal",
              "font-display": "swap",
            },
            {
              family: "Inter",
              urls: {
                woff2: `/src/fonts/Inter/Inter-SemiBold.woff2`,
                woff: `/src/fonts/Inter/Inter-SemiBold.woff`,
              },
              "font-weight": 600,
              "font-style": "normal",
              "font-display": "swap",
            },
            {
              family: "Inter",
              urls: {
                woff2: `/src/fonts/Inter/Inter-Bold.woff2`,
                woff: `/src/fonts/Inter/Inter-Bold.woff`,
              },
              "font-weight": 700,
              "font-style": "normal",
              "font-display": "swap",
            },
          ],
        },
        formats: ["woff2", "woff"],
        usePreload: true,
      },
    },
  ],
};
