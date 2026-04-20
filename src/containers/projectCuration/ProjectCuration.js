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

        {projectCurationSection.highlights?.length > 0 && (
          <ul className="project-curation-highlights">
            {projectCurationSection.highlights.map((item, index) => (
              <li key={index} className={isDark ? "dark-mode" : ""}>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="project-curation-grid">
          {projectCurationSection.projects.map((project, index) => (
            <div
              key={index}
              className={isDark ? "project-curation-card dark-mode" : "project-curation-card"}
            >
              <div className="project-curation-card-top">
                <span className="project-curation-badge">{project.badge}</span>
                {project.featuredMetric && (
                  <span
                    className={
                      isDark
                        ? "project-curation-metric dark-mode"
                        : "project-curation-metric"
                    }
                  >
                    {project.featuredMetric}
                  </span>
                )}
              </div>

              <h3 className={isDark ? "dark-mode" : ""}>{project.title}</h3>
              <h4
                className={
                  isDark
                    ? "dark-mode project-curation-role"
                    : "project-curation-role"
                }
              >
                {project.subtitle}
              </h4>

              <p
                className={
                  isDark
                    ? "dark-mode project-curation-description"
                    : "project-curation-description"
                }
              >
                {project.description}
              </p>

              <div className="project-curation-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-curation-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className={
                  isDark
                    ? "project-curation-proof dark-mode"
                    : "project-curation-proof"
                }
              >
                <strong>Shows:</strong> {project.proof}
              </div>

              <div className="project-curation-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-curation-link"
                  >
                    <span>GitHub</span>
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-curation-link project-curation-link-secondary"
                  >
                    <span>View Project</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  );
}