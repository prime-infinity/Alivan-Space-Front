function ProfileAddress() {
  return (
    <div className="col-lg-8 col-xl-9 mb-5 mb-lg-0">
      <form>
        {/*<!-- Shipping Address-->*/}
        <h3 className="mb-4"> Shipping address </h3>
        <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="fullname_invoice">
              Full Name
            </label>
            <input
              className="form-control"
              type="text"
              name="fullname_invoice"
              placeholder="Joe Black"
              id="fullname_invoice"
            />
          </div>

          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="country_invoice">
              Country
            </label>
            <input
              className="form-control"
              type="text"
              name="country_invoice"
              id="country_invoice"
            />
          </div>
          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="state_invoice">
              State
            </label>
            <input
              className="form-control"
              type="text"
              name="state_invoice"
              placeholder="State"
              id="state_invoice"
            />
          </div>
          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="city_invoice">
              City
            </label>
            <input
              className="form-control"
              type="text"
              name="city_invoice"
              placeholder="City"
              id="city_invoice"
            />
          </div>
          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="street_invoice">
              Street
            </label>
            <input
              className="form-control"
              type="text"
              name="street_invoice"
              placeholder="123 Main St."
              id="street_invoice"
            />
          </div>

          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="zip_invoice">
              ZIP
            </label>
            <input
              className="form-control"
              type="text"
              name="zip_invoice"
              placeholder="Postal code"
              id="zip_invoice"
            />
          </div>

          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="phonenumber_invoice">
              Phone Number
            </label>
            <input
              className="form-control"
              type="text"
              name="phonenumber_invoice"
              placeholder="Phone Number"
              id="phonenumber_invoice"
            />
          </div>
        </div>
        {/*<!-- /Shippping Address-->*/}

        <div className="mb-3 mt-4">
          <button className="btn btn-dark" type="submit">
            <i className="far fa-save me-2"></i>Save changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileAddress;
