import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
function MostView() {
  let [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/blogs/posts")
      .then((res) => {
        let posts = res["data"];
        setBlogs(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="col">
        <div className="d-flex justify-content-start">
          {blogs.map((blog, index) => {
            return (
              <BlogCard
                title={blog["title"]}
                description={blog["description"]}
                url={blog["url"]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default MostView;
