import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ title, description, children }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { title: defaultTitle, description: defaultDescription } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <>
      <meta charSet="utf-8" />
      <body lang="es" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      {children}
    </>
  );
}

export default Seo;
