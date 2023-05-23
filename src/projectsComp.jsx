function ProjectsComp(props) {
  const { projects } = props;
  const [selectedImages, setSelectedImages] = useState({
    clickbait: null,
    rite: null,
    SIGGRAPH: null,
    orfu: null,
  });

  const ProjImages = ({ images, projectIndex, projectName }) => {
    const projImagesRef = useRef(null);
    const projImagesId = `projImages${projectIndex}`;
    const activateSelectedImage = (image, projectName) => {
      setSelectedImages({
        ...selectedImages,
        [projectName]: image,
      });
    };

    return (
      <div id={projImagesId} className="projImages" ref={projImagesRef}>
        {images &&
          Object.keys(images).map((image) => (
            <div id="imageParent" key={image}>
              <img
                className={`${projectName}Image projectImage`}
                id={image}
                key={image}
                src={projectImages[image]}
                onClick={() => {
                  activateSelectedImage(image, projectName);
                }}
              />
            </div>
          ))}
      </div>
    );
  };

  const Lightbox = ({ selectedImages, projectName }) => {
    const lightboxRef = useRef(null);

    return (
      <div
        id="lightbox"
        ref={lightboxRef}
        style={{
          display: selectedImages[projectName] === null ? "none" : "block",
        }}
      >
        <div
          className={`${projectName}Close`}
          id="imgClose"
          onClick={() => {
            setSelectedImages({
              ...selectedImages,
              [projectName]: null,
            });
          }}
        >
          X
        </div>
        {selectedImages[projectName] !== null && (
          <img
            className={`${projectName}Image projectImage`}
            id={selectedImages[projectName]}
            src={projectImages[selectedImages[projectName]]}
          />
        )}
      </div>
    );
  };

  const lightBoxOrNot = (projectName, LightBox, projImages) => {
    if (projectName === "joshSite" || projectName === "magSite") {
      return;
    } else {
      return (
        <LightBox
          images={projImages}
          projectName={projectName}
          selectedImages={selectedImages}
        />
      );
    }
  };

  const imageRowOrNot = (projectName, projImages) => {
    if (projectName === "joshSite" || projectName === "magSite") {
      return;
    } else {
      return <ProjImages images={projImages} projectName={projectName} />;
    }
  };

  return (
    <div id="projects" className="section">
      <div id="projectsTitle">product design projects</div>
      <div id="projectsParent">
        {Object.values(projects)
          .sort((a, b) => a.order - b.order)
          .map((project, index) => (
            <div className={project.className} id="project" key={index}>
              {lightBoxOrNot(project.className, Lightbox, project.images)}
              <img className="projectLogo" src={logos[project.logo]} />
              <div id="projectSubtitle">{project.subtitle}</div>
              {imageRowOrNot(project.className, project.images)}
              <div id="projectDescription">{project.description}</div>
              <div id="imagesHolder"></div>
              <div id="skillsBox">
                {project.skills &&
                  project.skills.map((skill) => (
                    <div id="skill" key={skill}>
                      {skill}
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProjectsComp;
