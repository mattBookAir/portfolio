import { useState, useRef, useEffect } from "react";

const Frame = (props) => {
  const { mobileSS } = props;
  const frameRef = useRef(null);

//   useEffect(() => {
//     // Update background position using the 'style' property
//     frameRef.current.style.backgroundPositionY = `${-scrollY * 0.5}px`;
//   }, [scrollY]);

  return (
    <div id="frame" ref={frameRef} style={{ backgroundImage: `url(${mobileSS})` }}>
    </div>
  );
};

export default Frame;
