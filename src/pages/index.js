import * as React from "react"
import { getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Layout from "../components/layout"
import useInicio from "../hooks/useInicio"
import styled from "@emotion/styled"
import Encuentra from "../components/encuentra"
import ListadoPropiedades from "../components/listadoPropiedades"

const BackgroundContainer = styled.div`
  height: 500px;
  position: relative;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
`

const OverlayContent = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.75),
    rgba(34, 49, 63, 0.75)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    margin: 0;
  }

  p {
    font-size: 2rem;
    margin: 20px 20px;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 3rem;
    }
  }
`

const MainContent = styled.main`
  max-width: 800px;
  padding: 5rem;
  margin: 0 auto;
  background: #f8f8f8;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  h1 {
    font-size: 3rem;
    color: #0d283b;
    margin-bottom: 2rem;
    font-family: "Lato", sans-serif;
  }

  p {
    font-size: 1.6rem;
    color: #555;
    line-height: 1.8;
    margin-bottom: 0;
    font-family: "Roboto", sans-serif;
  }

  @media (max-width: 768px) {
    padding: 3rem;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`

const IndexPage = () => {
  const inicioPage = useInicio()
  const { nombre, contenido, imagen } = inicioPage
  const imagenInicio = getImage(imagen[0].localFile.childImageSharp)
  const urlImagen = imagenInicio.images.fallback.src

  return (
    <Layout>
      <BackgroundContainer image={urlImagen}>
        <OverlayContent>
          <h1>Venta de casas y departamentos exclusivos</h1>
        </OverlayContent>
      </BackgroundContainer>
      <MainContent>
        <h1>{nombre}</h1>
        <p>{contenido}</p>
      </MainContent>
      <Encuentra />
      <ListadoPropiedades />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Bienes Raices" />

export default IndexPage
