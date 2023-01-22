import { Link } from "react-router-dom";
import styled from "styled-components";
import OrdenadorPer from "../utilities/images/ordenador-personal.png";

const ServicesCardStyled = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  padding-top: 6vh;
  color: #454360;

  div {
    width: 25%;
    height: 350px;
    margin: 0 20px;
    background-color: #f8d74c;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
    }
    h2 {
    }
    p {
      width: 80%;
      letter-spacing: 1px;
      text-align: justify;
    }
    button {
      padding: 10px;
      border-radius: 25px;
      background-color: #be9c04;
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const ServicesCard = () => {
  return (
    <ServicesCardStyled>
      <div>
        <img src={OrdenadorPer} alt="Computer Personal Desktop" />
        <h2>Cuelquier Cosa</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit.
        </p>
        <button>Example</button>
      </div>
      <div>
        <img src={OrdenadorPer} alt="Computer Personal Desktop" />
        <h2>Cuelquier Cosa</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit.
        </p>
        <button>Example</button>
      </div>
      <div>
        <img src={OrdenadorPer} alt="Computer Personal Desktop" />
        <h2>Cuelquier Cosa</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit.
        </p>
        <button>Example</button>
      </div>
    </ServicesCardStyled>
  );
};
