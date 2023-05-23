import { memo } from "react";
const SelectorButton = ({
  sectionName,
  sectionPicture,
  sectionDescription,
  sectionRef,
  selectorClass,
  sectionSymbol,
  sectionAnimation,
  sectionCardBG,
}) => {
  const finalSectionName = (sectionName) => {
    if (sectionName === "myInfo") {
      return "About Me";
    } else {
      return sectionName;
    }
  };
  return (
    <div
      id="selectorButton"
      style={{
        backgroundImage: `url(${sectionCardBG})`,
      }}
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
          src={sectionRef === currentSection ? myLogo : sectionPicture}
          alt="Section"
        />
        {/* <div id="sectionDesc">{sectionDescription}</div> */}
      </div>
    </div>
  );
};

export default memo(SelectorButton);
