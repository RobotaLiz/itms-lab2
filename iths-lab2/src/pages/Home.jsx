import React from "react";
import styled from "styled-components";
import cuteCat from "../assets/Catb.png";
import Cat from "../assets/catm.png";

const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #282c34; 
  color: #ffffff;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  background-color: #bf4f74; 
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 30px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin: 0;
  font-family: 'Fantasy', sans-serif;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
  color: #ffdde1; 
`;

const Section = styled.section`
  margin-bottom: 40px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #ff85a2;
  text-align: center;
  border-bottom: 2px solid #ff85a2;
  display: inline-block;
  padding-bottom: 5px;
`;

const ImageGallery = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const StyledImage = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 20px;
  border: 2px solid #bf4f74; 
  box-shadow: 0 10px 6px rgba(0, 0, 0, 0.4);

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`;

const FactList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
`;

const FactItem = styled.li`
  background-color: #444;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  text-align: left;
  color: #ffdde1;
`;

const NewsList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
`;

const NewsItem = styled.li`
  background-color: #444;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  text-align: left;
`;

const NewsTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  color: #ff85a2;
`;

const NewsContent = styled.p`
  margin-top: 10px;
  color: #ffdde1;
`;

const Footer = styled.footer`
  margin-top: auto;
  text-align: center;
  padding: 13px;
  background-color: #bf4f74;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

function Home() {
  const catFacts = [
    "Katter kan hoppa upp till sex gånger sin egen längd.",
    "Katter spenderar cirka 70% av sitt liv sovande.",
    "Den genomsnittliga huskatten kan springa upp till 30 km/h.",
  ];

  const catNews = [
    {
      title: "Ny forskning om kattens spinnande",
      content: "Forskare har upptäckt att kattens spinnande kan hjälpa till att minska stress.",
    },
    {
      title: "10 tips för att göra din katt glad",
      content: "Lär dig enkla knep för att förbättra din katts livskvalitet.",
    },
  ];

  return (
    <Wrapper>
      <Header>
        <Title>Välkommen till Kattens Värld</Title>
        <Subtitle>Här hittar du allt om katter – fakta, nyheter och bilder!</Subtitle>
      </Header>

      <Section>
        <SectionTitle>Kattbilder</SectionTitle>
        <ImageGallery>
          <StyledImage src={cuteCat} alt="Söt katt" />
          <StyledImage src={Cat} alt="Sovande katt" />
        </ImageGallery>
      </Section>

      <Section>
        <SectionTitle>Intressanta kattfakta</SectionTitle>
        <FactList>
          {catFacts.map((fact, index) => (
            <FactItem key={index}>{fact}</FactItem>
          ))}
        </FactList>
      </Section>

      <Section>
        <SectionTitle>Kattnyheter</SectionTitle>
        <NewsList>
          {catNews.map((news, index) => (
            <NewsItem key={index}>
              <NewsTitle>{news.title}</NewsTitle>
              <NewsContent>{news.content}</NewsContent>
            </NewsItem>
          ))}
        </NewsList>
      </Section>

      <Footer>
        <FooterText>© 2024 Kattens Värld.</FooterText>
      </Footer>
    </Wrapper>
  );
}

export default Home;
