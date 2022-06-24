import { useEffect, useState } from "react";
import NavBar from "./NavBar";
function WarpPages(props) {
  let { page, type } = props;
  let [wrap, setWarp] = useState("container");
  useEffect(() => {
    if (type) {
      if (type === "1") {
        setWarp("container-fluid");
      } else {
        setWarp("container");
      }
    }
  }, []);
  return (
    <>
      {type == '1' ? "" : <NavBar />}
      <div className={wrap}>{page}</div>
    </>
  );
}
export default WarpPages;
