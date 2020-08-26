import React from "react";
import logo from "./logo.svg";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 100%; /*background-size: 300px;*/
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  cursor: pointer;
`;

function App() {
  const apiRequest = () => {
    console.log("Req");
  };

  return (
    <Container>
      <Button onClick={apiRequest}>Obtener Frase</Button>
    </Container>
  );
}

export default App;
