import { useNavigate } from "react-router-dom";

function PostCard(props) {
  let { id, url, title, description, created, views } = props;
  let navigate = useNavigate();
  const handleClick = (e) => {
    let ID = e.target.dataset.id;
    navigate(`/post/${ID}`);
  };
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={url} className="img-fluid rounded-start" alt={title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" onClick={handleClick} data-id={id}>
                {title}
              </h5>
              <p
                style={{ overflow: "clip", maxHeight: "5em" }}
                className="card-text"
              >
                {description}
              </p>
              <p className="card-text">
                <i className="fa-solid fa-clock p-1"></i>
                <small className="text-muted">{created}</small> <br />
                <i className="fa-solid fa-eye p-1"></i>{" "}
                <small className="text-muted">{views}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PostCard;
