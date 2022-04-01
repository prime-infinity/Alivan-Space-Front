import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWish } from "../../redux/slices/shopSlice";
import Loading from "../ui/Loading";
import NetworkErr from "../ui/NetworkErr";

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

  const emptyWish = (
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
      <p>Your Wishlist is empty </p>
    </div>
  );

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
            {wish === "Network Error" ? (
              <div className="col-lg-8 col-xl-9 mb-5 mb-lg-0">
                <NetworkErr />
              </div>
            ) : wish !== null ? (
              wish.length < 1 ? (
                emptyWish
              ) : (
                <div className="sidebar-cart-product-wrapper custom-scrollbar">
                  some cart stuff
                </div>
              )
            ) : (
              <Loading />
            )}
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
