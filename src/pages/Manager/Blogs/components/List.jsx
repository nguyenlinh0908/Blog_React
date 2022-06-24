import { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import Modal from "bootstrap/js/src/modal";
import Cookies from "universal-cookie";
import Toast from "bootstrap/js/src/toast";
// components
import MModal from "./Modal";
import blogsList from "./BlogsList";
function List() {
  let [blogs, setBlogs] = useState([]);
  let [action, setAction] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/blogs/posts")
      .then((res) => {
        let blogs = res["data"];
        setBlogs(blogs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleViewBlog = (e) => {
    e.preventDefault();
    setAction("view");
    let myModal = new Modal($("#myModal"));
    myModal.toggle();
  };
  const handleDelete = (e) => {
    e.preventDefault();
    let isConfirm = window.confirm("You want to delete it !");

    let target = e.target;
    if (isConfirm) {
      let cookies = new Cookies();
      let token = cookies.get("token");
      token = token["data"];
      let IDPost = target.dataset.id;
      axios
        .delete(`http://localhost:8000/api/v1/blogs/post/delete/${IDPost}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(res["data"]);
        })
        .then(async () => {
          let blogs = await blogsList();
          let toastElList = [].slice.call(document.querySelectorAll(".toast"));
          let toastList = toastElList.map(function (toastEl) {
            return new Toast(toastEl, {});
          });
          toastList[0].show();
          setBlogs(blogs);
        })
        .then((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col" className="col-1">
              #
            </th>
            <th scope="col" className="col-4">
              Title
            </th>
            <th scope="col" className="col-2">
              Category
            </th>
            <th scope="col" className="col-2">
              created
            </th>
            <th scope="col" className="col">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => {
            return (
              <tr>
                <th scope="row">{++index}</th>
                <td>{blog["title"]}</td>
                <td>Pokemon</td>
                <td>{blog["createdAt"]}</td>
                <td>
                  <a
                    href="#"
                    data-id={blog["_id"]}
                    className="btn btn-info"
                    onClick={handleViewBlog}
                  >
                    <i class="fa-solid fa-eye"></i>
                  </a>
                  <a
                    href="#"
                    data-id={blog["_id"]}
                    className="btn btn-warning mx-3"
                  >
                    <i class="fa-solid fa-wrench"></i>
                  </a>
                  <a
                    href="#"
                    onClick={handleDelete}
                    data-id={blog["_id"]}
                    className="btn btn-danger"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
      <MModal action={action} />
    </>
  );
}
export default List;
