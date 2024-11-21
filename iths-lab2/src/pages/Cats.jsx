import React, { useReducer, useEffect, useMemo } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #282c34; 
  color: #ffffff;
  padding: 20px;
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  padding: 15px;
  background-color: #bf4f74;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 2rem;
  font-family: 'Fantasy', sans-serif;
`;

const LoadingText = styled.p`
  color: #888;
  text-align: center;
  font-size: 1.2em;
`;

const ErrorText = styled.p`
  color: red;
  text-align: center;
  font-size: 1.2em;
`;

const FilterLabel = styled.label`
  display: block;
  margin: 20px auto;
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  background-color: #ffcccb;
  padding: 10px;
  border-radius: 10px;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FilterInput = styled.input`
  margin-left: 10px;
  padding: 8px 12px;
  font-size: 1em; 
  border: 1px solid #bf4f74; 
  border-radius: 15px; 
  outline: none;
  background-color: #ffffff; 
  color: #333; 

  &:hover {
    border-color: #ff6f61;
    background-color: #fff4f6; 
  }

  &:focus {
    border-color: #bf4f74; 
    background-color: #ffe6ea; 
    color: #282c34;
    box-shadow: 0 0 5px rgba(191, 79, 116, 0.4); 
  }

  &::placeholder {
    color: #ff6f61;
    font-style: normal; 
  }
`;



const CatList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 90px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const CatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #444;
  padding: 15px;
  border-radius: 10px;
  width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  text-align: center;

  &:hover {
    background-color: #555;
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }
`;

const CatImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 2px solid #bf4f74;
`;

const CatDetails = styled.p`
  margin: 0;
  font-size: 1em;
  color: #ffdde1;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CATS":
      return { ...state, cats: action.payload, loading: false };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "FILTER_BY_BREED":
      return { ...state, filter: action.payload };
    default:
      throw new Error("Unknown action type");
  }
};

function Cats() {
  const [state, dispatch] = useReducer(reducer, {
    cats: [],
    error: null,
    loading: true,
    filter: "",
  });

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch("https://robotaliz.github.io/cat-api-simulation/cats.json");
        if (!response.ok) {
          throw new Error("Failed to fetch cats");
        }
        const data = await response.json();
        dispatch({ type: "SET_CATS", payload: data });
      } catch (err) {
        dispatch({ type: "SET_ERROR", payload: err.message });
      }
    };

    fetchCats();
  }, []);

  const filteredCats = useMemo(() => {
    if (state.filter === "") {
      return state.cats;
    }
    return state.cats.filter((cat) =>
      cat.breed.toLowerCase().includes(state.filter.toLowerCase())
    );
  }, [state.cats, state.filter]);

  return (
    <Wrapper>
      <Title>Kattraser</Title>
      {state.loading && <LoadingText>Loading...</LoadingText>}
      {state.error && <ErrorText>Error: {state.error}</ErrorText>}
      {!state.loading && !state.error && (
        <>
          <FilterLabel>
            Sök Kattras:
            <FilterInput
              type="text"
              value={state.filter}
              onChange={(e) =>
                dispatch({ type: "FILTER_BY_BREED", payload: e.target.value })
              }
            />
          </FilterLabel>
          <CatList>
            {filteredCats.map((cat) => (
              <CatItem key={cat.id}>
                <CatImage src={cat.image} alt={cat.name} />
                <CatDetails>
                  {cat.name} - {cat.breed} ({cat.age} år gammal)
                </CatDetails>
              </CatItem>
            ))}
          </CatList>
        </>
      )}
    </Wrapper>
  );
}

export default Cats;
