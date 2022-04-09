import { setDelivery } from "../../../redux/slices/checkSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function CheckoutDelivery() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const radioChanged = (e) => {
    dispatch(setDelivery(e.target.value));
    //navigate("/checkout/payment");
    //console.log(e.target.value);
  };

  const proceed = () => {
    navigate("/checkout/payment");
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="card-radio mb-4">
            <label className="card-label" htmlFor="option1"></label>
            <input
              className="card-radio-input"
              type="radio"
              name="shippping"
              id="option1"
              value="usps"
              onChange={radioChanged}
            />
            <div className="card">
              <div className="card-header">
                <h6 className="mb-0">USPS</h6>
              </div>
              <div className="card-body">
                <p className="text-muted text-sm">
                  Get your package shipped to your doorstep,no worries.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-radio mb-4">
            <label className="card-label" htmlFor="option2"></label>
            <input
              className="card-radio-input"
              type="radio"
              name="shippping"
              id="option2"
              value="pickup"
              onChange={radioChanged}
            />
            <div className="card">
              <div className="card-header">
                <h6 className="mb-0">PickUp</h6>
              </div>
              <div className="card-body">
                <p className="text-muted text-sm">
                  Pickup your package at a destination that will be mailed to
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 d-flex justify-content-between flex-column flex-lg-row">
        <Link
          to="/checkout/address"
          className="btn btn-link text-muted"
          href="cart.html"
        >
          {" "}
          <i className="fa fa-angle-left me-2"></i>Back to the addresses
        </Link>
        <button
          onClick={proceed}
          className="btn btn-dark"
          href="checkout3.html"
        >
          Choose payment method<i className="fa fa-angle-right ms-2"></i>
        </button>
      </div>
    </>
  );
}

export default CheckoutDelivery;
