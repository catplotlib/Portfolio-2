import "./Wcard.css";
const Wcard = ({ img, title, description, url, repo }) => {
  return (
    <>
      <div className="card">
        <div className="pcontainer">
          <h4>
            <b>{title}</b>
          </h4>
          <p>{description}</p>
        </div>
        <div className="btn-container">
          <a href={url}>
            <button className="btn">Read more</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Wcard;
