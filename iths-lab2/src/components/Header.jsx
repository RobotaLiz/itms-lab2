import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #282c34;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  position: sticky;
  top: 0;
  z-index: 1000; 
`;

const Logo = styled.div`
  font-size: 1.8em;
  font-weight: bold;
  color: #bf4f74;
  font-family: Fantasy;
  cursor: pointer;

  &:hover {
    color: pink;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #bf4f74;
    font-family: Fantasy;
    font-size: 1.2em;
    font-weight: bold;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: pink;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

const StyledButton = styled.button`
  background: transparent;
  border-radius: 20px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  padding: 10px 20px;
  font-family: Fantasy;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #bf4f74;
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); 
  }

  &:active {
    transform: scale(0.95); 
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo>Kattsidan°</Logo>
      <Nav>
        <Link to="/">Hem</Link>
        <Link to="/cats">Katter</Link>
        <Link to="/about">Om oss</Link>
      </Nav>
      <Link to="/SignInPage">
        <StyledButton>Logga in</StyledButton>
      </Link>
    </HeaderWrapper>
  );
}

export default Header;
