import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Iconos from "./iconos"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Contenedor = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
  padding: 0 2rem;
  background: #fff; /* Fondo blanco */
`

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }

  main {
    grid-column: span 2; /* Descripción ocupa todo el ancho en dispositivos grandes */
  }
`

const SideBar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f0f4f8;
  border: 1px solid #d1d9e0;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .precio {
    font-size: 2rem;
    color: #75ab00;
    font-weight: bold;
    text-align: center;

    span {
      font-size: 2rem;
      color: #333;
      display: block;
    }
  }

  .agente{
    margin-top: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
    color: #555;
  }
`

const DescripcionPrincipal = styled.p`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
  line-height: 1.6;
`

const DescripcionSecundaria = styled.p`
  font-size: 1.5rem;
  color: #666;
  line-height: 1.6;
`

const ImagenEstilizada = styled(GatsbyImage)`
  border-radius: 0.3rem; /* Border radius pequeño */
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const Titulo = styled.h1`
  font-size: 3rem;
  color: #0d283b;
  margin-bottom: 2.5rem;
  font-family: "Lato", sans-serif;
`

export const query = graphql`
  query ($id: String!) {
    strapiPropiedad(id: { eq: $id }) {
      id
      nombre
      wc
      precio
      descripcion {
        children {
          text
        }
      }
      habitaciones
      estacionamiento
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
`

const PropiedadDetalle = ({ data }) => {
  const {
    nombre,
    wc,
    precio,
    descripcion,
    habitaciones,
    estacionamiento,
    agente,
    imagen,
  } = data.strapiPropiedad

  const imagenData = getImage(imagen.localFile)

  const precioFormateado = parseFloat(precio).toLocaleString("es-CO", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  return (
    <Layout>
      <Contenedor>
        <Titulo>{nombre}</Titulo>
        <Contenido>
          <ImagenEstilizada image={imagenData} alt={nombre} />
          <SideBar>
            <p className="precio">
              <span>Precio:</span> $ {precioFormateado}
            </p>
            <Iconos
              wc={wc}
              estacionamiento={estacionamiento}
              habitaciones={habitaciones}
            />
            <div className="agente">
              <h2>Vendedor:</h2>
              <p>{agente.nombre}</p>
              <p>Teléfono: {agente.telefono}</p>
              <p>Email: {agente.email}</p>
            </div>
          </SideBar>
          <main>
            <DescripcionPrincipal>
              {descripcion[0].children[0].text}
            </DescripcionPrincipal>
            {descripcion[1].children[0].text && (
              <DescripcionSecundaria>
                {descripcion[1].children[0].text}
              </DescripcionSecundaria>
            )}
          </main>
        </Contenido>
      </Contenedor>
    </Layout>
  )
}

export default PropiedadDetalle
