import { useEffect, useState } from "react";

function ManagerToast(props) {
  let { status, message } = props;
  let [notification, setNotification] = useState({});
  useEffect(() => {
    let data = {
      bg: status ? status : "info",
      mess: message ? message : "notification",
    };
    setNotification(data);
  }, []);

  return (
    <>
      <div
        className="position-fixed top-0 end-0 p-3"
        style={{ zIndex: "9999" }}
      >
        <div
          id="liveToast"
          class={`toast hide bg-${notification["bg"]}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header ">
            <img
              src="/icon.png"
              className="rounded me-2"
              style={{ maxWidth: "25px" }}
              alt="logo"
            />
            <strong className="me-auto">Blogs</strong>
            {/* <small>11 mins ago</small> */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">{notification["mess"]}</div>
        </div>
      </div>
    </>
  );
}
export default ManagerToast;
