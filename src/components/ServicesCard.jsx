import styled from "styled-components";
import OrdenadorPer from "../utilities/images/ordenador-personal.png";
import CursoOnline from "../utilities/images/curso-online.png"

const ServicesCardStyled = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  padding-top: 70px;
  color: #454360;
  @media (max-width: 968px) {
      flex-direction: column;
      align-items: center;

    }

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
    font-family: 'roboto-bold';
    @media (max-width: 968px){
      margin-bottom: 50px;
      width: 60%;
    }
    img {
      width: 70px;
      height: 70px;
      margin-bottom: 20px;
    }
    h2 {
      margin-bottom: 20px;
    }
    p {
      width: 80%;
      margin-bottom: 20px;
      letter-spacing: 1px;
      text-align: justify;
    }
    button {
      padding: 12px 20px;
      border-radius: 25px;
      background-color: #be9c04;
      color: #fff;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }

  div:nth-child(2) {
background-color: #6C6CE5;
  button {
    background-color: #1F1FB2;
  }
}

div:nth-child(3) {
background-color: #F97B8B;
  button {
    background-color: #EA0B27;
  }
}

`;

export const ServicesCard = () => {
  return (
    <ServicesCardStyled>
      <div>
        <img src={OrdenadorPer} alt="Computer Personal Desktop" />
        <h2>Desarrollo Web</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit.
        </p>
        <button>Example</button>
      </div>
      <div>
        <img src={CursoOnline} alt="Computer Personal Desktop" />
        <h2>Contenido Gratis</h2>
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
