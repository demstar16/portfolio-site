import styled from "styled-components";
import ExperienceBlock from "./ExperienceBlock";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 80vh;
`;

const StyledExperience = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70vw;
  padding: 2rem;
  gap: 2rem;
  overflow-y: auto;

  @media (max-width: 550px) {
    padding: 0;
    width: 80vw;
  }
`;

const StyledTitle = styled.h1`
  font-family: Hurmit;
  color: forestgreen;
  text-align: center;
  padding: 2rem 0;
  text-decoration: underline;

  @media (max-width: 550px) {
    font-size: 1.2rem;
    max-width: 70%;
  }
`;

const Experience = () => {
  return (
    <Wrapper>
      <StyledTitle>My Development Experience</StyledTitle>
      <StyledExperience>
        <ExperienceBlock
          title="Undergraduate Degree"
          description="Completed a Bachelor of Science undergraduate degree majoring in Computer Science and Software Engineering at UWA."
          imgUrl="src/images/uwa.webp"
        />
        <ExperienceBlock
          title="Software Intern"
          description="Interned with Gene S through my degree which was an awesome experience. Involved working with Python and Rust, along with learning how to work as a dev outside of university for the first time."
          imgUrl="src/images/genes.png"
        />
        <ExperienceBlock
          title="Software Developer"
          description="Currently employed with JourneyOne, learning and working within a team practising TDD, clean code principles, functional programming and practical problem solving to solve problems with software."
          imgUrl="src/images/journeyone.png"
        />
        <ExperienceBlock
          title="AWS Certified Cloud Practitioner"
          description="Completed the AWS certified cloud practitioner certification"
          imgUrl="src/images/aws.webp"
        />
        <ExperienceBlock
          title="Software Developer"
          description="Worked on multiple in house projects for family business, Cleaning Equipment WA."
          imgUrl="src/images/cewa.png"
        />
        <ExperienceBlock
          title="Microsoft Certified: Azure Fundamentals"
          description="Completed the Azure fundamentals certification"
          imgUrl="src/images/azure.png"
        />
      </StyledExperience>
    </Wrapper>
  );
};

export default Experience;
