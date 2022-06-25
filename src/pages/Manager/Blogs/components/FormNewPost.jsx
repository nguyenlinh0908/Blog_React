import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { Editor } from "@tinymce/tinymce-react";
function FormNewPost() {
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
  const handleChange = (e) => {
    let target = e.target;
    e.preventDefault();
    let name = target.name;
    if (!name) { // su dung Tinymce nen phai lay value theo cach khac
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
    axios
      .post("http://localhost:8000/api/v1/blogs/post", data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-7">
            <div className="form-outline mb-4">
              <label className="form-label" for="formTitle">
                Title
              </label>
              <input
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

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Send
        </button>
      </form>
    </>
  );
}
export default FormNewPost;
