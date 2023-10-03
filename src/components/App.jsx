import { useRef } from "react";
// import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
//import components
import SelectorButton from "./SelectorButton";
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
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const myInfoRef = useRef(null);
  const sectionGifRef = useRef(null);
  const selectorButtonsRef = useRef(null);
  const sectionPicRef = useRef(null);
  const cardMatRef = useRef(null);


  const SelectorButtons = () => {
    return (      <div id="selectorButtons" ref={selectorButtonsRef}>
    <SelectorButton
      sectionName="projects"
      sectionPicture={projectsStill}
      sectionDescription="my projects"
      sectionRef={projectsRef}
      selectorClass="projects"
      sectionGif={projectsAnimation}
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