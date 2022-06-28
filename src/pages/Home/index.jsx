import News from "./components/News";
import RelatedNews from "../components/RelatedNews";
function Index() {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <News />
        </div>
        <div className="col-md-4">
          <RelatedNews type="home" />
        </div>
      </div>
    </>
  );
}
export default Index;
