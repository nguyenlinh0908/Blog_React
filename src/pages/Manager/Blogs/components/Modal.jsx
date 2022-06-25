function Modal() {
  return (
    <>
      <div
        className="modal fade"
        id="myModal"
        tabindex="-1"
        aria-labelledby="modalBlog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-info">
              <h5 className="modal-title" id="modalBlog">
                View Blog
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-info">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
