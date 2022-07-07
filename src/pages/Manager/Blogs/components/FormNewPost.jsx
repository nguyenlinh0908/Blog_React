import axios from "axios";
import { useEffect, useState, useContext, useMemo } from "react";
import Cookies from "universal-cookie";
import { Editor } from "@tinymce/tinymce-react";
import notification from "../../components/Notification";
// components
import { Context } from "../../../components/Context";
function FormNewPost() {
  let counter = 0;
  let [status, setStatus] = useContext(Context);
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [category, setCategory] = useState("");
  let [url, setUrl] = useState("");
  let [content, setContent] = useState("");
  let [categories, setCategories] = useState([]);
  let [urlAvatar, setUrlAvatar] = useState("/logo512.png");
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/blogs/categories")
      .then((res) => {
        let categories = res["data"];
        setCategories(categories);
      })
      .catch((err) => {});
  }, []);
  useMemo(() => {
    if (status != "normal") {
      let id = status;
      axios
        .get(`http://localhost:8000/api/v1/blogs/post/${id}`)
        .then((res) => {
          let post = res["data"];
          setTitle(post["title"]);
          setDescription(post["description"]);
          setCategory(post["category"]);
          setUrl(post["url"]);
          setUrlAvatar(post["url"]);
          setContent(post["content"]);
        })
        .catch((err) => {});
    }
  }, [status]);
  const handleClear = (e) => {
    e.preventDefault();
    setStatus("normal");
    setTitle("");
    setDescription("");
    setCategory("");
    setUrl("");
    setUrlAvatar("/logo512.png");
    setContent("");
  };
  const handleChange = (e) => {
    let target = e.target;
    e.preventDefault();
    let name = target.name;
    if (!name) {
      // su dung Tinymce nen phai lay value theo cach khac
      name = target.targetElm.name;
    }
    switch (name) {
      case "title": {
        setTitle(target.value);
        break;
      }
      case "description": {
        setDescription(target.value);
        break;
      }
      case "category": {
        setCategory(target.value);
        break;
      }
      case "url": {
        setUrl(target.value);
        setUrlAvatar(target.value);
        break;
      }
      case "content": {
        setContent(target.getContent());
        break;
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let isMethod = "POST";
    let isUrl = "http://localhost:8000/api/v1/blogs/post";
    let process = status;
    const cookies = new Cookies();
    let token = cookies.get("token");
    token = token["data"];
    let data = {
      title: title,
      description: description,
      url: url,
      content: content,
      category: category,
    };
    console.log(process);
    if (process != "normal" && process != "origin") {
      let ID = status;
      isMethod = "PATCH";
      isUrl = `http://localhost:8000/api/v1/blogs/post/${ID}`;
    }
    axios({
      headers: {
        Authorization: "Bearer " + token,
      },
      method: isMethod,
      url: isUrl,
      data: data,
    })
      .then((res) => {
        setUrlAvatar("/logo512.png");
        document.getElementById("form-add-post").reset();
        setStatus("normal");
        setTitle("");
        setDescription("");
        setCategory("");
        setUrl("");
        setUrlAvatar("/logo512.png");
        setContent("");
        notification("Add", "Process success", "success");
      })
      .catch((err) => {
        notification("Add", "Process fail", "danger");
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="form-add-post">
        <div className="row">
          <div className="col-7">
            <div className="form-outline mb-4">
              <label className="form-label" for="formTitle">
                Title
              </label>
              <input
                value={title}
                name="title"
                type="text"
                id="formTitle"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" for="formDescription">
                Description
              </label>
              <input
                value={description}
                name="description"
                type="text"
                id="formDescription"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" for="formCategories">
                Category
              </label>
              <select
                value={category}
                name="category"
                className="form-select"
                id="formCategories"
                aria-label="Default select category"
                onChange={handleChange}
              >
                <option selected>Open this select category</option>
                {categories.map((category, index) => {
                  return (
                    <option key={index} value={category["name"]}>
                      {category["name"]}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="col-5">
            <label className="form-label" for="avatar">
              Avatar
            </label>
            <img
              id="avatar"
              src={urlAvatar}
              className="w-100"
              style={{ maxHeight: "21rem" }}
              alt="avatar"
            />
          </div>
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" for="urlAvatar">
            Url
          </label>
          <input
            value={url}
            name="url"
            type="text"
            onChange={handleChange}
            id="urlAvatar"
            className="form-control"
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" for="formContent">
            Content
          </label>
          <Editor
            value={content}
            textareaName="content"
            apiKey="xvs8ssmdkfbb705c4n7th22yrjqdr9susj9fq0i9d30872fv"
            onChange={handleChange}
            init={{
              selector: "textarea.content'",
              height: 500,
              plugins: "image",
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | image |help",
              a11y_advanced_options: true,
            }}
          />
        </div>

        <div className="d-flex justify-content-between">
          <button
            type="submit"
            className={`btn btn-${
              status === "normal" || status == "origin" ? "primary" : "warning"
            } btn-block mb-4`}
          >
            {status === "normal" || status == "origin" ? "Send" : "Edit"}
          </button>
          <p onClick={handleClear}>Clear</p>
        </div>
      </form>
    </>
  );
}
export default FormNewPost;
