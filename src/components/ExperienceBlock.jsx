import styled from "styled-components";

const StyledExperience = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  font-family: Hurmit;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledTitle = styled.h2`
  color: forestgreen;
  font-size: 1.2rem;

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;

const StyledImg = styled.img`
  max-width: 100px;
  max-height: 50px;
  padding-right: 1rem;
`;

const StyledDescription = styled.p`
  font-size: 1rem;

  @media (max-width: 550px) {
    font-size: 0.8rem;
  }
`;

// eslint-disable-next-line react/prop-types
const ExperienceBlock = ({ title, description, imgUrl }) => {
  return (
    <StyledExperience>
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <StyledImg src={imgUrl} />
      </StyledHeader>
      <StyledDescription>{description}</StyledDescription>
    </StyledExperience>
  );
};

export default ExperienceBlock;
