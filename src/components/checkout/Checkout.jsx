import { Link, Outlet, useLocation } from "react-router-dom";
import NetworkErr from "../ui/NetworkErr";
import Loading from "../ui/Loading";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetail } from "../../redux/slices/userdetailsSlice";
import { useEffect } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Checkout() {
  const authState = useSelector((state) => state.auth.auth);
  const userDetails = useSelector((state) => state.userdetails.details);
  const cart = useSelector((state) => state.shop.cart);
  const discount = 10;
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userDetails === null) {
      dispatch(setUserDetail(authState.token));
    }
  }, [userDetails, dispatch, authState.token]);

  const inAddress = () => {
    return location.pathname === "/checkout/address" ? true : false;
  };
  const inDelivery = () => {
    return location.pathname === "/checkout/delivery" ? true : false;
  };
  const inPayment = () => {
    return location.pathname === "/checkout/payment" ? true : false;
  };
  const inReview = () => {
    return location.pathname === "/checkout/review" ? true : false;
  };

  return (
    <div>
      <section className="hero py-6">
        <div className="container">
          {/*<!-- Breadcrumbs -->*/}
          <ol className="breadcrumb ps-0 ">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">Checkout</li>
            <li className="breadcrumb-item active">
              {inAddress()
                ? "Invoice Address"
                : inDelivery()
                ? "Delivery Method"
                : inPayment()
                ? "Payment Method"
                : inReview()
                ? "Order Review"
                : null}{" "}
            </li>
          </ol>
          {/*<!-- Hero Content-->*/}
          <div className="hero-content">
            <h1 className="hero-heading">
              {inAddress()
                ? "Invoice Address"
                : inDelivery()
                ? "Delivery Method"
                : inPayment()
                ? "Payment Method"
                : inReview()
                ? "Order Review"
                : null}{" "}
            </h1>
          </div>
        </div>
      </section>
      <section className="pb-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <ul className="custom-nav nav nav-pills mb-5">
                <li className="nav-item w-25">
                  <a
                    className={`nav-link text-sm text-dark ${
                      inAddress() ? "active" : "disabled"
                    }`}
                  >
                    Address
                  </a>
                </li>
                <li className="nav-item w-25">
                  <a
                    className={`nav-link text-sm text-dark  ${
                      inDelivery() ? "active" : "disabled"
                    } `}
                  >
                    Delivery Method
                  </a>
                </li>
                <li className="nav-item w-25">
                  <a
                    className={`nav-link text-sm text-dark ${
                      inPayment() ? "active" : "disabled"
                    } `}
                  >
                    Payment Method{" "}
                  </a>
                </li>
                <li className="nav-item w-25">
                  <a
                    className={`nav-link text-sm text-dark  ${
                      inReview() ? "active" : "disabled"
                    } `}
                  >
                    Order Review
                  </a>
                </li>
              </ul>
              {userDetails === "Network Error" ? (
                <div className="col-lg-8 col-xl-9 mb-5 mb-lg-0">
                  <NetworkErr />
                </div>
              ) : userDetails !== null ? (
                <Outlet />
              ) : (
                <Loading />
              )}
            </div>

            <div className="col-lg-4">
              <div className="card mb-5">
                <div className="card-header">
                  <h6 className="mb-0">Order Summary</h6>
                </div>
                <div className="card-body py-4">
                  <p className="text-muted text-sm">
                    Shipping and additional costs are calculated based on values
                    you have entered.
                  </p>
                  <table className="table card-text">
                    <tbody>
                      <tr>
                        <th className="py-4">Order Subtotal </th>
                        <td className="py-4 text-end text-muted">
                          $
                          {cart.reduce(
                            (accumulator, ele) =>
                              accumulator + ele.price * ele.quantity,
                            0
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th className="py-4">Shipping and handling</th>
                        <td className="py-4 text-end text-muted">
                          {" "}
                          ${discount}.00
                        </td>
                      </tr>
                      {/*<tr>
                        <th className="py-4">Tax</th>
                        <td className="py-4 text-end text-muted">$0.00</td>
                      </tr>*/}
                      <tr>
                        <th className="pt-4 border-0">Total</th>
                        <td className="pt-4 text-end h3 fw-normal border-0">
                          $
                          {cart.reduce(
                            (accumulator, ele) =>
                              accumulator + ele.price * ele.quantity,
                            0
                          ) + discount}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
