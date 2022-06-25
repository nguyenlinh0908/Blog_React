import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
function FormLogin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  const cookies = new Cookies();
  const handleChange = (event) => {
    let target = event.target;
    switch (target.name) {
      case "email":
        setEmail(target.value);
        break;
      case "password":
        setPassword(target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/auth/login", {
        email: email,
        password: password,
      })
      .then((data) => {
        cookies.set("token", data, { path: "/" });
        navigate("/admin/blogs");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    let isToken = cookies.get("token");
    if (isToken) {
      navigate("/admin/blogs");
    }
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            name="email"
            type="email"
            id="formEmail"
            className="form-control"
            onChange={handleChange}
          />
          <label className="form-label" for="formEmail">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            name="password"
            type="password"
            id="formPassword"
            className="form-control"
            onChange={handleChange}
          />
          <label className="form-label" for="formPassword">
            Password
          </label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label className="form-check-label" for="form2Example31">
                Remember me
              </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-4 w-100">
          Sign in
        </button>
      </form>
    </>
  );
}
export default FormLogin;
