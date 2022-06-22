function Modal() {
  return (
    <>
      <div
        class="modal fade"
        id="myModal"
        tabindex="-1"
        aria-labelledby="modalBlog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="modal-header bg-info">
              <h5 class="modal-title" id="modalBlog">
                View Blog
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-info">
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
