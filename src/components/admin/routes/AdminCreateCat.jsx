import { useState } from "react";

function AdminCreateCat() {
  const [error, setErrors] = useState(null);
  const errorDiv = <small className="text-danger">{error}</small>;

  return (
    <div className="col-lg-8 col-xl-9 mb-5 mb-lg-0">
      <form>
        <h3 className="mb-4">Create Category</h3>
        <div className="row">
          <div className="mb-3 col-md-6">
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
        <div className="row text-center">
          <div className="col-12">{error ? errorDiv : null}</div>
        </div>
        <div className="mb-3 mt-4">
          <button className="btn btn-dark" type="submit">
            <i className="far fa-save me-2"></i>Save changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminCreateCat;
