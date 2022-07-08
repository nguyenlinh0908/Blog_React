import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../../components/PostCard";
const {URL_CLIENT} = require("../../../setup")
function News() {
  let [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL_CLIENT}/posts?limit=5&sort=desc`)
      .then((res) => {
        let posts = res["data"];
        setNews(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {news.map((post) => {
        return (
          <PostCard
            id={post["_id"]}
            url={post["url"]}
            title={post["title"]}
            description={post["description"]}
            content={post["content"]}
            created={post["createdAt"]}
            views={post['views']}
          />
        );
      })}
    </>
  );
}
export default News;
