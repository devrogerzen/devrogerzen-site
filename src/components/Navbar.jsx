import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBarStyled = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  background-color: #3a3a3a;
  color: #fff;
  padding: 0 3vw;
  box-shadow: 0 0 10px 0 #000;

  ul {
    display: flex;
    height: 100%;
  }
`;

export const Navbar = () => {
  return (
    <NavBarStyled>
      <ul>
        <li>
          <NavLink className="navlink_nav" to="/">
            Bienvenida
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink_nav" to="/portfolio">
            Portafolio
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink_nav" to="/services">
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink_nav" to="/blog">
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink_nav" to="/contact">
            Contacto
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>sociales</li>
      </ul>
    </NavBarStyled>
  );
};
