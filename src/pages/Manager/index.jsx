import SideBar from "./components/SideBar";
import Blogs from "./Blogs";
function Index() {
  
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
