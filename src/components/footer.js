import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      css={css`
        background-color: #0d283b;
        color: #ffffff;
        padding: 2rem 1rem;
        margin-top: 4rem;
      `}
    >
      <div
        css={css`
          max-width: 120rem;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 1rem;

          @media (min-width: 768px) {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        `}
      >
        <p
          css={css`
            font-size: 1.4rem;
          `}
        >
          © {currentYear} Bienes Raíces. Todos los derechos reservados.
        </p>

        <nav>
          <ul
            css={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 1.5rem;

              li {
                font-size: 1.4rem;
              }

              a {
                color: #ffffff;
                text-decoration: none;

                &:hover {
                  color: #4caf50;
                }
              }
            `}
          >
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/propiedades">Propiedades</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
