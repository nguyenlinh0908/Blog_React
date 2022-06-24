import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
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
        setContent(target.value);
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
            <div class="form-outline mb-4">
              <label class="form-label" for="formTitle">
                Title
              </label>
              <input
                name="title"
                type="text"
                id="formTitle"
                class="form-control"
                onChange={handleChange}
              />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="formDescription">
                Description
              </label>
              <input
                name="description"
                type="text"
                id="formDescription"
                class="form-control"
                onChange={handleChange}
              />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="formCategories">
                Category
              </label>
              <select
                name="category"
                class="form-select"
                id="formCategories"
                aria-label="Default select category"
                onChange={handleChange}
              >
                <option selected>Open this select category</option>
                {categories.map((category, index) => {
                  return (
                    <option value={category["name"]}>{category["name"]}</option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="col-5">
            <label class="form-label" for="avatar">
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
        <div class="form-outline mb-4">
          <label class="form-label" for="urlAvatar">
            Url
          </label>
          <input
            name="url"
            type="text"
            onChange={handleChange}
            id="urlAvatar"
            class="form-control"
          />
        </div>
        <div class="form-outline mb-4">
          <label class="form-label" for="formContent">
            Content
          </label>
          <textarea
            onChange={handleChange}
            name="content"
            class="form-control"
            id="formContent"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block mb-4">
          Send
        </button>
      </form>
    </>
  );
}
export default FormNewPost;
