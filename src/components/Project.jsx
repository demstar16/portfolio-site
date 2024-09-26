/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledProject = styled.a`
  display: flex;
  gap: 10px;
  font-family: Hurmit;
  width: 600px;
  height: fit-content;
  margin-right: 2px;
  border-left: 2px solid forestgreen;
  padding: 1rem;
  text-decoration: none;

  &:hover {
    border-left: 4px solid darkgreen;
  }

  @media (max-width: 550px) {
    flex-wrap: wrap;
  }
`;

const Icon = styled.img`
  width: 1.4rem;
  height: 1.5rem;
`;

const StyledTitle = styled.h3`
  color: forestgreen;
  text-decoration: underline;
  font-weight: 700;
  font-size: 1rem;
`;

const StyledImg = styled.img`
  /* width: 150px; */
  height: 120px;
  border-radius: 20px;
`;

const StyledDescription = styled.p`
  font-size: 0.8rem;
  color: black;
  padding: 5px;
`;

const ProjectDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledIcons = styled.div`
  display: flex;
  gap: 10px;
  width: fit-content;
`;

const Project = ({ title, imageUrl, description, icons, projectUrl }) => {
  return (
    <StyledProject href={projectUrl} target="_blank">
      <StyledImg src={imageUrl} />
      <ProjectDetailsWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledIcons>
          {icons.map((iconImgUrl) => (
            <Icon src={iconImgUrl} />
          ))}
        </StyledIcons>
      </ProjectDetailsWrapper>
    </StyledProject>
  );
};
export default Project;
