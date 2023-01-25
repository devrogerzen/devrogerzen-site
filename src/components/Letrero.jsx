import React from "react";
import styled from "styled-components";
import { Parpadea } from "../helpers/Parpadea";

const LetreroContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  color: #fff;
  justify-content: center;
  font-family: Gameplay;
  letter-spacing: 1px;
  text-transform: uppercase;
  user-select: none;

  h1 {
    display: flex;
    position: relative;
    font-size: 2.5rem;
    margin-left: 5vw;
    vertical-align: center;

    @media (max-width: 968px) {
      font-size: 1.5rem;

    }
  }
`;

export const Letrero = () => {
  return (
    <LetreroContainer>
      <h1>Roger Jimenez</h1>
      <h1>
        Programador<Parpadea>|</Parpadea>
      </h1>
    </LetreroContainer>
  );
};
