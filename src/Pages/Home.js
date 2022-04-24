import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "react-scroll/modules/components/Link";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import mainimg from "../Images/home.svg";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeContainer>
        <HomeWrapper>
          <HomeRow>
            <Column1>
              <TextWrapper>
                <Heading1>HELLO,</Heading1>
                <Heading2>I AM</Heading2>
                <HeadingName>AYUSH</HeadingName>
              </TextWrapper>
              <BtnWrap>
                <Link
                  className="btn btn-danger rounded-pill btn-lg"
                  to="skills"
                >
                  skills
                </Link>
              </BtnWrap>
            </Column1>
            <Column2>
              <Img src={mainimg} alt="bgimg" />
            </Column2>
          </HomeRow>
        </HomeWrapper>
      </HomeContainer>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const HomeWrapper = styled.div`
  width: 70%;
`;

const HomeRow = styled.div`
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
  padding-bottom: 1.5rem;
  position: relative;

  ::after {
    content: "";
    width: 10px;
    height: 82%;
    background: linear-gradient(to top, #ff7979, #ff0000);
    position: absolute;
    left: -40px;
    top: 8px;
  }
`;

const Img = styled.img`
  width: 50%;
  transform: translate(140px, 0px);

  @media screen and (max-width: 768px) {
    width: 65%;
    transform: translate(0px, 0px);
  }
`;

const HeadingAnimation = keyframes`
	0%{right: -10%;}
	100%{right: 100%;}
`;

const Heading1 = styled.h1`
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 600;
  color: #ff0000;
  position: relative;
  font-family: Lora;
  font-weight: 700;
  overflow: hidden;

  &::before {
    content: "";
    background: linear-gradient(to right, #ff7979, #ff0000);
    position: absolute;
    height: 85%;
    width: 50%;
    right: 100%;
    animation: ${HeadingAnimation};
    animation-duration: 0.6s;
  }
`;

const Heading2 = styled.h1`
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 600;
  color: #ff0000;
  position: relative;
  font-family: Lora;
  font-weight: 700;
  overflow: hidden;

  &::before {
    content: "";
    background: linear-gradient(to right, #ff7979, #ff0000);
    position: absolute;
    height: 85%;
    width: 30%;
    right: 100%;
    animation: ${HeadingAnimation};
    animation-duration: 0.8s;
  }
`;

const HeadingName = styled.h1`
  font-size: 4rem;
  line-height: 1.1;
  color: #fff;
  font-weight: 600;
  font-family: Lora;
  font-weight: 700;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    background: linear-gradient(to right, #ff7979, #fff);
    position: absolute;
    height: 85%;
    width: 100%;
    right: 100%;
    animation: ${HeadingAnimation};
    animation-duration: 1s;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
