//modules
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import WarpPages from "./pages/components/WarpPages";
import NavBar from "./pages/components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Category from "./pages/Category";
// admin
import Manager from "./pages/Manager";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WarpPages page={<Home />} type={0} />} />
          <Route
            path="/post/:id"
            element={<WarpPages page={<Detail />} type={0} />}
          />
          <Route
            path="/category/:category"
            element={<WarpPages page={<Category />} type={0} />}
          />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/blogs" element={<Manager />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
