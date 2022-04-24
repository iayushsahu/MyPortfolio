import React from "react";
import styled from "styled-components";
import Link from "react-scroll/modules/components/Link";
import mainimg from "../Images/Ayush_img.jpg";

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <TopLine>STUDIES</TopLine>
                <Heading>
                  Bansal Institute of Science & Technology Bhopal
                  <br />
                  (B.Tech) Information Technology
                </Heading>
                <Subtitel>(2018 - 2022)</Subtitel>
              </TextWrapper>
              <TextWrapper>
                <Heading>
                  Sarvoday Higher Sec School Tendukheda (MP)
                  <br />
                  Senior Secondary - PCM
                </Heading>
                <Subtitel>(2017 - 2018)</Subtitel>
              </TextWrapper>
              <TextWrapper>
                <TopLine>HOBBIES</TopLine>
                <HeadingH>
                  Net Surfing, Book Reading,
                  <br />
                  Watching Motivational And Inspritual videos,
                  <br />
                  Listen to Music, Travelling,
                  <br />
                  Playing with Computer and Stock Trading.
                </HeadingH>
              </TextWrapper>
              <BtnWrap>
                <Link className="btn btn-danger rounded-pill" to="projects">
                  Projects
                </Link>
              </BtnWrap>
            </Column1>
            <Column2>
              <Img src={mainimg} alt="svgimg" />
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;

const AboutContainer = styled.div`
  color: #fff;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
`;

const AboutWrapper = styled.div`
  width: 70%;
`;

const AboutRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    margin: 100px 0;
  }
`;

const Column1 = styled.div`
  flex-basis: 40%;
  position: relative;
  transform: translateX(30px);

  @media screen and (max-width: 768px) {
    transform: translateX(0px);
  }
`;

const Column2 = styled.div`
  position: relative;
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    margin-bottom: 60px;
  }
`;

const TextWrapper = styled.div`
  padding-bottom: 1.2rem;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const TopLine = styled.p`
  color: #ff0000;
  font-size: 1.6rem;
  line-height: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
  margin-top: 1.6rem;
  font-family: sans-serif;
`;

const Heading = styled.h1`
  font-size: 0.9rem;
  line-height: 1.2;
  font-weight: 500;
  font-family: sans-serif;
`;

const HeadingH = styled.h1`
  font-size: 0.9rem;
  line-height: 1.2;
  font-weight: 500;
  font-family: sans-serif;
`;

const Subtitel = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  text-transform: capitalize;
`;

const Img = styled.img`
  width: 50%;
  filter: brightness(0.8);
  filter: contrast(1.1);
  border: 0.4rem solid #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0px 0px 14px 1px rgba(255, 0, 0, 0.61);
  box-shadow: 0px 0px 14px 1px rgba(255, 0, 0, 0.61);
  transform: translate(140px, 0px);

  @media screen and (max-width: 768px) {
    width: 65%;
    transform: translate(0px, 0px);
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
