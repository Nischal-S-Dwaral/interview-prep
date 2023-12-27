import React from 'react';
import styled from "styled-components";
import {mobile} from "./responsive";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import DSA from "./components/dsa/DSA";
import SystemDesign from "./components/design/SystemDesign";
import Other from "./components/other/Other";
import Navbar from "./components/Navbar";

const Main = styled.div `
  color: white;
  background: black;
`;

const Container = styled.div `
  padding: 0.5rem 3.5rem;
  overflow: hidden;

  ${mobile({
  padding: "0.5rem 1rem"
})}
`;

function App() {
  return (
      <Main>
          <Navbar/>
          <Container>
              <Routes>
                  <Route path="/" element={ <Home/> } />
                  <Route path="/dsa" element={ <DSA/> } />
                  <Route path="/systemDesign" element={ <SystemDesign/> } />
                  <Route path="/other" element={ <Other/> } />
              </Routes>
          </Container>
          <Footer/>
      </Main>
  );
}

export default App;
