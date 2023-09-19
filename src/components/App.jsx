import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
//import components
import Welcome from "./welcome";
import SelectorButton from "./selectorButton";
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
  const [currentComp, setCurrentComp] = useState(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const myInfoRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(null);
  const sectionGifRef = useRef(null);
  const selectorButtonsRef = useRef(null);
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

  useEffect(() => { //set dpi
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

  useEffect(() => { //set isMobileSize
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


  const SelectorButtons = () => {
    return (      <div id="selectorButtons" ref={selectorButtonsRef}>
    <SelectorButton
      sectionName="projects"
      sectionPicture={projectsStill}
      sectionDescription="my projects"
      sectionRef={projectsRef}
      selectorClass="projects"
      sectionGif={projectsAnimation}
      windowSize={windowSize}
      isMobileSize={isMobileSize}
      cardMatRef={cardMatRef}
      sectionPicRef={sectionPicRef}
      sectionGifRef={sectionGifRef}
    />
    <SelectorButton
      sectionName="experience"
      sectionPicture={expStill}
      sectionDescription="my professional experience"
      sectionRef={experienceRef}
      selectorClass="experience"
      sectionGif={experienceAnimation}
      windowSize={windowSize}
      isMobileSize={isMobileSize}
      cardMatRef={cardMatRef}
      sectionPicRef={sectionPicRef}
      sectionGifRef={sectionGifRef}
    />
    <SelectorButton
      sectionName="myInfo"
      sectionPicture={meStill}
      sectionDescription="my personal information"
      sectionRef={myInfoRef}
      selectorClass="myInfo"
      sectionGif={myInfoAnimation}
      windowSize={windowSize}
      isMobileSize={isMobileSize}
      cardMatRef={cardMatRef}
      sectionPicRef={sectionPicRef}
      sectionGifRef={sectionGifRef}
    />
    <SelectorButton
      sectionName="education"
      sectionPicture={eduStill}
      sectionDescription="my academic experience"
      sectionRef={educationRef}
      selectorClass="education"
      sectionAnimation={educationAnimation}
      sectionGif={educationAnimation}
      windowSize={windowSize}
      isMobileSize={isMobileSize}
      cardMatRef={cardMatRef}
      sectionPicRef={sectionPicRef}
      sectionGifRef={sectionGifRef}
    />
  </div>);  
  }

  return (
    <div id="App">
      <SelectorButtons />
      <div id="playingField">
          <Outlet />
      </div>
    </div>
  );
}

export default App;
