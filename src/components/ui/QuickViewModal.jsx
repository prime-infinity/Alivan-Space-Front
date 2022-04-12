import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../helpers/auth";
import {
  addToCart,
  saveCartToLocal,
  setWish,
} from "../../redux/slices/shopSlice";
import { useState } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
function QuickViewModal({ closeModal, item }) {
  const authState = useSelector((state) => state.auth.auth);
  const wish = useSelector((state) => state.shop.wish);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selectSize, setSelSize] = useState(item.sizes[0].split(",")[0]);
  const [addedTocart, setAddedTocart] = useState(false);
  const [addedToWish, setAddedToWish] = useState(false);

  const closeOptions = () => {
    setAddedTocart(true);
  };

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
    closeOptions();
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
      <div
        className="custom-modal quickview"
        id="quickView"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button
              onClick={closeModal}
              className="btn-close btn-close-absolute btn-close-lg btn-close-rotate"
              type="button"
            ></button>
            <div className="modal-body quickview-body">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      {item.imagesLocation.map((img, index) => (
                        <button
                          key={index}
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={index}
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                      ))}
                    </div>
                    <div className="carousel-inner">
                      {item.imagesLocation.map((img, index) => (
                        <div
                          key={index}
                          className={`carousel-item ${
                            index === 0 ? "active" : null
                          }`}
                        >
                          <img className="d-block w-100" src={img} alt="" />
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 p-lg-5">
                  <h2 className="mb-2 mt-4 mt-lg-1">{item.name}</h2>
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
                      {/*<li className="list-inline-item text-muted fw-light">
                        <del>$90.00</del>
                      </li>*/}
                    </ul>
                    {/*<div className="d-flex align-items-center text-sm">
                      <ul className="list-inline me-2 mb-0">
                        <li className="list-inline-item me-0">
                          <i className="fa fa-star text-primary"></i>
                        </li>
                        <li className="list-inline-item me-0">
                          <i className="fa fa-star text-primary"></i>
                        </li>
                        <li className="list-inline-item me-0">
                          <i className="fa fa-star text-primary"></i>
                        </li>
                        <li className="list-inline-item me-0">
                          <i className="fa fa-star text-primary"></i>
                        </li>
                        <li className="list-inline-item me-0">
                          <i className="fa fa-star text-gray-300"></i>
                        </li>
                      </ul>
                      <span className="text-muted text-uppercase">
                        25 reviews
                      </span>
                    </div>*/}
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
                                <i className="fa fa-check me-2"></i>Added to
                                Cart
                              </button>
                            ) : (
                              <button
                                onClick={() =>
                                  addTooCart({ ...item, quantity, selectSize })
                                }
                                className="btn btn-dark w-100 h-100"
                                type="button"
                              >
                                {" "}
                                <i className="fa fa-shopping-cart me-2"></i>Add
                                to Cart
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-6">
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
                              <i className="far fa-heart me-2"></i>Add to
                              wishlist{" "}
                            </a>
                          )}
                        </div>
                      )}
                    </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show"></div>
    </>
  );
}

export default QuickViewModal;
