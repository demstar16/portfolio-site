import styled from "styled-components";
import ImageWithLink from "./ImageWithLink";

const StyledHomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  height: 100vh;

  @media (max-width: 900px) {
    padding-top: 2rem;
    align-items: start;
  }
`;

const StyledImg = styled.img`
  /* border: 6px solid forestgreen; */
  /* border-radius: 100px; */
  max-width: 350px;
  max-height: 350px;
  width: 100%;
  height: 100%;

  @media (max-width: 900px) {
    max-width: 200px;
    max-height: 200px;
    /* border-radius: 50px; */
    /* border: 3px solid forestgreen; */
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  font-family: Hurmit;
  gap: 1rem;
`;

const Wrapper = styled.div`
  margin-bottom: 100px;
  display: flex;
  max-width: 80vw;
  max-height: 50vh;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    overflow: auto;
    max-height: 90vh;
    margin: 0;
  }
`;

const StyledText = styled.p`
  margin-bottom: 0.7rem;

  @media (max-width: 900px) {
    font-size: 0.7rem;
    margin-bottom: 0;
  }
`;

const StyledHighlight = styled.span`
  color: forestgreen;
  font-weight: 700;
`;

const StyledWhisper = styled.span`
  font-size: smaller;
`;

const StyledIcons = styled.div`
  display: flex;
  width: fit-content;
  gap: 15px;
`;

const Home = () => {
  return (
    <StyledHomePage>
      <Wrapper>
        <StyledImg src="static/images/avatar2.png" />
        <StyledInfo>
          <StyledText>Hello Traveller!</StyledText>
          <StyledText>
            My name is <StyledHighlight>Dempsey</StyledHighlight>, I am a
            passionate 22 year old Software Engineer currently based in Perth
            working for a company called JourneyOne. I try my best to abide by
            clean code principles and take pride in my work.
          </StyledText>
          <StyledText>
            I love learning and experiencing new things, more importantly I
            <StyledHighlight> love building things! </StyledHighlight>{" "}
            <StyledWhisper> and bears :)</StyledWhisper> <br />
            Feel free to poke around and have a look at some of the stuff that I
            have built over the years.
          </StyledText>
          <StyledIcons>
            <ImageWithLink
              imageUrl="static/images/github.png"
              linkUrl={"https://github.com/demstar16"}
            />
            <ImageWithLink
              imageUrl={"static/images/linkedin.png"}
              linkUrl={
                "https://www.linkedin.com/in/dempsey-thompson-b91614197/"
              }
            />
          </StyledIcons>
        </StyledInfo>
      </Wrapper>
    </StyledHomePage>
  );
};

export default Home;
