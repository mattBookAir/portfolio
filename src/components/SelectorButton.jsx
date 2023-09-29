import { Link } from "react-router-dom";

const SelectorButton = (props) => {

  const {
      sectionName,
      sectionRef,
      sectionGif,
      sectionPicRef,
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