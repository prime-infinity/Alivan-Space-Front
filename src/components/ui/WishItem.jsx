import { removeFromWishList } from "../../helpers/auth";
import { useSelector, useDispatch } from "react-redux";
import { setWish } from "../../redux/slices/shopSlice";

/* eslint-disable jsx-a11y/anchor-is-valid */
function WishItem({ item, index }) {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth.auth);

  const removeFromWish = (index) => {
    removeFromWishList({ index: index }, authState.token)
      .then((res) => {
        dispatch(setWish(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row d-flex align-items-center text-start text-md-center mb-4">
      <div className="col-12 col-md-5">
        <a
          onClick={() => removeFromWish(index)}
          style={{ float: "right", fontSize: "xx-large" }}
          className="cart-remove close mt-3 d-md-none"
        >
          <i className="fa fa-times"></i>
        </a>
        <a className="d-md-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg-icon w-2rem h-2rem mt-2 me-5 float-right"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </a>
        <div className="d-flex align-items-center">
          <a>
            <img
              className="cart-item-img"
              src={item.imagesLocation[0]}
              alt="..."
            />
          </a>
          <div className="cart-title text-start">
            <a className="text-dark">
              <strong>{item.name}</strong>
            </a>
            <br />
            <span className="text-muted text-sm">Sizes: {item.sizes} </span>
            {/*<br />
            <span className="text-muted text-sm">Colour: Green</span>*/}
          </div>
        </div>
      </div>
      <div className="col-12 col-md-7 mt-4 mt-md-0">
        <div className="row align-items-center">
          <div className="col-md-2">
            <div className="row">
              <div className="col-6 d-md-none text-muted">Price per item</div>
              <div className="col-6 col-md-12 text-end text-md-center">
                ${item.price}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-6 d-md-none text-muted">Status </div>
              <div className="col-6 col-md-12 text-end text-md-start">
                <div className="badge p-lg-2 badge-primary-light">In Stock</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-none d-md-block text-center">
            {" "}
            <a className="mt-4 mt-md-0 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon w-2rem h-2rem"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </a>
          </div>
          <div className="col-1 d-none d-md-block text-center">
            <a className="cart-remove text-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon w-2rem h-2rem mt-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishItem;
