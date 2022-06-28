import axios from "axios";
import { useEffect, useState } from "react";
import StandardizedRouter from "./StandardizedRouter";
function NavBar() {
  let [categories, setCategories] = useState([]);
  let [categoryStatus, setCategoryStatus] = useState("none");
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
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
