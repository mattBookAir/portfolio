/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import * as React from "react";

//import site copy
import Experience from "/src/Experience.json";

//import components
import Welcome from "./welcome";
import MyInfo from "./MyInfo";
import SelectorButton from "./selectorButton";
import ProjectsComp from "./projectsComp";
import ExperienceComp from "./ExperienceComp";
import EducationComp from "./EducationComp";


//import styles
import "/src/styles/App.scss";

//import animations
import educationAnimation from "/src/assets/guyz/gifs/eduGif.gif";
import projectsAnimation from "/src/assets/guyz/gifs/projectsGif.gif";
import myInfoAnimation from "/src/assets/guyz/gifs/me.gif";
import experienceAnimation from "/src/assets/guyz/gifs/expGif.gif";

//import still card images
import eduStill from "/src/assets/guyz/stills/eduStill.png";
import expStill from "/src/assets/guyz/stills/experienceStill.png";
import meStill from "/src/assets/guyz/stills/meStill.png";
import projectsStill from "/src/assets/guyz/stills/projectsStill.png";


function App() {
  const experience = Experience.experience;
  const education = Experience.education;
  const projects = Experience.projects;
  const [currentComp, setCurrentComp] = useState(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const myInfoRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(null);
  const summonAreaRef = useRef(null);
  const sectionGifRef = useRef(null);
  const selectorButtonsRef = useRef(null);
  const resumeSectionRef = useRef(null);
  const sectionPicRef = useRef(null);
  const cardMatRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [showWelcome, setShowWelcome] = useState(true);
  const [isMobileSize, setIsMobileSize] = useState(null);
  // const [, setPrevSection] = useState(null);
  const [, setDpi] = useState(null);

  useEffect(() => {
    const measureDpi = () => {
      const div = document.createElement('div');
      div.style.width = '1in'; // Set the width to 1 inch
      div.style.visibility = 'hidden';
      document.body.appendChild(div);

      const dpiValue = div.offsetWidth; // Obtain the width in pixels
      document.body.removeChild(div);

      setDpi(dpiValue);
      console.log("dpi", dpiValue);
    };

    measureDpi();

    window.addEventListener('resize', measureDpi);

    return () => {
      window.removeEventListener('resize', measureDpi);
    };
  }, []);

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  function activateSection(section, sectionRef) {
    if (showWelcome) {
      setShowWelcome(false);
    }
    setCurrentComp(section);
    setCurrentSection(sectionRef);
  }
  useEffect(() => {
    if (window.innerWidth < 600) {
      setIsMobileSize(true);
    } else {
      setIsMobileSize(false);
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setIsMobileSize(true);
    } else {
      setIsMobileSize(false);
    }
    console.log("mobile is", isMobileSize);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]);
  console.log("currentComp is", currentComp);
  
  const SectionGif = ({ gif, id }) => {
    return (
        <img
          ref={sectionGifRef}
          id={id}
          className="sectionGif"
          src={gif}
          alt="Section Animation"
        />
    );
  };

  const SectionTitle = () => {
    function decideTitle() {
      switch (currentComp) {
        case "projects":
          return "Product Design Projects";
        case "experience":
          return "Professional Experience";
        case "myInfo":
          return "Personal Information";
        case "education":
          return "Education";
        default:
          return "";
      }
    }

    return <div id="compTitle">{decideTitle()}</div>;
  };

  return (
    <div id="App">
      {showWelcome && <Welcome />}
      <div className="colorBox color1"></div>
      <div className="colorBox color2"></div>
      <div className="colorBox color3"></div>
      <div id="selectorButtons" ref={selectorButtonsRef}>
        <SelectorButton
          sectionName="projects"
          sectionPicture={projectsStill}
          sectionDescription="my projects"
          sectionRef={projectsRef}
          selectorClass="projects"
          sectionGif={projectsAnimation}
          currentSection={currentSection}
          windowSize={windowSize}
          isMobileSize={isMobileSize}
          cardMatRef={cardMatRef}
          activateSection={activateSection}
          sectionPicRef={sectionPicRef}
        />
        <SelectorButton
          sectionName="experience"
          sectionPicture={expStill}
          sectionDescription="my professional experience"
          sectionRef={experienceRef}
          selectorClass="experience"
          sectionGif={experienceAnimation}
          currentSection={currentSection}
          windowSize={windowSize}
          isMobileSize={isMobileSize}
          cardMatRef={cardMatRef}
          activateSection={activateSection}
          sectionPicRef={sectionPicRef}
        />
        <SelectorButton
          sectionName="myInfo"
          sectionPicture={meStill}
          sectionDescription="my personal information"
          sectionRef={myInfoRef}
          selectorClass="myInfo"
          sectionGif={myInfoAnimation}
          currentSection={currentSection}
          windowSize={windowSize}
          isMobileSize={isMobileSize}
          cardMatRef={cardMatRef}
          activateSection={activateSection}
          sectionPicRef={sectionPicRef}

        />
        <SelectorButton
          sectionName="education"
          sectionPicture={eduStill}
          sectionDescription="my academic experience"
          sectionRef={educationRef}
          selectorClass="education"
          sectionAnimation={educationAnimation}
          sectionGif={educationAnimation}
          currentSection={currentSection}
          windowSize={windowSize}
          isMobileSize={isMobileSize}
          cardMatRef={cardMatRef}
          activateSection={activateSection}
          sectionPicRef={sectionPicRef}
        />
      </div>

      <div id="playingField">
        <div
          id="resumeSection"
          ref={resumeSectionRef}
        >
          {currentComp === "experience" ? (
            <>
            <ExperienceComp experience={experience} />
            </>
          ) : currentComp === "education" ? (
            <EducationComp education={education} isMobileSize={isMobileSize}/>
          ) : currentComp === "projects" ? (
            <ProjectsComp projects={projects} />
          ) : currentComp === "myInfo" ? (
            <MyInfo isMobileSize={isMobileSize} Experience={Experience} React={React} />
          ) : null}
        </div>
        <div id="summonArea" ref={summonAreaRef}>
        <SectionTitle />
          {currentComp === "experience" ? (
            <>
              {!isMobileSize && <SectionGif gif={experienceAnimation} id="expAnimation" />}
            </>
          ) : currentComp === "education" ? (
            <>
              {!isMobileSize && <SectionGif gif={educationAnimation} id="eduAnimation" />}
            </>
          ) : currentComp === "projects" ? (
            <>
              {!isMobileSize && <SectionGif gif={projectsAnimation} id="projAnimation" />}
            </>
          ) : currentComp === "myInfo" ? (
            <>
              {!isMobileSize && <SectionGif gif={myInfoAnimation} id="myInfoAnimation" />}
            </>
          ) : null}
                <div id="cardMat" ref={cardMatRef} />
        </div>
      </div>
    </div>
  );
}

export default App;
