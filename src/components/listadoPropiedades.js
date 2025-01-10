import React, { useMemo } from "react"
import { css } from "@emotion/react"
import usePropiedades from "../hooks/usePropiedades"
import PropiedadPreview from "./propiedadPreview"
import styled from "@emotion/styled"
import useFiltro from "../hooks/useFiltro"

const ListaPropiedades = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const ListadoPropiedades = () => {
  const propiedades = usePropiedades()
  const { categoria, filtroUI } = useFiltro()

  const filtradas = useMemo(() => {
    if (categoria) {
      return propiedades.filter(
        propiedad => propiedad.categoria.categoria === categoria
      )
    }
    return propiedades
  }, [categoria, propiedades])

  return (
    <section id="propiedades">
      <h2
        css={css`
          margin-top: 5rem;
          text-align: center;
          font-size: 3rem;
          color: #0d283b;
          margin-bottom: 2rem;
          font-family: "Lato", sans-serif;
        `}
      >
        Nuestras Propiedades
      </h2>
      {filtroUI()}
      <ListaPropiedades>
        {filtradas.map(propiedad => (
          <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ListaPropiedades>
    </section>
  )
}

export default ListadoPropiedades
