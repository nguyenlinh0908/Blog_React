import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// components
import StandardizedRouter from "../../components/StandardizedRouter";

function Content() {
  let [post, setPost] = useState({});
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/blogs/post/${id}`)
      .then((res) => {
        let post = res["data"];
        setPost(post);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div class="card">
        <div class="card-header">
          <div className="header-content d-flex justify-content-between">
            <a href={`/category/${StandardizedRouter(post["category"])}`}>
              {post["category"]}
            </a>
            <span className="date">{post["createdAt"]}</span>
          </div>
        </div>
        <div class="card-body">
          <h1 class="card-title">{post["title"]}</h1>
          <p class="card-text">{post["description"]}</p>
          <article className="fck_detail ">{post["content"]}</article>
        </div>
      </div>
    </>
  );
}
export default Content;
