import axios from "axios";
const { URL_CLIENT } = require("../../../../setup");
async function blogsList() {
  return axios
    .get(`${URL_CLIENT}/posts`)
    .then((res) => {
      let blogs = res["data"];
      return blogs;
    })
    .catch((err) => {
      console.log(err);
    });
}
export default blogsList;
