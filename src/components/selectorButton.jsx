import { useEffect } from "react";
import { Link } from "react-router-dom";

const SelectorButton = (props) => {

  const {
      sectionName,
      sectionRef,
      sectionGif,
      currentSection,
      windowSize,
      isMobileSize,
      sectionPicRef,
    } = props;

    const finalSectionName = (sectionName) => {
      if (sectionName === "myInfo") {
        return "About Me";
      } else {
        return sectionName;
      }
    };

    const mobileUpdatePositions = (currentSection) => {
      const card = currentSection.current;
      card.classList.add("mobileActiveCard");
    }

    useEffect(() => {
      if (currentSection === null) return;
      // Update position on mount and whenever currentSection or window size changes
      if (!isMobileSize) {
        // updatePositions(currentSection);
        setTimeout(() => {
          currentSection.current.classList.add("cardActive");
        }, 500);
      } else {
        mobileUpdatePositions(currentSection);
      }
    }, [currentSection, windowSize]);
    
    return (
      <Link
        to={`/portfolio/${sectionName}`}
        id="selectorButton"
        ref={sectionRef}
        onMouseEnter={() => {
          sectionRef.current.classList.add("glow");
        }}
        onMouseLeave={() => {
          sectionRef.current.classList.remove("glow");
        }}
      >
       <div className="card" id="cardParent">
          <div id="sectionName">{finalSectionName(sectionName)}</div>
          <img
            id="sectionPic"
            ref={sectionPicRef}
            src={sectionGif}
            alt="Section"
          />
        </div>
      </Link>
    );
  };

  export default SelectorButton;