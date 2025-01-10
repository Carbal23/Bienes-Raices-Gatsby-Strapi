import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";

const Form = styled.form`
  width: 100%;
  display: flex;
  border: 1px solid #e1e1e1;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
  border-radius: 8px; 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 

  select {
    flex: 1;
    padding: 1rem;
    appearance: none;
    border: none;
    font-family: "Lato", sans-serif;
    font-size: 1.2rem;
    border-radius: 8px;
    background-color: #f4f4f4;
    transition: background-color 0.3s ease;
    color: #333;

    &:focus {
      background-color: #e1f5d9; /* Color de fondo al hacer focus */
      outline: none;
    }

    option {
      font-size: 1.1rem;
    }
  }

  /* Diseño responsivo */
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 80%;
  }

`;

const useFiltro = () => {
  const [categoria, setCategoria] = useState("");
  const resultado = useStaticQuery(graphql`
    query MyQuery {
      allStrapiCategoria {
        nodes {
          categoria
          id
        }
      }
    }
  `);

  const categorias = resultado.allStrapiCategoria.nodes;

  const filtroUI = () => (
    <Form>
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="">--Filtrar--</option>
        {categorias.map((opcion) => (
          <option key={opcion.id} value={opcion.categoria}>
            {opcion.categoria}
          </option>
        ))}
      </select>
    </Form>
  );

  return {
    categoria,
    filtroUI,
  };
};

export default useFiltro;
