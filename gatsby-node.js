/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const slugify = require("slugify")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allStrapiPagina {
        nodes {
          nombre
          id
        }
      }
      allStrapiPropiedad {
        nodes {
          nombre
          id
        }
      }
    }
  `)

  if (resultado.errors) {
    reporter.panic("No hubo resultado", resultado.errors)
  }

  const propiedades = resultado.data.allStrapiPropiedad.nodes
  const paginas = resultado.data.allStrapiPagina.nodes

  paginas.forEach(pagina => {
    const slut = slugify(pagina.nombre, { lower: true })
    actions.createPage({
      path: slut,
      component: require.resolve("./src/components/pagina.js"),
      context: {
        id: pagina.id,
      },
    })
  })

  propiedades.forEach(propiedad => {
    const slut = slugify(propiedad.nombre, { lower: true })
    actions.createPage({
      path: slut,
      component: require.resolve("./src/components/propiedadDetalle.js"),
      context: {
        id: propiedad.id,
      },
    })
  })
}
