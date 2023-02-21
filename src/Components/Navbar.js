import React from "react";
import styled from "styled-components";
import Myresume from "../Files/Ayush_sahu_resume_feb.pdf";
import Link from "react-scroll/modules/components/Link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="">
            <a className="navbar-brand" href="/">
              <RebBlock>A</RebBlock>yush<RebBlock>S</RebBlock>ahu
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  ABOUT
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="skills">
                  SKILLS
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="projects">
                  PROJECTS
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  CONTACT
                </Link>
              </li>
            </ul>
            <a
              className="btn btn-danger rounded-pill "
              href={Myresume}
              download
            >
              RESUME
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

const RebBlock = styled.span`
  color: #ff0000;
  font-size: 2rem;
`;
