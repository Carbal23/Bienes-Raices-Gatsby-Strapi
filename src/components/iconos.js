import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const ListadoIconos = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  margin-top: 2rem;
  padding: 0;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 1rem;

    img {
      width: 3rem;
      height: 3rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1.6rem;
      font-family: "Lato", sans-serif;
      color: #333;
      margin: 0;

    }
  }
`

const Iconos = ({ wc, estacionamiento, habitaciones }) => {
  const { iconos } = useStaticQuery(graphql`
    query {
      iconos: allFile(filter: { relativeDirectory: { eq: "iconos" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `)

  return (
    <ListadoIconos>
      <li>
        <img src={iconos.edges[2].node.publicURL} alt="icono wc" title="WC"/>
        <p>{wc}</p>
        
      </li>
      <li>
        <img src={iconos.edges[1].node.publicURL} alt="icono estacionamiento" title="Estacionamietos"/>
        <p>{estacionamiento}</p>
      </li>
      <li>
        <img src={iconos.edges[0].node.publicURL} alt="icono habitaciones" title="Habitaciones" />
        <p>{habitaciones}</p>
      </li>
    </ListadoIconos>
  )
}

export default Iconos
