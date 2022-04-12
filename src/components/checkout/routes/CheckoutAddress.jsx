import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { us } from "../../../utils/us";
import { setAddress } from "../../../redux/slices/checkSlice";
import { Link, useNavigate } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
function CheckoutAddress() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth.auth);
  const userDetails = useSelector((state) => state.userdetails.details);

  const [formData, setFormData] = useState({
    state: `${userDetails[1].state ? userDetails[1].state : ""}`,
    city: `${userDetails[1].city ? userDetails[1].city : ""}`,
    street: `${userDetails[1].street ? userDetails[1].street : ""}`,
    zip: userDetails[1].zip,
    fullname: `${userDetails[0].firstname ? userDetails[0].firstname : ""} ${
      userDetails[0].lastname ? userDetails[0].lastname : ""
    }`,
    phone: `${userDetails[0].phone ? userDetails[0].phone : ""}`,
    email: authState.email,
  });

  const submitDetails = (e) => {
    e.preventDefault();
    dispatch(setAddress(formData));
    navigate("/checkout/delivery");
  };

  return (
    <form onSubmit={submitDetails}>
      {/*<!-- Invoice Address-->*/}
      <h3 className="mb-4"> Invoice address </h3>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label className="form-label" htmlFor="fullname_invoice">
            Full Name
          </label>
          <input
            value={formData.fullname}
            onChange={(e) =>
              setFormData({ ...formData, fullname: e.target.value })
            }
            className="form-control"
            type="text"
            name="fullname_invoice"
            id="fullname_invoice"
          />
        </div>
        <div className="mb-3 col-md-6">
          <label className="form-label" htmlFor="emailaddress_invoice">
            Email Address
          </label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="form-control"
            type="text"
            name="emailaddress_invoice"
            id="emailaddress_invoice"
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
            id="street_invoice"
          />
        </div>
        <div className="mb-3 col-md-6">
          <label className="form-label" htmlFor="city_invoice">
            City
          </label>
          <input
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="form-control"
            type="text"
            name="city_invoice"
            id="city_invoice"
          />
        </div>
        <div className="mb-3 col-md-6">
          <label className="form-label" htmlFor="zip_invoice">
            ZIP
          </label>
          <input
            value={formData.zip}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
            className="form-control"
            type="text"
            name="zip_invoice"
            id="zip_invoice"
          />
        </div>
        <div className="mb-3 col-md-6">
          <label className="form-label" htmlFor="state_invoice">
            State
          </label>

          <select
            className="form-control"
            id="state_invoice"
            data-style="btn-selectpicker"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
          >
            {us.map(({ name, abbreviation }, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
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
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
      </div>
      {/*<!-- /Invoice Address-->*/}

      <div className="my-5 d-flex justify-content-between flex-column flex-lg-row">
        <Link to="/" className="btn btn-link text-muted" href="cart.html">
          {" "}
          <i className="fa fa-angle-left me-2"></i>Back
        </Link>

        <button className="btn btn-dark" type="submit">
          Choose delivery method<i className="fa fa-angle-right ms-2"></i>
        </button>
      </div>
    </form>
  );
}

export default CheckoutAddress;
