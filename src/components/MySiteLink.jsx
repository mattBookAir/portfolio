  const MySiteLink = ({link, linkText, id}) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        id = {id}
        className="siteLink"
      >
        <div id="visitText">{linkText}</div>
      </a>
    );
  };

  export default MySiteLink;