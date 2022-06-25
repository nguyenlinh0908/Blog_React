import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
function Index() {
  let { category } = useParams();
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/blogs/posts/category/${category}`)
      .then((res) => {
        let data = res["data"];
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="row">
        {posts.map((post) => {
          return (
            <div className="col-md-4">
              <PostCard
                id={post["_id"]}
                url={post["url"]}
                title={post["title"]}
                description={post["description"]}
                content={post["content"]}
                created={post["createdAt"]}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Index;
