import { useRef } from "react";

const Frame = (props) => {
  const { screenshot, mobile } = props;
  const ref = useRef(null);

  return (
    <div className={mobile ? 'mobileFrame' : 'frame'} ref={ref}>
      <div
        className={mobile ? 'mobileFrameImage' : 'frameImage'}
        style={{ backgroundImage: `url(${screenshot})` }}
      >
      </div>
    </div>
  );
};

export default Frame;