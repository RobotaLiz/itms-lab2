import React from "react";
import styled from "styled-components";
import cat1 from "../assets/catb.png"; 
import cat2 from "../assets/catm.png"; 
import cat3 from "../assets/kit.png"; 

const AboutPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #282c34;
  color: white; 
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 3rem;
    color: #bf4f74; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const MainContent = styled.main`
  margin-bottom: 20px;
  text-align: center;

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin: 20px 0;

    &:first-child {
      font-size: 1.5rem;
      font-weight: bold;
      color: #bf4f74; 
    }

    &:nth-child(2) {
      color: #ff85a2; 
      font-style: italic;
    }

    &:nth-child(3) {
      color: #008080; 
      font-weight: bold;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`;

const CatImage = styled.img`
  width: auto;
  height: 200px;
  border-radius: 15px;
  border: 2px solid #bf4f74;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  object-fit: cover;

  &:hover {
    transform: scale(1.1); 
    transition: transform 0.3s ease-in-out;
  }
`;

const Footer = styled.footer`
  margin-top: 30px;
  text-align: center;
  color: #bf4f74; 
  font-size: 0.9rem;
  border-top: 1px solid #444; 
  padding-top: 10px;
`;

function About() {
  return (
    <AboutPageWrapper>
      <Header>
        <h1>Om Oss</h1>
      </Header>
      <ImageContainer>
        <CatImage src={cat2} alt="Söt katt 2" />
        <CatImage src={cat3} alt="Söt katt 3" />
        <CatImage src={cat1} alt="Söt katt 1" />
      </ImageContainer>
      <MainContent>
        <p>Välkommen till Kattens Värld, din plats för allt om katter! 🐾</p>
        <p>
          Vi älskar att fira skönheten, charmen och egenheterna hos våra favoritfyllda vänner.
          Oavsett om du är en livslång kattälskare eller precis har börjat upptäcka glädjen med
          kattkompanjonskap, är vi här för att dela tips, berättelser och mer om dessa fantastiska djur.
        </p>
        <p>Tack för att du besöker oss, och glöm inte att ge din katt en extra kram idag!</p>
      </MainContent>
      <Footer>
        © 2024 Kattens Värld.🐾
      </Footer>
    </AboutPageWrapper>
  );
}

export default About;
