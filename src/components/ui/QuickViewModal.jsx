import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../helpers/auth";
import {
  addToCart,
  saveCartToLocal,
  setWish,
} from "../../redux/slices/shopSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";

/* eslint-disable jsx-a11y/anchor-is-valid */
function QuickViewModal({ closeModal, item }) {
  const authState = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  const addTooCart = (e) => {
    dispatch(addToCart(e));
    dispatch(saveCartToLocal());
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
                          <LazyLoadImage
                            className="d-block w-100"
                            alt={"product-image"}
                            placeholder={<Loading />}
                            src={img}
                          />
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
                  <h2 className="mb-4 mt-4 mt-lg-1">{item.name}</h2>
                  <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
                    <ul className="list-inline mb-2 mb-sm-0">
                      <li className="list-inline-item h4 fw-light mb-0">
                        ${item.price}
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
                    <input
                      className="form-control form-control-lg detail-quantity"
                      name="items"
                      type="number"
                      defaultValue="1"
                    />
                    <div className="flex-grow-1">
                      <div className="d-grid h-100">
                        <button
                          onClick={() => addTooCart(item)}
                          className="btn btn-dark"
                          type="button"
                        >
                          {" "}
                          <i className="fa fa-shopping-cart me-2"></i>Add to
                          Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-6">
                      {authState !== null && (
                        <a onClick={() => addToWish(item._id)}>
                          {" "}
                          <i className="far fa-heart me-2"></i>Add to wishlist{" "}
                        </a>
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
