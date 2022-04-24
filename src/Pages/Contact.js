import React from "react";
import { FaHackerrank, FaAddressBook, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { AiFillGithub, AiFillPhone } from "react-icons/ai";
import "./Style/Contact.scss";

const Contact = () => {
  return (
    <>
      <div className="MainContainer" id="contact">
        <div className="MainWrapper">
          <div className="FirstRow">
            <div className="SmallContainer">
              <a href="/" className="AllLinks">
                <div className="AllIcons">
                  <AiFillPhone className="Icon" />
                </div>
                <div className="pDiv">
                  <p className="pClass">+91 8349660117</p>
                </div>
              </a>
            </div>
            <div className="SmallContainer">
              <a href="/" className="AllLinks">
                <div className="AllIcons">
                  <HiMail className="Icon" />
                </div>
                <div className="pDiv">
                  <p className="pClass">Sahuayush21000@gmail.com</p>
                </div>
              </a>
            </div>
            <div className="BigContainer">
              <a href="/location" target="_blank" className="AllLinks">
                <div className="AllIcons">
                  <FaAddressBook className="Icon" />
                </div>
                <div className="pDiv">
                  <p className="pClass">
                    ISRO Colony, Ayodhya Nagar, Bhopal,
                    <br /> Madhya Pradesh, 462041
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="SecondRow">
            <div className="BigContainer">
              <a href="/linkedin" className="AllLinks" target="_blank">
                <div className="AllIcons">
                  <FaLinkedinIn className="Icon" />
                </div>
                <div className="pDiv">
                  <p className="pClass">@iayushsahu</p>
                </div>
              </a>
            </div>
            <div className="SmallContainer">
              <a href="/github" className="AllLinks" target="_blank">
                <div className="AllIcons">
                  <AiFillGithub className="Icon" />
                </div>
                <div className="pDiv">
                  <p className="pClass">@iayushsahu</p>
                </div>
              </a>
            </div>
            <div className="SmallContainer">
              <a href="/hackerrank" className="AllLinks" target="_blank">
                <div className="AllIcons">
                  <FaHackerrank className="Icon" />
                </div>
                <div className="pDiv">
                  <p className="pClass">@iayush</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
