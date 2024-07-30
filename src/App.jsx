import { useState } from "react";
import styled from "styled-components";
import Carousel from "./components/Carousel";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledLogo = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  max-width: 3rem;
  z-index: 99;
`;

function App() {
  const [displayIndex, setDisplayIndex] = useState(0);
  const handleLinkClick = (index) => {
    setDisplayIndex(index);
  };

  return (
    <Wrapper>
      <StyledLogo src="./src/assets/favicon.ico" />
      <Carousel currentDisplayIndex={displayIndex}>
        <Home />
        <Projects />
        <Experience />
      </Carousel>
      <NavBar handleLinkClick={handleLinkClick} />
    </Wrapper>
  );
}

export default App;
