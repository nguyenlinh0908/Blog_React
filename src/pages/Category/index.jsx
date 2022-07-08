import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
const {URL_CLIENT} = require("../../setup")
function Index() {
  let { category } = useParams();
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL_CLIENT}/posts/category/${category}`)
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
        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <div className="col-md-4">
                <PostCard
                  id={post["_id"]}
                  url={post["url"]}
                  title={post["title"]}
                  description={post["description"]}
                  content={post["content"]}
                  created={post["createdAt"]}
                  views={post["views"]}
                />
              </div>
            );
          })
        ) : (
          <div className="col">
            <h1 className="text-center">no data yet</h1>
          </div>
        )}
        {}
      </div>
    </>
  );
}
export default Index;
