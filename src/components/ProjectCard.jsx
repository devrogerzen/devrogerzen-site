
import React from "react";
import styled from "styled-components";
import Image2 from "../utilities/images/image2.jpg";
import Image3 from "../utilities/images/image3.jpg";

const ContentProject = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: 3vh;
  justify-content: center;
`;

const ProjectCardStyled = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #EFF5F5;
  margin: 10px;
  border-radius: 5px;
  img {
    width: 300px;
    height: 150px;
  }
  h2 {
    height: 30px;
  }
  p {
    height: 90px;
  }
`;

export const ProjectCard = () => {
  return (
    <ContentProject>
      <ProjectCardStyled>
        <img src={Image2} alt="Ej" />
        <h2>Titulo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem in delectus quasi nemo, repellendus minus nisi, ad,
          nihil beatae harum recusandae quae ducimus deleniti esse.
        </p>
        <div>
          <button>VerDemo</button>
          <button>GitHub</button>
        </div>
      </ProjectCardStyled>

      <ProjectCardStyled>
        <img src={Image3} alt="Ej" />
        <h2>Titulo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          tempora magni rerum? Rerum. voluptate ea consectetur nisi delectus?
        </p>
        <div>
          <button>VerDemo</button>
          <button>GitHub</button>
        </div>
      </ProjectCardStyled>

      <ProjectCardStyled>
        <img src={Image2} alt="Ej" />
        <h2>Titulo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem in delectus quasi nemo, repellendus minus nisi, ad,
          nihil beatae harum recusandae quae ducimus deleniti esse.
        </p>
        <div>
          <button>VerDemo</button>
          <button>GitHub</button>
        </div>
      </ProjectCardStyled>

      <ProjectCardStyled>
        <img src={Image3} alt="Ej" />
        <h2>Titulo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          tempora magni rerum? Rerum. voluptate ea consectetur nisi delectus?
        </p>
        <div>
          <button>VerDemo</button>
          <button>GitHub</button>
        </div>
      </ProjectCardStyled>
      <ProjectCardStyled>
        <img src={Image2} alt="Ej" />
        <h2>Titulo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem in delectus quasi nemo, repellendus minus nisi, ad,
          nihil beatae harum recusandae quae ducimus deleniti esse.
        </p>
        <div>
          <button>VerDemo</button>
          <button>GitHub</button>
        </div>
      </ProjectCardStyled>

      <ProjectCardStyled>
        <img src={Image3} alt="Ej" />
        <h2>Titulo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          tempora magni rerum? Rerum. voluptate ea consectetur nisi delectus?
        </p>
        <div>
          <button>VerDemo</button>
          <button>GitHub</button>
        </div>
      </ProjectCardStyled>
      <ProjectCardStyled>
        <img src={Image2} alt="Ej" />
        <h2>Titulo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem in delectus quasi nemo, repellendus minus nisi, ad,
          nihil beatae harum recusandae quae ducimus deleniti esse.
        </p>
        <div>
          <button>VerDemo</button>
          <button>GitHub</button>
        </div>
      </ProjectCardStyled>

      <ProjectCardStyled>
        <img src={Image3} alt="Ej" />
        <h2>Titulo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          tempora magni rerum? Rerum. voluptate ea consectetur nisi delectus?
        </p>
        <div>
          <button>VerDemo</button>
          <button>GitHub</button>
        </div>
      </ProjectCardStyled>
      <ProjectCardStyled>
        <img src={Image2} alt="Ej" />
        <h2>Titulo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem in delectus quasi nemo, repellendus minus nisi, ad,
          nihil beatae harum recusandae quae ducimus deleniti esse.
        </p>
        <div>
          <button>VerDemo</button>
          <button>GitHub</button>
        </div>
      </ProjectCardStyled>

      <ProjectCardStyled>
        <img src={Image3} alt="Ej" />
        <h2>Titulo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          tempora magni rerum? Rerum. voluptate ea consectetur nisi delectus?
        </p>
        <div>
          <button>VerDemo</button>
          <button>GitHub</button>
        </div>
      </ProjectCardStyled>
      <ProjectCardStyled>
        <img src={Image2} alt="Ej" />
        <h2>Titulo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem in delectus quasi nemo, repellendus minus nisi, ad,
          nihil beatae harum recusandae quae ducimus deleniti esse.
        </p>
        <div>
          <button>VerDemo</button>
          <button>GitHub</button>
        </div>
      </ProjectCardStyled>

      <ProjectCardStyled>
        <img src={Image3} alt="Ej" />
        <h2>Titulo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          tempora magni rerum? Rerum. voluptate ea consectetur nisi delectus?
        </p>
        <div>
          <button>VerDemo</button>
          <button>GitHub</button>
        </div>
      </ProjectCardStyled>


    </ContentProject>
  );
};
