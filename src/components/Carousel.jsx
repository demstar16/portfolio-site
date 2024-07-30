// Carousel.js
import React from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const CarouselInner = styled.div`
  display: flex;
  transition: transform 1.5s ease-in-out;
`;

const CarouselItem = styled.div`
  flex: 0 0 100%;
  width: 100%;
`;

// eslint-disable-next-line react/prop-types
const Carousel = ({ currentDisplayIndex, children }) => {
  return (
    <CarouselContainer>
      <CarouselInner
        style={{ transform: `translateX(-${currentDisplayIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => (
          <CarouselItem>{child}</CarouselItem>
        ))}
      </CarouselInner>
    </CarouselContainer>
  );
};

export default Carousel;
