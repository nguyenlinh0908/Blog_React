//modules
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import WarpPages from "./pages/components/WarpPages";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Category from "./pages/Category";
// admin
import Manager from "./pages/Manager";
// ErrorBoundary
import ErrorBoundary from "./pages/components/ErrorBoundary";
import Error404 from "./pages/components/Error404";
function App() {
  return (
    <>
      <ErrorBoundary>
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
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}
export default App;
