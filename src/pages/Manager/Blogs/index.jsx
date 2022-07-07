import FormNewPost from "./components/FormNewPost";
import List from "./components/List";
import { useState } from "react";
import { Context } from "../../components/Context";
function Index() {
  let [status, setStatus] = useState("origin");
  return (
    <>
      <div className="row">
        <Context.Provider value={[status, setStatus]}>
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
        </Context.Provider>
      </div>
    </>
  );
}
export default Index;
