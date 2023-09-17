import React, { useEffect, useRef, useState } from "react";

const Lightbox = ({ selectedImage, projectName, closeAction, imgObject }) => {
    const lightboxRef = useRef(null);
    
    useEffect(() => {
      lightboxRef.current.classList.add("lightBoxFadeIn");
      setTimeout(() => {
        lightboxRef.current.classList.remove("lightBoxFadeIn");
      }, 500);
    }, [selectedImage]);

    const handleClose = (projectName) => {
      lightboxRef.current.classList.add("lightBoxGoAway");
      setTimeout(() => {
        closeAction(projectName);
      }, 500);
    };

    return (
      <>
        <div
          id="lightbox"
          ref={lightboxRef}
          style={{
            display: selectedImage === null ? "none" : "flex",
          }}
          className={`${projectName}Lightbox`}
        >
          <div
            className={`${projectName}Close`}
            id="imgClose"
            onClick={() => {
              handleClose(projectName);
            }}
          >
          </div>
          <>
            <img
              className={`${projectName}Image projectImage`}
              id={selectedImage.image}
              src={imgObject[selectedImage.image]}
            />
            <div id="imgCaption">{selectedImage.caption}</div>
          </>
        </div>
      </>
    );
  };

export default Lightbox;