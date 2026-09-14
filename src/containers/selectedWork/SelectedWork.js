import React, {useState} from "react";
import {selectedWorkSection} from "../../portfolio";
import "./SelectedWork.scss";

const additionalProjects = [
  {
    title: "CNN Fruit Classification",
    description:
      "Built and evaluated a lightweight CNN pipeline for 14-class fruit image classification, including augmentation, model comparison, and reusable inference scripts.",
    companyName: null,
    categories: ["AI / ML"],
    featured: false,
    tags: ["Python", "TensorFlow", "Keras", "scikit-learn", "CNN"],
    badge: "machine learning",
    proof: "training pipeline, model evaluation, inference scripts",
    featuredMetric: "96.96% validation accuracy",
    github: "https://github.com/CandyCheng-git/AI-ML-CNN-Fruit-Classification",
    demo: null,
    image: null
  }
];

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  if (!selectedWorkSection.display) {
    return null;
  }

  const projects = [...selectedWorkSection.projects, ...additionalProjects];

  const filteredProjects = projects.filter(project => {
    if (activeCategory === "Featured") {
      return project.featured === true;
    }

    if (activeCategory === "All") {
      return true;
    }

    return project.categories.includes(activeCategory);
  });

  return (
    <section className="main selected-work" id="selected-work">
      <div className="selected-work-header">
        <h1 className="skills-heading">{selectedWorkSection.title}</h1>
        <p className="selected-work-subtitle">{selectedWorkSection.subtitle}</p>

        <div className="selected-work-filters" aria-label="Project categories">
          {selectedWorkSection.categories.map(category => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "selected-work-filter selected-work-filter-active"
                  : "selected-work-filter"
              }
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="selected-work-grid" key={activeCategory}>
        {filteredProjects.map(project => {
          const isCompanyProject = Boolean(project.companyName && project.image);

          return (
            <article className="selected-work-card" key={project.title}>
              {isCompanyProject ? (
                <div className="selected-work-company">
                  <div className="selected-work-company-logo">
                    <img src={project.image} alt={`${project.companyName} logo`} />
                  </div>

                  <div className="selected-work-company-info">
                    <div className="selected-work-company-name">
                      {project.companyName}
                    </div>
                    {project.badge && (
                      <span className="selected-work-badge">
                        {project.badge}
                      </span>
                    )}
                    {project.featuredMetric && (
                      <span className="selected-work-metric">
                        {project.featuredMetric}
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  {project.image && (
                    <div className="selected-work-image">
                      <img src={project.image} alt={project.title} />
                    </div>
                  )}

                  {(project.badge || project.featuredMetric) && (
                    <div className="selected-work-card-top">
                      {project.badge && (
                        <span className="selected-work-badge">
                          {project.badge}
                        </span>
                      )}
                      {project.featuredMetric && (
                        <span className="selected-work-metric">
                          {project.featuredMetric}
                        </span>
                      )}
                    </div>
                  )}
                </>
              )}

              <h3>{project.title}</h3>
              <p className="selected-work-description">{project.description}</p>

              {project.tags.length > 0 && (
                <div className="selected-work-tags">
                  {project.tags.map(tag => (
                    <span className="selected-work-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {project.proof && (
                <div className="selected-work-proof">
                  <strong>Shows:</strong> {project.proof}
                </div>
              )}

              {(project.github || project.demo) && (
                <div className="selected-work-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="selected-work-link"
                    >
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="selected-work-link selected-work-link-secondary"
                    >
                      Live Demo / Website
                    </a>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
