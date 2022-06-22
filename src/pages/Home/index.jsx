import NavBar from "../components/NavBar";
import MostView from "./components/MostViews";
function Index() {
  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col">
          <h1 className="px-3">Most Views</h1>
        </div>
      </div>
      <div className="row">
        <MostView />
      </div>
    </>
  );
}
export default Index;
