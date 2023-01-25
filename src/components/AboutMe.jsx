import styled from "styled-components";
import CorrectIcon from "../utilities/images/correct.png";

export const AboutMe = () => {
  const ContentMeStyled = styled.div`
    width: 100%;
    display: flex;
    padding-top: 20vh;
    justify-content: center;
    align-items: center;
    @media (max-width: 968px) {
      flex-direction: column;
    }
  `;

  const RightMeStyled = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
    padding: 20px;
    border: 1px solid #f6f6f6;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    font-family: "Source Code Pro", monospace;
    font-weight: 600;
    color: #343a40;
    line-height: 1.5;
    letter-spacing: 0.5px;
    text-align: justify;
    margin: 20px auto;

    div {
      display: flex;
      padding-bottom: 20px;
      width: 90%;

      img {
        width: 35px;
        height: 35px;
        margin-right: 20px;
      }

      p {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
    }
  `;

  const LeftMeStyled = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    h1 {
      font-family: bebasneue;
      font-size: 2rem;
      color: #353353;
    }
  `;

  return (
    <ContentMeStyled>
      <LeftMeStyled>
        <h1>Quién soy ?</h1>
      </LeftMeStyled>
      <RightMeStyled>
        <div>
          <img src={CorrectIcon} alt="Icon correct" />
          <p>
            Mi objetivo es comprender sus desafíos para transformar una idea en
            un proyecto concreto adaptado a sus necesidades reales.
          </p>
        </div>

        <div>
          <img src={CorrectIcon} alt="Icon correct" />
          <p>
            Ofrezco visión técnica de los procesos de negocio aplicando cambios
            de desarrollo y organizacionales, pruebas de concepto acerca de
            mejoras de software e infraestructura relacionada.
          </p>
        </div>

        <div>
          <img src={CorrectIcon} alt="Icon correct" />
          <p>Desarrollo aplicaciones web para el mercado mundial.</p>
        </div>

        <div>
          <img src={CorrectIcon} alt="Icon correct" />
          <p>
            Estaré encantado de discutir sus necesidades, ¡la codificación es
            solo una parte de mi trabajo! ¡Disfruta de tu visita y no dudes en
            contactarme!
          </p>
        </div>
      </RightMeStyled>
    </ContentMeStyled>
  );
};
