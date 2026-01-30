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
    <div id="experience">
      <div className="experience-container" id="workExperience">
        <div>
          <h1 className="experience-heading">Experiences</h1>

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
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
