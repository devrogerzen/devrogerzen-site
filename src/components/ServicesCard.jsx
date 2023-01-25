import { Link } from "react-router-dom";
import styled from "styled-components";
import OrdenadorPer from "../utilities/images/ordenador-personal.png";
import CursoOnline from "../utilities/images/curso-online.png";
import ProyectoRepo from "../utilities/images/proyecto-repo.png";

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
    font-family: "roboto-bold";
    @media (max-width: 968px) {
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
    a {
      padding: 12px 20px;
      border-radius: 25px;
      background-color: #be9c04;
      color: #fff;
      font-weight: bold;
      letter-spacing: 1px;
      padding: 12px 25px;
    }
  }

  div:nth-child(2) {
    background-color: #6c6ce5;
    a {
      background-color: #1f1fb2;
      padding: 12px 40px;
    }
  }

  div:nth-child(3) {
    background-color: #f97b8b;
    a {
      background-color: #ea0b27;
      padding: 12px 20px;
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
          Desarrollo Aplicaciones web con las últimas tecnologías para asegurar
          que su sitio sea atractivo, fácil de navegar y altamente funcional.
        </p>
        <Link to="/services">Services</Link>
      </div>
      <div>
        <img src={CursoOnline} alt="Computer Personal Desktop" />
        <h2>Contenido Gratis</h2>
        <p>
          Ofreciendo tutoriales y opiniones Sobre programación, tecnología y
          vida holística.
        </p>
        <Link to="/blog">Blog</Link>
      </div>
      <div>
        <img src={ProyectoRepo} alt="Computer Personal Desktop" />
        <h2>Mis Proyectos</h2>
        <p>
          Recopilación de mis trabajos más destacados en el campo del desarrollo
          de aplicaciones web.
        </p>
        <Link to="/portfolio">Portafolio</Link>
      </div>
    </ServicesCardStyled>
  );
};
