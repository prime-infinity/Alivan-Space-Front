import { Link } from "react-router-dom";
import { useState } from "react";
import { setPayment } from "../../../redux/slices/checkSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function CheckoutPayment() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const proceed = () => {
    dispatch(setPayment("Pay on delivery"));
    navigate("/checkout/review");
  };

  const radioChanged = (e) => {
    setFormData({
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
    //console.log(e.target.value);
  };

  const sumbitCard = (e) => {
    e.preventDefault();
    dispatch(setPayment(formData));
    navigate("/checkout/review");
  };

  return (
    <>
      <div className="mb-5">
        <div id="accordion" role="tablist">
          <div className="card border-0 shadow mb-3">
            <div
              className="card-header accordion-header"
              id="headingOne"
              role="tab"
            >
              <a
                className="accordion-link"
                data-bs-toggle="collapse"
                href="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Pay with card
              </a>
            </div>
            <div
              className="collapse show"
              id="collapseOne"
              role="tabpanel"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body py-5">
                <form onSubmit={sumbitCard}>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label" htmlFor="card-name">
                        Name on Card
                      </label>
                      <input
                        required
                        value={formData.cardName}
                        onChange={(e) =>
                          setFormData({ ...formData, cardName: e.target.value })
                        }
                        className="form-control"
                        type="text"
                        name="card-name"
                        placeholder="Name on card"
                        id="card-name"
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label" htmlFor="card-number">
                        Card Number
                      </label>
                      <input
                        required
                        className="form-control"
                        type="text"
                        name="card-number"
                        placeholder="Card number"
                        id="card-number"
                        value={formData.cardNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            cardNumber: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label" htmlFor="expiry-date">
                        Expiry Date
                      </label>
                      <input
                        required
                        className="form-control"
                        type="text"
                        name="expiry-date"
                        placeholder="MM/YY"
                        id="expiry-date"
                        value={formData.expiryDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            expiryDate: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label" htmlFor="cvv">
                        CVC/CVV
                      </label>
                      <input
                        required
                        className="form-control"
                        type="text"
                        name="cvv"
                        placeholder="123"
                        id="cvv"
                        value={formData.cvv}
                        onChange={(e) =>
                          setFormData({ ...formData, cvv: e.target.value })
                        }
                      />
                    </div>
                    {/*<div className="mb-3 col-md-4">
                      <label className="form-label" htmlFor="zip">
                        ZIP
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="zip"
                        placeholder="123"
                        id="zip"
                      />
                        </div>*/}
                  </div>

                  <button className="btn btn-dark mt-4">
                    Continue to order review
                    <i className="fa fa-angle-right ms-2"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow mb-3">
            <div
              className="card-header accordion-header"
              id="headingThree"
              role="tab"
            >
              <a
                className="accordion-link collapsed"
                data-bs-toggle="collapse"
                href="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Pay on delivery
              </a>
            </div>
            <div
              className="collapse"
              id="collapseThree"
              role="tabpanel"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div className="card-body py-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="payment-method-2"
                    type="radio"
                    name="payment"
                    onChange={radioChanged}
                    value="Pay on delivery"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="payment-method-2"
                  >
                    {" "}
                    <span className="d-block h6 mt-1 mb-3">
                      {" "}
                      Pay on delivery
                    </span>
                    <span className="text-muted text-sm">
                      Pay when you get your package.{" "}
                    </span>
                  </label>
                </div>

                <button onClick={proceed} className="btn btn-dark mt-5">
                  Continue to order review
                  <i className="fa fa-angle-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 d-flex justify-content-between flex-column flex-lg-row">
        <Link
          to="/checkout/delivery"
          className="btn btn-link text-muted"
          href="checkout2.html"
        >
          {" "}
          <i className="fa fa-angle-left me-2"></i>Back to the delivery method
        </Link>
      </div>
    </>
  );
}

export default CheckoutPayment;
