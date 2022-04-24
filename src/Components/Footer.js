import React from "react";
import styled, { keyframes } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";

const footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterIcon>
          <FootImg>
            <SocialLinks to="/linkedin" target="_blank">
              <Icon>
                <Container>
                  <FaLinkedinIn />
                </Container>
              </Icon>
            </SocialLinks>
          </FootImg>
          <FootImg>
            <SocialLinks to="/github" target="_blank">
              <Icon>
                <Container>
                  <AiFillGithub />
                </Container>
              </Icon>
            </SocialLinks>
          </FootImg>
          <FootImg>
            <SocialLinks to="/">
              <Icon>
                <Container>
                  <HiMail />
                </Container>
              </Icon>
            </SocialLinks>
          </FootImg>
          <FootImg>
            <SocialLinks to="/facebook" target="_blank">
              <Icon>
                <Container>
                  <FaFacebook />
                </Container>
              </Icon>
            </SocialLinks>
          </FootImg>
          <FootImg>
            <SocialLinks to="/instagram" target="_blank">
              <Icon>
                <Container>
                  <AiFillInstagram />
                </Container>
              </Icon>
            </SocialLinks>
          </FootImg>
          <FootImg>
            <SocialLinks to="/twitter" target="_blank">
              <Icon>
                <Container>
                  <AiFillTwitterCircle />
                </Container>
              </Icon>
            </SocialLinks>
          </FootImg>
        </FooterIcon>
        <FooterMenu>
          <FootItem>
            <FootLinks to="home">HOME</FootLinks>
          </FootItem>
          <FootItem>
            <FootLinks to="about">ABOUT</FootLinks>
          </FootItem>
          <FootItem>
            <FootLinks to="skills">SKILLS</FootLinks>
          </FootItem>
          <FootItem>
            <FootLinks to="projects">PROJECTS</FootLinks>
          </FootItem>
          <FootItem>
            <FootLinks to="contact">CONTACT</FootLinks>
          </FootItem>
        </FooterMenu>
        <CopywriteText>
          Created by <RedText>A</RedText>yush <RedText>S</RedText>ahu © 2021
        </CopywriteText>
      </FooterWrapper>
    </>
  );
};

export default footer;

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  background-color: #000;
  padding-top: 1rem;
  padding-bottom: 0.1rem;
`;

const FooterIcon = styled.div`
  margin-bottom: 0.6rem;
  display: flex;
`;
const FootImg = styled.div`
  margin: 0 0.9rem;
`;

const FooterMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

const FootItem = styled.li`
  margin: 0 0.7rem;
`;

const SocialLinks = styled(LinkR)`
  cursor: pointer;
`;

const FootLinks = styled(LinkS)`
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  &:active {
    border-bottom: 0.3rem solid #ff0000;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CopywriteText = styled.p`
  color: #fff;
  font-size: 1rem;
`;

const RedText = styled.span`
  color: #ff0000;
`;

const Container = styled.div`
  font-size: 1.5rem;
  color: #000;

  &:hover {
    transition: all 0.2 ease-in-out;
    transform: scale(1.1);
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const IconAnimation = keyframes`
	0%{top: 100%; right: 40%;}
	50%{top: -20%; right: 0%;}
	100%{top: 100%; right: 40%;}
	`;

const Icon = styled.div`
  background-color: #fff;
  height: 2.5rem;
  width: 2.5rem;
  border: none;
  border-radius: 50%;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;

  &::before {
    content: "";
    background-color: #ff0000;
    background-blend-mode: screen;
    position: absolute;
    height: 130%;
    width: 130%;
    top: 85%;
    right: 40%;
    transform: rotate(75deg);
  }
  &:hover {
    transition: all 0.3 ease-in-out;
    &::before {
      animation: ${IconAnimation};
      animation-duration: 0.5s;
    }
  }

  @media screen and (max-width: 768px) {
    height: 2rem;
    width: 2rem;
  }
`;
