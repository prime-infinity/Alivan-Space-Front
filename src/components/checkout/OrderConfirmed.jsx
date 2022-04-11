import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function OrderConfirmed() {
  const authState = useSelector((state) => state.auth.auth);
  const orders = useSelector((state) => state.order.orders);
  const formatDate = (date) => {
    let dat = new Date(date);
    return dat.toLocaleDateString();
  };
  return (
    <>
      <section className="hero py-6">
        <div className="container">
          {/*<!-- Breadcrumbs -->*/}
          <ol className="breadcrumb ps-0 ">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Order confirmed </li>
          </ol>
          {/*<!-- Hero Content-->*/}
          <div className="hero-content">
            <h1 className="hero-heading">Order confirmed</h1>
            <div>
              <div
                role="alert"
                className="d-flex align-items-center alert alert-success"
              >
                <i className="fa fa-check me-2"></i>
                Your order is confirmed
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-6">
        <div className="container">
          <p className="lead">
            Thank you, {authState.name}. Your order is confirmed.
          </p>
          <p className="lead mb-5">
            Your order hasn't shipped yet but we will send you ane email when it
            does.{" "}
          </p>
          <p className="mb-6">
            <Link to="/profile/orders" className="btn btn-outline-dark">
              View or manage your order
            </Link>
          </p>
          <div className="p-5 bg-gray-100">
            <div className="row">
              <div className="col-6 col-lg-3 mb-5 mb-lg-0">
                <div className="text-sm text-uppercase text-muted mb-3">
                  Order no.
                </div>
                <span className="h5">
                  {orders[orders.length - 1].orderNumber}
                </span>
              </div>
              <div className="col-6 col-lg-3 mb-5 mb-lg-0">
                <div className="text-sm text-uppercase text-muted mb-3">
                  Date
                </div>
                <span className="h5">
                  {formatDate(orders[orders.length - 1].createdAt)}
                </span>
              </div>
              <div className="col-6 col-lg-3">
                <div className="text-sm text-uppercase text-muted mb-3">
                  Total
                </div>
                <span className="h5">${orders[orders.length - 1].price} </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderConfirmed;
