import { useEffect } from "react";
import myLogo from "/src/assets/logos/myLogo.png";

const SelectorButton = (props) => {

  const {
      sectionName,
      sectionPicture,
      sectionRef,
      selectorClass,
      sectionGif,
      currentSection,
      windowSize,
      isMobileSize,
      cardMatRef,
      activateSection,
      sectionPicRef,
      sectionGifRef
    } = props;
    const finalSectionName = (sectionName) => {
      if (sectionName === "myInfo") {
        return "About Me";
      } else {
        return sectionName;
      }
    };

    const updatePositions = (currentSection) => {
      const cardRect = currentSection.current.getBoundingClientRect();
      const cardMatRect = cardMatRef.current.getBoundingClientRect();
      const dx =
        cardMatRect.x - cardRect.x + (cardMatRect.width - cardRect.width) / 2;
      const dy =
        cardMatRect.y - cardRect.y + (cardMatRect.height - cardRect.height) / 2;

      // Animate the new active card
      currentSection.current.style.transform = `translate(${dx}px,${dy}px) rotateY(0deg) scale(.5) perspective(80px) rotateX(10deg) rotateZ(90deg)`;
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
      setTimeout(() => {
        sectionGifRef.current.classList.add("sectionGifActive");
      }, 600);
    }, [currentSection, windowSize]);
    return (
      <div
        id="selectorButton"
        style={  isMobileSize ?
          (sectionRef===currentSection ? ({
            backgroundColor: `black`,
        }) : ({
          backgroundColor: `black`,
        })) : (
          {
            background: `black`,
          }
        )
          }
        className={
          currentSection === sectionRef
            ? selectorClass
            : `${selectorClass} cardNoHover`
        }
        onClick={() => {
          activateSection(sectionName, sectionRef);
        }}
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
            src={sectionRef === currentSection ? (isMobileSize ? sectionGif : myLogo) : sectionPicture}
            alt="Section"
          />
        </div>
      </div>
    );
  };

  export default SelectorButton;