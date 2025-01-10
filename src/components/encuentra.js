import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled"
import { getImage } from "gatsby-plugin-image";

const BackgroundContainer = styled.div`
  height: 500px;
  position: relative;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
`

const OverlayContent = styled.div`
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
    font-size: 2.5rem;
  }

  p {
    font-size: 1.8rem;
  }
  }
`

const Encuentra = () => {
  const { imagen } = useStaticQuery(graphql`
    query {
      imagen: file(relativePath: { eq: "encuentra.jpg" }) {
         childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `)

  const datosImagen = getImage(imagen);
  const urlImagen = datosImagen.images.fallback.src;

  return (
    <BackgroundContainer image={urlImagen}>
      <OverlayContent>
        <h1>Encuentra la casa de tus sueños</h1>
        <p>15 años de experiencia</p>
      </OverlayContent>
    </BackgroundContainer>
  ) 
}

export default Encuentra;
