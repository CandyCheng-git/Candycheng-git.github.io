import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  projectCurationSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);

  const viewSkills = skillsSection.display;
  const viewExperience = workExperiences.display;
  const viewProjects = projectCurationSection.display;
  const viewAchievement = achievementSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom
      disableInlineStyles
      pinStart={0}
      wrapperStyle={{height: "92px"}}
    >
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <div className="splash-title-container">
            <img
              className="splash-logo"
              src={require("../../assets/images/logo.png")}
              alt="logo"
            />
            <span className="grey-color">&lt;</span>
            <span className="splash-title">{greeting.username}</span>
            <span className="grey-color">/&gt;</span>
          </div>
        </a>

        <input className="menu-btn" type="checkbox" id="menu-btn" />

        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>

        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}

          {viewExperience && (
            <li>
              <a href="#experience">Experience</a>
            </li>
          )}

          {viewProjects && (
            <li>
              <a href="#project-curation">Projects</a>
            </li>
          )}

          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}

          {viewResume && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )}

          <li>
            <a href="#contact">Contact</a>
          </li>

          <li className="toggle-switch-li">
            <div className="toggle-switch-wrapper">
              <ToggleSwitch />
            </div>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;