import axios from "axios";
import { useEffect, useState } from "react";
const {URL_CLIENT} = require("../../setup")
function RelatedNews(props) {
  let [blogs, setBlogs] = useState([]);
  let { type } = props;
  let url = "";
  switch (type) {
    case "home":
      url = `${URL_CLIENT}/posts?limit=3&sort=desc`;
      break;
    case "detail":
      url = `${URL_CLIENT}/posts?limit=3&sort=asc`;
      break;
    default:
      url = `${URL_CLIENT}/posts?limit=3&sort=asc`;
      break;
  }
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        let blogs = res["data"];
        setBlogs(blogs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {blogs.map((blog) => {
        return (
          <>
            <div className="card mb-3">
              <img
                src={blog["url"]}
                className="card-img-top"
                alt={blog["title"]}
                style={{ maxHeight: "16rem" }}
              />
              <div className="card-body">
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href={`/post/${blog["_id"]}`}
                >
                  <h5 className="card-title">{blog["title"]}</h5>
                </a>
                <p className="card-text">{blog["description"]}</p>
                <p className="card-text">
                  <i class="fa-solid fa-clock p-1"></i>
                  <small className="text-muted">{blog["createdAt"]}</small>
                  <br />
                  <i class="fa-solid fa-eye p-1"></i>
                  <small className="text-muted">{blog['views']}</small>
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
export default RelatedNews;
