// import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const SelectorButton = (props) => {

  const {
      sectionName,
      sectionRef,
      sectionGif,
      sectionPicture,
      
    } = props;

    const finalSectionName = (sectionName) => {
      if (sectionName === "myInfo") {
        return "About Me";
      } else {
        return sectionName;
      }
    };


    return (
      <Link
        to={`/portfolio/${sectionName}`}
        id="selectorButton"
        ref={sectionRef}
      >
       <div className="card" id="cardParent">
          <div id="sectionName">{finalSectionName(sectionName)}</div>
          <img
            id="sectionPic"
            src={sectionPicture}
            alt="Section"
          />
        </div>
      </Link>
    );
  };

  export default SelectorButton;