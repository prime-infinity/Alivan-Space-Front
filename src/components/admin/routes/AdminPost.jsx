//import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
function AdminPost() {
  //const authState = useSelector((state) => state.auth.auth);
  const [upload, setUpload] = useState(null);
  const [error, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
  });
  const errorDiv = <small className="text-danger">{error}</small>;
  const submitDetails = (e) => {
    e.preventDefault();
    setErrors(null);

    console.log(formData);
  };

  useEffect(() => {
    setUpload(
      new FileUploadWithPreview("myUniqueUploadId", {
        maxFileCount: 6,
      })
    );
  }, []);

  const check = () => {
    console.log(upload.cachedFileArray);
  };

  return (
    <div className="col-lg-8 col-xl-9 mb-5 mb-lg-0">
      <div className="row">
        <div className="col-12 col-md-5">
          <form onSubmit={submitDetails}>
            <h3 className="mb-4">Create Category</h3>
            <div className="row">
              <div className="mb-3">
                <label className="form-label" htmlFor="country_invoice">
                  Category Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="country_invoice"
                  id="country_invoice"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">{error ? errorDiv : null}</div>
            </div>
            <div className="mb-3 mt-4">
              <button className="btn btn-dark" type="submit">
                <i className="far fa-save me-2"></i>Save changes
              </button>
            </div>
          </form>

          {/*testing*/}
          <div
            className="custom-file-container"
            data-upload-id="myUniqueUploadId"
          >
            <label className="custom-file-container__custom-file">
              <input
                type="file"
                className="custom-file-container__custom-file__custom-file-input"
                accept="image/*"
                multiple
                aria-label="Choose File"
              />
              <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
              <span className="custom-file-container__custom-file__custom-file-control"></span>
            </label>
            <div className="custom-file-container__image-preview"></div>

            <div className="row">
              <div className="col-6">
                <button className="w-100 btn btn-dark" onClick={check}>
                  <i className="far fa-save me-2"></i>see
                </button>
              </div>
              <div className="col-6">
                <button className="w-100 btn btn-dark">
                  <a
                    className="custom-file-container__image-clear text-white"
                    title="Clear Image"
                  >
                    Clear
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPost;
