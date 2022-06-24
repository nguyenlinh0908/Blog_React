import Content from "./components/Content";
import RelatedNews from "../components/RelatedNews";
function Index() {
  return (
    <>
      <div className="row">
        <div className="col-9">
          <Content />
        </div>
        <div className="col-3">
          <RelatedNews />
        </div>
      </div>
    </>
  );
}
export default Index;
