import styled from "styled-components";
import NightLife from "../utilities/images/nightlife.gif";

const IMG_BG = styled.img`
  display: flex;
  position: absolute;
  width: 100%;
  height: 90vh;
  object-fit: cover;
  
`;

export const NightLifeBG = () => <IMG_BG src={NightLife} alt="Bg" />;
