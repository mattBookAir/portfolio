  const MyInfo = (props) => {

    // eslint-disable-next-line react/prop-types
    const { Experience, React, isMobileSize } = props;

    return (
      <div id="myInfoParent" className="sunGlow">
        <div className="section myInfo">
          <div id="myInfoBlock">
            <div id="myName">Matt Alexander</div>
            <div id="shortBio">{Experience.shortSummary}</div>
            <div id="bio">
              {Experience.summary.split("/").map((item, index) => (
                <React.Fragment key={index}>
                  <div className="aboutMeParagraph">{item}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default MyInfo;