  const ExperienceComp = ({ experience }) => {
    return (
      <div className="section expSection">
        {experience.map((exp) => (
          <div className={`${exp.className}`} id="experience" key={exp.title}>
            <div id="expContent">
              <div className="title">{exp.title}</div>
              <div className="company">{exp.company}</div>
              <div className="location">{exp.location}</div>
              <div className="dates">{exp.dates}</div>
              <div className="description">
                {exp.description.map((desc) => (
                  <div className="descriptionItem" key={desc}>
                    {desc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default ExperienceComp;