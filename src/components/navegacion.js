import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  padding-bottom: 3rem;
  justify-content: space-around;
  padding: 0;

  @media (max-width: 768px) {
    display: ${(props) => (props.menuAbierto ? "flex" : "none")}; /* Mostrar el menú solo cuando esté abierto */
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 60px; /* Ajustar la posición del menú */
    left: 0;
    background-color: #0d283b;
    z-index: 10;
    padding: 1rem 0;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  font-weight: 700;
  font-family: "PT sans", sans-serif;
  text-decoration: none;
  padding: 0.5rem;
  margin-right: 1rem;
  font-size: medium;

  &:last-of-type {
    margin-right: 0;
  }

  &.pagina-actual {
    border-bottom: 2px solid #fff;
  }

  @media (min-width: 768px) {
    font-size: larger;
  }
`

const Navegacion = ({ menuAbierto }) => {
  return (
    <Nav menuAbierto={menuAbierto}>
      <NavLink to="/" activeClassName="pagina-actual">
        Inicio
      </NavLink>
      <NavLink to="/nosotros" activeClassName="pagina-actual">
        Nosotros
      </NavLink>
      <NavLink to="/propiedades" activeClassName="pagina-actual">
        Propiedades
      </NavLink>
    </Nav>
  )
}

export default Navegacion
