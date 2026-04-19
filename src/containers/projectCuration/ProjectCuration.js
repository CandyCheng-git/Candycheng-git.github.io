import React, {useContext} from "react";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {projectCurationSection} from "../../portfolio";
import "./ProjectCuration.scss";

export default function ProjectCuration() {
  const {isDark} = useContext(StyleContext);

  if (!projectCurationSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="main project-curation" id="project-curation">
        <h1 className="skills-heading">{projectCurationSection.title}</h1>
        <p
          className={
            isDark ? "dark-mode project-curation-subtitle" : "project-curation-subtitle"
          }
        >
          {projectCurationSection.subtitle}
        </p>

        <ul className="project-curation-highlights">
          {projectCurationSection.highlights.map((item, index) => (
            <li key={index} className={isDark ? "dark-mode" : ""}>
              {item}
            </li>
          ))}
        </ul>

        <div className="project-curation-groups">
          {projectCurationSection.groups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={isDark ? "project-curation-card dark-mode" : "project-curation-card"}
            >
              <h3>{group.title}</h3>
              <ul>
                {group.projects.map((project, projectIndex) => (
                  <li key={projectIndex}>{project}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  );
}
