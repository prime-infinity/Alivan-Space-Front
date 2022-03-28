import Item from "../ui/Item";
import { getNewArrivals } from "../../redux/slices/shopSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "../ui/Loading";
import NetworkErr from "../ui/NetworkErr";

/* eslint-disable jsx-a11y/anchor-is-valid */
function NewArrivals() {
  const newItems = useSelector((state) => state.shop.newArrivals);
  const dispatch = useDispatch();

  useEffect(() => {
    if (newItems === null) {
      dispatch(getNewArrivals());
    }
  }, [newItems, dispatch]);

  return (
    <div className="container py-6">
      <div className="text-center">
        <h2>New Arrivals</h2>
        <p className="lead text-muted mb-5">
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections
        </p>
      </div>
      <div className="row justify-content-between align-items-center mb-4">
        <div className="col-12 col-md-auto text-center">
          <a className="btn btn-link px-0">All products</a>
        </div>
      </div>

      <div className="row">
        {/* items */}
        {newItems === "Network Error" ? (
          <NetworkErr />
        ) : newItems != null ? (
          newItems.map((item) => <Item key={item._id} item={item} />)
        ) : (
          <Loading />
        )}
      </div>

      {/* Quickview Modal    */}
      <div
        className="modal fade quickview"
        id="quickView"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button
              className="btn-close btn-close-absolute btn-close-lg btn-close-rotate"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body quickview-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="detail-carousel">
                    <div className="product-label-boxed mt-3 ms-3 py-1 rounded-pill small fw-normal bg-white text-dark">
                      Fresh
                    </div>
                    <div
                      className="swiper swiper-container quickview-slider"
                      id="quickViewSlider"
                    >
                      {/* Additional required wrapper*/}
                      <div className="swiper-wrapper">
                        {/* Slides*/}
                        <div className="swiper-slide">
                          <img
                            className="img-fluid"
                            src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/detail-1-gray.jpg"
                            alt="Modern Jacket 1"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            className="img-fluid"
                            src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/detail-2-gray.jpg"
                            alt="Modern Jacket 2"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            className="img-fluid"
                            src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/detail-3-gray.jpg"
                            alt="Modern Jacket 3"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            className="img-fluid"
                            src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/detail-4-gray.jpg"
                            alt="Modern Jacket 4"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            className="img-fluid"
                            src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/detail-5-gray.jpg"
                            alt="Modern Jacket 5"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-thumbs"
                      data-swiper="#quickViewSlider"
                    >
                      <button className="swiper-thumb-item detail-thumb-item mb-3 active">
                        <img
                          className="img-fluid"
                          src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/detail-1-gray.jpg"
                          alt="Modern Jacket 0"
                        />
                      </button>
                      <button className="swiper-thumb-item detail-thumb-item mb-3">
                        <img
                          className="img-fluid"
                          src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/detail-2-gray.jpg"
                          alt="Modern Jacket 1"
                        />
                      </button>
                      <button className="swiper-thumb-item detail-thumb-item mb-3">
                        <img
                          className="img-fluid"
                          src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/detail-3-gray.jpg"
                          alt="Modern Jacket 2"
                        />
                      </button>
                      <button className="swiper-thumb-item detail-thumb-item mb-3">
                        <img
                          className="img-fluid"
                          src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/detail-4-gray.jpg"
                          alt="Modern Jacket 3"
                        />
                      </button>
                      <button className="swiper-thumb-item detail-thumb-item mb-3">
                        <img
                          className="img-fluid"
                          src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/detail-5-gray.jpg"
                          alt="Modern Jacket 4"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 p-lg-5">
                  <h2 className="mb-4 mt-4 mt-lg-1">Push-up Jeans</h2>
                  <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
                    <ul className="list-inline mb-2 mb-sm-0">
                      <li className="list-inline-item h4 fw-light mb-0">
                        $65.00
                      </li>
                      <li className="list-inline-item text-muted fw-light">
                        <del>$90.00</del>
                      </li>
                    </ul>
                    <div className="d-flex align-items-center text-sm">
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
                    </div>
                  </div>
                  <p className="mb-4 text-muted">
                    Samsa was a travelling salesman - and above it there hung a
                    picture that he had recently cut out of an illustrated
                    magazine and housed in a nice, gilded frame.
                  </p>
                  <form id="buyForm_modal" action="#">
                    <div className="row">
                      <div className="col-sm-6 col-lg-12 detail-option mb-4">
                        <h6 className="detail-option-heading">
                          Size <span>(required)</span>
                        </h6>
                        <select
                          className="selectpicker"
                          name="size"
                          data-style="btn-selectpicker"
                        >
                          <option defaultValue="value_0">Small</option>
                          <option defaultValue="value_1">Medium</option>
                          <option defaultValue="value_2">Large</option>
                        </select>
                      </div>
                      <div className="col-sm-6 col-lg-12 detail-option mb-5">
                        <h6 className="detail-option-heading">
                          Type <span>(required)</span>
                        </h6>
                        <label
                          className="btn btn-sm btn-outline-primary detail-option-btn-label"
                          htmlFor="material_0_modal"
                        >
                          {" "}
                          Hoodie
                          <input
                            className="input-invisible"
                            type="radio"
                            name="material"
                            defaultValue="value_0"
                            id="material_0_modal"
                            required=""
                          />
                        </label>
                        <label
                          className="btn btn-sm btn-outline-primary detail-option-btn-label"
                          htmlFor="material_1_modal"
                        >
                          {" "}
                          College
                          <input
                            className="input-invisible"
                            type="radio"
                            name="material"
                            defaultValue="value_1"
                            id="material_1_modal"
                            required=""
                          />
                        </label>
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
                          <button className="btn btn-dark" type="submit">
                            {" "}
                            <i className="fa fa-shopping-cart me-2"></i>Add to
                            Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-6">
                        <a>
                          {" "}
                          <i className="far fa-heart me-2"></i>Add to wishlist{" "}
                        </a>
                      </div>
                      <div className="col-6 text-end">
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-2">
                            <a className="text-dark text-primary-hover">
                              <i className="fab fa-facebook-f"> </i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-dark text-primary-hover">
                              <i className="fab fa-twitter"> </i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="list-unstyled">
                      <li>
                        <strong>Category:</strong>{" "}
                        <a className="text-muted">Jeans</a>
                      </li>
                      <li>
                        <strong>Tags:</strong>{" "}
                        <a className="text-muted">Leisure</a>,{" "}
                        <a className="text-muted">Elegant</a>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
