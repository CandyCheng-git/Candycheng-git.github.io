import React, { useContext } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);

  if (!workExperiences.display) return null;

  return (
    <section id="experience">
      <div className="experience-container" id="workExperience">
        <div className="experience-content">
          <h1 className="experience-heading">
            {workExperiences.title || "Experience"}
          </h1>

          {workExperiences.subtitle ? (
            <p className={isDark ? "experience-subtitle dark-mode" : "experience-subtitle"}>
              {workExperiences.subtitle}
            </p>
          ) : null}

          <div className="experience-cards-div">
            {workExperiences.experience.map((card, i) => (
              <Fade
                key={`${card.company}-${card.role}-${card.date}-${i}`}
                bottom
                duration={800}
                distance="20px"
                fraction={0.15}
                triggerOnce
              >
                <div className="experience-card-shell">
                  <ExperienceCard
                    isDark={isDark}
                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets
                    }}
                  />
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}