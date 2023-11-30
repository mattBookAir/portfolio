import Frame from "./Frame";
import { useState } from "react";

const VisitBlock = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const { mobileSS, desktopSS, visitText, visitLink, visitLinkText } = props;

  const followVisitLink = () => {
    window.open(visitLink, "_blank");
  };

  return (
    <div
      id="visitParent"
      onClick={followVisitLink}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div id="visitBlock">{visitLinkText}</div>
      <Frame mobile={true} screenshot={mobileSS} />
      <Frame mobile={false} screenshot={desktopSS} />
    </div>
  );
};

export default VisitBlock;
