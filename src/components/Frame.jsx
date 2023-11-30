import { useRef } from "react";
import { useOutletContext } from "react-router-dom";

const Frame = (props) => {
  const { screenshot, mobile } = props;
  const ref = useRef(null);
  const [pauseAnimate, setPauseAnimate] = useOutletContext();

  return (
    <div
      className={mobile ? "mobileFrame" : "frame"}
      ref={ref}
      onMouseEnter={() => setPauseAnimate(true)}
      onMouseLeave={() => setPauseAnimate(false)}
    >
      <div
        className={mobile ? "mobileFrameImage" : "frameImage"}
        style={{ backgroundImage: `url(${screenshot})` }}
      ></div>
    </div>
  );
};

export default Frame;
