import { useEffect } from "react";
import FormNewPost from "./components/FormNewPost";
import List from "./components/List";
function Index() {
  return (
    <>
      <div className="row">
        <div className="col">
          <div class="card">
            <div class="card-header">
              <strong>BLOG</strong>
            </div>
            <div class="card-body">
              <FormNewPost />
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card">
            <div class="card-header">
              <strong>List</strong>
            </div>
            <div class="card-body">
              <List />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
