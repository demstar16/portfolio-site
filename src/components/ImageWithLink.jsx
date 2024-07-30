import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  width: 3rem;
  height: 3rem;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }
  &:active {
    transform: scale(0.96);
  }
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ImageWithLink = ({ imageUrl, linkUrl }) => {
  return (
    <StyledLink href={linkUrl} target="_blank">
      <ResponsiveImage src={imageUrl} />
    </StyledLink>
  );
};

export default ImageWithLink;
