import { useState } from "react";

function BlogCard(props) {
  let { title, description, url } = props;
  let [width, setWidth] = useState(18);
  const handleHover = () => {
    setWidth(20);
  };
  const handleLeave = () => {
    setWidth(18);
  };
  return (
    <>
      <div
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
        class="card shadow mb-5 bg-body rounded mx-3"
        style={{
          width: `${width}rem`,
          transition: "all 0.3s ease-out",
        }}
      >
        <img src={url} class="card-img-top" alt={title} />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </>
  );
}
export default BlogCard;
