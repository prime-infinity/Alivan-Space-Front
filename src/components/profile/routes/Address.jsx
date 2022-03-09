function ProfileAddress() {
  return (
    <div className="col-lg-8 col-xl-9 mb-5 mb-lg-0">
      <form>
        {/*<!-- Invoice Address-->*/}
        <h3 className="mb-4"> Invoice address </h3>
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
            <label className="form-label" htmlFor="emailaddress_invoice">
              Email Address
            </label>
            <input
              className="form-control"
              type="text"
              name="emailaddress_invoice"
              placeholder="joe.black@gmail.com"
              id="emailaddress_invoice"
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
          <div className="mb-3 col-12 mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                id="show-shipping-address"
                type="checkbox"
                name="clothes-brand"
              />
              <label
                className="form-check-label align-middle"
                htmlFor="show-shipping-address"
                data-bs-toggle="collapse"
                data-bs-target="#shippingAddress"
              >
                Use a different shipping address
              </label>
            </div>
          </div>
        </div>
        {/*<!-- /Invoice Address-->*/}
        {/*<!-- Shippping Address-->*/}
        <div className="collapse" id="shippingAddress">
          <h3 className="my-4">Shipping address </h3>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label" htmlFor="street_shipping">
                Street
              </label>
              <input
                className="form-control"
                type="text"
                name="street_shipping"
                placeholder="123 Main St."
                id="street_shipping"
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label" htmlFor="city_shipping">
                City
              </label>
              <input
                className="form-control"
                type="text"
                name="city_shipping"
                placeholder="City"
                id="city_shipping"
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label" htmlFor="zip_shipping">
                ZIP
              </label>
              <input
                className="form-control"
                type="text"
                name="zip_shipping"
                placeholder="Postal code"
                id="zip_shipping"
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label" htmlFor="state_shipping">
                State
              </label>
              <input
                className="form-control"
                type="text"
                name="state_shipping"
                placeholder="State"
                id="state_shipping"
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label" htmlFor="phonenumber_shipping">
                Phone Number
              </label>
              <input
                className="form-control"
                type="text"
                name="phonenumber_shipping"
                placeholder="Phone Number"
                id="phonenumber_shipping"
              />
            </div>
          </div>
        </div>
        {/*<!-- /Shipping Address-->*/}
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
