import React from "react";
import styled from "styled-components";
import catImage from "../assets/cat.png";
import { useNavigate } from "react-router-dom";

const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282c34; 
  color: #ffffff;
  
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #bf4f74; 
  font-family: 'Fantasy', sans-serif;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 20px;
  background-color: #444; 
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  padding: 12px;
  border: 2px solid #bf4f74;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #282c34; 
  color: #ffffff;
  outline: none;

  &::placeholder {
    color: #bf4f74;
  }

  &:focus {
    border-color: #ff6f61; 
    box-shadow: 0 0 10px rgba(255, 111, 97, 0.5); 
    background-color: #3a3f47; 
  }
`;

const Button = styled.button`
  padding: 12px;
  background: linear-gradient(90deg, #bf4f74 0%, #ff85a2 100%);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(255, 99, 125, 0.4);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 8px rgba(255, 99, 125, 0.2);
  }
`;

const CatImage = styled.img`
  width: auto;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 50px;
  border: 3px solid #bf4f74; 
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);
`;

function SignInPage({onLogin}) {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    alert("Inloggad!");
    navigate("/about");
  };

  return (
    <LoginPageWrapper>
      <CatImage src={catImage} alt="Cute cat" />
      <Title>Logga In</Title>
      <LoginForm onSubmit={handleSubmit}>
        <Input type="text" placeholder="Användarnamn" required />
        <Input type="password" placeholder="Lösenord" required />
        <Button type="submit">Logga In</Button>
      </LoginForm>
    </LoginPageWrapper>
  );
}

export default SignInPage;
