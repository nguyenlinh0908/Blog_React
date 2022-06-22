import axios from "axios";
async function blogsList() {
  return axios
    .get("http://localhost:8000/api/v1/blogs/posts")
    .then((res) => {
      let blogs = res["data"];
      return blogs;
    })
    .catch((err) => {
      console.log(err);
    });
}
export default blogsList;
