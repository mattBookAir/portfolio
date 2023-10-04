import { useRef, useEffect } from "react";
//import animations
import projectsAnimation from "/src/assets/guyz/gifs/projectsGif.gif";
import myInfoAnimation from "/src/assets/guyz/gifs/me.gif";
//import still card images
import meStill from "/src/assets/guyz/stills/meStill.png";
import projectsStill from "/src/assets/guyz/stills/projectsStill.png";
import SelectorButton from "./SelectorButton";


const SelectorButtons = () => {

  return (
    <div id="selectorButtons">
      <SelectorButton
        sectionName="projects"
        sectionPicture={projectsStill}
        sectionDescription="my projects"
        sectionGif={projectsAnimation}
      />
      <SelectorButton
        sectionName="myInfo"
        sectionPicture={meStill}
        sectionDescription="my personal information"
        sectionGif={myInfoAnimation}
      />
    </div>
  );
};

export default SelectorButtons;
