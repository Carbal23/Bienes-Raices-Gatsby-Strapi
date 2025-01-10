import { graphql, useStaticQuery } from "gatsby"
import { useMemo } from "react"

const usePropiedades = () => {
  const datos = useStaticQuery(graphql`
    query {
      allStrapiPropiedad {
        nodes {
          id
          nombre
          wc
          descripcion {
            children {
              text
            }
          }
          precio
          estacionamiento
          habitaciones
          categoria {
            categoria
          }
          agente {
            nombre
            telefono
            email
          }
          imagen {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)

  const respuesta = useMemo(() => {
    return datos.allStrapiPropiedad.nodes.map(propiedad => ({
      nombre: propiedad.nombre,
      descripcion: propiedad.descripcion,
      wc: propiedad.wc,
      estacionamiento: propiedad.estacionamiento,
      habitaciones: propiedad.habitaciones,
      precio: propiedad.precio,
      categoria: propiedad.categoria,
      agente: propiedad.agente,
      imagen: propiedad.imagen,
      id: propiedad.id,
    }))
  }, [datos])

  return respuesta
}

export default usePropiedades
