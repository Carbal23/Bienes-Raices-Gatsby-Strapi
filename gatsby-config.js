/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

// const strapiConfig = {
//   apiURL: process.env.STRAPI_API_URL || `http://localhost:1337`,
//   accessToken: `ead540b61d98c445f335f7b5326799db8d34ce0e893d5ea95c2dede7a4177237be65fdb6d882abdc382a7a72167f803b0f8854e7e42718d20891bedcc1d216a81e77df48efac248731b173f1f89bdf5c5f520a9f8c0150b33f7c221b85dc9fe7da046a5d195512ffe31df6d51f12f5068eda8b0e5a0d5fb5abe4dcea1f9f34a3`,
//   collectionTypes: ["propiedades", "paginas", "categorias"],
//   singleTypes: [],
//   maxParallelRequests: 5, // (Optional) Default: Number.POSITIVE_INFINITY
//   remoteFileHeaders: {
//     /**
//      * Customized request headers
//      * For http request with a image or other files need authorization
//      * For expamle: Fetch a CDN file which has a security config when gatsby building needs
//      */
//     Referer: "http://localhost:8000/",
//     Authorization: `Bearer ead540b61d98c445f335f7b5326799db8d34ce0e893d5ea95c2dede7a4177237be65fdb6d882abdc382a7a72167f803b0f8854e7e42718d20891bedcc1d216a81e77df48efac248731b173f1f89bdf5c5f520a9f8c0150b33f7c221b85dc9fe7da046a5d195512ffe31df6d51f12f5068eda8b0e5a0d5fb5abe4dcea1f9f34a3`,
//   },
// };

const strapiConfig = {
  apiURL: `http://localhost:1337`,
  queryLimit: 1000, 
  collectionTypes: [`propiedad`, `pagina`, `categoria`],
  singleTypes: [],
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
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
    `gatsby-plugin-emotion`,
  ],
}
