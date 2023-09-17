  const RiteIFrame = () => {
    return (
      <div id="iFrameParent">
        <iframe
          id="riteIFrame"
          src="https://www.youtube.com/embed/mpu4ooALI_8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    );
  };

  export default RiteIFrame;