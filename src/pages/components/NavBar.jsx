import axios from "axios";
import { useEffect, useState } from "react";
import StandardizedRouter from "./StandardizedRouter";
function NavBar() {
  let [categories, setCategories] = useState([]);
  let [categoryStatus, setCategoryStatus] = useState("none");
  let [searchKey, setSearchKey] = useState("");
  let [postsSearch, setPostsSearch] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/blogs/categories")
      .then((res) => {
        let data = res["data"];
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSearchKey = (e) => {
    e.preventDefault();
    let target = e.target;
    let contentSearch = target.value;
    if (contentSearch == "") {
      let resultSearchBox = document.getElementById("result-searchbox");
      resultSearchBox.style.display = "none";
    }
    setSearchKey(contentSearch);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/blogs/search", { key: searchKey })
      .then((res) => {
        let resultSearch = res["data"];
        console.log(resultSearch);
        let resultSearchBox = document.getElementById("result-searchbox");
        if (resultSearch.length == 0) {
          resultSearchBox.style.display = "none";
        } else {
          resultSearchBox.style.display = "block";
          setPostsSearch(resultSearch);
        }
      })
      .catch((err) => {});
  };
  const handleShowCategories = (e) => {
    e.preventDefault();
    if (categoryStatus === "none") {
      setCategoryStatus("block");
    } else {
      setCategoryStatus("none");
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid shadow p-3 mb-5 bg-body rounded">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <a className="navbar-brand mt-2 mt-lg-0" href="/">
              <img src="/icon.png" height="15" alt="logo" loading="lazy" />
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Trang chủ
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                  onClick={handleShowCategories}
                >
                  Thể loại
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ display: categoryStatus }}
                >
                  {categories.map((category) => {
                    return (
                      <>
                        <li>
                          <a
                            class="dropdown-item"
                            href={`/category/${StandardizedRouter(
                              category["name"]
                            )}`}
                          >
                            {category["name"]}
                          </a>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <form class="d-flex" onSubmit={handleSearch}>
            <input
              onChange={handleSearchKey}
              class="form-control me-2 dropdown-toggle"
              type="search"
              placeholder="Search"
              aria-label="Search"
              data-bs-toggle="dropdown"
            />

            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div
        id="result-searchbox"
        style={{
          position: "absolute",
          right: "6.2rem",
          top: "4.5rem",
          zIndex: 100,
          display: "none",
          transition: "all 0.3s ease-out",
        }}
      >
        <ul class="list-group" style={{ width: "17rem" }}>
          {postsSearch ? (
            postsSearch.map((post) => {
              return (
                <li class="list-group-item">
                  <a className="text-dark"
                    style={{ textDecoration: "none"}}
                    href={`/post/${post["_id"]}`}
                  >
                    {post["title"]}
                  </a>
                </li>
              );
            })
          ) : (
            <></>
          )}
          {/* <li class="list-group-item active" aria-current="true">
            An active item
          </li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li> */}
        </ul>
      </div>
    </>
  );
}
export default NavBar;
