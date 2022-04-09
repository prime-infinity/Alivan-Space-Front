import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CheckoutReview() {
  const checkAddress = useSelector((state) => state.check.address);
  const checkDelivery = useSelector((state) => state.check.delivery);
  const checkPayment = useSelector((state) => state.check.payment);

  const placeOrder = () => {
    //console.log(checkAddress);
    //console.log(checkDelivery);
    console.log(checkPayment);
  };

  return (
    <>
      <div className="mb-5 d-flex justify-content-between flex-column flex-lg-row">
        <Link
          to="/checkout/payment"
          className="btn btn-link text-muted"
          href="checkout3.html"
        >
          {" "}
          <i className="fa fa-angle-left me-2"></i>Back to the delivery method
        </Link>
        <button
          onClick={placeOrder}
          className="btn btn-dark"
          href="checkout-confirmed.html"
        >
          Place an order<i className="fa fa-angle-right ms-2"></i>
        </button>
      </div>
    </>
  );
}

export default CheckoutReview;
