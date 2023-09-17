import { useRef, useEffect, useState } from "react";
import ProjImages from "./ProjImages";
import MySiteLink from "./MySiteLink";
import Lightbox from "./Lightbox";
import RiteIFrame from "./RiteIFrame";
import clickbaitLogo from "/src/assets/logos/clickbaitLogo.png";
import joshLogo from "/src/assets/logos/joshLogo.png";
import oldSiteLogo from "/src/assets/logos/oldSiteLogo.png";
import orfu from "/src/assets/logos/orfu.png";
import sigLogo from "/src/assets/logos/sigLogo.png";
import riteLogo from "/src/assets/logos/riteLogo.png";
import site1 from "/src/assets/siteImages/site1.jpg";
import site2 from "/src/assets/siteImages/site2.jpg";
import site3 from "/src/assets/siteImages/site3.jpg";
import site4 from "/src/assets/siteImages/site4.jpg";

const ProjectsComp = ( props ) => {

  const projectImages = {
    site1: site1,
    site2: site2,
    site3: site3,
    site4: site4,
  };
  const logos = {
    clickbaitLogo: clickbaitLogo,
    joshLogo: joshLogo,
    oldSiteLogo: oldSiteLogo,
    orfu: orfu,
    sigLogo: sigLogo,
    riteLogo: riteLogo,
  };


  const { projects} = props;
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

    const handleScroll = (event) => {
      event.preventDefault();
      const scrollAmount = event.deltaY * 4;
      const divElement = scrollRef.current;
      if (divElement) {
        divElement.scrollLeft += scrollAmount;
      }
    };
    
    useEffect(() => {
      const divElement = scrollRef.current;
      if (divElement) {
        divElement.addEventListener('wheel', handleScroll);
        return () => {
          divElement.removeEventListener('wheel', handleScroll);
        };
      }
    }, [scrollRef]);
    

    return (
      <div id="projects" className="section" ref={scrollRef}>
          {Object.values(projects)
            .sort((a, b) => a.order - b.order)
            .map((project, index) => (
              <div className={project.className} id="project" key={index}>
                {project.images && selectedImages[project.className].image && (
                  <Lightbox
                    selectedImages={selectedImages}
                    selectedImage={selectedImages[project.className]}
                    setSelectedImages={setSelectedImages}
                    projectName={project.className}
                    imgObject={projectImages}
                    closeAction={() => {
                      setSelectedImages({
                        ...selectedImages,
                        [project.className]: { image: null, caption: null },
                      });
                    }}
                  />
                )}
                {project.className === "cardGame" && <h2>{project.title}</h2>}
                {project.logo && (
                  <img className="projectLogo" src={logos[project.logo]} />
                )}
                <div id="projectSubtitle">{project.subtitle}</div>
                {project.images && (
                  <ProjImages
                    images={project.images}
                    projectIndex={index}
                    projectName={project.className}
                    imgSrc={projectImages}
                    activateSelectedImage={activateSelectedImage}
                  />
                )}
                {project.className === "joshSite" && <MySiteLink 
                  link="https://joshwolper.github.io"
                  id="joshSiteLink" 
                  linkText="visit site"
                />}
                {project.className === "magSite" && <MySiteLink 
                  link="https://mattalexander.gallery/"
                  id="mySiteLink" 
                  linkText="visit gallery"
                />}
                {project.className === "clickbait" && <MySiteLink 
                  link="https://teleportustomars.itch.io/clickbait"
                  id="cbLink" 
                  linkText="visit game"
                />}
                {project.className === "rite" && <RiteIFrame />}
                <div id="projectDescription">{project.description}</div>
                {/* {project.className === "SIGGRAPH" && <div id="links">
                  <a
                  target="_blank"
                  rel="noopener noreferrer" 
                  href={project.link1}>CD-MPM</a>
                  <a href={project.link2}
                  target="_blank" rel="noopener noreferrer">ANISO-MPM</a>
                  </div>} */}
                <div id="skillsBox">
                  {project.skills &&
                    project.skills.map((skill) => (
                      <div id="skill" key={skill}>
                        {skill}
                      </div>
                    ))}
                </div>
              </div>
            ))}
      </div>
    );
  };

  export default ProjectsComp;