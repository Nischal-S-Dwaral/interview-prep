import React from 'react';
import styled from "styled-components";
import {mobile} from "./responsive";

const Container = styled.div `
  padding: 0.5rem 3.5rem;
  overflow: hidden;
  color: white;
  background: black;

  ${mobile({
  padding: "0.5rem 1rem"
})}
`;

function App() {
  return (
      <Container>
        This is the application
      </Container>
  );
}

export default App;
