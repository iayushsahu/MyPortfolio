import React from "react";
import styled from "styled-components";
import { Button, Card } from "react-bootstrap";
import CovImg from "../Images/Covizine.gif";
import PortImg from "../Images/Portfolio.gif";
import QcImg from "../Images/quickchat.gif";
import NportImg from "../Images/newPortfolio.gif";

const Info = [
  {
    TitleName: "Covizine",
    Description: `Covizine is drived "Covid " + "Magazine", Our project is based on reactjs, Firebase & Styled-components,Our project runs smoothly across devices.`,
    TitleButton: "View Project",
    BtnLink: "https://covizine01.000webhostapp.com/",
    ImgSrc: `${CovImg}`,
  },
  {
    TitleName: "Portfolio",
    Description: `This is my portfolio website,Our project is based on reactjs,scss & Styled-components,this project runs smoothly across  devices.`,
    TitleButton: "View Project",
    BtnLink: "https://ayushsahu.netlify.app/",
    ImgSrc: `${PortImg}`,
  },
  {
    TitleName: "Quick Chat",
    Description: `This is a simple and easy to use real time chat appication, this project is base on Nodejs, Expressjs, Socket.io. this project runs smoothly across devices.`,
    TitleButton: "View Project",
    BtnLink: "https://quick-chat-absr.herokuapp.com/",
    ImgSrc: `${QcImg}`,
  },
  {
    TitleName: "Portfolio",
    Description: `This is my New portfolio website,this project is based on reactjs,scss. this project runs smoothly across desktop, tablet and mobile devices.`,
    TitleButton: "View Project",
    BtnLink: "https://ayushsahu-portfolio.herokuapp.com/",
    ImgSrc: `${NportImg}`,
  },
];

const Projects = () => {
  return (
    <>
      <ServicesContainer id="projects">
        <ServicesWrapper>
          {Info.map((data) => (
            <ServicesBox>
              <Card
                style={{
                  width: "18rem",
                  padding: "0.7rem",
                  borderRadius: "1rem",
                  backgroundColor: "#011",
                }}
              >
                <Card.Img
                  variant="top"
                  src={data.ImgSrc}
                  style={{ objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "600", color: "#fff" }}>
                    {data.TitleName}
                  </Card.Title>
                  <Card.Text style={{ color: "#fff" }}>
                    {data.Description}
                  </Card.Text>
                  <Button variant="danger" className="rounded-pill">
                    <a
                      href={data.BtnLink}
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      {data.TitleButton}
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </ServicesBox>
          ))}
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Projects;

export const ServicesContainer = styled.div`
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
`;
export const ServicesWrapper = styled.div`
  width: 70%;
  margin: auto;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const ServicesBox = styled.div`
  width: 20vw;
  height: 69vh;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 15px;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    -webkit-box-shadow: 0px 0px 14px 1px rgba(255, 0, 0, 0.61);
    box-shadow: 0px 0px 14px 1px rgba(255, 0, 0, 0.61);
  }

  @media screen and (max-width: 1000px) {
    height: 100%;
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 80%;
  }
`;
