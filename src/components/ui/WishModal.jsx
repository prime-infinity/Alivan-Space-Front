import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWish } from "../../redux/slices/shopSlice";

/* eslint-disable jsx-a11y/anchor-is-valid */
function WishModal() {
  const authState = useSelector((state) => state.auth.auth);
  const wish = useSelector((state) => state.shop.wish);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wish === null) {
      dispatch(getWish(authState.token));
    }
  }, [wish, dispatch, authState.token]);

  return (
    <div
      className="modal fade modal-right"
      id="wishModal"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content sidebar-cart-content">
          <div className="modal-header mb-3 border-0">
            <button
              className="btn-close btn-close-lg btn-close-rotate opacity-8"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body px-5 sidebar-cart-body">
            {/*<!-- Empty cart snippet-->*/}
            {/*<!-- In case of empty cart - display this snippet + remove .d-none-->*/}
            <div className="d-none text-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon w-3rem h-3rem svg-icon-light mb-4 text-muted"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Your cart is empty </p>
            </div>
            {/*<!-- Empty cart snippet end-->*/}
            <div className="sidebar-cart-product-wrapper custom-scrollbar">
              {/*<!-- cart item-->*/}
              <div className="navbar-cart-product">
                <div className="d-flex align-items-center">
                  <a>
                    <img
                      className="img-fluid navbar-cart-product-image"
                      src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/product-square-ian-dooley-347968-unsplash.jpg"
                      alt="..."
                    />
                  </a>
                  <div className="w-100">
                    <a className="navbar-cart-product-remove">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-icon sidebar-cart-icon"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <div className="ps-3">
                      {" "}
                      <a className="navbar-cart-product-link text-dark link-animated">
                        Skull Tee
                      </a>
                      <small className="d-block text-muted">Quantity: 1 </small>
                      <strong className="d-block text-sm">$75.00 </strong>
                    </div>
                  </div>
                </div>
              </div>
              {/*<!-- cart item-->*/}
              <div className="navbar-cart-product">
                <div className="d-flex align-items-center">
                  <a>
                    <img
                      className="img-fluid navbar-cart-product-image"
                      src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/product-square-kyle-loftus-596319-unsplash.jpg"
                      alt="..."
                    />
                  </a>
                  <div className="w-100">
                    <a className="navbar-cart-product-remove">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-icon sidebar-cart-icon"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <div className="ps-3">
                      {" "}
                      <a className="navbar-cart-product-link text-dark link-animated">
                        Transparent Blouse
                      </a>
                      <small className="d-block text-muted">Quantity: 1 </small>
                      <strong className="d-block text-sm">$75.00 </strong>
                    </div>
                  </div>
                </div>
              </div>
              {/*<!-- cart item-->*/}
              <div className="navbar-cart-product">
                <div className="d-flex align-items-center">
                  <a>
                    <img
                      className="img-fluid navbar-cart-product-image"
                      src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/product-square-serrah-galos-494312-unsplash.jpg"
                      alt="..."
                    />
                  </a>
                  <div className="w-100">
                    <a className="navbar-cart-product-remove">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-icon sidebar-cart-icon"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <div className="ps-3">
                      {" "}
                      <a className="navbar-cart-product-link text-dark link-animated">
                        White Tee
                      </a>
                      <small className="d-block text-muted">Quantity: 1 </small>
                      <strong className="d-block text-sm">$75.00 </strong>
                    </div>
                  </div>
                </div>
              </div>
              {/*<!-- cart item-->*/}
              <div className="navbar-cart-product">
                <div className="d-flex align-items-center">
                  <a>
                    <img
                      className="img-fluid navbar-cart-product-image"
                      src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/product-square-ian-dooley-347968-unsplash.jpg"
                      alt="..."
                    />
                  </a>
                  <div className="w-100">
                    <a className="navbar-cart-product-remove">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-icon sidebar-cart-icon"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <div className="ps-3">
                      {" "}
                      <a className="navbar-cart-product-link text-dark link-animated">
                        Skull Tee
                      </a>
                      <small className="d-block text-muted">Quantity: 1 </small>
                      <strong className="d-block text-sm">$75.00 </strong>
                    </div>
                  </div>
                </div>
              </div>
              {/*<!-- cart item-->*/}
              <div className="navbar-cart-product">
                <div className="d-flex align-items-center">
                  <a>
                    <img
                      className="img-fluid navbar-cart-product-image"
                      src="https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/product/product-square-kyle-loftus-596319-unsplash.jpg"
                      alt="..."
                    />
                  </a>
                  <div className="w-100">
                    <a className="navbar-cart-product-remove">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-icon sidebar-cart-icon"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <div className="ps-3">
                      {" "}
                      <a className="navbar-cart-product-link text-dark link-animated">
                        Transparent Blouse
                      </a>
                      <small className="d-block text-muted">Quantity: 1 </small>
                      <strong className="d-block text-sm">$75.00 </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer sidebar-cart-footer shadow">
            <div className="w-100">
              <h5 className="mb-4">
                Subtotal: <span className="float-right">$465.32</span>
              </h5>
              <div className="d-grid gap-3">
                <a className="btn btn-outline-dark">View cart</a>
                <a className="btn btn-dark">Checkout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishModal;
