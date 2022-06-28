import { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import Modal from "bootstrap/js/src/modal";
import Cookies from "universal-cookie";
import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
// components
import blogsList from "./BlogsList";
import notification from "../../components/Notification";
function List() {
  let [blogs, setBlogs] = useState([]);
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
          notification("Delete", "this posts success", "success");
        })
        .then(async () => {
          let blogs = await blogsList();
          setBlogs(blogs);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <table className="table">
        <thead className="table-dark">
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
              <tr key={index}>
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
                    <i className="fa-solid fa-eye"></i>
                  </a>
                  <a
                    href="#"
                    data-id={blog["_id"]}
                    className="btn btn-warning mx-3"
                  >
                    <i className="fa-solid fa-wrench"></i>
                  </a>
                  <a
                    href="#"
                    onClick={handleDelete}
                    data-id={blog["_id"]}
                    className="btn btn-danger"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}
export default List;
