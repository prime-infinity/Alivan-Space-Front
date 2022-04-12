import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToWishList } from "../../helpers/auth";
import { changeItemStatus } from "../../helpers/auth";

import {
  addToCart,
  saveCartToLocal,
  setWish,
  setAdminHasUpdatedItem,
} from "../../redux/slices/shopSlice";

/* eslint-disable jsx-a11y/anchor-is-valid */

function ViewItem() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [item, updateItem] = useState(state.item);
  const authState = useSelector((state) => state.auth.auth);
  const wish = useSelector((state) => state.shop.wish);
  const [quantity, setQuantity] = useState(1);
  const [selectSize, setSelSize] = useState(item.sizes[0].split(",")[0]);
  const [addedTocart, setAddedTocart] = useState(false);
  const [selectStatus, setSelStatus] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [error, setErrors] = useState(null);

  const [addedToWish, setAddedToWish] = useState(false);

  const handleErrors = (e) => {
    e.response?.data ? setErrors(e.response.data) : setErrors(e.message);
  };
  const handleSuccess = (e) => {
    console.log(e);
    setUpdated(true);
    updateItem({ ...item, state: parseInt(selectStatus) });
    dispatch(setAdminHasUpdatedItem(Math.random()));
  };

  const setStatus = () => {
    /*console.log(selectStatus);
    console.log(order._id);*/
    changeItemStatus({ id: item._id, status: selectStatus }, authState.token)
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleErrors(err);
      });
  };

  const errorDiv = <small className="text-danger">{error}</small>;

  const itemInWishlist = (e) => {
    if (wish) {
      if (wish.items.includes(e)) {
        return true;
      }
      return false;
    }
    return false;
  };

  const addItemToWish = (e) => {
    console.log(e);
    addToWish(e);
    setAddedToWish(true);
  };

  const addTooCart = (e) => {
    dispatch(addToCart(e));
    dispatch(saveCartToLocal());
    setAddedTocart(true);
  };

  const configQuantity = (e) => {
    setQuantity(e);
  };

  const addToWish = (e) => {
    addToWishList({ id: e }, authState.token)
      .then((res) => {
        dispatch(setWish(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section>
        <div className="container-fluid px-xl-7 pt-5 pb-3 pb-lg-6">
          <div className="row">
            <div className="col-lg-6 col-xl-7 pt-4 order-2 order-lg-1 photoswipe-gallery">
              {item.imagesLocation.map((item, index) => (
                <a
                  className="d-block mb-4"
                  data-caption="Push-up Jeans 1 - Caption text"
                  data-toggle="photoswipe"
                  data-width="1200"
                  data-height="1200"
                  key={index}
                >
                  <div
                    data-toggle="zoom"
                    data-image="img/product/detail-3-gray.jpg"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    <img
                      className="img-fluid"
                      src={item}
                      alt="Push-up Jeans 1"
                    />
                    <img
                      role="presentation"
                      alt=""
                      src="img/product/detail-3-gray.jpg"
                      className="zoomImg"
                      style={{
                        position: "absolute",
                        top: "-282.134px",
                        left: "-659.108px",
                        opacity: "0",
                        width: "1313px",
                        height: "1313px",
                        border: "none",
                        maxWidth: "none",
                        maxHeight: "none",
                      }}
                    />
                  </div>
                </a>
              ))}
            </div>
            <div className="col-lg-6 col-xl-4 pt-4 order-1 order-lg-2 ms-lg-auto">
              <div className="sticky-top" style={{ top: "100px" }}>
                <h1 className="mb-2">{item.name}</h1>
                {item.state === 1 ? (
                  <div className=" badge bg-secondary">Fresh</div>
                ) : item.state === 2 ? (
                  <div className="badge bg-dark">Sold out</div>
                ) : null}
                <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
                  <ul className="list-inline mb-2 mb-sm-0">
                    <li className="list-inline-item h4 fw-light mb-0">
                      ${item.price * quantity}
                    </li>
                  </ul>
                </div>
                <p className="mb-4 text-muted">{item.description}</p>
                <div className="row">
                  <div className="col-sm-6 col-lg-12 detail-option mb-4">
                    <h6 className="detail-option-heading">Select Size</h6>
                    <select
                      className="form-control"
                      data-style="btn-selectpicker"
                      value={selectSize}
                      onChange={(e) => setSelSize(e.target.value)}
                    >
                      {item.sizes[0].split(",").map((size, index) => (
                        <option key={index} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="input-group w-100 mb-4">
                  {!addedTocart && (
                    <input
                      className="form-control form-control-lg detail-quantity"
                      name="items"
                      type="number"
                      value={quantity}
                      onChange={(e) => configQuantity(e.target.value)}
                    />
                  )}
                  <div className="flex-grow-1">
                    <div className="d-grid h-100">
                      {quantity > 0 && quantity < 11 && (
                        <div>
                          {addedTocart ? (
                            <button
                              className="btn btn-success w-100 h-100"
                              type="button"
                            >
                              {" "}
                              <i className="fa fa-check me-2"></i>Added to Cart
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                addTooCart({ ...item, quantity, selectSize })
                              }
                              className="btn btn-dark btn-success w-100 h-100"
                              type="button"
                            >
                              {" "}
                              <i className="fa fa-shopping-cart me-2"></i>Add to
                              Cart
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  {authState !== null && (
                    <div id={item._id}>
                      {addedToWish || itemInWishlist(item._id) ? (
                        <a>
                          {" "}
                          <i className="fa fa-check me-2 text-success"></i>
                          <span className="text-success">In wishlist </span>
                        </a>
                      ) : (
                        <a onClick={() => addItemToWish(item._id)}>
                          {" "}
                          <i className="far fa-heart me-2"></i>Add to wishlist{" "}
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <ul className="list-unstyled">
                  <li>
                    <strong>Categories:</strong>{" "}
                    {item.categories.map((cat, index) => (
                      <a key={index} className="text-muted mb-2">
                        {cat}
                      </a>
                    ))}
                  </li>
                </ul>
                {authState?.isAdmin && (
                  <>
                    <div className="row mt-4 pt-4">
                      <div className="col-sm-6 col-lg-12 detail-option mb-4">
                        <h6 className="detail-option-heading">Select Status</h6>
                        <select
                          className="form-control"
                          data-style="btn-selectpicker"
                          onChange={(e) => setSelStatus(e.target.value)}
                        >
                          <option></option>
                          <option></option>

                          {item.state !== 2 && (
                            <option value="2">Sold out</option>
                          )}
                          {item.state !== 0 && (
                            <option value="0">In Stock</option>
                          )}
                        </select>
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="col-12">{error ? errorDiv : null}</div>
                      {updated && (
                        <div className="col-12 text-success">
                          <span>
                            <i className="fa fa-check me-2 "></i> Item Status
                            Udated
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ViewItem;
