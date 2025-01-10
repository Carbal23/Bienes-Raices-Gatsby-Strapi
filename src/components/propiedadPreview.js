import React from "react"
import Iconos from "./iconos"
import styled from "@emotion/styled"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import slugify from "slugify"

const Card = styled.div`
  border: 1px solid #e1e1e1;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .gatsby-image-wrapper {
    width: 100%;
    height: 25rem;
    object-fit: cover;
  }
`

const Contenido = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  h3 {
    font-family: "Lato", sans-serif;
    margin: 0 0 1rem 0;
    font-size: 2rem;
    color: #333;
  }

  .precio {
    font-size: 1.8rem;
    color: #75ab00;
    margin: 0 0 1rem 0;
    font-weight: bold;
  }

  .descripcion {
    font-size: 1.4rem;
    color: #666;
    margin: 0 0 1.5rem 0;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Muestra máximo 3 líneas */
    -webkit-box-orient: vertical;
  }
`

const Boton = styled(Link)`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #75ab00;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 0.5rem;
  display: block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #609300;
  }
`

const PropiedadPreview = ({ propiedad }) => {
  const {
    nombre,
    descripcion,
    wc,
    estacionamiento,
    habitaciones,
    precio,
    imagen,
  } = propiedad

  const imagenData = getImage(imagen.localFile)
  const urlSlug = slugify(nombre, { lower: true })

  // Aplicando el formato con separadores de miles
  const precioFormateado = parseFloat(precio).toLocaleString("es-CO", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  return (
    <Card>
      <GatsbyImage image={imagenData} alt={nombre} />
      <Contenido>
        <h3>{nombre}</h3>
        <p className="precio">$ {precioFormateado}</p>
        <p className="descripcion">{descripcion[0].children[0].text}</p>
        <Iconos
          wc={wc}
          estacionamiento={estacionamiento}
          habitaciones={habitaciones}
        />
        <Boton to={`/${urlSlug}`}>Visitar Propiedad</Boton>
      </Contenido>
    </Card>
  )
}

export default PropiedadPreview
