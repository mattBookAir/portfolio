import { useRef } from "react";
const ProjImages = ({
    images,
    projectIndex,
    projectName,
    activateSelectedImage,
    imgSrc,
  }) => {
    const projImagesRef = useRef(null);
    const projImagesId = `projImages${projectIndex}`;

    return (
      <div id={projImagesId} className="projImages" ref={projImagesRef}>
        {images &&
          Object.keys(images).map((image) => (
            <div id="imageParent" key={image}>
              <img
                className={`${projectName}Image projectImage`}
                id={image}
                key={image}
                src={imgSrc[image]}
                onClick={() => {
                  activateSelectedImage(image, projectName);
                }}
              />
            </div>
          ))}
      </div>
    );
  };

export default ProjImages;

