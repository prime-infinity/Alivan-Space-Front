import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { finalClearCart } from "../../../redux/slices/shopSlice";
import { placeOrderBack, saveOrderBack } from "../../../helpers/auth";
import { useState } from "react";
import Loading from "../../ui/Loading";
import { updateOrders } from "../../../redux/slices/orderSlice";
//paystack
import { usePaystackPayment } from "react-paystack";

function CheckoutReview() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth.auth);
  const checkAddress = useSelector((state) => state.check.address);
  const checkDelivery = useSelector((state) => state.check.delivery);
  const cart = useSelector((state) => state.shop.cart);

  const [error, setErrors] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const errorDiv = <small className="text-danger">{error}</small>;
  const handleErrors = (e) => {
    setIsChecking(false);
    e.response?.data ? setErrors(e.response.data) : setErrors(e.message);
  };
  const handleSuccess = (e) => {
    setIsChecking(false);
    console.log(e);

    dispatch(updateOrders(e));

    dispatch(finalClearCart());
    navigate("/checkout-confirmed");
  };

  const config = {
    email: authState.email,
    amount:
      cart.reduce(
        (accumulator, ele) => accumulator + ele.price * ele.quantity,
        0
      ) * 100,
    publicKey: "pk_test_9db8f56d30b295ed90c0322d53d1225428c17912",
  };

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    setIsChecking(true);

    let formData = {
      ...checkAddress,
      ...checkDelivery,
      reference: reference,
      items: cart,
      price: cart.reduce(
        (accumulator, ele) => accumulator + ele.price * ele.quantity,
        0
      ),
    };

    saveOrderBack(formData, authState.token)
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleErrors(err);
      });
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  const placeOrder = () => {
    setIsChecking(true);
    setErrors(null);

    let formData = {
      ...checkAddress,
      ...checkDelivery,
      items: cart,
      price: cart.reduce(
        (accumulator, ele) => accumulator + ele.price * ele.quantity,
        0
      ),
    };

    placeOrderBack(formData, authState.token)
      .then((res) => {
        setIsChecking(false);
        initializePayment(onSuccess, onClose);
      })
      .catch((err) => {
        handleErrors(err);
      });
  };

  return (
    <>
      <div className="mb-5">
        <div className="cart">
          <div className="cart-wrapper">
            <div className="cart-header">
              <div className="row">
                <div className="col-6">Item</div>
                <div className="col-2 text-center">$</div>
                <div className="col-2 text-end">Qty</div>
                <div className="col-2 text-end">Total</div>
              </div>
            </div>
            <div className="cart-body">
              {/*<!-- Product-->*/}
              {cart.map((car, index) => (
                <div className="cart-item" key={index}>
                  <div className="row d-flex align-items-center text-center">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <a href="detail.html">
                          <img
                            className="cart-item-img"
                            src={car.imagesLocation[0]}
                            alt="..."
                          />
                        </a>
                        <div className="cart-title text-start">
                          <a className="text-dark" href="detail.html">
                            <strong>{car.name}</strong>
                          </a>
                          <br />
                          <span className="text-muted text-sm">
                            Size: {car.selectSize}
                          </span>
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="col-2">${car.price}</div>
                    <div className="col-2">{car.quantity}</div>
                    <div className="col-2 text-center">
                      ${car.price * car.quantity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 d-flex justify-content-between flex-column flex-lg-row">
        <Link
          to="/checkout/delivery"
          className="btn btn-link text-muted"
          href="checkout3.html"
        >
          {" "}
          <i className="fa fa-angle-left me-2"></i>Back to the delivery method
        </Link>
        <div className="row text-center">
          <div className="col-12">{error ? errorDiv : null}</div>
        </div>
        {isChecking ? (
          <Loading />
        ) : (
          <button
            onClick={placeOrder}
            className="btn btn-dark"
            href="checkout-confirmed.html"
          >
            Place an order<i className="fa fa-angle-right ms-2"></i>
          </button>
        )}
      </div>
    </>
  );
}

export default CheckoutReview;
