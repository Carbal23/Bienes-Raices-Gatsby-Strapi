import { graphql, useStaticQuery } from "gatsby"

const useInicio = () => {
  const {strapiPagina} = useStaticQuery(graphql`
    {
      strapiPagina(nombre: { eq: "Inicio" }) {
        id
        nombre
        contenido
        imagen {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  return strapiPagina;
}

export default useInicio
