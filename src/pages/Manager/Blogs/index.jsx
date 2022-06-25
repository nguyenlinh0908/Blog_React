import FormNewPost from "./components/FormNewPost";
import List from "./components/List";
function Index() {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <strong>BLOG</strong>
            </div>
            <div className="card-body">
              <FormNewPost />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header">
              <strong>List</strong>
            </div>
            <div className="card-body">
              <List />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
