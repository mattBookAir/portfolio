import { useRef, useEffect, useState } from "react";
import Experience from "/src/Experience.json";
import { Link } from "react-router-dom";
import clickbaitLogo from "/src/assets/logos/clickbaitLogo.png";
import joshLogo from "/src/assets/logos/joshLogo.png";
import oldSiteLogo from "/src/assets/logos/oldSiteLogo.png";
import orfu from "/src/assets/logos/orfu.png";
import sigLogo from "/src/assets/logos/sigLogo.png";
import riteLogo from "/src/assets/logos/riteLogo.png";

const ProjectsComp = () => {

  const projectsList = [
    "orfu",
    "portfolio",
    "clickbait",
    "joshSite"
  ]

  const logos = {
    clickbaitLogo: clickbaitLogo,
    joshLogo: joshLogo,
    oldSiteLogo: oldSiteLogo,
    orfu: orfu,
    sigLogo: sigLogo,
    riteLogo: riteLogo,
  };

  const projects  = Experience.projects;
  const scrollRef = useRef(null);
  const [selectedImages, setSelectedImages] = useState(() => {
    const initialState = {};
    Object.values(projects).forEach((project) => {
      initialState[project.className] = { image: null, caption: null };
    });
    return initialState;
  });

  const activateSelectedImage = (image, projectName) => {
    setSelectedImages((prevSelectedImages) => ({
      ...prevSelectedImages,
      [projectName]: {
        image: image,
        caption: projects[projectName].images[image].caption,
      },
    }));
  };

  const SecondSideBar = () => {
    return (
      <div id="secondSideBar">
        {Object.values(projects)
          .sort((a, b) => a.order - b.order)
          .map((project, index) => (
            <Link to={`/portfolio/projects/${project.className}`} className={project.className} id="project" key={index}>
              <h2>{project.title}</h2>
              {project.logo && (
                <img className="projectLogo" src={logos[project.logo]} />
              )}
              <div id="projectSubtitle">{project.subtitle}</div>
              <div id="skillsBox">
                {project.skills &&
                  project.skills.map((skill) => (
                    <div id="skill" key={skill}>
                      {skill}
                    </div>
                  ))}
              </div>
            </Link>
          ))}
      </div>
    );
  };

  return (
    <div id="projects" className="section" ref={scrollRef}>
      <SecondSideBar />
      <Project />
    </div>
  );
};

export default ProjectsComp;