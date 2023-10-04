import { useRef } from "react";

const Frame = (props) => {
  const { mobileSS } = props;
  const ref = useRef(null);

  return (
    <div id="frame" ref={ref}>
      <div
        id="frameImage"
        style={{ backgroundImage: `url(${mobileSS})` }}
      >
      </div>
    </div>
  );
};

export default Frame;
