import React from "react";
import "./Style/SkillStyle.scss";

const Skills = () => {
  return (
    <>
      {" "}
      <hr />
      <div className="SkillContainer" id="skills">
        <div className="SkillWrapper">
          <div className="Column1">
            <div className="charts">
              <div className="chart chart--dev">
                <span className="chart__title">Web Development</span>
                <ul className="chart--horiz">
                  <li className="chart__bar" style={{ width: "98%" }}>
                    <span className="chart__label">HTML5</span>
                  </li>
                  <li className="chart__bar" style={{ width: "96%" }}>
                    <span className="chart__label">
                      CSS3 & SCSS & Style Components
                    </span>
                  </li>
                  <li className="chart__bar" style={{ width: "75%" }}>
                    <span className="chart__label">ReactJS</span>
                  </li>
                  <li className="chart__bar" style={{ width: "55%" }}>
                    <span className="chart__label">NodeJS</span>
                  </li>
                  <li className="chart__bar" style={{ width: "60%" }}>
                    <span className="chart__label">ExpressJS</span>
                  </li>
                </ul>
              </div>

              <div className="chart chart--prod">
                <span className="chart__title">Programming languages</span>
                <ul className="chart--horiz">
                  <li className="chart__bar" style={{ width: "60%" }}>
                    <span className="chart__label">C & C++</span>
                  </li>
                  <li className="chart__bar" style={{ width: "65%" }}>
                    <span className="chart__label">Python</span>
                  </li>
                  <li className="chart__bar" style={{ width: "78%" }}>
                    <span className="chart__label">Javascript</span>
                  </li>
                </ul>
              </div>

              <div className="chart chart--design">
                <span className="chart__title">Designing</span>
                <ul className="chart--horiz">
                  <li className="chart__bar" style={{ width: "55%" }}>
                    <span className="chart__label">Adobe XD</span>
                  </li>
                  <li className="chart__bar" style={{ width: "60%" }}>
                    <span className="chart__label">Photoshop</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
