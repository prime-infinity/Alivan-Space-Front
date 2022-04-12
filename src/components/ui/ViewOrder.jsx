import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { changeOrderStatus } from "../../helpers/auth";
import { changeStatusOfAllOrders } from "../../redux/slices/orderSlice";
/* eslint-disable jsx-a11y/anchor-is-valid */

function ViewOrder() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [order, updateOrder] = useState(state.order);
  const authState = useSelector((state) => state.auth.auth);
  const [selectStatus, setSelStatus] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [error, setErrors] = useState(null);
  const discount = 10;

  const formatDate = (date) => {
    let dat = new Date(date);
    return dat.toLocaleDateString();
  };

  const handleErrors = (e) => {
    e.response?.data ? setErrors(e.response.data) : setErrors(e.message);
  };
  const handleSuccess = (e) => {
    //console.log(e);
    setUpdated(true);
    dispatch(changeStatusOfAllOrders(e));
    updateOrder({ ...order, status: parseInt(selectStatus) });
  };

  const errorDiv = <small className="text-danger">{error}</small>;

  const setStatus = () => {
    /*console.log(selectStatus);
    console.log(order._id);*/
    changeOrderStatus({ id: order._id, status: selectStatus }, authState.token)
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleErrors(err);
      });
  };

  return (
    <>
      <section className="hero py-6">
        <div className="container">
          <ol className="breadcrumb ps-0 ">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/profile/orders">Orders</Link>
            </li>
            <li className="breadcrumb-item active">
              Order #{order.orderNumber}{" "}
            </li>
          </ol>
          <div className="hero-content">
            <h1 className="hero-heading">Order #{order.orderNumber}</h1>
            <div>
              <p className="lead text-muted">
                Order #{order.orderNumber} was placed on{" "}
                <strong>{formatDate(order.createdAt)}</strong> and is currently{" "}
                <strong>
                  {order.status === 0
                    ? "Received"
                    : order.status === 1
                    ? "Being prepared"
                    : order.status === 2
                    ? "Cancelled"
                    : null}
                </strong>
                .
              </p>
              {!authState.isAdmin && (
                <p className="text-muted">
                  If you have any questions, please feel free to contact us, our
                  customer service center is working for you 24/7.
                </p>
              )}
            </div>
          </div>

          {authState.isAdmin && (
            <>
              <div className="row mt-4 pt-4">
                <div className="col-sm-6 col-lg-12 detail-option mb-4">
                  <h6 className="detail-option-heading">Select Status</h6>
                  <select
                    className="form-control"
                    data-style="btn-selectpicker"
                    onChange={(e) => setSelStatus(e.target.value)}
                  >
                    <option disabled>Select Status</option>
                    {order.status !== 0 && <option value="0">Received</option>}
                    {order.status !== 1 && (
                      <option value="1">Being prepared</option>
                    )}
                    {order.status !== 2 && <option value="2">Cancelled</option>}
                  </select>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-12">{error ? errorDiv : null}</div>
                {updated && (
                  <div className="col-12 text-success">
                    <span>
                      <i className="fa fa-check me-2 "></i> Order Status Udated
                    </span>
                  </div>
                )}
              </div>
              <div className="flex-grow-1">
                <div className="d-grid h-100">
                  {selectStatus && (
                    <button
                      onClick={setStatus}
                      className="btn btn-dark btn-success w-100 h-100"
                      type="button"
                    >
                      {" "}
                      Set Status
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
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
                    {order.items.map((item, index) => (
                      <div key={index} className="cart-item">
                        <div className="row d-flex align-items-center text-center">
                          <div className="col-6">
                            <div className="d-flex align-items-center">
                              <a>
                                <img
                                  className="cart-item-img"
                                  src={item.imagesLocation[0]}
                                  alt="..."
                                />
                              </a>
                              <div className="cart-title text-start">
                                <a className="text-dark" href="detail.html">
                                  <strong>{item.name}</strong>
                                </a>
                                <br />
                                <span className="text-muted text-sm">
                                  Size: {item.selectSize}
                                </span>
                                <br />
                              </div>
                            </div>
                          </div>
                          <div className="col-2">${item.price}</div>
                          <div className="col-2">{item.quantity}</div>
                          <div className="col-2 text-center">
                            ${item.price * item.quantity}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="mb-0">Order Summary</h5>
                    </div>
                    <div className="card-body">
                      <p className="text-muted text-sm mb-4">
                        Shipping and additional costs are calculated based on
                        values you have entered.
                      </p>
                      <table className="table card-text table-hover table-responsive">
                        <tbody>
                          <tr>
                            <th className="py-4">Order Subtotal </th>
                            <td className="py-4 text-end text-muted">
                              ${order.price}
                            </td>
                          </tr>
                          <tr>
                            <th className="py-4">Shipping and handling</th>
                            <td className="py-4 text-end text-muted">
                              {" "}
                              ${discount}.00
                            </td>
                          </tr>

                          <tr>
                            <th className="py-4 border-0">Total</th>
                            <td className="py-4 text-end h3 fw-normal border-0">
                              ${order.price + discount}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-5">
                    <div className="card-header">
                      <h5 className="mb-0">Shipping address</h5>
                    </div>
                    <div className="card-body p-4">
                      <p className="card-text text-muted">
                        {order.fullname}
                        <br />
                        {order.email}
                        <br />
                        {order.phone}
                        <br />
                        {order.street}
                        <br />
                        {order.state}
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ViewOrder;
