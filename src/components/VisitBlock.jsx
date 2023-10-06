import Frame from "./Frame";

const VisitBlock = (props) => {

    const { mobileSS, desktopSS, visitText, visitLink, visitLinkText } = props;

  return (
    <div id="visitParent">
        <div id="visitBlock">
            <h3>{visitText}</h3>
            <a href={visitLink} target="_blank" rel="noreferrer">
                Click here
            </a>
            <div id="visitText">{visitLinkText}</div>
        </div>
        <Frame mobile={true} screenshot={mobileSS}/>
        <Frame mobile={false} screenshot={desktopSS}/>
    </div>
  );
};

export default VisitBlock;