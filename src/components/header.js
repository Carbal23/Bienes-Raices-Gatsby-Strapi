import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navegacion from "./navegacion"
import { Head } from "../pages"
import { css } from "@emotion/react"
import { useState } from "react"

const Header = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
        id
      }
    }
  `)

  const [menuAbierto, setMenuAbierto] = useState(false)

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto)
  }

  return (
    <>
      <Head />
      <header
        css={css`
          background-color: #0d283b;
          padding: 1rem;
        `}
      >
        <div
          css={css`
            max-width: 120rem;
            margin: 0 auto;
            text-align: center;
            display: flex;
            justify-content: center;
            flex-direction: column;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex-direction: row;
            }
          `}
        >
          <Link
            to={"/"}
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;

              @media (min-width: 768px) {
                display: flex;
                align-items: center;
              }
            `}
          >
            <img
              src={logo.publicURL}
              alt="Logotipo de bienes raices"
              style={{
                height: "auto",
                width: "23rem",
                maxWidth: "100%",
              }}
            />
          </Link>

          <button
            onClick={toggleMenu}
            css={css`
              display: none;
              cursor: pointer;
              background: none;
              border: none;
              color: #fff;
              font-size: 2rem;
              padding: 0.5rem;
              @media (max-width: 768px) {
                display: block;
              }
            `}
          >
            &#9776;
          </button>

          <Navegacion menuAbierto={menuAbierto} />
        </div>
      </header>
    </>
  )
}

export default Header
