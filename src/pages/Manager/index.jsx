import SideBar from "./components/SideBar";
import Blogs from "./Blogs";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Index() {
  let navigate = useNavigate();
  let cookie = new Cookies();
  useEffect(() => {
    let token = cookie.get("token");
    if (!token) {
      navigate("/admin/login");
    }
  }, []);
  return (
    <>
      <SideBar />
      <main style={{ marginTop: "58px" }}>
        <div class="container-fluid pt-4">
          <Blogs />
        </div>
      </main>
    </>
  );
}
export default Index;
