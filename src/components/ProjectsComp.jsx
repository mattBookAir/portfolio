import { useState, useRef } from "react";
// import { useRef, useEffect, useState } from "react";
import Experience from "/src/Experience.json";
import { Link, Outlet } from "react-router-dom";
import clickbaitLogo from "/src/assets/logos/clickbaitLogo.png";
import joshLogo from "/src/assets/logos/joshLogo.png";
import oldSiteLogo from "/src/assets/logos/oldSiteLogo.png";
import orfu from "/src/assets/logos/orfu.png";
import sigLogo from "/src/assets/logos/sigLogo.png";
import riteLogo from "/src/assets/logos/riteLogo.png";

const ProjectsComp = () => {
  const logos = {
    clickbaitLogo: clickbaitLogo,
    joshLogo: joshLogo,
    oldSiteLogo: oldSiteLogo,
    orfu: orfu,
    sigLogo: sigLogo,
    riteLogo: riteLogo,
  };

  const projects = Experience.projects;
  const scrollRef = useRef(null);

  const SecondSideBar = () => {
    const [hoveringIndex, setHoveringIndex] = useState(null);
  
    return (
      <div id="secondSideBar">
        {Object.values(projects)
          .sort((a, b) => a.order - b.order)
          .map((project, index) => (
            <Link
              to={`/portfolio/projects/${project.className}`}
              className={project.className}
              id="project"
              key={index}
              onMouseEnter={() => setHoveringIndex(index)}
              onMouseLeave={() => setHoveringIndex(null)}
            >
              {project.logo && (
                <img className="projectLogo" src={logos[project.logo]} />
              )}
              {/* {hoveringIndex === index &&
                <div id="skillsBox">
                  {project.skills &&
                    project.skills.map((skill) => (
                      <div id="skill" key={skill}>
                        {skill}
                      </div>
                    ))}
                </div>
} */}
{hoveringIndex === index && <div id="projectSubtitle">{project.subtitle}</div>}

            </Link>
          ))}
      </div>
    );
  };
  return (
    <div id="projects" className="section" ref={scrollRef}>
      <SecondSideBar />
      <Outlet />
    </div>
  );
};

export default ProjectsComp;