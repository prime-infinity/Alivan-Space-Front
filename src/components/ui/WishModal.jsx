import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWish } from "../../redux/slices/shopSlice";

export const emptyWish = (
  <div className="text-center mb-5">
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

  return true;
}

export default WishModal;
