import { submitUserAddress } from "../../../helpers/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAddress } from "../../../redux/slices/userdetailsSlice";

function ProfileAddress() {
  const authState = useSelector((state) => state.auth.auth);
  const userDetails = useSelector((state) => state.userdetails.details);
  const [updated, setIsUpdated] = useState(false);
  const dispatch = useDispatch();

  const [error, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    country: userDetails[1].country,
    state: userDetails[1].state,
    city: userDetails[1].city,
    street: userDetails[1].street,
    zip: userDetails[1].zip,
  });
  const errorDiv = <small className="text-danger">{error}</small>;

  const handleErrors = (e) => {
    e.response?.data ? setErrors(e.response.data) : setErrors(e.message);
  };

  const handleSuccess = (e) => {
    setIsUpdated(true);
    dispatch(updateAddress(e));
  };

  const submitDetails = (e) => {
    e.preventDefault();
    setIsUpdated(false);
    setErrors(null);

    submitUserAddress(formData, authState.token)
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleErrors(err);
      });
  };

  return (
    <div className="col-lg-8 col-xl-9 mb-5 mb-lg-0">
      <form onSubmit={submitDetails}>
        {/*<!-- Shipping Address-->*/}
        <h3 className="mb-4"> Shipping address </h3>
        <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label" htmlFor="country_invoice">
              Country
            </label>
            <input
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
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
              value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
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
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
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
              value={formData.street}
              onChange={(e) =>
                setFormData({ ...formData, street: e.target.value })
              }
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
              value={formData.zip}
              onChange={(e) =>
                setFormData({ ...formData, zip: e.target.value })
              }
              className="form-control"
              type="text"
              name="zip_invoice"
              placeholder="Postal code"
              id="zip_invoice"
            />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12">{error ? errorDiv : null}</div>
          {updated && (
            <div className="col-12 text-success">
              <span>
                <i className="fa fa-check me-2 "></i> Address Udated
              </span>
            </div>
          )}
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
