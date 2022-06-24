import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostCard(props) {
  let { id, url, title, description, content, created } = props;
  let navigate = useNavigate();
  const handleClick = (e) => {
    let ID = e.target.dataset.id;
    navigate(`post/${ID}`);
  };
  return (
    <>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={url} class="img-fluid rounded-start" alt={title} />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" onClick={handleClick} data-id={id}>
                {title}
              </h5>
              <p class="card-text">{description}</p>
              <p class="card-text">
                <small class="text-muted">{created}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PostCard;
