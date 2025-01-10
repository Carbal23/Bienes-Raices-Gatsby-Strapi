import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import ListadoPropiedades from "./listadoPropiedades"

// Contenedor principal
const Contenido = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
  display: grid;
  grid-template-columns: 1fr; /* Por defecto, una columna */
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr; /* Dos columnas en pantallas grandes */
    column-gap: 4rem;
  }
`

// Estilos para el título y la descripción
const Titulo = styled.h1`
 font-size: 3rem;
    color: #0d283b;
    margin-bottom: 2rem;
    font-family: "Lato", sans-serif;
`

const Descripcion = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  margin-top: 1rem;
  text-align: justify;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`

// Estilo para la imagen
const ImagenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: #f0f0f0;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    height: 500px;
  }
`

// Estilo para el contenedor de la página
const MainContent = styled.main`
  padding: 0;
  background-color: #f7f7f7;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`

// Fondo para el listado de propiedades
const ListadoContainer = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

export const query = graphql`
  query ($id: String!) {
    strapiPagina(id: { eq: $id }) {
      id
      nombre
      contenido
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

const Pagina = ({ data }) => {
  const { nombre, contenido, imagen } = data.strapiPagina

  const imagenData = getImage(imagen[0].localFile)

  return (
    <Layout>
      <MainContent>
        <Titulo>{nombre}</Titulo>
        <Contenido>
          <ImagenContainer>
            <GatsbyImage image={imagenData} alt={nombre} />
          </ImagenContainer>
          <Descripcion>{contenido}</Descripcion>
        </Contenido>

        {nombre === "Propiedades" && (
          <ListadoContainer>
            <ListadoPropiedades />
          </ListadoContainer>
        )}
      </MainContent>
    </Layout>
  )
}

export default Pagina
