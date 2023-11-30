import { useRef, useEffect, useCallback, useState } from "react";
// import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
//import components
import SelectorButtons from "./SelectorButtons";
//import styles
import "/src/styles/App.scss";
//import parallax
import { ParallaxProvider } from "react-scroll-parallax";


function App() {
  const appRef = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);
  const [pauseAnimate, setPauseAnimate] = useState(false);


  const handleScroll = useCallback(() => {
    console.log("scrolling");
    setScrollValue(window.scrollY);
  }, []);

  useEffect(() => {
    const app = appRef.current;
    app.addEventListener("scroll", handleScroll);
    return () => app.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    console.log("scrollVal is", scrollValue);
  }, [scrollValue]);

  return (
    <ParallaxProvider>
      <div id="App" ref={appRef}>
        <SelectorButtons />
        <div id="playingField" ref={appRef}>
          <Outlet context={[pauseAnimate, setPauseAnimate]} />
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
