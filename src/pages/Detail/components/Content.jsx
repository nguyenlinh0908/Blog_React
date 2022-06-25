import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
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
      <div className="card">
        <div className="card-header">
          <div className="header-content d-flex justify-content-between">
            <a href={`/category/${StandardizedRouter(post["category"])}`}>
              {post["category"]}
            </a>
            <span className="date">{post["createdAt"]}</span>
          </div>
        </div>
        <div className="card-body">
          <h1 className="card-title">{post["title"]}</h1>
          <p className="card-text">{post["description"]}</p>
          <article className="fck_detail ">
            {ReactHtmlParser(post["content"])}
          </article>
        </div>
      </div>
    </>
  );
}
export default Content;
