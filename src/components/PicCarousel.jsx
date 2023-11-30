import { useState, useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";

export default function PicCarousel(props) {
  const [pauseAnimate, setPauseAnimate] = useOutletContext();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const picRef = useRef();
  const { images, id, intervalLength, transition, border, enableFS } = props;
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);




  useEffect(() => {
    let interval;
    if (!isHovering && !pauseAnimate && !isFullScreen) {
      interval = setInterval(() => {
        switch(transition){
          case "blur":
            picRef.current.classList.remove("blurIn");
            picRef.current.classList.add("blurOut");
            break;
          case "slideDown":
            picRef.current.classList.remove("slideDown");
            picRef.current.classList.add("slideUp");
            break;
          default:
            break;
        }
        setTimeout(() => {
          setCurrentImage((currentImage) => {
            if (currentImage === images.length - 1) {
              return 0;
            }
            return currentImage + 1;
          });
          switch(transition){
            case "blur":
              picRef.current.classList.remove("blurOut");
              picRef.current.classList.add("blurIn");
              break;
            case "slideDown":
              picRef.current.classList.remove("slideUp");
              picRef.current.classList.add("slideDown");
              break;
            default:
              break;
          }
        }, 500);
      }, intervalLength);
    }
    return () => clearInterval(interval);
  }, [images, isHovering, pauseAnimate]);




  useEffect(() => {
    if (isFullScreen) {
      setPauseAnimate(true);
      console.log("isFullScreen is true");
    } else {
      setPauseAnimate(false);
      console.log("isFullScreen is false");
    }

  }, [isFullScreen]);

  return (<>
    {<div
      className={`picCarousel ${border ? "pcBorder" : ""}`}
      id={id}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => {
        if(enableFS){setIsFullScreen(true);}
      }}
    >
      <img
        id="pic"
        ref={picRef}
        src={images[currentImage]}
        alt=""

      />
      </div>
    }
      {isFullScreen && (
        <div className="fullscreenOverlay">
          <img src={images[currentImage]} alt=""  />
          <div className="arrows">
          <button
            className="arrow"
            id="arrowLeft"
            onClick={() => {
              if (currentImage === 0) {
                setCurrentImage(images.length - 1);
              } else {
                setCurrentImage(currentImage - 1);
              }
            }}
          >
            &lt;
          </button>
          <button
            className="arrow"
            id="arrowRight"
            onClick={() => {
              if (currentImage === images.length - 1) {
                setCurrentImage(0);
              } else {
                setCurrentImage(currentImage + 1);
              }
            }}
          >
            &gt;
          </button>
          <button id="close" onClick={() => setIsFullScreen(false)}>
          ✖
          </button>
        </div>
        </div>
      )}
      </>
  );
}
