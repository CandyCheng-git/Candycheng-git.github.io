import React, {useContext} from "react";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {projectFocusSection} from "../../portfolio";
import "./ProjectFocus.scss";

export default function ProjectFocus() {
  const {isDark} = useContext(StyleContext);

  if (!projectFocusSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="project-focus">
        <h1 className="skills-heading">{projectFocusSection.title}</h1>
        <p
          className={
            isDark
              ? "dark-mode project-focus-subtitle"
              : "subTitle project-focus-subtitle"
          }
        >
          {projectFocusSection.subtitle}
        </p>

        <div className="focus-groups">
          {projectFocusSection.groups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={
                isDark
                  ? "dark-mode focus-group-card project-card-dark"
                  : "focus-group-card project-card-light"
              }
            >
              <h3 className={isDark ? "dark-mode focus-group-title" : "focus-group-title"}>
                {group.title}
              </h3>
              <ul className="focus-list">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
