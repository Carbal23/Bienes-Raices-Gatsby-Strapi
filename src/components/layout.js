import * as React from "react"
import { Global, css } from "@emotion/react"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            font-size: 1.6rem;
            line-height: 2;
            font-family: "Lato", sans-serif;
          }

          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }

          h1,
          h2 {
            text-align: center;
            font-family: "Lato", sans-serif;
            font-family: 300;
          }

          h3 {
            font-family: "Roboto", sans-serif;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .contenedor {
            max-width: 120rem;
            margin: 0 auto;
            width: 95%;
          }

          img {
            max-width: 100%;
          }
        `}
      />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
