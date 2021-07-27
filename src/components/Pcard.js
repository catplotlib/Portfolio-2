import "./Pcard.css";
const Pcard = ({ img, title, description, url, repo }) => {
  return (
    <>
      <div className="card">
        <a href={url}>
          <img className="p-img" src={img} alt="Avatar" />
        </a>
        <div className="pcontainer">
          <h4>
            <b>{title}</b>
          </h4>
          <p>{description}</p>
        </div>
        <div className="btn-container">
          <a href={url}>
            <button className="btn">Live-site</button>
          </a>
          <a href={repo}>
            <button className="btn">Code</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Pcard;
