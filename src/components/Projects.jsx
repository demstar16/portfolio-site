import styled from "styled-components";
import Project from "./Project";

const ProjectsWrapper = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: Hurmit;
`;

const StyledProjects = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: start;
  flex-wrap: wrap;
  padding: 2rem;
  width: 80%;
  max-height: 70vh;
  overflow: auto;
`;

const StyledTitle = styled.h1`
  color: forestgreen;
  text-decoration: underline;
  text-align: center;
  padding: 2rem 0;

  @media (max-width: 550px) {
    font-size: 1.2rem;
    padding-bottom: 0;
  }
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <StyledTitle>Noteworthy Projects</StyledTitle>
      <StyledProjects>
        <Project
          projectUrl="http://dempsey-connect-4-bucket.s3-website-ap-southeast-2.amazonaws.com/"
          title="Connect4"
          imageUrl="static/images/connect4.png"
          description="Full stack Connect4 application created with React + TypeScript, and deployed on AWS."
          icons={[
            "static/images/react.png",
            "static/images/typescript.png",
            "static/images/vite.svg",
            "static/images/aws.png",
            "static/images/docker.png",
            "static/images/storybook.png",
          ]}
        />
        <Project
          title="Cleaning Equipment WA"
          imageUrl="static/images/cleaner.png"
          description="Web application built for CEWA with Django"
          icons={["static/images/django.png", "static/images/python.webp"]}
        />
        <Project
          projectUrl="https://github.com/demstar16/sicp-exercises"
          title="SICP"
          imageUrl="static/images/sicp.png"
          description="Working through the Structure & Interpretation of Computer Programs textbook. A challenging textbook I wish I knew of sooner."
          icons={["static/images/lisp.png"]}
        />
        <Project
          projectUrl="https://github.com/demstar16/triumph"
          title="Triumph"
          imageUrl="static/images/political-wargame.png"
          description="CLI political wargame made with Python, involved creating AI to play the game as well (if you could call it AI)."
          icons={[
            "static/images/python.webp",
            "static/images/numpy.png",
            "static/images/networkx.png",
          ]}
        />
        <Project
          projectUrl="https://github.com/dempseyt/template-cli"
          title="Template CLI"
          imageUrl="static/images/template-cli.png"
          description="A template generator for conveniently starting new projects with ease and skipping mundane set up and configuration steps."
          icons={["static/images/javascript.png"]}
        />
        <Project
          projectUrl="https://github.com/dempseyt/"
          title="Ramda Functions"
          imageUrl="static/images/ramda.png"
          description="Implemented multiple Ramda functions from scratch under test. (transduce, applySpec, map, curry, reduce, and filter)"
          icons={["static/images/javascript.png", "static/images/jest.png"]}
        />
      </StyledProjects>
    </ProjectsWrapper>
  );
};

export default Projects;
